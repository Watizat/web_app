import styles from './Modal.module.scss';

function ModalVersionApp() {
  return (
    <div className="absolute top-0 left-0 z-[100] flex items-center content-center justify-center w-screen h-screen bg-gray-950/75">
      <div className="w-4/6 bg-white 2xl:w-2/6 max-h-2/6 rounded-xl">
        <h1 className="pt-8 pb-2 pl-16 text-2xl font-medium text-left text-slate-700">
          Modifier les informations de l&apos;organisme
        </h1>
        <div className="pt-8 pb-2 pl-16 text-2xl font-medium text-left text-slate-700">
          <div
            className={`$"flex flex-col gap-6 px-16 pt-4 overflow-y-scroll max-h-50" ${styles.version}`}
          >
            <p>Version</p>
          </div>
          <div className="flex justify-end gap-12 px-16 py-4 bg-gray-50 rounded-b-xl">
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold bg-white rounded-md shadow-sm text-teal-700/75 ring-1 ring-inset ring-teal-700/50 hover:bg-gray-50"
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
