import {IPlanningDay, IPlanningParticipants} from '@/interfaces/index'

type PlanningDayProps = {
    day: IPlanningDay
    id: string
    dayNumber: number
}
  
  export function PlanningDay({day, id, dayNumber}:PlanningDayProps) {

    function getColorType(type:string) {
        switch (type) {
          case 'cours enfants':
            return "bg-pink-300"
          case 'cours adultes':
            return "bg-yellow-200"
          case 'cours ados':
            return "bg-blue-200"
          case 'access libre':
            return "bg-green-200"
          case 'projet libre':
            return "bg-purple-200"
          case 'absent':
            return "bg-red-100"
          case 'cours particulier':
            return "bg-pink-200"
          default:
            return "bg-orange-300"
        }
      }
      
      function getParticipants(participants?: IPlanningParticipants) {
        if (null == participants) {
          return ""
        }
        const available = participants.max - participants.booked
        if (available == 0) {
          return `COMPLET`
        }
        return `${available} places`
      }
      
      function getLabelDayWithID() {
        const dateArr = id.split('_');
        return getLabelDay(dateArr[0], dateArr[1]);
      }

      function getLabelDay(year:string, month:string) {
        var date = new Date(`${year}/${month}/${dayNumber}`);
        return date.toLocaleDateString("fr-FR", { weekday: 'long' });
      }
    
    return (<div className="min-h-200 min-w-200 rounded overflow-hidden shadow-lg relative">
  
      <div className="px-6 py-4 pb-16">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-xl mb-2">
             {getLabelDayWithID()} {dayNumber}
          </div>
          <div className="text-xs"></div>
        </div>
  
        <ul className={`min-h-32 min-w-32`}>
          {day.events.map((event, i) =>
            <li key={i} className={`flex flex-col text-center rounded-lg text-beach-grey p-2 mb-2 ${getColorType(event.type)}`}>
              <span className={`font-semibold`}>
                {event.type} {event.start} - {event.end}
              </span>
              <span>{event.label} {getParticipants(event.participants)}</span>
            </li>
          )}
        </ul>
      </div>
    </div>)
  }