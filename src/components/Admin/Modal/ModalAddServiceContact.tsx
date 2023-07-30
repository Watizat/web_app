import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { Service } from '../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { addServiceContact } from '../../../store/reducers/crud';
import { validateEmail } from '../../../utils/form/form';
import './Modal.scss';

interface ModalProps {
  service: Service;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalAddServiceContact({ service, setIsActive }: ModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const organismId = useAppSelector(
    (state) => state.admin.organism?.id as number
  );
  const isSaving = useAppSelector((state) => state.crud.isSaving);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    await dispatch(addServiceContact(formData));
    setIsActive(false);
    await dispatch(setAdminOrganism(organismId));
  };

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Ajouter un contact</h1>
        <form className="modal-list" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            defaultValue={service.id}
            hidden
            {...register('service')}
          />
          <div className="modal-case">
            <h4 className="modal-case__title">Nom du contact</h4>
            <input
              className="modal-case__inputTxt"
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
                type="text"
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
                <select {...register('role', { required: true })}>
                  <option value="false">Privé</option>
                  <option value="true">Public</option>
                </select>
              </label>
              <label className="modal-contact__actu">
                Contact pour actualisation
                <select {...register('actualisation', { required: true })}>
                  <option value="false">Non</option>
                  <option value="true">Oui</option>
                </select>
              </label>
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

export default ModalAddServiceContact;
