import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

import Icon from '../../ui/icon/icon';
import Container from '../Container/Container';
import './Home.scss';

function Home() {
  const [select, setSelect] = useState<string>(
    localStorage.getItem('city') || ''
  );
  const categories = useAppSelector((state) => state.organism.categories);

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('city', event.target.value);
    setSelect(event.target.value);
  };

  const handleClick =
    (category: string): MouseEventHandler<HTMLButtonElement> =>
    () => {
      navigate(`resultats/?city=${select.toLowerCase()}&category=${category}`);
    };

  const zones = useAppSelector((state) => state.admin.zones);

  return (
    <main id="homepage">
      <section id="hero">
        <Container>
          <div className="heroHeader">
            <h1 className="heroHeader-title">
              Guide d&lsquo;information en ligne
              <span className="heroHeader-subtitle">
                pour les personnes exilées
              </span>
            </h1>
          </div>
          <div className="choice">
            <article className="choiceLeft">
              <h2 className="choice-title">1. Sélectionner une région&nbsp;</h2>
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
            <article className="choiceRight">
              <h2 className="choice-title">2. Selectionner une catégorie</h2>
              <div className="choiceRight-group">
                {categories.map((categorie) => (
                  <button
                    type="button"
                    key={categorie.translations[0].slug}
                    onClick={handleClick(categorie.translations[0].slug)}
                    className="choiceRight-button"
                  >
                    <Icon
                      icon={categorie.tag}
                      className="choiceRight-button__icon"
                    />
                    <span className="text-button choiceRight-button__text">
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
            <div className="info-hero__img">
              <img src="/img/bghome-guide.jpeg" alt="distribution d'un guide" />
            </div>
            <div className="info-hero__text">
              <h2 className="info-hero__text___title">
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
