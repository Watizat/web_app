export interface Organism {
  id: number;
  name: string;
  address: string | null;
  zipcode: string | null;
  slug: string;
  latitude: number;
  longitude: number;
  city: string;
  comment: string | null;
  visible: boolean;
  pmr: boolean;
  animals: boolean;
  zone_id: Zone;
  phone: string | null;
  mail: string | null;
  website: string | null;
  translations: OrganismTranslation[];
  schedules: Schedule[];
  services: Service[];
}

export interface OrganismTranslation {
  id: number;
  infos_alerte: string | null;
  description: string | null;
}

export interface Zone {
  name: string;
}

export interface Schedule {
  id: number;
  day: number;
  opentime_am: string | null;
  closetime_am: string | null;
  opentime_pm: string | null;
  closetime_pm: string | null;
  closed: boolean;
}

export interface Service {
  id: number;
  status: string;
  translations: ServiceTranslation[];
  schedules: Schedule[];
  categorie_id: Categorie;
}

export interface ServiceTranslation {
  id: number;
  name: string;
  infos_alerte: string | null;
  slug: string;
  description: string | null;
}

export interface Categorie {
  tag: string;
  translations: CategorieTranslation[];
}

export interface CategorieTranslation {
  id: number;
  name: string;
  description: string;
  slug: string;
  langue_id: number;
}

// export interface Categories {
//   tag: string;
//   translations: {
//     name: string;
//     slug: string;
//   }[];
// }
