import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { addOrganismContact } from '../../../store/reducers/crud';
import { validateEmail } from '../../../utils/form/form';

import styles from './Modal.module.scss';

interface ModalProps {
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalAddContact({ setIsModalActive }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const dispatch = useAppDispatch();
  const organismId = useAppSelector(
    (state) => state.admin.organism?.id as number
  );
  const isSaving = useAppSelector((state) => state.crud.isSaving);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const response = await dispatch(addOrganismContact(formData));
    if (response.meta.requestStatus === 'fulfilled') {
      setIsModalActive(false);
      await dispatch(setAdminOrganism(organismId));
    } else {
      setErrorMessage(
        'Une erreur est survenue lors de la création du contact.'
      );
    }
  };

  return (
    <div className="absolute top-0 left-0 z-[100] flex items-center content-center justify-center w-screen h-screen bg-gray-950/75">
      <div className="w-4/6 bg-white 2xl:w-2/6 max-h-2/6 rounded-xl">
        <h1 className="pt-8 pb-2 pl-16 text-2xl font-medium text-left text-slate-700">
          Ajouter un contact
        </h1>
        {errorMessage && <span>{errorMessage}</span>}
        <form
          className="relative flex flex-col gap-y-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-6 px-16 pt-4 overflow-y-scroll max-h-50">
            <input
              type="number"
              defaultValue={organismId}
              hidden
              {...register('organisme')}
            />
            <div className={styles.case}>
              <h4 className={styles.case_title}>Nom du contact</h4>
              <input
                className={
                  errors.name
                    ? `${styles.case_inputTxt} error`
                    : styles.case_inputTxt
                }
                type="text"
                {...register('name', { required: 'Ce champs est requis' })}
              />
              {errors.name && (
                <small className="text-red-600">{errors.name.message}</small>
              )}
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Commentaire </h4>
              <input
                className={styles.case_inputTxt}
                type="text"
                {...register('comment')}
              />
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Fonction</h4>
              <input
                className={styles.case_inputTxt}
                type="text"
                {...register('job')}
              />
            </div>
            <div className={styles.contact_modes}>
              <div className={styles.case}>
                <h4 className={styles.case_title}>Adresse email</h4>
                <input
                  className={`${styles.case_inputTxt} ${styles.contact_mail}`}
                  type="email"
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
                {errors.phone?.message && (
                  <small className="text-red-600">{errors.phone.message}</small>
                )}
              </div>
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Rôles</h4>
              <div className={styles.contact_roles}>
                <label className={styles.contact_private}>
                  <fieldset>
                    <select {...register('visibility', { required: true })}>
                      <option value="false">Privé</option>
                      <option value="true">Public</option>
                    </select>
                    <legend>Publicité du contact</legend>
                  </fieldset>
                </label>
                <label className={styles.contact_actu}>
                  <fieldset>
                    <select {...register('actualisation', { required: true })}>
                      <option value="false">Non</option>
                      <option value="true">Oui</option>
                    </select>
                    <legend>Contact pour actualisation</legend>
                  </fieldset>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-12 px-16 py-4 bg-gray-50 rounded-b-xl">
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold bg-white rounded-md shadow-sm text-teal-700/75 ring-1 ring-inset ring-teal-700/50 hover:bg-gray-50"
              onClick={() => setIsModalActive(false)}
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

export default ModalAddContact;
