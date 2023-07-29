import { Schedule } from '../../../@types/organism';
import './Schedules.scss';

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

  // Le tableau a maintenant été trié par la propriété 'day' du plus petit au plus grand
  function comparerParDay(a: { day: number }, b: { day: number }) {
    return a.day - b.day;
  }

  function getOpeningHours(day: Schedule) {
    const openAm = day.opentime_am?.slice(0, -3).replace(':', 'h');
    const closeAm = day.closetime_am?.slice(0, -3).replace(':', 'h');
    const openPm = day.opentime_pm?.slice(0, -3).replace(':', 'h');
    const closePm = day.closetime_pm?.slice(0, -3).replace(':', 'h');

    const openMorning = openAm && closeAm;
    const openAfternoon = openPm && closePm;
    const closeAllDay = !openAm && !closeAm && !openPm && !closePm;
    const noLunchBreak = openAm && !closeAm && !openPm && closePm;

    if (openMorning && openAfternoon) {
      return `${openAm} à ${closeAm} et ${openPm} à ${closePm}`;
    }
    if (noLunchBreak) {
      return `${openAm} à ${closePm}`;
    }

    if (!openMorning && openAfternoon) {
      return `${openPm} à ${closePm}`;
    }

    if (openMorning && !openAfternoon) {
      return `${openAm} à ${closeAm}`;
    }

    if (closeAllDay) {
      return 'Fermé';
    }
    return 'Fermé';
  }

  return (
    <table className="schedules">
      <tbody>
        {schedule
          .slice()
          .sort(comparerParDay)
          .map((currentDay) => (
            <tr key={currentDay.day}>
              <td>
                <div>{daysOfWeek[currentDay.day]}</div>
              </td>
              <td>{getOpeningHours(currentDay)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Schedules;
