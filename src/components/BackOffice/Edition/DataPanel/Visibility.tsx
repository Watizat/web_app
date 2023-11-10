import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface Props {
  message?: string;
  ToggleOrganismVisibility: () => void;
}

export default function Visibility({
  message,
  ToggleOrganismVisibility,
}: Props) {
  return (
    <div className="p-4 rounded-lg shadow bg-red-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon
              className="w-5 h-5 text-red-400"
              aria-hidden="true"
            />
          </div>
          <div className="flex items-center ml-3">
            <h3 className="text-sm font-semibold text-red-800">
              Organisme archivé
            </h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>{message}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            onClick={ToggleOrganismVisibility}
            className="flex items-center px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded shadow-sm hover:bg-red-200/60 group hover:text-red-700"
          >
            Annuler
            {/* <XMarkIcon
              className="w-5 h-5 ml-2 text-red-600 group-hover:text-red-700"
              aria-hidden="true"
            /> */}
          </button>
        </div>
      </div>
    </div>
  );
}

Visibility.defaultProps = {
  message: '',
};
