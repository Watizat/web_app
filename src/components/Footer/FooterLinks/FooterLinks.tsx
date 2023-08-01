import { Link } from 'react-router-dom';
import './FooterLinks.scss';

interface ModalProps {
  MenuSetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function FooterLinks({ MenuSetOpen }: ModalProps) {
  return (
    <div className="footerlinks">
      <Link to="/mentions-legales" onClick={() => MenuSetOpen(false)}>
        Mentions légales
      </Link>
      <Link to="/contact" onClick={() => MenuSetOpen(false)}>
        Nous contacter
      </Link>
      <Link
        className="important"
        to="/admin"
        onClick={() => MenuSetOpen(false)}
      >
        Membres Watizat
      </Link>
    </div>
  );
}

export default FooterLinks;
