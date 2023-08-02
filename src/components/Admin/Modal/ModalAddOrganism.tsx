import classNames from 'classnames';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  fetchAdminOrganisms,
  setAdminOrganism,
} from '../../../store/reducers/admin';
import { addOrganism } from '../../../store/reducers/crud';
import { validateScheduleFormat } from '../../../utils/form/form';
import './Modal.scss';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalAddOrganism({ setIsActive }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [select, setSelect] = useState(localStorage.getItem('city') || '');

  const dispatch = useAppDispatch();
  const isSaving = useAppSelector((state) => state.crud.isSaving);
  const zones = useAppSelector((state) => state.admin.zones);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('city', event.target.value);
    setSelect(event.target.value);
  };

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const { payload: id } = await dispatch(addOrganism(formData));
    await dispatch(setAdminOrganism(id));
    setIsActive(false);
    await dispatch(fetchAdminOrganisms());
  };

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Créer un organisme</h1>
        <form className="modal-list" onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-double modal-start">
            <h4 className="modal-case__title">Choisir l'antenne locale</h4>
            <fieldset className="modal-contact__actu">
              <select
                value={select}
                {...register('zone_id', { required: 'Ce champ est requis' })}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Selectionner une ville
                </option>
                {zones.map((zone) => (
                  <option key={zone.id} value={zone.id}>
                    {zone.name}
                  </option>
                ))}
              </select>
              <legend>Antenne locale</legend>
            </fieldset>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Nom de l&apos;organisme</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              {...register('name', { required: 'Ce champs est requis' })}
            />
            {errors.name && <small>{errors.name.message}</small>}
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Adresse</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              {...register('address', { required: 'Ce champs est requis' })}
            />
            {errors.address && <small>{errors.address.message}</small>}
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Ville</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              {...register('city', { required: 'Ce champs est requis' })}
            />
            {errors.city && <small>{errors.city.message}</small>}
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Code postal</h4>
            <input
              className="modal-case__inputTxt"
              type="number"
              {...register('zipcode', { required: 'Ce champs est requis' })}
            />
            {errors.zipcode && <small>{errors.zipcode.message}</small>}
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Telephone</h4>
            <input
              className="modal-case__inputTxt"
              type="number"
              {...register('phone', {
                minLength: {
                  value: 10,
                  message:
                    'Le numéro de téléphone doit comporter au moins 10 chiffres.',
                },
                maxLength: {
                  value: 10,
                  message:
                    'Le numéro de téléphone ne peut pas comporter plus de 10 chiffres.',
                },
              })}
            />
            {errors.phone && <small>{errors.phone.message}</small>}
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Site web</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              {...register('website')}
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Accès</h4>
            <div className="modal-data__accessDetails">
              <label className="modal-data__pmr">
                <input type="checkbox" {...register('pmr')} />
                Accessible PSH / PMR
              </label>
              <label className="modal-data__pmr">
                <input type="checkbox" {...register('animals')} />
                Animaux admis
              </label>
            </div>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Description</h4>
            <textarea
              className="modal-case__textarea"
              {...register('description')}
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">
              Horaires
              <span>
                {' '}
                (Formats d&apos;horaires acceptés: 10h, 10h00, 10:00)
              </span>
            </h4>
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
                      <input
                        type="hidden"
                        {...register(
                          `schedule_id_${index + 1}`
                          // , { value: '',}
                        )}
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
        </form>
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
      </div>
    </div>
  );
}

export default ModalAddOrganism;
