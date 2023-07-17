import Infos from './Infos/Infos';
import Contacts from './Contacts/Contacts';
import Data from './Data/Data';
import Services from './Services/Services';
import './OrgaSheet.scss';

function OrgaSheet() {
  return (
    <section className="orgaSheet">
      <Infos />
      <Contacts />
      <Data />
      <Services />
    </section>
  );
}

export default OrgaSheet;
