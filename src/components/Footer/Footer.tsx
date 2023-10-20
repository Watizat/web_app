import Container from '../Container/Container';
import './Footer.scss';
import FooterLinks from './FooterLinks/FooterLinks';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-links">
          <FooterLinks />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
