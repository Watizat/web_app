import { useState, useCallback } from 'react';
import { Organism } from '../../../@types/organism';
import { useAppSelector } from '../../../hooks/redux';
import Icon from '../../../ui/icon/icon';
import Schedules from './Schedules';

export default function Services() {
  const organism = useAppSelector(
    (state) => state.organism.organism as Organism
  );

  return (
    <section className="grid grid-cols-2 gap-4">
      {organism.services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col overflow-hidden border border-gray-200 xl:gap-x-8 rounded-xl"
        >
          <div className="flex items-center px-6 py-2 border-b gap-x-4 border-gray-900/5 bg-zinc-50">
            <Icon
              className="w-6 h-5 text-teal-800/80"
              icon={service.categorie_id.tag}
            />
            <div className="text-sm font-medium leading-6 text-teal-800">
              {service.categorie_id.translations[0].name}
            </div>
          </div>
          <div
            className={`justify-between w-full gap-3 px-4 pt-5 pb-3 -my-3 text-sm leading-6 ${
              !service.schedules ||
              service.schedules.every(
                (day) =>
                  !day.opentime_am &&
                  !day.opentime_pm &&
                  !day.closetime_am &&
                  !day.closetime_pm
              )
                ? 'p-4' // Ajoutez votre classe conditionnelle ici
                : 'grid grid-cols-12'
            } `}
          >
            <div className="flex flex-col items-center col-span-7 gap-y-2">
              <p className="w-full text-left font-base text-slate-900">
                {service.translations[0].name}
              </p>

              <p className="w-full pr-2 leading-normal text-justify truncate whitespace-normal font-base text-slate-500">
                {service.translations[0].description}
              </p>
              {!service.schedules ||
                (service.schedules.every(
                  (day) =>
                    !day.opentime_am &&
                    !day.opentime_pm &&
                    !day.closetime_am &&
                    !day.closetime_pm
                ) && (
                  <>
                    {/* Separator */}
                    <div
                      className="flex lg:block lg:w-1/2 lg:h-px lg:bg-gray-200"
                      aria-hidden="true"
                    />
                    <p className="leading-normal font-base text-slate-500 ">
                      Pas d&apos;information horaire spécifique. Se référer aux
                      horaires de la structure
                    </p>
                  </>
                ))}
            </div>
            {service.schedules && (
              <div className="col-span-5">
                <p
                  key={`schedules${service.id}`}
                  className="flex flex-col items-end font-base text-slate-500"
                >
                  {service.schedules
                    .map((day) =>
                      day.opentime_am ||
                      day.opentime_pm ||
                      day.closetime_am ||
                      day.closetime_pm
                        ? 1
                        : 0
                    )
                    .find((e) => e === 1) && (
                    <Schedules
                      schedule={service.schedules}
                      displayAll={false}
                    />
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
