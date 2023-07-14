import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, MouseEventHandler, useState } from 'react';
import logo from '../../assets/logo.svg';
import Container from '../Container/Container';
import './Home.scss';

function Home() {
  const [select, setSelect] = useState(localStorage.getItem('city') || '');

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

  return (
    <main className="home">
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
                <option value="toulouse">Toulouse</option>
                <option value="paris">Paris</option>
              </select>
            </article>
            <article className="hero-choice--right">
              <h2>2. Selectionner une catégorie</h2>
              <div className="categories-choice">
                <button type="button" onClick={handleClick('manger')}>
                  <i className="las la-podcast" />
                  <span className="text-button">Manger</span>
                </button>
                <button type="button" onClick={handleClick('se laver')}>
                  <i className="las la-eject" />
                  <span>Se laver</span>
                </button>
                <button type="button">
                  <i className="las la-circle" />
                  <span>Bagagerie</span>
                </button>
                <button type="button">
                  <i className="las la-music" />
                  <span>Laverie</span>
                </button>
                <button type="button">
                  <i className="las la-random" />
                  <span>Manger</span>
                </button>
                <button type="button">
                  <i className="las la-film" />
                  <span>Manger</span>
                </button>
                <button type="button">
                  <i className="las la-play" />
                  <span>Femme</span>
                </button>
                <button type="button">
                  <i className="las la-car" />
                  <span>Enfants</span>
                </button>
                <button type="button">
                  <i className="las la-bus" />
                  <span>Manger</span>
                </button>
                <button type="button">
                  <i className="las la-taxi" />
                  <span>Manger</span>
                </button>
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
              <button className="btn btn-secondary btn-rounded" type="button">
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
