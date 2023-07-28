import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/redux';
import './Contact.scss';

function Contact() {
  const organism = useAppSelector((state) => state.organism.organism);

  if (organism === null) {
    return <span>Erreur</span>;
  }
  console.log(organism);
  return (
    <article>
      <h3>Contact</h3>
      <div className="organisme-infos--maincontact">
        <p>
          {organism.address} - <span>{organism.zipcode}</span>{' '}
          <span>{organism.city}</span>
        </p>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>{organism.phone}</p>
        </Link>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>mail@mail.com</p>
        </Link>
      </div>
      {/*       <div className="organisme-infos--othercontact">
        <p className="organisme-infos--othercontact-job">
          {organism.contacts[0].job}
        </p>
        <p>{organism.contacts[0].name}</p>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>{organism.contacts[0].phone}</p>
        </Link>
        <Link to="tel:+3300" className="organisme-infos--link">
          <p>{organism.contacts[0].mail}</p>
        </Link>
      </div> */}
    </article>
  );
}

export default Contact;
