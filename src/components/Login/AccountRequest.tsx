import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { Inputs } from '../../@types/formInputs';
import { registerUser } from '../../store/reducers/user';
import './Login.scss';
import { useState } from 'react';
import { validateEmail } from '../../utils/form/form';

function AccountRequest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const zones = useAppSelector((state) => state.admin.zones);
  // const message = useAppSelector((state) => state.user.message);
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const response = await dispatch(registerUser(formData));
    switch (response.meta.requestStatus) {
      case 'fulfilled':
        return setConfirmationMessage(`Votre compte a bien été créée, il est en attente de validation.`);
      case 'rejected':
        return setConfirmationMessage(`Une erreur s'est produite lors de la création de votre compte.`);
      default:
        return 'Error'
    }
  };

  if (confirmationMessage) {
    return (<div className="login accountRequestMessage">
    <p>{confirmationMessage}</p></div>);
  }

  return (
    <div className="login accountRequest">
      <h1>Demande de création de compte</h1>
      <form
        className="login-form accountRequest-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset>
          <legend>Prénom</legend>
          <input type="text" placeholder="Prénom" {...register('first_name', {required: "Ce champs est requis"})} />
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
          <input type="text" placeholder="Email" {...register('email', {
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
          <legend>Antenne locale</legend>
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
        </fieldset>
        <p className="accountRequest-form__text">
          La création de compte est réservée aux membres actifs des groupes
          locaux de l’association Watizat
          <br />
          <br />
          Toute demande devra être confirmée par un·e référent·e local
        </p>
        <button type="submit">Confirmer la demande</button>
      </form>

      <div className="login-newAccount">
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
