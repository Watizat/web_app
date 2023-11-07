import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../@types/formInputs';
import { Organism } from '../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setAdminOrganism } from '../../store/reducers/admin';
import { editOrganismData } from '../../store/reducers/crud';
import { validateScheduleFormat } from '../../utils/form/form';

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
    <div className="absolute top-0 left-0 z-[100] flex items-center content-center justify-center w-screen h-screen bg-gray-950/75">
      <div className="w-4/6 bg-white 2xl:w-2/6 max-h-2/6 rounded-xl">
        <h1 className="pt-8 pb-2 pl-16 text-2xl font-medium text-left text-slate-700">
          Modifier les informations génerales
        </h1>
        <form
          className="relative flex flex-col gap-y-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-6 px-16 pt-4 overflow-y-scroll max-h-50">
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
          <div className="flex justify-end gap-12 px-16 py-4 bg-gray-50 rounded-b-xl">
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold bg-white rounded-md shadow-sm text-teal-700/75 ring-1 ring-inset ring-teal-700/50 hover:bg-gray-50"
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
