import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchOrganism } from '../../store/reducers/organisms';
import Container from '../Container/Container';
import Breadcrumb from './Breadcrumb/breadcrumb';
import Header from './Header/Header';
import Infos from './Infos/Infos';
import './Organisme.scss';
import Services from './Services/Services';

function Organisme() {
  const { slug } = useParams();
  const dispatch = useAppDispatch();
  const organism = useAppSelector((state) => state.organism.organism);

  useEffect(() => {
    dispatch(fetchOrganism(slug as string));
  }, [dispatch, slug]);

  if (organism === null) {
    return <span>Erreur</span>;
  }

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
