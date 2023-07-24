import { orga } from '../../../../data/organismes';
import { useAppSelector } from '../../../../hooks/redux';
import Contacts from './Contacts/Contacts';
import Data from './Data/Data';
import Infos from './Infos/Infos';
import './OrgaSheet.scss';
import Services from './Services/Services';

function OrgaSheet() {
  const organism = useAppSelector((state) => state.organism.filteredOrganisms);
  if (organism.length === 0) {
    return <div> Veuillez sélectionner un organisme </div>;
  }
  console.log(organism);

  return (
    <section className="orgaSheet">
      <p />
      <Infos
        key={`infos${organism[0].id}`}
        name={organism[0].name}
        address={organism[0].address}
        city={organism[0].city}
        zipcode={organism[0].zipcode}
        website={organism[0].website}
      />

      <Contacts
        key={`contacts-${organism[0].id}`}
        contacts={organism[0].contacts}
      />

      <Data
        key={`data-${organism[0].id}`}
        pmr={organism[0].pmr}
        animals={organism[0].animals}
        description={organism[0].translations[0]?.description}
        hours={organism[0].schedules}
        infos_alertes={orga.infos_alertes}
      />

      <Services key={`services-${orga.id}`} services={orga.services} />
    </section>
  );
}

export default OrgaSheet;
