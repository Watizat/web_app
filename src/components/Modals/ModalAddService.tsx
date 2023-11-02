import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../@types/formInputs';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setAdminOrganism } from '../../store/reducers/admin';
import { addService } from '../../store/reducers/crud';
import { validateScheduleFormat } from '../../utils/form/form';

import styles from './Modal.module.scss';

interface ServiceModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalAddService({ setIsActive }: ServiceModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const categoriesList = useAppSelector((state) => state.organism.categories);
  const organismId = useAppSelector(
    (state) => state.admin.organism?.id as number
  );
  const isSaving = useAppSelector((state) => state.crud.isSaving);
  const days = useAppSelector((state) => state.organism.days);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    await dispatch(addService(formData));
    setIsActive(false);
    await dispatch(setAdminOrganism(organismId));
  };

  return (
    <div className="absolute top-0 left-0 z-[100] flex items-center content-center justify-center w-screen h-screen bg-gray-950/75">
      <div className="w-4/6 bg-white 2xl:w-2/6 max-h-2/6 rounded-xl">
        <h1 className="pt-8 pb-2 pl-16 text-2xl font-medium text-left text-slate-700">
          Ajouter un service
        </h1>
        <form
          className="relative flex flex-col gap-y-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-6 px-16 pt-4 overflow-y-scroll max-h-50">
            <input
              type="number"
              defaultValue={organismId}
              hidden
              {...register('organisme_id')}
            />
            <div className={`${styles.double} ${styles.start}`}>
              <h4 className={styles.case_title}>Catégorie du service</h4>

              <fieldset className={styles.contact_actu}>
                <select {...register('categorie_id')}>
                  {categoriesList.map((category) => (
                    <option
                      key={category.translations[0].name}
                      value={category.id}
                    >
                      {category.translations[0].name}
                    </option>
                  ))}
                </select>
                <legend>Catégorie</legend>
              </fieldset>
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Nom du service</h4>
              <input
                className={styles.case_inputTxt}
                type="text"
                {...register('name', { required: 'Ce champs est requis' })}
              />
              {errors.name && (
                <small className="text-red-600">{errors.name.message}</small>
              )}
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Type de service·s proposé·s</h4>
              <textarea
                className={styles.case_textarea}
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
                    <td colSpan={3}>Aprés-midi</td>
                  </tr>
                </thead>
                <tbody>
                  {days.map((i, index) => (
                    <tr key={i.name} className={styles.data_hoursLine}>
                      <td className={styles.data_hoursDay}>
                        <span>{i.name}</span>
                        <input
                          type="hidden"
                          {...register(`schedule_id_${index + 1}`)}
                        />
                      </td>
                      <td className={styles.data_hoursHour}>
                        <input
                          className={classNames(
                            styles.data_hoursInput,
                            errors[`schedule_openam_${index + 1}`] &&
                              styles.data_hoursInput__error
                          )}
                          {...register(`schedule_openam_${index + 1}`, {
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
                            errors[`schedule_closeam_${index + 1}`] &&
                              styles.data_hoursInput__error
                          )}
                          {...register(`schedule_closeam_${index + 1}`, {
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
                            errors[`schedule_openpm_${index + 1}`] &&
                              styles.data_hoursInput__error
                          )}
                          {...register(`schedule_openpm_${index + 1}`, {
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
                            errors[`schedule_closepm_${index + 1}`] &&
                              styles.data_hoursInput__error
                          )}
                          {...register(`schedule_closepm_${index + 1}`, {
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
              <h4 className={styles.case_title}>Infos & alertes</h4>
              <textarea
                className={styles.case_textarea}
                {...register('infos_alerte')}
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

export default ModalAddService;
