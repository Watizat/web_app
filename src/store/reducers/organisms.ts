import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import AxiosInstance from 'axios';
import { Categorie, Organism } from '../../@types/organism';

interface OrganismsState {
  organisms: Organism[];
  editOrganism: Organism[];
  categoryFilter: string[];
  isLoading: boolean;
  categories: Categorie[];
}

export const initialState: OrganismsState = {
  organisms: [],
  editOrganism: [],
  categoryFilter: [],
  isLoading: false,
  categories: [],
};

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
            'contacts.name',
            'schedules.day',
            'schedules.opentime_am',
            'schedules.closetime_am',
            'schedules.opentime_pm',
            'schedules.closetime_pm',
            'schedules.closed',
            'contacts.job',
            'contacts.phone',
            'contacts.visibility',
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
          ],
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

export const fetchCategories = createAsyncThunk(
  'categories/fetch-categories',
  async () => {
    const { data } = await AxiosInstance.get<{ data: Categorie[] }>(
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

export const setEditOrganism = createAction<Organism>(
  'organisms/edit-organism'
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
    .addCase(setOrganisms, (state, action) => {
      state.organisms = action.payload;
    })
    .addCase(setEditOrganism, (state, action) => {
      state.editOrganism = [action.payload];
    })
    .addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    })
    .addCase(filterCategories, (state, action) => {
      state.categoryFilter = action.payload;
    });
});

export default organismReducer;
