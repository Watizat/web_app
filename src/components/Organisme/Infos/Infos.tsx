import './Infos.scss';
import Contact from './Contact/Contact';
import Schedule from './Schedule/Schedule';
import Transport from './Transport/Transport';

function Infos() {
  return (
    <div className="organisme-infos">
      <Contact />
      <Schedule />
      <Transport />
    </div>
  );
}

export default Infos;
