import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface Props {
  message?: string;
  setIsOpenModal: (open: boolean) => void;
}

export default function ArchivedCard({ message, setIsOpenModal }: Props) {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg shadow bg-red-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon
              className="w-5 h-5 text-red-400"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col items-center ml-3">
            <h3 className="text-sm font-semibold text-red-800">
              Organisme archivé
            </h3>
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setIsOpenModal(true)}
            className="flex items-center px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded shadow-sm hover:bg-red-200/60 group hover:text-red-700"
          >
            Annuler
          </button>
        </div>
      </div>
      {message && (
        <div className="text-sm text-red-700 ">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
