export interface Organism {
  id: number;
  name: string;
  address: string | undefined;
  zipcode: string | undefined;
  slug: string;
  contacts: Contact[];
  latitude: number;
  longitude: number;
  city: string;
  comment: string | undefined;
  visible: boolean;
  visible_comment: string | undefined;
  pmr: boolean;
  animals: boolean;
  zone_id: Zone;
  phone: string | undefined;
  mail: string | undefined;
  website: string | undefined;
  translations: OrganismTranslation[];
  schedules: Schedule[];
  services: Service[];
  contacts: Contact[];
  date_created: Date;
  date_updated: Date;
}

export interface Contact {
  id: number;
  name: string;
  comment: string;
  job: string;
  phone: string;
  mail: string;
  visibility: boolean;
  actualisation: boolean;
}

export interface OrganismTranslation {
  id: number;
  infos_alerte: string | undefined;
  description: string | undefined;
}

export interface Schedule {
  id: number;
  day: number;
  opentime_am: string | undefined;
  closetime_am: string | undefined;
  opentime_pm: string | undefined;
  closetime_pm: string | undefined;
  closed: boolean;
}

export interface Service {
  contacts: Contact[];
  id: number;
  status: string;
  translations: ServiceTranslation[];
  schedules: Schedule[];
  categorie_id: Categorie;
  contacts: Contact[];
}

export interface ServiceTranslation {
  id: number;
  name: string;
  infos_alerte: string | undefined;
  slug: string;
  description: string | undefined;
}

export interface Categorie {
  id: number;
  tag: string;
  translations: CategorieTranslation[];
}

export interface CategorieTranslation {
  id: number;
  name: string;
  description: string | undefined;
  slug: string;
  langue_id: number;
}

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  last_connected: string;
  role_id: {
    id: number;
    name: string;
  };
  zone: Zone;
}

export interface Zone {
  id: number;
  name: string;
  users: {
    id: number;
  };
}

export interface Role {
  id: string;
  name: string;
}

export interface Days {
  numberday: number;
  name: string;
}
