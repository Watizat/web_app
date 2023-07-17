import axios from 'axios';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Icon from '../../../ui/icon/icon';
import './Settings.scss';

interface Categories {
  id: number;
  name: string;
  slug: string;
}

function Settings() {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [distanceValue, setDistanceValue] = useState<string>('10');
  const [categories, setCategories] = useState<Categories[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleDistanceValueChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setDistanceValue(event.target.value);
  }

  function handleOpenSettings() {
    setIsOpen(!isOpen);
  }

  const getCategories = async () => {
    const { data } = await axios.get(
      'https://watizat.lunalink.nl/items/categorie_translation'
    );
    setCategories(data.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="settings">
      <button
        type="button"
        className="settings__dropdown-btn"
        onClick={handleOpenSettings}
      >
        <span>Trier et filtrer</span>
        <Icon icon={isOpen ? 'arrow_up' : 'arrow_down'} size="30px" />
      </button>

      <div
        className={classNames('settings__content', {
          'settings__content--visible': isOpen,
        })}
      >
        <div>
          <span>Affiner la recherche</span>
          <input
            type="text"
            placeholder="Exemple : Croix Rouge française (nord)"
            id="search-panel"
            value={searchInputValue}
            onChange={(event) => setSearchInputValue(event.target.value)}
          />
        </div>
        <div>
          <span>Filtrer par accessibilité</span>
          <div>
            <input type="checkbox" name="pmr" id="pmr" />
            <label htmlFor="pmr">Accessible PSH / PMR</label>
            <input type="checkbox" name="animals" id="animals" />
            <label htmlFor="animals">Animaux acceptés</label>
          </div>
        </div>
        <div>
          <span> Filtrer par distance</span>
          <div className="settings__filter-range">
            <input
              type="range"
              name="distance"
              id="distance"
              min="0"
              max="100"
              value={distanceValue}
              step="10"
              onChange={(event) => handleDistanceValueChange(event)}
            />
            <span className="settings__filter-range--distance">
              Jusqu&apos;à {distanceValue}km
            </span>
          </div>
        </div>
        <div>
          <span>Filtrer par catégories</span>
          <div className="settings__filter-categories">
            {categories.map((category) => {
              return (
                <div key={category.id}>
                  <input
                    type="checkbox"
                    name={category.slug}
                    id={category.slug}
                  />
                  <label htmlFor={category.slug}>{category.name}</label>
                </div>
              );
            })}
            {/* <div>
              <input type="checkbox" name="acceuil" id="acceuil" />
              <label htmlFor="acceuil"> Accueil et orientation</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="permanences-sociales"
                id="permanences-sociales"
              />
              <label htmlFor="permanences-sociales">Permanences sociales</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="Accueils-de-jour"
                id="Accueils-de-jour"
              />
              <label htmlFor="Accueils-de-jour">Accueils de jour</label>
            </div>
            <div>
              <input type="checkbox" name="bagagerie" id="bagagerie" />
              <label htmlFor="bagagerie">Bagagerie</label>
            </div>
            <div>
              <input type="checkbox" name="manger" id="manger" />
              <label htmlFor="manger">Manger</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="aide-juridique"
                id="aide-juridique"
              />
              <label htmlFor="aide-juridique">Aide juridique</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="permanences-telephoniques"
                id="permanences-telephoniques"
              />
              <label htmlFor="permanences-telephoniques">
                Permanences téléphoniques
              </label>
            </div>
            <div>
              <input type="checkbox" name="femmes" id="femmes" />
              <label htmlFor="femmes">Femmes</label>
            </div>
            <div>
              <input type="checkbox" name="enfance" id="enfance" />
              <label htmlFor="enfance">Enfance</label>
            </div>
            <div>
              <input type="checkbox" name="lgbtqia" id="lgbtqia" />
              <label htmlFor="lgbtqia">LGBTQIA+</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="retablissement-des-liens"
                id="retablissement-des-liens"
              />
              <label htmlFor="retablissement-des-liens">
                Rétablissement des liens
              </label>
            </div>
            <div>
              <input type="checkbox" name="sante" id="sante" />
              <label htmlFor="sante">Santé</label>
            </div>
            <div>
              <input type="checkbox" name="covid19" id="covid19" />
              <label htmlFor="covid19">COVID 19</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="travail-du-sexe"
                id="travail-du-sexe"
              />
              <label htmlFor="travail-du-sexe">Travail du sexe</label>
            </div>
            <div>
              <input type="checkbox" name="selaver" id="selaver" />
              <label htmlFor="selaver">Se laver / Laverie</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="apprendre-le-francais"
                id="apprendre-le-francais"
              />
              <label htmlFor="apprendre-le-francais">
                Apprendre le français
              </label>
            </div>
            <div>
              <input type="checkbox" name="informatique" id="informatique" />
              <label htmlFor="informatique">Informatique & numérique</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="lieux-culturels"
                id="lieux-culturels"
              />
              <label htmlFor="lieux-culturels">Lieux culturels</label>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
