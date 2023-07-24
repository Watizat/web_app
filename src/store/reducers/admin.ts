import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import AxiosInstance from 'axios';
import { Categorie, Organism } from '../../@types/organism';

interface AdminState {}

export const initialState: AdminState = {};

export const fetchOrganisms = createAsyncThunk(
  'organisms/fetch-organisms',
  async (/* category: string */) => {
    const { data } = await AxiosInstance.get<{ data: Organism[] }>(
      'https://watizat.lunalink.nl/items/organisme',
      {
        params: {
          fields: [
            'id',
            'name',
            'slug',
            'address',
            'city',
            'zipcode',
            'latitude',
            'longitude',
            'comment',
            'visible',
            'pmr',
            'animals',
            'phone',
            'mail',
            'website',
            'zone_id.name',
            'schedules.day',
            'schedules.opentime_am',
            'schedules.closetime_am',
            'schedules.opentime_pm',
            'schedules.closetime_pm',
            'schedules.closed',
            'contacts.name',
            'contacts.job',
            'contacts.phone',
            'contacts.mail',
            'contacts.visibility',
            'contacts.actualisation',
            'translations.id',
            'translations.description',
            'translations.infos_alerte',
            'services.categorie_id.tag',
            'services.categorie_id.translations.name',
            'services.categorie_id.translations.slug',
            'services.categorie_id.translations.description',
            'services.categorie_id.translations.',
            'services.translations.name',
            'services.translations.slug',
            'services.translations.infos_alerte',
            'services.translations.description',
            'services.schedules.day',
            'services.schedules.opentime_am',
            'services.schedules.closetime_am',
            'services.schedules.opentime_pm',
            'services.schedules.closetime_pm',
            'services.schedules.closetime_pm',
            'services.contacts.name',
            'services.contacts.job',
            'services.contacts.mail',
            'services.contacts.phone',
            'services.contacts.visibility',
            'services.contacts.actualisation',
          ].join(','),
          filter: {
            zone_id: {
              name: 'Toulouse',
            },
            /* services: {
              categorie_id: {
                translations: {
                  slug: `${category}`,
                },
              },
            }, */
          },
        },
      }
    );
    return data.data;
  }
);

const adminReducer = createReducer(initialState, (builder) => {});

export default adminReducer;
