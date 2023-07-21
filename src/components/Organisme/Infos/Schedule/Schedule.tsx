import './Schedule.scss';

function Schedule() {
  return (
    <article>
      <h3>Horaires</h3>
      <table className="organisme-infos--schedule">
        <tr>
          <td className="organisme-infos--schedule-day">Lundi</td>
          <td>
            <span>9h-12h</span>/<span>14h-16h</span>
          </td>
        </tr>
        <tr>
          <td className="organisme-infos--schedule-day">Mardi</td>
          <td>
            <span>9h-12h</span>/<span>14h-16h</span>
          </td>
        </tr>
        <tr>
          <td className="organisme-infos--schedule-day">Mercredi</td>
          <td>
            <span>9h-12h</span>/<span>14h-16h</span>
          </td>
        </tr>
        <tr>
          <td className="organisme-infos--schedule-day">Jeudi</td>
          <td>
            <span>9h-12h</span>/<span>14h-16h</span>
          </td>
        </tr>
        <tr>
          <td className="organisme-infos--schedule-day">Vendredi</td>
          <td>
            <span>9h-12h</span>/<span>14h-16h</span>
          </td>
        </tr>
        <tr>
          <td className="organisme-infos--schedule-day">Samedi</td>
          <td>
            <span>Fermé</span>
          </td>
        </tr>
        <tr>
          <td className="organisme-infos--schedule-day">Dimanche</td>
          <td>
            <span>Fermé</span>
          </td>
        </tr>
      </table>
    </article>
  );
}

export default Schedule;
