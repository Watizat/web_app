import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { addService } from '../../../store/reducers/crud';
import { validateScheduleFormat } from '../../../utils/form/form';
import './Modal.scss';

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
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Ajouter un service</h1>
        <form className="modal-list" onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-overflow">
            <input
              type="number"
              defaultValue={organismId}
              hidden
              {...register('organisme_id')}
            />
            <div className="modal-double modal-start">
              <h4 className="modal-case__title">Catégorie du service</h4>

              <fieldset className="modal-contact__actu">
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
            <div className="modal-case">
              <h4 className="modal-case__title">Nom du service</h4>
              <input
                className="modal-case__inputTxt"
                type="text"
                {...register('name', { required: 'Ce champs est requis' })}
              />
              {errors.name && <small>{errors.name.message}</small>}
            </div>
            <div className="modal-case">
              <h4 className="modal-case__title">Type de service·s proposé·s</h4>
              <textarea
                className="modal-case__textarea"
                {...register('description')}
              />
            </div>
            <div className="modal-case">
              <h4 className="modal-case__title">
                Horaires
                <span className="modal-case__legend">
                  (formats horaire acceptés: 10h, 10h00, 10:00)
                </span>
              </h4>

              <table className="modal-data__hours">
                <thead className="modal-data__hoursHead">
                  <tr>
                    <td>Jours</td>
                    <td colSpan={3}>Matin</td>
                    <td> / </td>
                    <td colSpan={3}>Aprés-midi</td>
                  </tr>
                </thead>
                <tbody>
                  {days.map((i, index) => (
                    <tr key={i.name} className="modal-data__hoursLine">
                      <td className="modal-data__hoursDay">
                        <span>{i.name}</span>
                        <input
                          type="hidden"
                          {...register(`schedule_id_${index + 1}`)}
                        />
                      </td>
                      <td className="modal-data__hoursHour">
                        <input
                          className={classNames(
                            'modal-data__hoursInput',
                            errors[`schedule_openam_${index + 1}`] &&
                              'modal-data__hoursInput--error'
                          )}
                          {...register(`schedule_openam_${index + 1}`, {
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
                            errors[`schedule_closeam_${index + 1}`] &&
                              'modal-data__hoursInput--error'
                          )}
                          {...register(`schedule_closeam_${index + 1}`, {
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
                            errors[`schedule_openpm_${index + 1}`] &&
                              'modal-data__hoursInput--error'
                          )}
                          {...register(`schedule_openpm_${index + 1}`, {
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
                            errors[`schedule_closepm_${index + 1}`] &&
                              'modal-data__hoursInput--error'
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
            <div className="modal-case">
              <h4 className="modal-case__title">Infos & alertes</h4>
              <textarea
                className="modal-case__textarea"
                {...register('infos_alerte')}
              />
            </div>
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
