import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { Inputs } from '../../@types/formInputs';
import { registerUser } from '../../store/reducers/user';
import './Login.scss';

function AccountRequest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const zones = useAppSelector((state) => state.admin.zones);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    await dispatch(registerUser(formData));
  };

  return (
    <div className="login accountRequest">
      <h1>Demande de création de compte</h1>
      <form
        className="login-form accountRequest-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset>
          <legend>Prénom</legend>
          <input type="text" placeholder="Prénom" {...register('first_name')} />
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
          <input type="text" placeholder="Email" {...register('email')} />
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
