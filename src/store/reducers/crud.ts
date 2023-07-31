import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { Inputs } from '../../@types/formInputs';
import { axiosInstance } from '../../utils/axios';
import { createSlug, scheduleFormat } from '../../utils/form/form';

interface CrudState {
  isSaving: boolean;
}

export const initialState: CrudState = {
  isSaving: false,
};

export const addOrganism = createAsyncThunk(
  'crud/add-organism',
  async (formData: Inputs) => {
    function setData(data: Inputs) {
      return {
        organism: {
          name: data.name,
          slug: createSlug(data.name.toString()),
          address: data.address,
          city: data.city,
          zipcode: data.zipcode,
          website: data.website,
          phone: data.phone,
          zone_id: data.zone_id,
          pmr: !!data.pmr,
          animals: !!data.animals,
        },
        translation: {
          description: data.description,
          infos_alerte: data.infos_alerte,
          // langue_id
        },
        horaire: scheduleFormat(data),
      };
    }
    const data = setData(formData);
    const address = `${data.organism.address} ${data.organism.zipcode} ${data.organism.city}`;
    const geolocResponse = await axios.get(
      `https://api-adresse.data.gouv.fr/search/?q=${address}`
    );

    const [longitude, latitude] =
      geolocResponse.data.features[0].geometry.coordinates;

    const response = await axiosInstance.post(`/items/organisme`, {
      ...data.organism,
      latitude,
      longitude,
    });
    await axiosInstance.post(`/items/organisme_translation`, {
      ...data.translation,
      organisme: response.data.data.id,
      langue_id: 1,
    });
    await Promise.all(
      // Il faut retirer la propriété id de l'objet horaire (inutile ici) pour éviter une erreur à la création dans la bdd
      data.horaire.map(({ id, ...horaire }) =>
        axiosInstance.post(`/items/schedule`, {
          ...horaire,
          service_id: null,
          organisme_id: response.data.data.id,
        })
      )
    );
    return response.data.data.id;
  }
);

export const editContact = createAsyncThunk(
  'crud/edit-contact',
  async ({ formData, contactId }: { formData: Inputs; contactId: number }) => {
    await axiosInstance.patch(`/items/contact/${contactId}`, {
      ...formData,
    });
  }
);

export const addService = createAsyncThunk(
  'crud/add-service',
  async (formData: Inputs) => {
    function setData(data: Inputs) {
      return {
        translations: {
          name: data.name,
          description: data.description,
          infos_alerte: data.infos_alerte,
        },
        categorie_id: data.categorie_id,
        organisme_id: data.organisme_id,
        horaire: scheduleFormat(data),
      };
    }
    const data = setData(formData);
    const response = await axiosInstance.post(`/items/service`, {
      categorie_id: data.categorie_id,
      organisme_id: data.organisme_id,
    });
    await axiosInstance.post(`/items/service_translation`, {
      ...data.translations,
      langue_id: 1,
      service: response.data.data.id,
    });
    await Promise.all(
      data.horaire.map(({ id, ...horaire }) =>
        axiosInstance.post(`/items/schedule`, {
          ...horaire,
          service_id: response.data.data.id,
          organisme_id: null,
        })
      )
    );
  }
);

export const editService = createAsyncThunk(
  'crud/edit-service',
  async ({
    formData,
    serviceId,
    serviceTranslationId,
  }: {
    formData: Inputs;
    serviceId: number;
    serviceTranslationId: number;
  }) => {
    function setData(data: Inputs) {
      return {
        translations: {
          name: data.name,
          description: data.description,
          infos_alerte: data.infos_alerte,
        },
        categorie_id: data.categorie_id,
        organisme_id: data.organisme_id,
        horaire: scheduleFormat(data),
      };
    }
    const data = setData(formData);
    await axiosInstance.patch(`/items/service/${serviceId}`, {
      categorie_id: data.categorie_id,
    });

    await axiosInstance.patch(
      `/items/service_translation/${serviceTranslationId}`,
      {
        ...data.translations,
      }
    );

    await Promise.all(
      data.horaire.map((horaire) =>
        axiosInstance.patch(`/items/schedule/${horaire.id}`, {
          ...horaire,
        })
      )
    );
  }
);

export const addServiceContact = createAsyncThunk(
  'crud/add-service-contact',
  async (formData: Inputs) => {
    await axiosInstance.post('/items/contact', {
      ...formData,
      organisme: null,
    });
  }
);

export const addOrganismContact = createAsyncThunk<
  number,
  Inputs,
  { rejectValue: string }
>('crud/add-contact-organism', async (formData: Inputs) => {
  const { data } = await axiosInstance.post('/items/contac', {
    ...formData,
    service: null,
  });
  return data;
});

export const editOrganismInfos = createAsyncThunk(
  'crud/edit-organism-infos',
  async ({
    formData,
    organismId,
  }: {
    formData: Inputs;
    organismId: number;
  }) => {
    const address = `${formData.address} ${formData.zipcode} ${formData.city}`;
    const geolocResponse = await axios.get(
      `https://api-adresse.data.gouv.fr/search/?q=${address}`
    );
    const [longitude, latitude] =
      geolocResponse.data.features[0].geometry.coordinates;
    await axiosInstance.patch(`/items/organisme/${organismId}`, {
      ...formData,
      latitude,
      longitude,
      service: null,
    });
  }
);

export const editOrganismData = createAsyncThunk(
  'crud/edit-organism-data',
  async ({
    formData,
    organismId,
    organismTranslationId,
  }: {
    formData: Inputs;
    organismId: number;
    organismTranslationId: number;
  }) => {
    function setData(data: Inputs) {
      return {
        organism: { pmr: !!data.pmr, animals: !!data.animals },
        translation: {
          description: data.description,
          infos_alerte: data.info_alerte,
        },
        horaire: scheduleFormat(data),
      };
    }
    const data = setData(formData);
    await axiosInstance.patch(`/items/organisme/${organismId}`, {
      ...data.organism,
    });
    await axiosInstance.patch(
      `/items/organisme_translation/${organismTranslationId}`,
      {
        ...data.translation,
      }
    );
    await Promise.all(
      data.horaire.map((horaire) =>
        axiosInstance.patch(`/items/schedule/${horaire.id}`, horaire)
      )
    );
  }
);

const crudReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addOrganism.pending, (state) => {
      state.isSaving = true;
    })
    .addCase(addOrganism.fulfilled, (state) => {
      state.isSaving = false;
    })
    .addCase(editOrganismInfos.pending, (state) => {
      state.isSaving = true;
    })
    .addCase(editOrganismInfos.fulfilled, (state) => {
      state.isSaving = false;
    })
    .addCase(editOrganismData.pending, (state) => {
      state.isSaving = true;
    })
    .addCase(editOrganismData.fulfilled, (state) => {
      state.isSaving = false;
    })
    .addCase(addService.pending, (state) => {
      state.isSaving = true;
    })
    .addCase(addService.fulfilled, (state) => {
      state.isSaving = false;
    })
    .addCase(editService.pending, (state) => {
      state.isSaving = true;
    })
    .addCase(editService.fulfilled, (state) => {
      state.isSaving = false;
    })
    .addCase(addServiceContact.pending, (state) => {
      state.isSaving = true;
    })
    .addCase(addServiceContact.fulfilled, (state) => {
      state.isSaving = false;
    })
    .addCase(addOrganismContact.pending, (state) => {
      state.isSaving = true;
    })
    .addCase(addOrganismContact.fulfilled, (state) => {
      state.isSaving = false;
    })
    .addCase(editContact.pending, (state) => {
      state.isSaving = true;
    })
    .addCase(editContact.fulfilled, (state) => {
      state.isSaving = false;
    });
});

export default crudReducer;
