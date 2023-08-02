import { Schedule } from '../../../../@types/organism';
import { useAppSelector } from '../../../../hooks/redux';
import './Schedule.scss';

interface SchedulesProps {
  schedule: Schedule[];
  displayAll: boolean;
}

function Schedules({ schedule, displayAll }: SchedulesProps) {
  const days = useAppSelector((state) => state.organism.days);

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
      if (displayAll) {
        return 'Fermé';
      }
      return null;
    }
    return 'Fermé';
  }

  // Créer une copie du tableau avant de trier
  const orderedSchedule = schedule.map((objet) => ({ ...objet }));
  // Trier les objets par le jour (day) en ordre croissant
  orderedSchedule.sort((a, b) => a.day - b.day);

  return (
    <table className="schedules">
      <tbody>
        {orderedSchedule.map(
          (currentDay) =>
            getOpeningHours(currentDay) !== null && (
              <tr key={currentDay.day}>
                <td>
                  <div className="schedules-day">
                    {days.find((day) => day.numberday === currentDay.day)?.name}
                  </div>
                </td>
                <td>{getOpeningHours(currentDay)}</td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
}

export default Schedules;
