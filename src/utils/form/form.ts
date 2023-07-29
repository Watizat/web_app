import { Inputs } from '../../@types/formInputs';

// Fonction permettant de mettre en forme les données d'horaires et return un tableau d'objets horaire
export function scheduleFormat(data: Inputs) {
  const myArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 8; i++) {
    myArray.push({
      day: i,
      id: data[`schedule_id_${i}`] || null,
      opentime_am: data[`schedule_openam_${i}`]
        ? String(data[`schedule_openam_${i}`]).replace('h', ':')
        : null,
      closetime_am: data[`schedule_closeam_${i}`]
        ? String(data[`schedule_closeam_${i}`]).replace('h', ':')
        : null,
      opentime_pm: data[`schedule_openpm_${i}`]
        ? String(data[`schedule_openpm_${i}`]).replace('h', ':')
        : null,
      closetime_pm: data[`schedule_closepm_${i}`]
        ? String(data[`schedule_closepm_${i}`]).replace('h', ':')
        : null,
    });
  }
  return myArray;
}

// Fonction permettant de vérifier que le format des horaires correspond à ce qui est attendu par le serveur
export const validateScheduleFormat = (value: string) => {
  // Si la valeur est vide, la validation réussit
  if (!value) {
    return true;
  }
  // Expression régulière pour valider un email
  const schedulePattern =
    /^(?:2[0-3]|[01]?[0-9])(?::[0-5][0-9]|h(?:[0-5][0-9])?)?$/;
  return schedulePattern.test(value) || false;
};

// Fonction permettant de transformer une string en slug en retirant les accents et en remplaçant les espaces par des tirets
export function createSlug(inputString: string) {
  const slug = inputString
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
  return slug;
}
