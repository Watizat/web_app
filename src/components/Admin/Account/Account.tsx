import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchRoles, fetchZones } from '../../../store/reducers/admin';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

import './Account.scss';

function Account() {
  const dispatch = useAppDispatch();
  const zones = useAppSelector((state) => state.admin.zones);
  const roles = useAppSelector((state) => state.admin.roles);

  useEffect(() => {
    dispatch(fetchZones());
    dispatch(fetchRoles());
  }, [dispatch]);

  return (
    <div className="account">
      <div className="account-main">
        <h1 className="account-title">Informations du compte</h1>
        <form className="account-list">
          <div className="account-double">
            <fieldset className="account-case">
              <legend>Prénom</legend>
              <input
                className="account-case__inputTxt"
                type="text"
                name="firstname"
                placeholder="Prénom"
              />
            </fieldset>
            <fieldset className="account-case">
              <legend>Nom</legend>
              <input
                className="account-case__inputTxt"
                type="text"
                name="lastname"
                placeholder="Nom"
              />
            </fieldset>
          </div>
          <div className="account-double">
            <fieldset className="account-case">
              <legend>Adresse email</legend>
              <input
                className="account-case__inputTxt account-contact__mail"
                type="text"
                name="mail"
                placeholder="Adresse email"
              />
            </fieldset>
            <fieldset className="account-case">
              <legend>Nouveau mot de passe</legend>
              <input
                className="account-case__inputTxt account-contact__mail"
                type="password"
                name="password"
                placeholder="Mot de passe"
              />
            </fieldset>
          </div>
          <div className="account-double">
            <fieldset className="account-case">
              <select defaultValue="">
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
              <legend>Rôle</legend>
            </fieldset>
            <fieldset className="account-case">
              <select defaultValue="">
                {zones.map((zone) => (
                  <option key={zone.id} value={zone.id}>
                    {zone.name}
                  </option>
                ))}
              </select>
              <legend className="legend-isactive">Antenne local</legend>
            </fieldset>
          </div>
          <div className="modal-actions">
            <Link to="/admin">
              <button
                type="button"
                className="btn btn-info-fill btn-flat modal-actions__close"
              >
                Retour
              </button>
            </Link>
            <button
              type="submit"
              className="btn btn-sucess-fill btn-flat modal-actions__save"
            >
              Sauvegarder les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
