import { useState } from 'react';
import { Service } from '../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';
import './Modal.scss';
import ModalDeleteServiceConfirmation from './ModalDeleteServiceConfirmation';

interface ServiceModalProps {
  service: Service;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function setData(data: { [k: string]: FormDataEntryValue }) {
  const myArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 8; i++) {
    myArray.push({
      day: i,
      id: data[`schedule_id_${i}`],
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
    translations: {
      name: data.name,
      description: data.description,
      infos_alerte: data.infos_alerte,
    },
    horaire: myArray,
    categorie_id: data.categorie_id,
    organisme_id: data.organisme_id,
  };
}

function ModalEditService({ service, setIsActive }: ServiceModalProps) {
  const categoriesList = useAppSelector((state) => state.organism.categories);
  const organismId = useAppSelector(
    (state) => state.admin.organism?.id as number
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveConfirmation, setIsActiveConfirmation] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = Object.fromEntries(new FormData(event.currentTarget));
    const data = setData(form);
    try {
      setIsLoading(true);
      await axiosInstance.patch(`/items/service/${service.id}`, {
        categorie_id: data.categorie_id,
      });

      await axiosInstance.patch(
        `/items/service_translation/${service.translations[0].id}`,
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
      setIsLoading(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
    dispatch(setAdminOrganism(organismId));
    setIsActive(false);
  };

  if (isActiveConfirmation) {
    return (
      <ModalDeleteServiceConfirmation
        id={service.id}
        setIsActiveConfirmation={setIsActiveConfirmation}
        setIsActive={setIsActive}
      />
    );
  }

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Modifier un service</h1>
        <form className="modal-list" onSubmit={handleSubmit}>
          <input
            type="number"
            name="organisme_id"
            hidden
            defaultValue={organismId}
          />
          <div className="modal-case">
            <h4 className="modal-case__title">Catégorie</h4>
            <label className="modal-contact__actu">
              Catégorie du service
              <select
                name="categorie_id"
                defaultValue={service.categorie_id.id}
              >
                <option disabled>Selectionnez une catégorie</option>
                {categoriesList.map((category) => (
                  <option
                    key={category.translations[0].name}
                    value={`${category.id}`}
                  >
                    {category.translations[0].name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Nom du service</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={service.translations[0].name}
              name="name"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Type de service·s proposé·s</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={service.translations[0].description}
              name="description"
            />
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
                {service.schedules.map((day, index) => (
                  <tr key={day.day} className="modal-data__hoursLine">
                    <td className="modal-data__hoursDay">
                      <span>{day.day}</span>
                      <input
                        type="hidden"
                        name={`schedule_id_${day.day}`}
                        value={day.id}
                      />
                    </td>
                    <td className="modal-data__hoursHour">
                      <input
                        defaultValue={day.opentime_am
                          ?.slice(0, -3)
                          .replace(':', 'h')}
                        className="modal-data__hoursInput"
                        name={`schedule_openam_${index + 1}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        defaultValue={day.closetime_am
                          ?.slice(0, -3)
                          .replace(':', 'h')}
                        className="modal-data__hoursInput"
                        name={`schedule_closeam_${index + 1}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">/</td>
                    <td className="modal-data__hoursTd">
                      <input
                        defaultValue={day.opentime_pm
                          ?.slice(0, -3)
                          .replace(':', 'h')}
                        className="modal-data__hoursInput"
                        name={`schedule_openpm_${index + 1}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        defaultValue={day.closetime_pm
                          ?.slice(0, -3)
                          .replace(':', 'h')}
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
            <textarea
              className="modal-case__textarea"
              defaultValue={service.translations[0].infos_alerte}
              name="infos_alerte"
            />
          </div>
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-danger-fill btn-flat modal-actions__close"
              onClick={() => setIsActiveConfirmation(true)}
            >
              Supprimer
            </button>
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
              {isLoading && <span>Sauvegarde en cours...</span>}
              {!isLoading && <span>Sauvegarder</span>}{' '}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEditService;
