import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  askPassword,
  changeLoginCredentialsField,
} from '../../store/reducers/user';
import styles from './Login.module.scss';

function ForgottenPassword() {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.user.loginCredentials.email);
  const message = useAppSelector((state) => state.user.message);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeLoginCredentialsField({ field: 'email', value: event.target.value })
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(askPassword(email));
  };

  return (
    <div className={styles.login}>
      <h1>Mot de passé oublié</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className={styles.login_form}>
        <fieldset>
          <legend>Email</legend>
          <input
            type="email"
            onChange={handleChange}
            value={email}
            placeholder="Email"
          />
        </fieldset>
        <button
          className="btn btn-flat btn-primary btn-slowRounded "
          type="submit"
        >
          Demander la réinitialisation
        </button>
      </form>
      <div className={styles.login_newAccount}>
        Pas encore de compte ?
        <Link to="/account-request">
          <br />
          Faire une demande
        </Link>
      </div>
    </div>
  );
}

export default ForgottenPassword;
