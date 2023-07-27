import { Link } from 'react-router-dom';
import './Login.scss';
import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  askPassword,
  changeLoginCredentialsField,
} from '../../store/reducers/user';

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
    <div className="login">
      <h1>Mot de passé oublié</h1>
      {message && <p className="login-succes">{message}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="Email"
        />
        <button type="submit">Demander la réinitialisation</button>
      </form>
      <div className="login-newAccount">
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
