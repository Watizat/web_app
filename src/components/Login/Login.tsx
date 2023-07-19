import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import './Login.scss';

function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form className="login-form">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button">Login</button>
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
