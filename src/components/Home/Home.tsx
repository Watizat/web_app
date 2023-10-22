import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { changeCity } from '../../store/reducers/user';

import Icon from '../../ui/icon/icon';
import Container from '../Container/Container';
import styles from './Home.module.scss';

function Home() {
  const [select, setSelect] = useState<string>(
    localStorage.getItem('city') || ''
  );
  const categories = useAppSelector((state) => state.organism.categories);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('city', event.target.value);
    setSelect(event.target.value);
    dispatch(changeCity(event.target.value));
  };

  const handleClick =
    (category: string): MouseEventHandler<HTMLButtonElement> =>
    () => {
      if (select) {
        const encodedCategory = encodeURIComponent(category);
        navigate(
          `resultats/?city=${select.toLowerCase()}&category=${encodedCategory}`
        );
      }
    };

  const zones = useAppSelector((state) => state.admin.zones);

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroHeader}>
            <h1 className={styles.heroHeader__title}>
              Guide d&lsquo;information en ligne
              <span className={styles.heroHeader__subtitle}>
                pour les personnes exilées
              </span>
            </h1>
          </div>
          <div className={styles.choices}>
            <article className={styles.choiceLeft}>
              <h2 className={styles.choices_title}>
                1. Sélectionner une région&nbsp;
              </h2>
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
            <article className={styles.choiceRight}>
              <h2 className={styles.choices_title}>
                2. Selectionner une catégorie
              </h2>
              <div className={styles.choiceRight_group}>
                {categories.map((categorie) => (
                  <button
                    type="button"
                    key={categorie.translations[0].slug}
                    onClick={handleClick(categorie.translations[0].slug)}
                    className={styles.choiceRight_button}
                  >
                    <Icon
                      icon={categorie.tag}
                      className={styles.choiceRight_button__icon}
                    />
                    <span className={styles.choiceRight_button__text}>
                      {categorie.translations[0].name}
                    </span>
                  </button>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </section>
      <section className={styles.info}>
        <Container>
          <article className={styles.info_hero}>
            <div>
              <img src="/img/bghome-guide.webp" alt="distribution d'un guide" />
            </div>
            <div className={styles.info_hero__text}>
              <h2 className={styles.info_hero__title}>
                Watizat milite pour l’accès à l’information des personnes
                exilées
              </h2>
              <p className={styles.info_hero__text___content}>
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
              <div>
                <button className="btn btn-sucess btn-rounded" type="button">
                  <span>En savoir plus sur Watizat</span>
                </button>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </main>
  );
}

export default Home;
