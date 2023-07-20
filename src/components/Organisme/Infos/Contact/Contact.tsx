import { Link } from 'react-router-dom';
import './Contact.scss';

function Contact() {
  return (
    <article>
      <h3>Contact</h3>
      <div className="organisme-infos--maincontact">
        <p>66 bis avenue Étienne-Billières - 31100 Toulouse</p>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>00 00 00 00 00</p>
        </Link>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>mail@mail.com</p>
        </Link>
      </div>
      <div className="organisme-infos--othercontact">
        <p className="organisme-infos--othercontact-job">Direction</p>
        <p>Jean-Claude Tartempion</p>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>00 00 00 00 00</p>
        </Link>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>mail@mail.com</p>
        </Link>
      </div>
    </article>
  );
}

export default Contact;
