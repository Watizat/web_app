import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

import './Login.scss';

function AccountRequest() {
  const zones = useAppSelector((state) => state.admin.zones);

  return (
    <div className="login accountRequest">
      <h1>Demande de création de compte</h1>
      <form className="login-form accountRequest-form">
        <input type="text" placeholder="Prénom" />
        <input type="text" placeholder="Nom de famille" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Mot de passe" />
        <select>
          <option value="" disabled>
            Groupe local
          </option>

          {zones.map((zone) => (
            <option key={zone.id} value={zone.name}>
              {zone.name}
            </option>
          ))}
        </select>
        <p className="accountRequest-form__text">
          La création de compte est réservée aux membres actifs des groupes
          locaux de l’association Watizat
          <br />
          <br />
          Toute demande devra être confirmée par un·e référent·e local
        </p>
        <button type="button">Confirmer la demande</button>
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
