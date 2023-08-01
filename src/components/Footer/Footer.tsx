import Container from '../Container/Container';
import './Footer.scss';
import FooterLinks from './FooterLinks/FooterLinks';

interface ModalProps {
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Footer({ setMenuIsOpen }: ModalProps) {
  return (
    <footer className="footer">
      <Container>
        <span>Watizat 2023</span>
        <div className="footer-links">
          <FooterLinks setMenuIsOpen={setMenuIsOpen} />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
