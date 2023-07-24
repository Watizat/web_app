import { Link } from 'react-router-dom';
import './Contact.scss';
import { Organism } from '../../../../@types/organism';

function Contact({ address, city, zipcode, phone, contacts }: Organism) {
  console.log(contacts);
  return (
    <article>
      <h3>Contact</h3>
      <div className="organisme-infos--maincontact">
        <p>
          {address} - <span>{zipcode}</span> <span>{city}</span>
        </p>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>{phone}</p>
        </Link>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>mail@mail.com</p>
        </Link>
      </div>
      <div className="organisme-infos--othercontact">
        <p className="organisme-infos--othercontact-job">{contacts[0].job}</p>
        <p>{contacts[0].name}</p>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>{contacts[0].phone}</p>
        </Link>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>{contacts[0].mail}</p>
        </Link>
      </div>
    </article>
  );
}

export default Contact;
