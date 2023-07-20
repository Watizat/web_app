import './Modal.scss';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalService({ setIsActive }: ModalProps) {
  const categories = [
    {
      tag: 'accueil-et-orientation',
    },
    {
      tag: 'permanences-sociales',
    },
    {
      tag: 'accueil-de-jour',
    },
    {
      tag: 'bagagerie',
    },
    {
      tag: 'manger',
    },
    {
      tag: 'aide-juridique',
    },
    {
      tag: 'permanences-telephoniques',
    },
    {
      tag: 'femmes',
    },
    {
      tag: 'enfance',
    },
    {
      tag: 'lgbtqia',
    },
    {
      tag: 'retablissement-des-liens',
    },
    {
      tag: 'sante',
    },
    {
      tag: 'covid19',
    },
    {
      tag: 'travail-du-sexe',
    },
    {
      tag: 'se-laver-laverie',
    },
    {
      tag: 'apprendre-francais',
    },
    {
      tag: 'informatique-numerique',
    },
    {
      tag: 'lieux-culturels',
    },
    {
      tag: 'activites',
    },
  ];

  const hours = [
    {
      name: 'Lundi',
      open_am: '09h00',
      close_am: '12h00',
      open_pm: '14h00',
      close_pm: '17h00',
    },
    {
      name: 'Mardi',
      open_am: '09h00',
      close_am: '12h00',
      open_pm: '14h00',
      close_pm: '17h00',
    },
    {
      name: 'Mercredi',
      open_am: '09h00',
      close_am: '12h00',
      open_pm: '14h00',
      close_pm: '17h00',
    },
    {
      name: 'Jeudi',
      open_am: '09h00',
      close_am: '12h00',
      open_pm: '14h00',
      close_pm: '17h00',
    },
    {
      name: 'Vendredi',
      open_am: '09h00',
      close_am: '12h00',
      open_pm: '14h00',
      close_pm: '17h00',
    },
    {
      name: 'Samedi',
      open_am: '09h00',
      close_am: '12h00',
      open_pm: '14h00',
      close_pm: '17h00',
    },
    {
      name: 'Dimanche',
      open_am: '09h00',
      close_am: '12h00',
      open_pm: '14h00',
      close_pm: '17h00',
    },
  ];
  return (
    <div className="modal">
      <div className="modal-main">
        <h1 className="modal-title">Ajouter un service</h1>
        <form className="modal-list">
          <div className="modal-case">
            <h4 className="modal-case__title">Catégorie</h4>

            <label className="modal-contact__actu">
              Catégorie du service
              <select
                name="actualisation"
                defaultValue="accueil-et-orientation"
              >
                {categories.map((i) => (
                  <option key={i.tag} value={i.tag}>
                    {i.tag}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Type de service·s proposé·s</h4>
            <input
              className="modal-case__inputTxt"
              type="text"
              value="Petits déjeuners, boissons chaudes"
            />
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Horaires</h4>
            <table className="modal-data__hours">
              <thead className="modal-data__hoursHead">
                <td>Jours</td>
                <td colSpan={3}>Matin</td>
                <td />
                <td colSpan={3}>Aprés-midi</td>
              </thead>
              {hours.map((e) => (
                <tr key={e.name} className="modal-data__hoursLine">
                  <td className="modal-data__hoursDay">
                    <span>{e.name}</span>
                  </td>
                  <td className="modal-data__hoursHour">
                    <input
                      value={e.open_am}
                      className="modal-data__hoursInput"
                    />
                  </td>
                  <td className="modal-data__hoursSeparater">-</td>
                  <td className="modal-data__hoursTd">
                    <input
                      value={e.close_am}
                      className="modal-data__hoursInput"
                    />
                  </td>
                  <td className="modal-data__hoursSeparater">/</td>
                  <td className="modal-data__hoursTd">
                    <input
                      value={e.open_pm}
                      className="modal-data__hoursInput"
                    />
                  </td>
                  <td className="modal-data__hoursSeparater">-</td>
                  <td className="modal-data__hoursTd">
                    <input
                      value={e.close_pm}
                      className="modal-data__hoursInput"
                    />
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Description</h4>
            <textarea
              className="modal-case__textarea"
              value="Fermeture le troisième dimanche de la quatrième année du calendrier maya postcolonial si y'a pas grève à la SNCF"
            />
          </div>
        </form>
        <div className="modal-actions">
          <button
            type="button"
            className="btn btn-danger btn-flat modal-actions__close"
          >
            Supprimer
          </button>
          <button
            type="button"
            className="btn btn-warning btn-flat modal-actions__close"
            onClick={() => setIsActive(false)}
          >
            Annuler
          </button>
          <button
            type="button"
            className="btn btn-sucess btn-flat modal-actions__save"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalService;
