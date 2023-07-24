import { orga } from '../../../../data/organismes';
import { useAppSelector } from '../../../../hooks/redux';
import Contacts from './Contacts/Contacts';
import Data from './Data/Data';
import Infos from './Infos/Infos';
import Services from './Services/Services';
import './OrgaSheet.scss';

function OrgaSheet() {
  const organism = useAppSelector((state) => state.organism.filteredOrganisms);
  if (organism.length === 0) {
    return (
      <div className="orgaSheet-empty">
        Veuillez sélectionner un organisme dans la barre latérale
      </div>
    );
  }
  // console.log(organism);

  return (
    <section className="orgaSheet">
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
        schedules={organism[0].schedules}
        infos_alertes={organism[0].translations[0]?.infos_alerte}
      />

      <Services
        key={`services-${organism[0].id}`}
        services={organism[0].services}
      />
    </section>
  );
}

export default OrgaSheet;
