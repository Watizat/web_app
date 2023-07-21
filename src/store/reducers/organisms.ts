import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { Categorie, Organism } from '../../@types/organism';
import { axiosInstance } from '../../utils/axios';

interface OrganismsState {
  organisms: Organism[];
  categoryFilter: string[];
  isLoading: boolean;
  categories: Categorie[];
}

export const initialState: OrganismsState = {
  organisms: [],
  categoryFilter: [],
  isLoading: false,
  categories: [],
};

export const fetchOrganisms = createAsyncThunk(
  'organisms/fetch-organisms',
  async (/* category: string */) => {
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
            'schedules',
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
    .addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    })
    .addCase(filterCategories, (state, action) => {
      state.categoryFilter = action.payload;
    });
});

export default organismReducer;
