import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchOrganism } from '../../store/reducers/organisms';
import Container from '../Container/Container';
import Breadcrumb from './Breadcrumb/breadcrumb';
import Header from './Header/Header';
import Infos from './Infos/Infos';
import Services from './Services/Services';
import styles from './Organisme.module.scss';

function Organisme() {
  const { slug } = useParams();
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

  /*   const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get('city') || '';
  const category = (searchParams.get('category') || '').split(','); */

  if (organism === null && !loading) {
    return (
      <main className={styles.organism}>
        <Container>
          <Breadcrumb />
          <span>Cet organisme n&apos;éxiste pas</span>
        </Container>
      </main>
    );
  }

  return (
    !loading && (
      <main className={styles.organism}>
        <Container>
          <Breadcrumb />
          <section className={styles.content}>
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
