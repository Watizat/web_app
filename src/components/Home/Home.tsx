import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="home">
      <Container>
        <main>
          <h1>
            Trouvez toutes les informations nécessaires
            <span> pour les personnes exilées</span>
          </h1>
          <div>
            <label>
              1. Sélectionner une région&nbsp;
              <select value={select} onChange={handleChange}>
                <option value="" disabled>
                  Selectionner une ville...
                </option>
                <option value="toulouse">Toulouse</option>
                <option value="paris">Paris</option>
              </select>
            </label>
            <div>
              <span>2. Je choisis une catégorie</span>
              <div>
                <button type="button" onClick={handleClick('manger')}>
                  Manger
                </button>
                <button type="button" onClick={handleClick('se laver')}>
                  Se laver
                </button>
                <button type="button">Manger</button>
                <button type="button">Manger</button>
                <button type="button">Manger</button>
                <button type="button">Manger</button>
                <button type="button">Manger</button>
                <button type="button">Manger</button>
                <button type="button">Manger</button>
                <button type="button">Manger</button>
                <button type="button">Manger</button>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
}

export default Home;
