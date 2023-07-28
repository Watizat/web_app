import axios from 'axios';

const apiKey = '7a7f6ecc-2752-4f5e-923f-5cfd360d3331';
// Token Watizat '7d4f63fb-110c-4cc3-a5ee-aa4b382e0865';
// Remplacez "YOUR_API_KEY" par votre clé d'API Navitia

const navitiaInstance = axios.create({
  baseURL: 'https://api.navitia.io/v1', // URL de base de l'API Navitia
  headers: {
    Authorization: `${apiKey}`,
    // Autres en-têtes si nécessaire
  },
});

export default navitiaInstance;
