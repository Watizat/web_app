import './Modal.scss';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  name?: string;
  job?: string;
  mail?: string;
  phone?: string;
  visibility?: string;
  actualisation?: boolean;
}

function ModalContact({
  setIsActive,
  name,
  job,
  mail,
  phone,
  visibility,
  actualisation,
}: ModalProps) {
  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Ajouter un contact</h1>
        <form className="modal-list">
          <div className="modal-case">
            <h4 className="modal-case__title">Nom</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={name}
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Fonction</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={job}
            />
          </div>
          <div className="modal-contact__modes">
            <div className="modal-case">
              <h4 className="modal-case__title">Adresse email</h4>
              <input
                className="modal-case__inputTxt modal-contact__mail"
                type="text"
                defaultValue={mail}
              />
            </div>
            <div className="modal-case">
              <h4 className="modal-case__title">Telephone</h4>
              <input
                className="modal-case__inputTxt"
                type="number"
                defaultValue={phone}
              />
            </div>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Rôles</h4>
            <div className=" modal-contact__roles">
              <label className="modal-contact__private">
                Publicité du contact
                <select name="role" defaultValue={visibility}>
                  <option value="private">Privé</option>
                  <option value="public">Public</option>
                </select>
              </label>
              <label className="modal-contact__actu">
                Contact pour actualisation
                <select name="actualisation" defaultValue={`${actualisation}`}>
                  <option value="false">Non</option>
                  <option value="true">Oui</option>
                </select>
              </label>
            </div>
          </div>
        </form>
        <div className="modal-actions">
          <button
            type="button"
            className="btn btn-danger btn-flat modal-actions__close"
          >
            Supprimer
          </button>
          <button
            type="button"
            className="btn btn-warning btn-flat modal-actions__close"
            onClick={() => setIsActive(false)}
          >
            Annuler
          </button>
          <button
            type="button"
            className="btn btn-sucess btn-flat modal-actions__save"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
}
ModalContact.defaultProps = {
  name: '',
  job: '',
  mail: '',
  phone: '',
  visibility: 'private',
  actualisation: false,
};
export default ModalContact;
