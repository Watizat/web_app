import { Schedule } from '../../../../@types/organism';
import './Schedule.scss';

interface SchedulesProps {
  schedule: Schedule[];
}

function Schedules({ schedule }: SchedulesProps) {
  const daysOfWeek: { [key: number]: string } = {
    1: 'Lundi',
    2: 'Mardi',
    3: 'Mercredi',
    4: 'Jeudi',
    5: 'Vendredi',
    6: 'Samedi',
    7: 'Dimanche',
  };

  function getOpeningHours(day: Schedule) {
    const openAm = day.opentime_am?.slice(0, -3);
    const closeAm = day.closetime_am?.slice(0, -3);
    const openPm = day.opentime_pm?.slice(0, -3);
    const closePm = day.closetime_pm?.slice(0, -3);

    const openMorning = openAm && closeAm;
    const openAfternoon = openPm && closePm;
    const closeAllDay = !openAm && !closeAm && !openPm && !closePm;
    const noLunchBreak = openAm && !closeAm && !openPm && closePm;

    if (openMorning && openAfternoon) {
      return `${openAm}/${closeAm} - ${openPm}/${closePm}`;
    }
    if (noLunchBreak) {
      return `${openAm}/${closePm}`;
    }

    if (!openMorning && openAfternoon) {
      return `Fermé - ${openPm}/${closePm}`;
    }

    if (openMorning && !openAfternoon) {
      return `${openAm}/${closeAm} - Fermé`;
    }

    if (closeAllDay) {
      return `${openAm}/${closeAm} - ${openPm}/${closePm}`;
    }
    return 'Fermé';
  }

  return (
    <article>
      <h3>Horaires</h3>
      <table className="organisme-infos--schedule">
        <tbody>
          {schedule.map((currentDay) => (
            <tr key={currentDay.day}>
              <td>
                <div>{daysOfWeek[currentDay.day]}</div>
              </td>
              <td>{getOpeningHours(currentDay)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

export default Schedules;
