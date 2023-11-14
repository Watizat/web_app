import { Schedule } from '../@types/organism';

// Vérifie si l'URL comment par http ou https, sinon ajoute https (pour que les liens soient correctes)
export const addURLPrefix = (url: string) => {
  if (!url) {
    return url; // Si l'URL est vide, la fonction renvoie l'URL inchangée
  }
  // Vérifie si l'URL commence par "http://" ou "https://"
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    // Si ce n'est pas le cas, ajoute "http://" par défaut
    return `http://${url}`;
  }
  return url; // L'URL est déjà correcte, donc on la renvoie inchangée
};

// Vérifie si l'URL comment par http ou https, sinon les retir (pour afficher les liens et que ça soit joli)
export const removeURLPrefix = (url: string) => {
  if (!url) {
    return url; // Si l'URL est vide, la fonction renvoie l'URL inchangée
  }

  // Vérifie si l'URL commence par "http://" ou "https://"
  if (url.startsWith('http://')) {
    return url.slice(7); // Supprime "http://"
  }
  if (url.startsWith('https://')) {
    return url.slice(8); // Supprime "https://"
  }

  return url; // L'URL ne commence pas par un préfixe, donc on la renvoie inchangée
};

// Sépare les numéros de telephones par groupe de deux
export const formatPhoneNumber = (phone: string) => {
  const numericPhone = phone.replace(/\D/g, '');
  const formattedPhone = numericPhone.replace(/(\d{2})(?=\d)/g, '$1 ');
  return formattedPhone;
};

// openingHoursUtils.ts
export function getOpeningHours(day: Schedule) {
  const openAm = day.opentime_am?.slice(0, -3).replace(':', 'h');
  const closeAm = day.closetime_am?.slice(0, -3).replace(':', 'h');
  const openPm = day.opentime_pm?.slice(0, -3).replace(':', 'h');
  const closePm = day.closetime_pm?.slice(0, -3).replace(':', 'h');

  const openMorning = openAm && closeAm;
  const openAfternoon = openPm && closePm;
  const closeAllDay = !openAm && !closeAm && !openPm && !closePm;
  const noLunchBreak = openAm && !closeAm && !openPm && closePm;

  if (openMorning && openAfternoon) {
    return `${openAm} - ${closeAm} et ${openPm} - ${closePm}`;
  }
  if (noLunchBreak) {
    return `${openAm} - ${closePm}`;
  }

  if (!openMorning && openAfternoon) {
    return `${openPm} - ${closePm}`;
  }

  if (openMorning && !openAfternoon) {
    return `${openAm} - ${closeAm}`;
  }

  if (closeAllDay) {
    return 'Fermé';
  }
  return 'Fermé';
}
