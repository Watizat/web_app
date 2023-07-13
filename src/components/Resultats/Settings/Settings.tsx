import classNames from 'classnames';
import { useState } from 'react';
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

  return (
    <div className="settings">
      <label htmlFor="settings-panel">Trier et filtrer</label>
      <input
        type="checkbox"
        className="settings-checkbox"
        name="checkbox"
        id="settings-panel"
        onChange={handleOpenSettings}
        checked={isOpen}
      />
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
          />
        </div>
        <div>
          <span>Filtrer par accessibilité</span>
          <input type="checkbox" name="pmr" id="pmr" />
          <label htmlFor="pmr">Accessible PSH / PMR</label>
          <input type="checkbox" name="animals" id="animals" />
          <label htmlFor="animals">Animaux acceptés</label>
        </div>
        <div>
          <label htmlFor="distance"> Filtrer par distance</label>
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
          <span> Jusqu&apos;à {distanceValue}km</span>
        </div>
        <div>
          <span>Filtrer par catégories</span>
          <div>
            <input type="checkbox" name="acceuil" id="acceuil" />
            <label htmlFor="acceuil"> Accueil et orientation</label>
            <input
              type="checkbox"
              name="permanences-sociales"
              id="permanences-sociales"
            />
            <label htmlFor="permanences-sociales">Permanences sociales</label>
            <input
              type="checkbox"
              name="Accueils-de-jour"
              id="Accueils-de-jour"
            />
            <label htmlFor="Accueils-de-jour">Accueils de jour</label>
            <input type="checkbox" name="bagagerie" id="bagagerie" />
            <label htmlFor="bagagerie">Bagagerie</label>
            <input type="checkbox" name="manger" id="manger" />
            <label htmlFor="manger">Manger</label>
            <input type="checkbox" name="aide-juridique" id="aide-juridique" />
            <label htmlFor="aide-juridique">Aide juridique</label>
            <input
              type="checkbox"
              name="permanences-telephoniques"
              id="permanences-telephoniques"
            />
            <label htmlFor="permanences-telephoniques">
              Permanences téléphoniques
            </label>
            <input type="checkbox" name="femmes" id="femmes" />
            <label htmlFor="femmes">Femmes</label>
            <input type="checkbox" name="enfance" id="enfance" />
            <label htmlFor="enfance">Enfance</label>
            <input type="checkbox" name="lgbtqia" id="lgbtqia" />
            <label htmlFor="lgbtqia">LGBTQIA+</label>
            <input
              type="checkbox"
              name="retablissement-des-liens"
              id="retablissement-des-liens"
            />
            <label htmlFor="retablissement-des-liens">
              Rétablissement des liens
            </label>
            <input type="checkbox" name="sante" id="sante" />
            <label htmlFor="sante">Santé</label>
            <input type="checkbox" name="covid19" id="covid19" />
            <label htmlFor="covid19">COVID 19</label>
            <input
              type="checkbox"
              name="travail-du-sexe"
              id="travail-du-sexe"
            />
            <label htmlFor="travail-du-sexe">Travail du sexe</label>
            <input type="checkbox" name="selaver" id="selaver" />
            <label htmlFor="selaver">Se laver / Laverie</label>
            <input
              type="checkbox"
              name="apprendre-le-francais"
              id="apprendre-le-francais"
            />
            <label htmlFor="apprendre-le-francais">Apprendre le français</label>
            <input type="checkbox" name="informatique" id="informatique" />
            <label htmlFor="informatique">Informatique & numérique</label>
            <input
              type="checkbox"
              name="lieux-culturels"
              id="lieux-culturels"
            />
            <label htmlFor="lieux-culturels">Lieux culturels</label>
            <input type="checkbox" name="activite" id="activite" />
            <label htmlFor="activite">Activités</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
