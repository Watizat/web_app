import { useAppSelector } from '../../../../hooks/redux';
import Card from './Components/Card';
import SwitchToogle from './Components/SwitchToogle';
import Schedules from '../../../Elements/Schedules';

export default function Informations() {
  const organism = useAppSelector((state) => state.admin.organism);
  if (organism === null) {
    return <span>Erreur</span>;
  }

  const menuChoices = [
    {
      title: 'Modifier infos',
      onClick: () => {
        // eslint-disable-next-line no-console
        console.log('Modifier infos');
      },
    },
    {
      title: 'Modifier horaires',
      onClick: () => {
        // eslint-disable-next-line no-console
        console.log('Modifier horaires');
      },
    },
  ];

  return (
    <Card
      title="Informations"
      srMessage="Information de l'organisme"
      menuChoices={menuChoices}
    >
      <div className="flex gap-4 pt-4 divide-x divide-gray-100 pb-7 px-7">
        <div className="flex flex-col gap-4 divide-y divide-gray-100 basis-8/12">
          <div className="flex flex-col gap-2 text-gray-500">
            <h2 className="text-sm font-medium text-black">Accessibilité</h2>
            <div className="flex justify-between flex-1 pr-6">
              <SwitchToogle
                disable
                enabled={organism.pmr}
                title="Accessible PSH / PMR"
              />
              <SwitchToogle
                disable
                enabled={organism.animals}
                title="Animaux acceptés"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-4 text-gray-500">
            <h2 className="text-sm font-medium text-black">Infos & alertes</h2>
            <p className="text-sm font-normal text-justify text-gray-500">
              {organism.translations[0]?.infos_alerte}
            </p>
          </div>
          <div className="flex flex-col gap-2 pt-4 text-gray-500">
            <h2 className="text-sm font-medium text-black">Description</h2>
            <p className="text-sm font-normal text-justify text-gray-500">
              {organism.translations[0]?.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 pl-4 2xl:pl-10 basis-4/12">
          <h2 className="text-sm font-medium text-black">Horaires</h2>
          <div>
            {organism.schedules && organism.schedules.length > 0 ? (
              <Schedules schedule={organism.schedules} />
            ) : (
              <p>Il n&apos;y a pas d&apos;horaires enregistrés.</p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
