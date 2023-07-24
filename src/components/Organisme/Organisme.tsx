import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchOrganism } from '../../store/reducers/organisms';
import Container from '../Container/Container';
import Icon from '../../ui/icon/icon';
import './Organisme.scss';
import Breadcrumb from './Breadcrumb/breadcrumb';
import Header from './Header/Header';
import Infos from './Infos/Infos';
import Services from './Services/Services';

function Organisme() {
  const { slug } = useParams();
  const dispatch = useAppDispatch();
  const { organisms } = useAppSelector((state) => state.organism);
  const organism = organisms[0];
  console.log(organisms[0]);
  useEffect(() => {
    dispatch(fetchOrganism(slug as string));
  }, [dispatch, slug]);

  return (
    <main className="organisme-container">
      <Container>
        <Breadcrumb />
        <section className="organisme">
          <Header name={organism.name} translations={organism.translations} />
          <Infos
            address={organism.address}
            city={organism.city}
            zipcode={organism.zipcode}
            phone={organism.phone}
            contacts={organism.contacts}
            schedules={organism.schedules}
          />
          <Services />
        </section>
      </Container>
    </main>
  );
}

export default Organisme;
