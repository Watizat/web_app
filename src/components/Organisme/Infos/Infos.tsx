import './Infos.scss';
import Contact from './Contact/Contact';
import Schedule from './Schedule/Schedule';
import Transport from './Transport/Transport';
import { Organism } from '../../../@types/organism';

function Infos({
  address,
  city,
  zipcode,
  phone,
  contacts,
  schedules,
}: Organism) {
  return (
    <div className="organisme-infos">
      <Contact
        address={address}
        city={city}
        zipcode={zipcode}
        phone={phone}
        contacts={contacts}
      />
      <Schedule schedules={schedules} />
      <Transport />
    </div>
  );
}

export default Infos;
