import { Link } from 'react-router-dom';
import './FooterLinks.scss';

function FooterLinks() {
  return (
    <div className="footerlinks">
      <Link to="/mentions-legales">Mentions légales</Link>
      <Link to="/contact">Nous contacter</Link>
      <Link className="important" to="/admin">
        Membres Watizat
      </Link>
    </div>
  );
}

export default FooterLinks;
