import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { useAppSelector } from '../../../hooks/redux';

export default function Infos() {
  const organism = useAppSelector((state) => state.organism.organism);
  const { services } = organism;

  return (
    <>
      {organism.translations[0]?.infos_alerte && (
        <div className="text-sm leading-6 rounded-lg ring-1 ring-red-500/10">
          <div className="flex px-4 py-3 rounded-md bg-red-50/80">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon
                className="w-5 h-5 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col ml-3">
              <h3 className="text-sm font-semibold text-yellow-800">
                Infos / alertes
              </h3>
              <p className="mt-1 text-sm font-medium leading-tight text-yellow-800 truncate whitespace-normal lg:leading-tight">
                {organism.translations[0]?.infos_alerte}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col py-6 pl-4 text-sm text-justify text-gray-500 rounded-lg shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-6 gap-y-2 ">
        {/* <h3 className="text-sm font-semibold text-slate-600/80">Description</h3> */}
        <p>{organism?.translations?.[0]?.description}</p>
      </div>
    </>
  );
}
