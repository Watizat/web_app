import './Modal.scss';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalAddOrganism({ setIsActive }: ModalProps) {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form);
    console.log(data);
  }

  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">
          Modifier les informations de l&apos;organisme
        </h1>
        <form className="modal-list" onSubmit={handleSubmit}>
          <div className="modal-case">
            <h4 className="modal-case__title">Organisme</h4>
            <input className="modal-case__inputTxt" type="text" name="name" />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Adresse</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              name="address"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Ville</h4>
            <input className="modal-case__inputTxt" type="text" name="city" />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Code postal</h4>
            <input
              className="modal-case__inputTxt"
              type="number"
              name="zipcode"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Site web</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              name="website"
            />
          </div>
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-info-fill btn-flat modal-actions__close"
              onClick={() => setIsActive(false)}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn btn-sucess-fill btn-flat modal-actions__save"
            >
              Sauvegarder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalAddOrganism;
