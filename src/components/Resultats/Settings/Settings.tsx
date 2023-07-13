import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Icon from '../../../ui/icon/icon';
import './Settings.scss';

function Settings() {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [distanceValue, setDistanceValue] = useState<string>('10');
  const [categories, setCategories] = useState([
    { category: 'test', checked: false },
  ]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleDistanceValueChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setDistanceValue(event.target.value);
  }

  function handleOpenSettings() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {}, []);

  return (
    <div className="settings">
      <div className="settings-dropdown">
        <label htmlFor="settings-panel">Trier et filtrer</label>
        <input
          type="checkbox"
          className="settings-checkbox"
          name="checkbox"
          id="settings-panel"
          checked={isOpen}
          onChange={handleOpenSettings}
        />
        <Icon icon={isOpen ? 'arrow_up' : 'arrow_down'} size="30px" />
      </div>
      <div
        className={classNames('settings-content', {
          'settings-content--visible': isOpen,
        })}
      >
        <div>
          <label htmlFor="search-panel">Affiner la recherche</label>
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
          <label htmlFor="distance"> Filtrer par distance</label>
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
              {' '}
              Jusqu&apos;à {distanceValue}km
            </span>
          </div>
        </div>
        <div>
          <span>Filtrer par catégories</span>
          <div className="settings__filter-categories">
            {/*             {organisms.map((organism) => {
              return (
                <>
                  <input
                    type="checkbox"
                    name={organism.slug}
                    id={organism.slug}
                    onChange={(event) => handleServiceSelect(event)}
                  />
                  <label htmlFor={organism.slug}>{organism.name}</label>
                </>
              );
            })} */}
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
