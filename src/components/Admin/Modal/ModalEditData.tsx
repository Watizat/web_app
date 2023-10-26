import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { Organism } from '../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { editOrganismData } from '../../../store/reducers/crud';
import { validateScheduleFormat } from '../../../utils/form/form';

import styles from './Modal.module.scss';

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

  const dispatch = useAppDispatch();
  const days = useAppSelector((state) => state.organism.days);

  const organismId = useAppSelector(
    (state) => state.admin.organism?.id as number
  );
  const isSaving = useAppSelector((state) => state.crud.isSaving);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const organismTranslationId = organism.translations[0].id;
    await dispatch(
      editOrganismData({ formData, organismId, organismTranslationId })
    );
    setIsActive(false);
    await dispatch(setAdminOrganism(organismId));
  };

  return (
    <div className={styles.modal}>
      <div className={styles.main}>
        <h1 className={styles.title}>Modifier les informations génerales</h1>
        <form className={styles.list} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.overflow}>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Accès</h4>
              <div className={styles.data_accessDetails}>
                <label className={styles.data_pmr}>
                  <input
                    type="checkbox"
                    defaultChecked={organism.pmr}
                    {...register('pmr')}
                  />
                  Accessible PSH / PMR
                </label>
                <label className={styles.data_pmr}>
                  <input
                    type="checkbox"
                    defaultChecked={organism.animals}
                    {...register('animals')}
                  />
                  Animaux admis
                </label>
              </div>
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Description</h4>
              <textarea
                className={styles.case_textarea}
                defaultValue={organism.translations[0].description}
                {...register('description')}
              />
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>
                Horaires
                <span className={styles.case_legend}>
                  (Formats horaire acceptés: 10h, 10h00, 10:00)
                </span>
              </h4>
              <table className={styles.data_hours}>
                <thead className={styles.data_hoursHead}>
                  <tr>
                    <td>Jours</td>
                    <td colSpan={3}>Matin</td>
                    <td> / </td>
                    <td colSpan={3}>Après-midi</td>
                  </tr>
                </thead>
                <tbody>
                  {organism.schedules.map((day) => (
                    <tr key={day.day} className={styles.data_hoursLine}>
                      <td className={styles.data_hoursDay}>
                        <span>
                          {days.find((d) => d.numberday === day.day)?.name}
                        </span>
                        <input
                          type="hidden"
                          {...register(`schedule_id_${day.day}`, {
                            value: day.id,
                          })}
                        />
                      </td>
                      <td className={styles.data_hoursHour}>
                        <input
                          className={classNames(
                            styles.data_hoursInput,
                            errors[`schedule_openam_${day.day}`] &&
                              styles.data_hoursInput__error
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
                      <td className={styles.data_hoursSeparater}>-</td>
                      <td className={styles.data_hoursTd}>
                        <input
                          className={classNames(
                            styles.data_hoursInput,
                            errors[`schedule_closeam_${day.day}`] &&
                              styles.data_hoursInput__error
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
                      <td className={styles.data_hoursSeparater}>/</td>
                      <td className={styles.data_hoursTd}>
                        <input
                          className={classNames(
                            styles.data_hoursInput,
                            errors[`schedule_openpm_${day.day}`] &&
                              styles.data_hoursInput__error
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
                      <td className={styles.data_hoursSeparater}>-</td>
                      <td className={styles.data_hoursTd}>
                        <input
                          className={classNames(
                            styles.data_hoursInput,
                            errors[`schedule_closepm_${day.day}`] &&
                              styles.data_hoursInput__error
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
            <div className={styles.case}>
              <h4 className={styles.case_title}>Infos, alerte</h4>
              <textarea
                className={styles.case_textarea}
                defaultValue={organism.translations[0].infos_alerte}
                {...register('info_alerte')}
              />
            </div>
          </div>
          <div className={styles.actions}>
            <button
              type="button"
              className={`${styles.actions_close} btn btn-info-fill btn-flat`}
              onClick={() => setIsActive(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className={`${styles.actions_save} btn btn-sucess btn-flat`}
            >
              {isSaving && <span>Sauvegarde en cours...</span>}
              {!isSaving && <span>Sauvegarder</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEditData;
