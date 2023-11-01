import { useState, useCallback, Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Popover, Transition } from '@headlessui/react';
import { Organism } from '../../../@types/organism';
import { useAppSelector } from '../../../hooks/redux';
import Icon from '../../../ui/icon/icon';
import Schedules from './Schedules';

const solutions = [
  { name: 'Analytics', href: '#' },
  { name: 'Engagement', href: '#' },
  { name: 'Security', href: '#' },
  { name: 'Integrations', href: '#' },
  { name: 'Automations', href: '#' },
  { name: 'Reports', href: '#' },
];

export default function Services() {
  const organism = useAppSelector(
    (state) => state.organism.organism as Organism
  );

  return (
    <section className="grid gap-4 sm:grid-cols-2">
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
          <div className="flex flex-col items-center justify-between w-full py-5 -my-3 text-sm leading-6 divide-y gap-y-3">
            <div className="flex flex-col items-center w-full px-4">
              <p className="w-full text-left font-base text-slate-900">
                {service.translations[0].name}
              </p>

              <p className="w-full pr-2 leading-normal text-justify truncate whitespace-normal font-base text-slate-500">
                {service.translations[0].description}
              </p>
            </div>
            <div className="w-full p-4 ">
              {!service.schedules ||
                (service.schedules.every(
                  (day) =>
                    !day.opentime_am &&
                    !day.opentime_pm &&
                    !day.closetime_am &&
                    !day.closetime_pm
                ) ? (
                  <p className="leading-normal font-base text-slate-600 ">
                    Pas d&apos;information horaire spécifique. Se référer aux
                    horaires de la structure
                  </p>
                ) : (
                  <Popover className="relative">
                    <Popover.Button className="inline-flex items-center justify-between w-full text-sm leading-6 text-slate-600 gap-x-1 focus:outline-none">
                      <span>Consulter les horaires spécifiques au service</span>
                      <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="relative z-10 flex w-full px-4 ">
                        <div className="w-full p-4 leading-6">
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
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
