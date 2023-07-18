import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <span>Watizat 2023</span>
        <Link to="/mentions-legales">Mentions légales</Link>
        <Link to="/contact">Nous contacter</Link>
        <Link className="important" to="/admin/">
          Membres Watizat
        </Link>
      </Container>
    </footer>
  );
}

export default Footer;
