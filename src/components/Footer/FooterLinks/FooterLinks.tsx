import { Link } from 'react-router-dom';
import './FooterLinks.scss';

interface ModalProps {
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function FooterLinks({ setMenuIsOpen }: ModalProps) {
  return (
    <div className="footerlinks">
      <Link to="/mentions-legales" onClick={() => setMenuIsOpen(false)}>
        Mentions légales
      </Link>
      <Link to="/contact" onClick={() => setMenuIsOpen(false)}>
        Nous contacter
      </Link>
      <Link
        className="important"
        to="/admin"
        onClick={() => setMenuIsOpen(false)}
      >
        Membres Watizat
      </Link>
    </div>
  );
}

export default FooterLinks;
