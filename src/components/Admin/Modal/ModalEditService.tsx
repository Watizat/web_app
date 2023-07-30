import classNames from 'classnames';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { Service } from '../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { editService } from '../../../store/reducers/crud';
import { validateScheduleFormat } from '../../../utils/form/form';
import './Modal.scss';
import ModalDeleteServiceConfirmation from './ModalDeleteServiceConfirmation';

interface ServiceModalProps {
  service: Service;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalEditService({ service, setIsActive }: ServiceModalProps) {
  const [isActiveConfirmation, setIsActiveConfirmation] = useState(false);

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

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const serviceId = service.id;
    const serviceTranslationId = service.translations[0].id;
    await dispatch(editService({ formData, serviceId, serviceTranslationId }));

    setIsActive(false);
    await dispatch(setAdminOrganism(organismId));
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
        <form className="modal-list" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            hidden
            defaultValue={organismId}
            {...register('organisme_id')}
          />
          <div className="modal-case">
            <h4 className="modal-case__title">Catégorie</h4>
            <label className="modal-contact__actu">
              Catégorie du service
              <select
                {...register('categorie_id')}
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
              {...register('name', { required: 'Ce champs est requis' })}
            />
            {errors.name && <small>{errors.name.message}</small>}
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Type de service·s proposé·s</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={service.translations[0].description}
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
                        {...register(`schedule_id_${index + 1}`, {
                          value: day.id,
                        })}
                      />
                    </td>
                    <td className="modal-data__hoursHour">
                      <input
                        defaultValue={day.opentime_am
                          ?.slice(0, -3)
                          .replace(':', 'h')}
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
                        defaultValue={day.closetime_am
                          ?.slice(0, -3)
                          .replace(':', 'h')}
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
                        defaultValue={day.opentime_pm
                          ?.slice(0, -3)
                          .replace(':', 'h')}
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
                        defaultValue={day.closetime_pm
                          ?.slice(0, -3)
                          .replace(':', 'h')}
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
            <h4 className="modal-case__title">Info s & alertes</h4>
            <textarea
              className="modal-case__textarea"
              defaultValue={service.translations[0].infos_alerte}
              {...register('infos_alerte')}
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
              {isSaving && <span>Sauvegarde en cours...</span>}
              {!isSaving && <span>Sauvegarder</span>}{' '}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEditService;
