import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Inputs } from '../../@types/formInputs';
import { registerUser } from '../../store/reducers/user';
import { validateEmail } from '../../utils/form/form';
import styles from './Login.module.scss';

function AccountRequest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const zones = useAppSelector((state) => state.admin.zones);
  // const message = useAppSelector((state) => state.user.message);
  const [confirmationMessage, setConfirmationMessage] = useState<
    string | null
  >();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const response = await dispatch(registerUser(formData));
    switch (response.meta.requestStatus) {
      case 'fulfilled':
        return setConfirmationMessage(
          `Votre compte a bien été créé, il est en attente de validation.`
        );
      case 'rejected':
        return setConfirmationMessage(
          `Une erreur s'est produite lors de la création de votre compte.`
        );
      default:
        return 'Error';
    }
  };

  if (confirmationMessage) {
    return (
      <div className={`${styles.login} ${styles.accountRequestMessage}`}>
        <p>{confirmationMessage}</p>
        <Link to="/">
          <button
            className="btn btn-flat btn-primary btn-slowRounded "
            type="button"
          >
            <i className="las la-arrow-left" />
            Retourner vers la recherche
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className={`${styles.login} ${styles.accountRequest}`}>
      <h1>Demande de création de compte</h1>
      <form
        className={`${styles.login_form} ${styles.accountRequest_form}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset>
          <legend>Prénom</legend>
          <input
            type="text"
            placeholder="Prénom"
            {...register('first_name', { required: 'Ce champs est requis' })}
          />
          {errors.first_name && <small>{errors.first_name.message}</small>}
        </fieldset>
        <fieldset>
          <legend>Nom de famille</legend>
          <input
            type="text"
            placeholder="Nom de famille"
            {...register('last_name')}
          />
        </fieldset>
        <fieldset>
          <legend>Adresse email</legend>
          <input
            type="email"
            placeholder="Email"
            {...register('email', {
              validate: validateEmail,
            })}
          />
          {errors.mail?.message && <small>{errors.mail.message}</small>}
        </fieldset>
        <fieldset>
          <legend>Mot de passe</legend>
          <input
            type="password"
            placeholder="Mot de passe"
            {...register('password')}
          />
        </fieldset>
        <fieldset>
          <select {...register('zone')}>
            <option value="" disabled>
              Groupe local
            </option>

            {zones.map((zone) => (
              <option key={zone.id} value={zone.id}>
                {zone.name}
              </option>
            ))}
          </select>
          <legend>Antenne locale</legend>
        </fieldset>
        <p className={styles.accountRequest_form__text}>
          La création de compte est réservée aux membres actifs des groupes
          locaux de l’association Watizat
          <br />
          <br />
          Toute demande devra être confirmée par un·e référent·e local
        </p>
        <button
          className="btn btn-flat btn-primary btn-slowRounded "
          type="submit"
        >
          Confirmer la demande
        </button>
      </form>

      <div className={styles.login_newAccount}>
        Déja un compte ?
        <Link to="/login">
          <br />
          Se connecter
        </Link>
      </div>
    </div>
  );
}

export default AccountRequest;
