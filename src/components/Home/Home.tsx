import { useEffect, ChangeEvent, MouseEventHandler, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchZones } from '../../store/reducers/admin';

import logo from '../../assets/logo.svg';
import Icon from '../../ui/icon/icon';
import Container from '../Container/Container';
import './Home.scss';
import HomeCategorySkeleton from '../Skeleton/HomeCategory/HomeCategory';

function Home() {
  const [select, setSelect] = useState(localStorage.getItem('city') || '');
  const categories = useAppSelector((state) => state.organism.categories);
  const isLoading = useAppSelector((state) => state.organism.isLoading);

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('city', event.target.value);
    setSelect(event.target.value);
  };

  const handleClick =
    (category: string): MouseEventHandler<HTMLButtonElement> =>
    () => {
      navigate(`resultats/?city=${select}&category=${category}`);
    };

  const dispatch = useAppDispatch();
  const zones = useAppSelector((state) => state.admin.zones);

  useEffect(() => {
    dispatch(fetchZones());
  }, [dispatch]);

  return (
    <main id="homepage">
      <section className="hero">
        <Container>
          <div className="hero-header">
            <Link className="hero-header--logo" to="/">
              <img src={logo} alt="watizat logo" />
            </Link>
            <h1>
              Guide d&lsquo;information en ligne
              <span> pour les personnes exilées</span>
            </h1>
          </div>
          <div className="hero-choice">
            <article className="hero-choice--left">
              <h2>1. Sélectionner une région&nbsp;</h2>
              <select value={select} onChange={handleChange}>
                <option value="" disabled>
                  Selectionner une ville...
                </option>
                {zones.map((zone) => (
                  <option key={zone.id} value={zone.name}>
                    {zone.name}
                  </option>
                ))}
              </select>
            </article>
            <article className="hero-choice--right">
              <h2>2. Selectionner une catégorie</h2>
              <div className="categories-choice">
                {isLoading
                  ? // Afficher le squelette ici pendant le chargement
                    Array(16)
                      .fill(null)
                      .map((e, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <HomeCategorySkeleton key={i} />
                      ))
                  : categories.map((categorie) => (
                      <button
                        type="button"
                        key={categorie.translations[0].slug}
                        onClick={handleClick(categorie.translations[0].slug)}
                      >
                        <Icon icon={categorie.tag} size="40px" />
                        <span className="text-button">
                          {categorie.translations[0].name}
                        </span>
                      </button>
                    ))}
              </div>
            </article>
          </div>
        </Container>
      </section>
      <section className="info">
        <Container>
          <article className="info-hero">
            <div className="info-hero--img">
              <img src="/img/bghome-guide.jpeg" alt="distribution d'un guide" />
            </div>
            <div className="info-hero--text">
              <h2>
                Watizat milite pour l’accès à l’information des personnes
                exilées
              </h2>
              <p>
                L’association WATIZAT milite pour l’accès à l’information des
                personnes exilées en France. Nous constatons que l’information
                est une ressource vitale qui peut avoir des conséquences
                importantes sur le parcours de ces personnes, d’autant plus
                lorsqu’elles sont étrangères et en situation de précarité. La
                transmission d’une information correcte et traduite peut
                faciliter l’accès aux droits des personnes et leur donner une
                meilleure compréhension des services et des acteur·ice·s
                présents sur le territoire.
              </p>
              <button className="btn btn-sucess btn-rounded" type="button">
                <span>En savoir plus sur Watizat</span>
              </button>
            </div>
          </article>
        </Container>
      </section>
    </main>
  );
}

export default Home;
