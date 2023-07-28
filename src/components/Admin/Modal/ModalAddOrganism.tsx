import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { axiosInstance } from '../../../utils/axios';
import './Modal.scss';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function setData(data: { [k: string]: FormDataEntryValue }) {
  // Fonction permettant de transformer une string en slug en retirant les accents et en remplaçant les espaces par des tirets
  function createSlug(inputString: string) {
    const slug = inputString
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    return slug;
  }

  const myArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 8; i++) {
    myArray.push({
      day: i,
      opentime_am: data[`schedule_openam_${i}`]
        ? String(data[`schedule_openam_${i}`]).replace('h', ':')
        : null,
      closetime_am: data[`schedule_closeam_${i}`]
        ? String(data[`schedule_closeam_${i}`]).replace('h', ':')
        : null,
      opentime_pm: data[`schedule_openpm_${i}`]
        ? String(data[`schedule_openpm_${i}`]).replace('h', ':')
        : null,
      closetime_pm: data[`schedule_closepm_${i}`]
        ? String(data[`schedule_closepm_${i}`]).replace('h', ':')
        : null,
    });
  }
  return {
    horaire: myArray,
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
    translations: {
      description: data.description,
      infos_alerte: data.infos_alerte,
      // langue_id
    },
  };
}

function ModalAddOrganism({ setIsActive }: ModalProps) {
  const [select, setSelect] = useState(localStorage.getItem('city') || '');
  const zones = useAppSelector((state) => state.admin.zones);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('city', event.target.value);
    setSelect(event.target.value);
  };

  async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const formData = Object.fromEntries(form);
    const data = setData(formData);

    const address = `${data.organism.address} ${data.organism.zipcode} ${data.organism.city}`;

    try {
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
        ...data.translations,
        organisme: response.data.data.id,
        langue_id: 1,
      });

      await Promise.all(
        data.horaire.map((horaire) =>
          axiosInstance.post(`/items/schedule`, {
            ...horaire,
            service_id: null,
            organisme_id: response.data.data.id,
          })
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Créer un organisme</h1>
        <form className="modal-list" onSubmit={handleSubmit}>
          <select value={select} onChange={handleChange} name="zone_id">
            <option value="" disabled>
              Selectionner une ville
            </option>
            {zones.map((zone) => (
              <option key={zone.id} value={zone.id}>
                {zone.name}
              </option>
            ))}
          </select>
          <div className="modal-case">
            <h4 className="modal-case__title">Nom de l&apos;organisme</h4>
            <input className="modal-case__inputTxt" type="text" name="name" />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Adresse</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              name="address"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Ville</h4>
            <input className="modal-case__inputTxt" type="text" name="city" />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Code postal</h4>
            <input
              className="modal-case__inputTxt"
              type="number"
              name="zipcode"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Telephone</h4>
            <input
              className="modal-case__inputTxt"
              type="number"
              name="phone"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Site web</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              name="website"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Accès</h4>
            <div className="modal-data__accessDetails">
              <label className="modal-data__pmr">
                <input type="checkbox" name="pmr" />
                Accessible PSH / PMR
              </label>
              <label className="modal-data__pmr">
                <input type="checkbox" name="animals" />
                Animaux admis
              </label>
            </div>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Description</h4>
            <textarea className="modal-case__textarea" name="description" />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Horaires</h4>
            <table className="modal-data__hours">
              <thead className="modal-data__hoursHead">
                <tr>
                  <td>Jours</td>
                  <td colSpan={3}>Matin</td>
                  <td />
                  <td colSpan={3}>Aprés-midi</td>
                </tr>
              </thead>
              <tbody>
                {[
                  'Lundi',
                  'Mardi',
                  'Mercredi',
                  'Jeudi',
                  'vendredi',
                  'Samedi',
                  'Dimanche',
                ].map((i, index) => (
                  <tr key={i} className="modal-data__hoursLine">
                    <td className="modal-data__hoursDay">
                      <span>{i}</span>
                    </td>
                    <td className="modal-data__hoursHour">
                      <input
                        className="modal-data__hoursInput"
                        name={`schedule_openam_${index + 1}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        className="modal-data__hoursInput"
                        name={`schedule_closeam_${index + 1}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">/</td>
                    <td className="modal-data__hoursTd">
                      <input
                        className="modal-data__hoursInput"
                        name={`schedule_openpm_${index + 1}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        className="modal-data__hoursInput"
                        name={`schedule_closepm_${index + 1}`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Info s & alertes</h4>
            <textarea className="modal-case__textarea" name="infos_alerte" />
          </div>
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-info-fill btn-flat modal-actions__close"
              onClick={() => setIsActive(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn btn-sucess-fill btn-flat modal-actions__save"
            >
              Sauvegarder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAddOrganism;
