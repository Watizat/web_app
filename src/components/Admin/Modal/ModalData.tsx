import { useState } from 'react';
import { Organism } from '../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';
import './Modal.scss';

interface ModalDataProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  organism: Organism;
}

/**
 * Transforme un objet de données en un format spécifique pour l'envoi au serveur.
 * @param {Object.<string, FormDataEntryValue>} data - Les données à transformer.
 * @returns {Object} Un nouvel objet contenant les données transformées.
 */
function setData(data: { [k: string]: FormDataEntryValue }) {
  const myArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 8; i++) {
    if (data[`schedule_id_${i}`]) {
      myArray.push({
        day: i,
        id: Number(data[`schedule_id_${i}`]),
        opentime_am: data[`schedule_openam_${i}`],
        closetime_am: data[`schedule_closeam_${i}`],
        opentime_pm: data[`schedule_openpm_${i}`],
        closetime_pm: data[`schedule_closepm_${i}`],
      });
    }
  }
  return {
    organism: { pmr: !!data.pmr, animals: !!data.animals },
    organism_translation: {
      description: data.description,
      infos_alerte: data.info_alerte,
    },
    horaire: myArray,
  };
}

function ModalData({ organism, setIsActive }: ModalDataProps) {
  const id = useAppSelector((state) => state.admin.organism?.id as number);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = setData(Object.fromEntries(form));

    try {
      setIsLoading(true);
      await axiosInstance.patch(`/items/organisme/${id}`, {
        ...data.organism,
      });
      await axiosInstance.patch(
        `/items/organisme_translation/${organism.translations[0].id}`,
        {
          ...data.organism_translation,
        }
      );
      await Promise.all(
        data.horaire.map((horaire) =>
          axiosInstance.patch(`/items/schedule/${horaire.id}`, horaire)
        )
      );

      dispatch(setAdminOrganism(id));
      setIsActive(false);
      setIsLoading(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Informations génerales</h1>
        <form className="modal-list" onSubmit={handleSubmit}>
          <div className="modal-case">
            <h4 className="modal-case__title">Accés</h4>
            <div className="modal-data__accessDetails">
              <label className="modal-data__pmr">
                {organism.pmr ? (
                  <input type="checkbox" defaultChecked name="pmr" />
                ) : (
                  <input type="checkbox" name="pmr" />
                )}
                Accessible PSH /PMR
              </label>
              <label className="modal-data__pmr">
                {organism.animals ? (
                  <input type="checkbox" defaultChecked name="animals" />
                ) : (
                  <input type="checkbox" name="animals" />
                )}
                Animaux admis
              </label>
            </div>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Description</h4>
            <textarea
              className="modal-case__textarea"
              defaultValue={organism.translations[0].description}
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
                {organism.schedules.map((day) => (
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
                        defaultValue={day.opentime_am}
                        className="modal-data__hoursInput"
                        name={`schedule_openam_${day.day}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        defaultValue={day.closetime_am}
                        className="modal-data__hoursInput"
                        name={`schedule_closeam_${day.day}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">/</td>
                    <td className="modal-data__hoursTd">
                      <input
                        defaultValue={day.opentime_pm}
                        className="modal-data__hoursInput"
                        name={`schedule_openpm_${day.day}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        defaultValue={day.closetime_pm}
                        name={`schedule_closepm_${day.day}`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Infos, alerte</h4>
            <textarea
              className="modal-case__textarea"
              defaultValue={organism.translations[0].infos_alerte}
              name="info_alerte"
            />
          </div>
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
            {isLoading && <span>Chargement...</span>}
            {!isLoading && <span>Sauvegarder</span>}
          </button>
          <div className="modal-actions" />
        </form>
      </div>
    </div>
  );
}

export default ModalData;
