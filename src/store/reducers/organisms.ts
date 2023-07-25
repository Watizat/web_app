import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { Categorie, Organism } from '../../@types/organism';
import { axiosInstance } from '../../utils/axios';

interface OrganismsState {
  organisms: Organism[];
  filteredOrganisms: Organism[];
  categoryFilter: string[];
  isLoading: boolean;
  categories: Categorie[];
  userPosition: { lat: number; lng: number };
  organism: Organism | null;
}

export const initialState: OrganismsState = {
  organisms: [],
  filteredOrganisms: [],
  categoryFilter: [],
  isLoading: false,
  categories: [],
  userPosition: { lat: 0, lng: 0 },
  organism: null,
};

export const fetchOrganisms = createAsyncThunk(
  'organisms/fetch-organisms',
  async (/* category: string */) => {
    const { data } = await axiosInstance.get<{ data: Organism[] }>(
      '/items/organisme',
      {
        params: {
          // IMPOSSIBLE D'AJOUTER PLUS DE PARAMETRES
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

export const fetchOrganism = createAsyncThunk(
  'organisms/fetch-organism',
  async (slug: string) => {
    const { data } = await axiosInstance.get<{ data: Organism[] }>(
      'https://watizat.lunalink.nl/items/organisme',
      {
        params: {
          // IMPOSSIBLE D'AJOUTER PLUS DE PARAMETRES
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
            slug: `${slug}`,
          },
        },
      }
    );
    return data.data[0];
  }
);

export const fetchCategories = createAsyncThunk(
  'categories/fetch-categories',
  async () => {
    const { data } = await axiosInstance.get<{ data: Categorie[] }>(
      'https://watizat.lunalink.nl/items/categorie?fields=tag,translations.name,translations.slug'
    );
    return data.data;
  }
);

export const filterCategories = createAction<string[]>(
  'categories/filter-categories'
);

export const setOrganisms = createAction<Organism[]>(
  'organims/filter-organims'
);

export const setFilteredOrganisms = createAction<Organism[]>(
  'organims/filtered-organims'
);

export const setUserPosition = createAction<{ lat: number; lng: number }>(
  'position/user-position'
);

const organismReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOrganisms.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOrganisms.fulfilled, (state, action) => {
      state.organisms = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchOrganisms.rejected, (state, action) => {
      console.log(action.payload);
    })
    .addCase(fetchOrganism.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOrganism.fulfilled, (state, action) => {
      state.organism = action.payload;
      state.isLoading = false;
    })
    .addCase(setOrganisms, (state, action) => {
      state.organisms = action.payload;
    })
    .addCase(setFilteredOrganisms, (state, action) => {
      state.filteredOrganisms = action.payload;
    })
    .addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload.sort((a, b) =>
        a.tag.localeCompare(b.tag)
      );
    })
    .addCase(filterCategories, (state, action) => {
      state.categoryFilter = action.payload;
    })
    .addCase(setUserPosition, (state, action) => {
      state.userPosition = action.payload;
    });
});

export default organismReducer;
