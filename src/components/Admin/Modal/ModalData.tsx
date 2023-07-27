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
            <h4 className="modal-case__title">Accès</h4>
            <div className="modal-data__accessDetails">
              <label className="modal-data__pmr">
                <input
                  type="checkbox"
                  defaultChecked={organism.pmr}
                  name="pmr"
                />
                Accessible PSH / PMR
              </label>
              <label className="modal-data__pmr">
                <input
                  type="checkbox"
                  defaultChecked={organism.animals}
                  name="animals"
                />
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
                  <td colSpan={3}>Après-midi</td>
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
                        defaultValue={day.opentime_am
                          ?.slice(0, -3)
                          .replace(':', 'h')}
                        className="modal-data__hoursInput"
                        name={`schedule_openam_${day.day}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        defaultValue={day.closetime_am
                          ?.slice(0, -3)
                          .replace(':', 'h')}
                        className="modal-data__hoursInput"
                        name={`schedule_closeam_${day.day}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">/</td>
                    <td className="modal-data__hoursTd">
                      <input
                        defaultValue={day.opentime_pm
                          ?.slice(0, -3)
                          .replace(':', 'h')}
                        className="modal-data__hoursInput"
                        name={`schedule_openpm_${day.day}`}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        defaultValue={day.closetime_pm
                          ?.slice(0, -3)
                          .replace(':', 'h')}
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
            {isLoading && <span>Sauvegarde en cours...</span>}
            {!isLoading && <span>Sauvegarder</span>}
          </button>
          <div className="modal-actions" />
        </form>
      </div>
    </div>
  );
}

export default ModalData;
