import { orga } from '../../../../data/organismes';
import Infos from './Infos/Infos';
import Contacts from './Contacts/Contacts';
import Data from './Data/Data';
import Services from './Services/Services';
import './OrgaSheet.scss';

function OrgaSheet() {
  return (
    <section className="orgaSheet">
      <p />
      <Infos
        key={`infos${orga.id}`}
        name={orga.name}
        address={orga.address}
        city={orga.city}
        zipcode={orga.zipcode}
        website={orga.website}
      />

      <Contacts key={`contacts-${orga.id}`} contacts={orga.contacts} />

      <Data
        key={`data-${orga.id}`}
        pmr={orga.pmr}
        animals={orga.animals}
        description={orga.description}
        hours={orga.hours}
        infos_alertes={orga.infos_alertes}
      />

      <Services key={`services-${orga.id}`} services={orga.services} />
    </section>
  );
}

export default OrgaSheet;
