import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { Inputs } from '../../@types/formInputs';
import { axiosInstance } from '../../utils/axios';

interface CrudState {
  isSaving: boolean;
}

export const initialState: CrudState = {
  isSaving: false,
};

export const addOrganismContact = createAsyncThunk(
  'crud/add-contact-organism',
  async (data: Inputs) => {
    await axiosInstance.post('/items/contact', {
      ...data,
      service: null,
    });
  }
);

export const editOrganismInfos = createAsyncThunk(
  'crud/edit-organism-infos',
  async ({ data, organismId }: { data: Inputs; organismId: number }) => {
    const address = `${data.address} ${data.zipcode} ${data.city}`;
    const geolocResponse = await axios.get(
      `https://api-adresse.data.gouv.fr/search/?q=${address}`
    );
    const [longitude, latitude] =
      geolocResponse.data.features[0].geometry.coordinates;
    await axiosInstance.patch(`/items/organisme/${organismId}`, {
      ...data,
      latitude,
      longitude,
      service: null,
    });
  }
);

const crudReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addOrganismContact.pending, (state) => {
      state.isSaving = true;
    })
    .addCase(addOrganismContact.fulfilled, (state) => {
      state.isSaving = false;
    })
    .addCase(editOrganismInfos.pending, (state) => {
      state.isSaving = true;
    })
    .addCase(editOrganismInfos.fulfilled, (state) => {
      state.isSaving = false;
    });
});

export default crudReducer;
