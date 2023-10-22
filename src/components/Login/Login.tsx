import { ChangeEvent, FormEvent } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, Navigate } from 'react-router-dom';
import { KeyOfloginCredentials } from '../../@types/user';
import logo from '../../assets/logo.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeLoginCredentialsField, login } from '../../store/reducers/user';
import { getUserDataFromLocalStorage } from '../../utils/user';
import styles from './Login.module.scss';

function Login() {
  const isTablet = useMediaQuery({ query: '(min-width: 769px)' });
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.user.loginCredentials.email);
  const password = useAppSelector(
    (state) => state.user.loginCredentials.password
  );
  const user = getUserDataFromLocalStorage();
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

  if (user) {
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <>
      {isTablet && (
        <div className={styles.login}>
          <h1>Login</h1>
          {error && <p className={styles.error}>{error}</p>}
          <form className={styles.login_form} onSubmit={handleSubmit}>
            <fieldset>
              <legend>Email</legend>
              <input
                type="email"
                placeholder="Email"
                onChange={handleChangeField('email')}
                value={email}
              />
            </fieldset>

            <fieldset>
              <legend>Mot de passe</legend>
              <input
                type="password"
                placeholder="Mot de passe"
                onChange={handleChangeField('password')}
                value={password}
              />
            </fieldset>
            <button
              className="btn btn-flat btn-primary btn-slowRounded "
              type="submit"
            >
              Login
            </button>
          </form>
          <div className={styles.login_links}>
            <Link to="/forgotten-password">Mot de passe oublié</Link>
            <div className={styles.login_newAccount}>
              Pas de compte ?
              <Link to="/account-request">
                <br />
                Faire une demande
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className={styles.mobileOut}>
        <Link className={styles.mobileOut_logo} to="/">
          <img src={logo} alt="watizat logo" />
        </Link>
        <p>
          Cet espace n&apos;est pas adapté pour une consultation depuis un
          terminal de type smartphone
          <br />
          <br /> Merci de bien vouloir le consulter à nouveau depuis une
          tablette ou ordinateur
          <br />
          <br /> Promis, ceci n&apos;est pas un caprice de dévellopeur.se 🤪
        </p>
        <Link className={styles.mobileOut_returnToHome} to="/">
          <p>Retourner vers la page d&apos;accueil</p>
        </Link>
      </div>
    </>
  );
}

export default Login;
