import { Organism } from '../../../../@types/organism';
import './Schedule.scss';

function Schedule({ schedules }: Organism) {
  function getDayofWeek(dayNumber: 0 | 1 | 2 | 3 | 4 | 5 | 6): string {
    const daysofWeek = [
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
      'Dimanche',
    ];
    return daysofWeek[dayNumber];
  }
  console.log(schedules);
  return (
    <article>
      <h3>Horaires</h3>
      <table className="organisme-infos--schedule">
        {schedules.map((schedule) => (
          <tr key={schedule.day}>
            <td className="organisme-infos--schedule-day">
              {getDayofWeek(schedule.day)}
            </td>
            <td>
              <span>
                {' '}
                {schedule.opentime_am}/{schedule.closetime_am}{' '}
              </span>
              <span>
                {schedule.opentime_pm}/{schedule.closetime_pm}{' '}
              </span>
            </td>
          </tr>
        ))}
      </table>
    </article>
  );
}

export default Schedule;
