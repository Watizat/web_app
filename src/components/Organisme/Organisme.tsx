import Container from '../Container/Container';
import Icon from '../../ui/icon/icon';
import './Organisme.scss';
import Breadcrumb from './Breadcrumb/breadcrumb';
import Header from './Header/Header';
import Infos from './Infos/Infos';
import Services from './Services/Services';

function Organisme() {
  return (
    <main className="organisme-container">
      <Container>
        <Breadcrumb />
        <section className="organisme">
          <Header />
          <Infos />
          <Services />
        </section>
      </Container>
    </main>
  );
}

export default Organisme;
