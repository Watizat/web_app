import {
  createAsyncThunk,
  createReducer,
  createAction,
} from '@reduxjs/toolkit';
import { Organism, Role, Zone } from '../../@types/organism';
import { DirectusUser } from '../../@types/user';
import { axiosInstance } from '../../utils/axios';

interface AdminState {
  organisms: Organism[];
  organism: Organism | null;
  isLoading: boolean;
  users: DirectusUser[];
  user: DirectusUser | null;
  zones: Zone[];
  zone: Zone | null;
  roles: Role[];
  role: Role | null;
}

export const initialState: AdminState = {
  organisms: [],
  organism: null,
  isLoading: false,
  users: [],
  user: null,
  zones: [],
  zone: null,
  roles: [],
  role: null,
};

export const fetchAdminOrganisms = createAsyncThunk(
  'admin-organisms/fetch-organisms',
  async () => {
    const { data } = await axiosInstance.get<{ data: Organism[] }>(
      '/items/organisme',
      {
        params: {
          fields: ['id', 'name', 'address'].join(','),
          filter: {
            zone_id: {
              name: 'Toulouse',
            },
          },
        },
      }
    );
    return data.data;
  }
);

export const fetchUsers = createAsyncThunk(
  'users/fetch-users',
  async (zone: string | null) => {
    const { data } = await axiosInstance.get<{ data: DirectusUser[] }>(
      '/users',
      {
        params: {
          fields: [
            /*         'id',
        'firstname',
        'lastname',
        'last_connected',
        'email',
        'role_id.id',
        'role_id.name',
        'zone.name', */
            '*',
          ].join(','),
          filter: {
            zone,
          },
        },
      }
    );
    return data.data;
  }
);

export const setAdminOrganism = createAsyncThunk(
  'admin-organisms/set-organism',
  async (id: number) => {
    const { data } = await axiosInstance.get<{ data: Organism[] }>(
      '/items/organisme',
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
            'schedules.id',
            'schedules.day',
            'schedules.opentime_am',
            'schedules.closetime_am',
            'schedules.opentime_pm',
            'schedules.closetime_pm',
            'schedules.closed',
            'contacts.id',
            'contacts.name',
            'contacts.comment',
            'contacts.job',
            'contacts.phone',
            'contacts.mail',
            'contacts.visibility',
            'contacts.actualisation',
            'translations.id',
            'translations.description',
            'translations.infos_alerte',
            'services.id',
            'services.categorie_id.tag',
            'services.categorie_id.id',
            'services.categorie_id.translations.name',
            'services.categorie_id.translations.slug',
            'services.categorie_id.translations.description',
            'services.categorie_id.translations.',
            'services.translations.id',
            'services.translations.name',
            'services.translations.slug',
            'services.translations.infos_alerte',
            'services.translations.description',
            'services.schedules.*',
            'services.contacts.id',
            'services.contacts.name',
            'services.contacts.comment',
            'services.contacts.job',
            'services.contacts.mail',
            'services.contacts.phone',
            'services.contacts.visibility',
            'services.contacts.actualisation',
          ].join(','),
          filter: {
            id,
          },
        },
      }
    );
    return data.data[0];
  }
);

export const fetchZones = createAsyncThunk('zones', async () => {
  const { data } = await axiosInstance.get<{ data: Zone[] }>('/items/zone');
  return data.data;
});

export const fetchRoles = createAsyncThunk('roles', async () => {
  const { data } = await axiosInstance.get<{ data: Role[] }>('/roles');
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
    })
    .addCase(fetchZones.fulfilled, (state, action) => {
      state.zones = action.payload;
    })
    .addCase(fetchRoles.fulfilled, (state, action) => {
      state.roles = action.payload;
    })
    .addCase(setAdminOrganism.fulfilled, (state, action) => {
      state.organism = action.payload;
    });
});

export default adminReducer;
