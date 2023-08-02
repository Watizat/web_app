import './Modal.scss';

function ModalAppVersions() {
  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">
          Modifier les informations de l&apos;organisme
        </h1>
        <div className="modal-list">
          <div className="modal-overflow modal-version">
            <p>Version</p>
          </div>
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-info-fill btn-flat modal-actions__close"
              // onClick={() => setIsModalActive(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAppVersions;
