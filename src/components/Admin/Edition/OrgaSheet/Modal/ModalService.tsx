import './Modal.scss';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalService({ setIsActive }: ModalProps) {
  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Ajouter un service</h1>
        <form className="modal-list">
          <div className="modal-case">
            <h4 className="modal-case__title">Organisme</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              value="Croix rouge française de l'apostolque de machin truc (antenne sud)"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Adresse</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              value="66 rue de l'ambassadeur de la petite provence"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Ville</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              value="Toulouse"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Code postal</h4>
            <input
              className="modal-case__inputTxt"
              type="number"
              value="31500"
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

export default ModalService;
