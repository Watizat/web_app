import { Service } from '../../../../../@types/organism';
import Icon from '../../../../../ui/icon/icon';
import Schedules from '../../../../Elements/Schedules';
import ContactCard from './ContactCard';
import VerticalMenu from './VerticalMenu';

interface Props {
  service: Service;
  index: number;
}
export default function ServiceCard({ service, index }: Props) {
  const menuChoices = [
    {
      title: 'Mofidier service',
      onClick: () => {
        // eslint-disable-next-line no-console
        console.log('Modifier');
      },
    },
    {
      title: 'Supprimer service',
      onClick: () => {
        // eslint-disable-next-line no-console
        console.log('Modifier');
      },
    },
  ];

  return (
    <div
      key={service.categorie_id.translations[0].name}
      className="col-span-1 bg-white divide-y divide-gray-100 rounded-lg shadow-md ring-1 ring-gray-100"
    >
      <div className="flex items-center justify-between w-full px-4 py-2 space-x-6 bg-gray-50/50">
        <Icon
          className="w-8 h-8 p-1 text-sky-600/80"
          icon={service.categorie_id.tag}
        />
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-sm font-medium truncate text-sky-700/80">
              {service.categorie_id.translations[0].name}
            </h3>
          </div>
          <p className="mt-1 text-sm text-gray-500 whitespace-normal">
            {service.translations[0].name}
          </p>
        </div>
        <VerticalMenu menuChoices={menuChoices} />
      </div>
      <div>
        <div className="flex flex-col gap-2 p-4 -mt-px text-sm divide-y divide-gray-100">
          <p className="items-center w-full pr-2 text-sm leading-normal text-justify truncate whitespace-normal align-middle font-base text-slate-500">
            {service.translations[0].description}
          </p>
          <div className="w-full pt-2 pr-2 leading-normal text-justify truncate whitespace-normal font-base text-slate-500 ">
            {!service.schedules ||
              (service.schedules.every(
                (day) =>
                  !day.opentime_am &&
                  !day.opentime_pm &&
                  !day.closetime_am &&
                  !day.closetime_pm
              ) ? (
                <p className="leading-normal font-base text-slate-600 ">
                  Pas d&apos;horaires spécifiques. Se référer aux horaires de la
                  structure
                </p>
              ) : (
                service.schedules
                  .map((day) =>
                    day.opentime_am ||
                    day.opentime_pm ||
                    day.closetime_am ||
                    day.closetime_pm
                      ? 1
                      : 0
                  )
                  .find((e) => e === 1) && (
                  <Schedules schedule={service.schedules} />
                )
              ))}
          </div>
          {service.contacts.map((contact, i) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              index={i}
              serviceContact
            />
          ))}
        </div>
      </div>
    </div>
  );
}
