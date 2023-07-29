// Dans votre fichier axiosInstance.js
import axios, { AxiosError, AxiosResponse } from 'axios';
import jwt_decode from 'jwt-decode';
import { AuthResponse, UserSession } from '../@types/user';
import {
  getUserDataFromLocalStorage,
  removeUserDataFromLocalStorage,
} from './user';

// Objet pour gérer le rafraichissement du token
const authRefresh: {
  inProgress: boolean;
  bearer: string | undefined;
  queue: Array<() => void>;
  // Fonction pour rafraichir le token
  doRefresh: (user: {
    isLogged: boolean;
    session: UserSession;
    token: AuthResponse;
  }) => Promise<string | undefined>;
} = {
  queue: [], // File d'attente pour les requêtes en attente de token rafraîchi
  inProgress: false, // Indique si le rafraîchissement du token est en cours
  bearer: '', // Le token d'authentification actuel
  doRefresh: async (user) => {
    if (authRefresh.inProgress) {
      // Si le rafraîchissement est déjà en cours, renvoyer la promesse en attente
      return new Promise<string | undefined>((resolve) => {
        authRefresh.queue.push(() => {
          resolve(authRefresh.bearer);
        });
      });
    }

    authRefresh.inProgress = true; // Définir en cours de rafraîchissement

    // Appel à l'API pour rafraîchir le token
    const refreshPromise = await axios
      .post<{ data: AuthResponse }>(
        'https://watizat.lunalink.nl/auth/refresh',
        {
          refresh_token: user.token.refresh_token,
          mode: 'json',
        }
      )
      .then(({ data: response }) => {
        // Décoder les informations du token
        const jwtDecode = jwt_decode<UserSession>(response.data.access_token);
        // Mettre à jour le token d'authentification et la session utilisateur
        const updatedUser = {
          ...user,
          token: { ...response.data },
          session: { ...jwtDecode },
        };
        // Enregistrer les informations mises à jour dans le stockage local
        localStorage.setItem('user', JSON.stringify(updatedUser));
        // Mettre à jour le token d'authentification dans l'objet authRefresh
        authRefresh.bearer = `Bearer ${response.data.access_token}`;

        // Rappeler les fonctions de rappel pour exécuter les requêtes en attente avec le nouveau jeton
        authRefresh.queue.forEach((callback) => callback());
        authRefresh.queue = []; // Vider la file d'attente
        return authRefresh.bearer;
      })
      .catch((error) => {
        // En cas d'erreur, effacer le token d'authentification
        authRefresh.bearer = undefined;
        // Supprimer les informations utilisateur du stockage local
        removeUserDataFromLocalStorage();
        throw error;
      })
      .finally(() => {
        authRefresh.inProgress = false; // Remettre en cours à false une fois terminé
      });

    // Ajouter la promesse à la file d'attente
    authRefresh.queue.push(() => refreshPromise);

    return refreshPromise;
  },
};

// Créer une instance d'axios avec la base URL
/* eslint-disable import/prefer-default-export */
export const axiosInstance = axios.create({
  baseURL: 'https://watizat.lunalink.nl/',
});

// Interceptor pour les requêtes
axiosInstance.interceptors.request.use(async (config) => {
  const user = getUserDataFromLocalStorage();
  if (user) {
    const updatedConfig = { ...config }; // Crée une copie de l'objet de configuration
    // Ajouter le token d'authentification dans l'en-tête d'autorisation
    updatedConfig.headers.Authorization = `Bearer ${user.token.access_token}`;
    if (Date.now() - user.session.exp * 1000 > 0 && !authRefresh.inProgress) {
      // Si le token est expiré et que le rafraîchissement n'est pas en cours,
      // rafraîchir le token et mettre à jour l'en-tête d'autorisation
      const bearer = await authRefresh.doRefresh(user);
      updatedConfig.headers.Authorization = bearer;
    }
    return updatedConfig; // Renvoyer la configuration modifiée
  }
  return config; // Si l'utilisateur n'est pas connecté, renvoyer la configuration d'origine
});

// Interceptor pour les réponses
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<unknown>) => {
    // Renvoyer la réponse telle quelle
    return response;
  },
  async (error: AxiosError) => {
    // Vérifier si l'erreur est une erreur 401 (non autorisé)
    if (error.response && error.response.status === 401) {
      const user = getUserDataFromLocalStorage();
      if (user) {
        try {
          // Rafraîchir le token JWT
          const bearer = await authRefresh.doRefresh(user);
          // Récupérer la configuration de la requête d'origine
          const originalRequest = error.config;
          // Ajouter le nouveau token dans l'en-tête d'autorisation de la requête d'origine
          if (originalRequest) {
            originalRequest.headers.Authorization = bearer;
            // Renvoyer la requête d'origine avec le nouveau token
            return await new Promise((resolve) => {
              authRefresh.queue.push(() => {
                resolve(axiosInstance(originalRequest));
              });
            });
          }
        } catch (refreshError) {
          // Gérer les erreurs de rafraîchissement si nécessaire
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);
