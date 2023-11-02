import classNames from 'classnames';
import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../@types/formInputs';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  fetchAdminOrganisms,
  setAdminOrganism,
} from '../../store/reducers/admin';
import { addOrganism } from '../../store/reducers/crud';
import { validateEmail, validateScheduleFormat } from '../../utils/form/form';

import styles from './Modal.module.scss';

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
  const days = useAppSelector((state) => state.organism.days);
  const city = useAppSelector((state) => state.user.city as string);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('city', event.target.value);
    setSelect(event.target.value);
  };

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const { payload: id } = await dispatch(addOrganism(formData));
    await dispatch(setAdminOrganism(id));
    setIsActive(false);
    await dispatch(fetchAdminOrganisms(city));
  };

  return (
    <div className="absolute top-0 left-0 z-[100] flex items-center content-center justify-center w-screen h-screen bg-gray-950/75">
      <div className="w-4/6 bg-white 2xl:w-2/6 max-h-2/6 rounded-xl">
        <h1 className="pt-8 pb-2 pl-16 text-2xl font-medium text-left text-slate-700">
          Créer un organisme
        </h1>
        <form
          className="relative flex flex-col gap-y-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-6 px-16 pt-4 overflow-y-scroll max-h-50">
            <div className={`${styles.double} ${styles.start}`}>
              <h4 className={styles.case_title}>
                Choisir l&apos;antenne locale
              </h4>
              <fieldset className={styles.contact_actu}>
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
            <div className={styles.case}>
              <h4 className={styles.case_title}>Nom de l&apos;organisme</h4>
              <input
                className={styles.case_inputTxt}
                type="text"
                placeholder="ex : Pôle infos services"
                {...register('name', { required: 'Ce champs est requis' })}
              />
              {errors.name && (
                <small className="text-red-600">{errors.name.message}</small>
              )}
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Adresse</h4>
              <input
                className={styles.case_inputTxt}
                type="text"
                placeholder="ex : 1 rue des champs"
                {...register('address', { required: 'Ce champs est requis' })}
              />
              {errors.address && (
                <small className="text-red-600">{errors.address.message}</small>
              )}
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Ville</h4>
              <input
                className={styles.case_inputTxt}
                type="text"
                placeholder="ex : Bangui"
                {...register('city', { required: 'Ce champs est requis' })}
              />
              {errors.city && (
                <small className="text-red-600">{errors.city.message}</small>
              )}
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Code postal</h4>
              <input
                className={styles.case_inputTxt}
                type="number"
                placeholder="ex: 31100 (sans espace)"
                {...register('zipcode', { required: 'Ce champs est requis' })}
              />
              {errors.zipcode && (
                <small className="text-red-600">{errors.zipcode.message}</small>
              )}
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Adresse email</h4>
              <input
                className={styles.case_inputTxt}
                type="email"
                placeholder="ex: secretariat@gmail.com"
                {...register('mail', {
                  validate: validateEmail,
                })}
              />
              {errors.mail?.message && (
                <small className="text-red-600">{errors.mail.message}</small>
              )}
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Telephone</h4>
              <input
                className={styles.case_inputTxt}
                type="tel"
                placeholder="ex: 0645784598 (sans espace)"
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
              {errors.phone && (
                <small className="text-red-600">{errors.phone.message}</small>
              )}
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Site web</h4>
              <input
                className={styles.case_inputTxt}
                type="text"
                placeholder="ex : www.poleinfos.fr"
                {...register('website')}
              />
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Accès</h4>
              <div className={styles.data_accessDetails}>
                <label className={styles.data_pmr}>
                  <input type="checkbox" {...register('pmr')} />
                  Accessible PSH / PMR
                </label>
                <label className={styles.data_pmr}>
                  <input type="checkbox" {...register('animals')} />
                  Animaux admis
                </label>
              </div>
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Description</h4>
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
              <textarea className="btn close2" {...register('infos_alerte')} />
            </div>
          </div>
          <div className="flex justify-end gap-12 px-16 py-4 bg-gray-50 rounded-b-xl">
            <button
              type="button"
              className="btn  btn-flat btn-close2"
              onClick={() => setIsActive(false)}
            >
              Annuler
            </button>
            <button type="submit" className="btn btn-flat btn-save1">
              {isSaving && <span>Sauvegarde en cours...</span>}
              {!isSaving && <span>Sauvegarder</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAddOrganism;
