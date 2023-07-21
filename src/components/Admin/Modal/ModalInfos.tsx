import './Modal.scss';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  name?: string;
  address?: string;
  city?: string;
  zipcode?: number;
  website?: string;
}

function ModalInfos({
  setIsActive,
  name,
  address,
  city,
  zipcode,
  website,
}: ModalProps) {
  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Informations organisme</h1>
        <form className="modal-list">
          <div className="modal-case">
            <h4 className="modal-case__title">Organisme</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={name}
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Adresse</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={address}
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Ville</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={city}
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Code postal</h4>
            <input
              className="modal-case__inputTxt"
              type="number"
              defaultValue={zipcode}
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Site web</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              defaultValue={website}
            />
          </div>
        </form>
        <div className="modal-actions">
          <button
            type="button"
            className="btn btn-danger-fill btn-flat modal-actions__close"
            onClick={() => setIsActive(false)}
          >
            Annuler
          </button>
          <button
            type="button"
            className="btn btn-sucess-fill btn-flat modal-actions__save"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
}
ModalInfos.defaultProps = {
  name: '',
  address: '',
  city: '',
  zipcode: '',
  website: '',
};

export default ModalInfos;
