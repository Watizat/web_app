import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const dispatch = useAppDispatch();
  const organism = useAppSelector((state) => state.organism.organism);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchOrganism(slug as string));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, slug]);

  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get('city') || '';
  const category = (searchParams.get('category') || '').split(',');

  if (organism === null && !loading) {
    return (
      <main className="organisme-container">
        <Container>
          <Breadcrumb searchParams={{ city, category }} />
          <span>Cet organisme n&apos;éxiste pas.</span>
        </Container>
      </main>
    );
  }

  return (
    !loading && (
      <main className="organisme-container">
        <Container>
          <Breadcrumb searchParams={{ city, category }} />
          <section className="organisme">
            <Header />
            <Infos />
            <Services />
          </section>
        </Container>
      </main>
    )
  );
}

export default Organisme;
