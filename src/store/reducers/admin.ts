import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import AxiosInstance from 'axios';
import { Organism, User } from '../../@types/organism';

interface AdminState {
  organisms: Organism[];
  isLoading: boolean;
  users: User[];
  user: User | null;
}

export const initialState: AdminState = {
  organisms: [],
  isLoading: false,
  users: [],
  user: null,
};

export const fetchAdminOrganisms = createAsyncThunk(
  'admin-organisms/fetch-organisms',
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

export const fetchUsers = createAsyncThunk('users/fetch-users', async () => {
  const { data } = await AxiosInstance.get<{ data: User[] }>(
    'https://watizat.lunalink.nl/items/user',
    {
      params: {
        fields: [
          'id',
          'firstname',
          'lastname',
          'last_connected',
          'email',
          'role_id.id',
          'role_id.name',
          'zone.name',
        ].join(','),
      },
    }
  );
  return data.data;
});

const adminReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchAdminOrganisms.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchAdminOrganisms.fulfilled, (state, action) => {
      state.organisms = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      console.log(action.payload);
    });
});

export default adminReducer;
