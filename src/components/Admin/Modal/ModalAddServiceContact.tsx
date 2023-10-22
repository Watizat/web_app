import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../../@types/formInputs';
import { Service } from '../../../@types/organism';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setAdminOrganism } from '../../../store/reducers/admin';
import { addServiceContact } from '../../../store/reducers/crud';
import { validateEmail } from '../../../utils/form/form';

import styles from './Modal.module.scss';

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
    <div className={styles.modal}>
      <div className={styles.main}>
        <h1 className={styles.title}>Ajouter un contact</h1>
        <form className={styles.list} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.overflow}>
            <input
              type="number"
              defaultValue={service.id}
              hidden
              {...register('service')}
            />
            <div className={styles.case}>
              <h4 className={styles.case_title}>Nom du contact</h4>
              <input
                className={styles.case_inputTxt}
                type="text"
                {...register('name', { required: 'Ce champs est requis' })}
              />
              {errors.name && <small>{errors.name.message}</small>}
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
                {errors.mail?.message && <small>{errors.mail.message}</small>}
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
                {errors.phone?.message && <small>{errors.phone.message}</small>}
              </div>
            </div>
            <div className={styles.case}>
              <h4 className={styles.case_title}>Rôles</h4>
              <div className={styles.contact__roles}>
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
          <div className={styles.actions}>
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
