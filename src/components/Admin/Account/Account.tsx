import { Link } from 'react-router-dom';
import './Account.scss';

function Account() {
  return (
    <div className="account">
      <div className="account-main">
        <h1 className="account-title">Informations du compte</h1>
        <form className="account-list">
          <div className="account-double">
            <div className="account-case">
              <h4 className="account-case__title">Prénom</h4>
              <input
                className="account-case__inputTxt"
                type="text"
                name="firstname"
              />
            </div>
            <div className="account-case">
              <h4 className="account-case__title">Nom</h4>
              <input
                className="account-case__inputTxt"
                type="text"
                name="lastname"
              />
            </div>
          </div>
          <div className="account-double">
            <div className="account-case">
              <h4 className="account-case__title">Adresse email</h4>
              <input
                className="account-case__inputTxt account-contact__mail"
                type="text"
                name="mail"
              />
            </div>
            <div className="account-case">
              <h4 className="account-case__title">Nouveau mot de passe</h4>
              <input
                className="account-case__inputTxt account-contact__mail"
                type="text"
                name="mail"
              />
            </div>
          </div>
          <div className="account-double">
            <div className="account-case">
              <h4 className="account-case__title">Rôle</h4>
              <input
                className="account-case__inputTxt account-contact__mail"
                type="text"
                name="mail"
              />
            </div>
            <div className="account-case">
              <h4 className="account-case__title">Groupe local</h4>
              <input
                className="account-case__inputTxt account-contact__mail"
                type="text"
                name="mail"
              />
            </div>
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
