import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <Container>
        <span>Watizat 2023</span>
        <Link to="/mentions-legales">Mentions légales</Link>
        <Link to="/contact">Nous contacter</Link>
        <Link to="/admin">Membres Watizat</Link>
        <span>Liens réseaux sociaux</span>
      </Container>
    </div>
  );
}

export default Footer;
