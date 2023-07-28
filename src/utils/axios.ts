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
  queue: Array<(bearer: string) => void>;
  /**
   * Performs the refresh of the authentication token by sending a POST request to the server.
   * @param {Object} user - User information and the authentication token.
   * @param {boolean} user.isLogged - Indicates whether the user is logged in.
   * @param {UserSession} user.session - User's session information.
   * @param {AuthResponse} user.token - Authentication token information.
   * @returns {string | undefined} The new authentication token (in "Bearer" format) if it was successfully refreshed, otherwise `undefined`.
   */
  // Fontion pour rafraichir le token
  doRefresh: (user: {
    isLogged: boolean;
    session: UserSession;
    token: AuthResponse;
  }) => string | undefined;
} = {
  queue: [], // File d'attente pour les requêtes en attente de token rafraîchi
  inProgress: false, // Indique si le rafraîchissement du token est en cours
  bearer: '', // Le token d'authentification actuel
  doRefresh: (user) => {
    if (authRefresh.inProgress) {
      // Si le rafraîchissement est déjà en cours, ne rien faire
      return undefined;
    }
    authRefresh.inProgress = true; // Définir en cours de rafraîchissement
    // Appel à l'API pour rafraîchir le token
    axios
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
      })
      .catch(() => {
        // En cas d'erreur, effacer le token d'authentification
        authRefresh.bearer = undefined;
        // Supprimer les informations utilisateur du stockage local
        removeUserDataFromLocalStorage();
      })
      .finally(() => {
        authRefresh.inProgress = false; // Remettre en cours à false une fois terminé
      });
    return authRefresh.bearer;
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
      const bearer = authRefresh.doRefresh(user);
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
          const bearer = authRefresh.doRefresh(user);
          // Récupérer la configuration de la requête d'origine
          const originalRequest = error.config;
          // Ajouter le nouveau token dans l'en-tête d'autorisation de la requête d'origine
          if (originalRequest) {
            originalRequest.headers.Authorization = bearer;
            // Renvoyer la requête d'origine avec le nouveau token
            return await new Promise((resolve) => {
              authRefresh.queue.push((newBearer: string) => {
                originalRequest.headers.Authorization = newBearer;
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
