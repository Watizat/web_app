import { useAppSelector } from '../../../../hooks/redux';
import Card from './Components/Card';
import ServiceCard from './Components/ServiceCard';

export default function Services() {
  const organism = useAppSelector((state) => state.admin.organism);
  const services = organism?.services;

  const menuChoices = [
    {
      title: 'Ajouter un service',
      onClick: () => {
        // eslint-disable-next-line no-console
        console.log('Modifier');
      },
    },
  ];

  return (
    <Card
      title="Services"
      srMessage="Services de l'organisme"
      menuChoices={menuChoices}
    >
      <ul className="grid grid-cols-1 gap-6 p-4 sm:columns-2 lg:grid-cols-2 2xl:grid-cols-3 ">
        {services && services.length > 0 ? (
          services.map((service, index) => (
            <ServiceCard service={service} index={index} key={service.id} />
          ))
        ) : (
          <span className="ml-1 text-sm ">Pas de services à afficher</span>
        )}
      </ul>
    </Card>
  );
}
