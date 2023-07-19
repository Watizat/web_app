import './Modal.scss';

interface ModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalData({ setIsActive }: ModalProps) {
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
        <h1 className="modal-title">Informations génerales</h1>
        <form className="modal-list">
          <div className="modal-case">
            <h4 className="modal-case__title">Accés</h4>
            <div className="modal-data__accessDetails">
              <label className="modal-data__pmr">
                <input type="checkbox" />
                Accessible PSH /PMR
              </label>
              <label className="modal-data__animals">
                <input type="checkbox" />
                Animaux admis
              </label>
            </div>
          </div>
          <div className="modal-case">
            <h4 className="modal-case__title">Description</h4>
            <textarea
              className="modal-case__textarea"
              value="Écoute, renseignement et orientation pour les personnes sans domicile fixe n’ayant pas de référent social. Service social public qui apporte une aide ponctuelle sur les besoins de première nécessité et l'accès aux droits. Pour assurer un suivi, une orientation vers un référent social aura lieu."
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
                    <span className={`modal-data__${e.dayType}`}>{e.name}</span>
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
            <h4 className="modal-case__title">Infos, alerte</h4>
            <textarea
              className="modal-case__textarea"
              value="Fermeture le troisième dimanche de la quatrième année du calendrier maya postcolonial si y'a pas grève à la SNCF"
            />
          </div>
        </form>
        <div className="modal-actions">
          <button
            type="button"
            className="btn btn-danger-fill btn-flat modal-actions__close"
            onClick={() => setIsActive(false)}
          >
            Annuler
          </button>
          <button
            type="button"
            className="btn btn-sucess-fill btn-flat modal-actions__save"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalData;
