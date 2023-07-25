import { Link, Navigate } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';
import './Login.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { KeyOfloginCredentials } from '../../@types/user';
import { changeLoginCredentialsField, login } from '../../store/reducers/user';

function Login() {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.user.loginCredentials.email);
  const password = useAppSelector(
    (state) => state.user.loginCredentials.password
  );
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const error = useAppSelector((state) => state.user.error);

  const handleChangeField =
    (field: KeyOfloginCredentials) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        changeLoginCredentialsField({ field, value: event.target.value })
      );
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await dispatch(login({ email, password }));
  };

  if (isLoading) {
    return <div>isLoading...</div>;
  }

  if (isLogged) {
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <div className="login">
      <h1>Login</h1>
      {error && <p className="login-error">{error}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={handleChangeField('email')}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChangeField('password')}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/forgotten-password">Mot de passe oublié</Link>
      <div className="login-newAccount">
        Pas de compte ?
        <Link to="/account-request">
          <br />
          Faire une demande
        </Link>
      </div>
    </div>
  );
}

export default Login;
