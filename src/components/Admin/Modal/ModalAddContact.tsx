import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { addOrganismContact } from '../../../store/reducers/crud';
import { validateEmail } from '../../../utils/form/form';
import './Modal.scss';

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
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Ajouter un contact</h1>
        {errorMessage && <span>{errorMessage}</span>}
        <form className="modal-list" onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-overflow">
            <input
              type="number"
              defaultValue={organismId}
              hidden
              {...register('organisme')}
            />
            <div className="modal-case">
              <h4 className="modal-case__title">Nom du contact</h4>
              <input
                className={
                  errors.name
                    ? 'modal-case__inputTxt error'
                    : 'modal-case__inputTxt'
                }
                type="text"
                {...register('name', { required: 'Ce champs est requis' })}
              />
              {errors.name && <small>{errors.name.message}</small>}
            </div>
            <div className="modal-case">
              <h4 className="modal-case__title">Commentaire </h4>
              <input
                className="modal-case__inputTxt"
                type="text"
                {...register('comment')}
              />
            </div>
            <div className="modal-case">
              <h4 className="modal-case__title">Fonction</h4>
              <input
                className="modal-case__inputTxt"
                type="text"
                {...register('job')}
              />
            </div>
            <div className="modal-contact__modes">
              <div className="modal-case">
                <h4 className="modal-case__title">Adresse email</h4>
                <input
                  className="modal-case__inputTxt modal-contact__mail"
                  type="email"
                  {...register('mail', {
                    validate: validateEmail,
                  })}
                />
                {errors.mail?.message && <small>{errors.mail.message}</small>}
              </div>
              <div className="modal-case">
                <h4 className="modal-case__title">Telephone</h4>
                <input
                  className="modal-case__inputTxt"
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
                {errors.phone?.message && <small>{errors.phone.message}</small>}
              </div>
            </div>
            <div className="modal-case">
              <h4 className="modal-case__title">Rôles</h4>
              <div className=" modal-contact__roles">
                <label className="modal-contact__private">
                  <fieldset>
                    <select {...register('visibility', { required: true })}>
                      <option value="false">Privé</option>
                      <option value="true">Public</option>
                    </select>
                    <legend>Publicité du contact</legend>
                  </fieldset>
                </label>
                <label className="modal-contact__actu">
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
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-info-fill btn-flat modal-actions__close"
              onClick={() => setIsModalActive(false)}
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

export default ModalAddContact;
