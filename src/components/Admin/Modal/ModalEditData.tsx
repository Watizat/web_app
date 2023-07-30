import classNames from 'classnames';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { Organism } from '../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';
import {
  scheduleFormat,
  validateScheduleFormat,
} from '../../../utils/form/form';
import './Modal.scss';

interface ModalDataProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  organism: Organism;
}

function ModalEditData({ organism, setIsActive }: ModalDataProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const id = useAppSelector((state) => state.admin.organism?.id as number);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
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
    try {
      setIsLoading(true);
      await axiosInstance.patch(`/items/organisme/${id}`, {
        ...data.organism,
      });
      await axiosInstance.patch(
        `/items/organisme_translation/${organism.translations[0].id}`,
        {
          ...data.translation,
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
  };

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Modifier les informations génerales</h1>
        <form className="modal-list" onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-case">
            <h4 className="modal-case__title">Accès</h4>
            <div className="modal-data__accessDetails">
              <label className="modal-data__pmr">
                <input
                  type="checkbox"
                  defaultChecked={organism.pmr}
                  {...register('pmr')}
                />
                Accessible PSH / PMR
              </label>
              <label className="modal-data__pmr">
                <input
                  type="checkbox"
                  defaultChecked={organism.animals}
                  {...register('animals')}
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
              {...register('description')}
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
                        {...register(`schedule_id_${day.day}`, {
                          value: day.id,
                        })}
                      />
                    </td>
                    <td className="modal-data__hoursHour">
                      <input
                        className={classNames(
                          'modal-data__hoursInput',
                          errors[`schedule_openam_${day.day}`] &&
                            'modal-data__hoursInput--error'
                        )}
                        {...register(`schedule_openam_${day.day}`, {
                          value: day.opentime_am
                            ?.slice(0, -3)
                            .replace(':', 'h'),
                          validate: (value) =>
                            validateScheduleFormat(value as string),
                        })}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        className={classNames(
                          'modal-data__hoursInput',
                          errors[`schedule_closeam_${day.day}`] &&
                            'modal-data__hoursInput--error'
                        )}
                        {...register(`schedule_closeam_${day.day}`, {
                          value: day.closetime_am
                            ?.slice(0, -3)
                            .replace(':', 'h'),
                          validate: (value) =>
                            validateScheduleFormat(value as string),
                        })}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">/</td>
                    <td className="modal-data__hoursTd">
                      <input
                        className={classNames(
                          'modal-data__hoursInput',
                          errors[`schedule_openpm_${day.day}`] &&
                            'modal-data__hoursInput--error'
                        )}
                        {...register(`schedule_openpm_${day.day}`, {
                          value: day.opentime_pm
                            ?.slice(0, -3)
                            .replace(':', 'h'),
                          validate: (value) =>
                            validateScheduleFormat(value as string),
                        })}
                      />
                    </td>
                    <td className="modal-data__hoursSeparater">-</td>
                    <td className="modal-data__hoursTd">
                      <input
                        className={classNames(
                          'modal-data__hoursInput',
                          errors[`schedule_closepm_${day.day}`] &&
                            'modal-data__hoursInput--error'
                        )}
                        {...register(`schedule_closepm_${day.day}`, {
                          value: day.closetime_pm
                            ?.slice(0, -3)
                            .replace(':', 'h'),
                          validate: (value) =>
                            validateScheduleFormat(value as string),
                        })}
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
              {...register('info_alerte')}
            />
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
              {isLoading && <span>Sauvegarde en cours...</span>}
              {!isLoading && <span>Sauvegarder</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEditData;
