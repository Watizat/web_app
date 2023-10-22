import styles from './Modal.module.scss';

function ModalVersionApp() {
  return (
    <div className={styles.modal}>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Modifier les informations de l&apos;organisme
        </h1>
        <div className={styles.list}>
          <div className={`${styles.overflow} ${styles.version}`}>
            <p>Version</p>
          </div>
          <div className={styles.actions}>
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

export default ModalVersionApp;
