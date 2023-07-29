import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { Contact } from '../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { axiosInstance } from '../../../utils/axios';
import { validateEmail } from '../../../utils/form/form';
import './Modal.scss';
import ModalDeleteConfirmation from './ModalDeleteContactConfirmation';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  contact: Contact;
}

function ModalEditContact({ contact, setIsActive }: ModalProps) {
  const [isActiveConfirmation, setIsActiveConfirmation] = useState(false);
  const id = useAppSelector((state) => state.admin.organism?.id as number);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await axiosInstance.patch(`/items/contact/${contact.id}`, {
        ...data,
      });
      dispatch(setAdminOrganism(id));
      setIsActive(false);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  if (isActiveConfirmation) {
    return (
      <ModalDeleteConfirmation
        id={contact.id}
        setIsActiveConfirmation={setIsActiveConfirmation}
        setIsActive={setIsActive}
      />
    );
  }

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Modifier un contact</h1>
        <form className="modal-list" onSubmit={handleSubmit(onSubmit)}>
          <div className="modal-case">
            <h4 className="modal-case__title">Nom du contact</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              {...register('name', { required: 'Ce champs est requis' })}
              defaultValue={contact.name}
            />
            {errors.name && <small>{errors.name.message}</small>}
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Commentaire </h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              {...register('comment')}
              defaultValue={contact.comment}
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Fonction</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={contact.job}
              {...register('job')}
            />
          </div>
          <div className="modal-contact__modes">
            <div className="modal-case">
              <h4 className="modal-case__title">Adresse email</h4>
              <input
                className="modal-case__inputTxt modal-contact__mail"
                type="text"
                defaultValue={contact.mail}
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
                type="number"
                defaultValue={contact.phone}
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
                Publicité du contact
                <select
                  {...register('visibility', { required: true })}
                  defaultValue={`${contact.visibility}`}
                >
                  <option value="false">Privé</option>
                  <option value="true">Public</option>
                </select>
              </label>
              <label className="modal-contact__actu">
                Contact pour actualisation
                <select
                  {...register('actualisation', { required: true })}
                  defaultValue={`${contact.actualisation}`}
                >
                  <option value="false">Non</option>
                  <option value="true">Oui</option>
                </select>
              </label>
            </div>
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
              Sauvegarder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEditContact;
