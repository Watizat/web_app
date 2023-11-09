import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

export default function Visibility({ message }) {
  return (
    <div className="p-4 rounded-lg shadow bg-red-50">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className="w-5 h-5 text-red-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-semibold text-red-800">
            Organisme archivé
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
