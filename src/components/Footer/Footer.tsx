import Container from '../Container/Container';
import Links from './Links/Links';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.links}>
          <Links />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
