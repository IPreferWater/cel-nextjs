
function getColorType(type){
  switch (type) {
    case 'Oranges':
      return "bg-gray-200"
    default:
      return "bg-gray-200"
  }
}

function getParticipants(participants){
  if ( null == participants ){
    return ""
  }
  return `${participants.booked} / ${participants.max} places`
}

function getLabelDay(slug, day){
    console.log(slug)
    const dateArr = slug.split('_');
    var date = new Date(`${dateArr[0]}/${dateArr[1]}/${day}`);
    return date.toLocaleDateString("fr-FR", { weekday: 'long' });        
}

export function PlanningDay({data, slug}) {
  return(<div className="min-h-200 min-w-200 rounded overflow-hidden shadow-lg relative">

<div className="px-6 py-4 pb-16">
  <div className="flex flex-row justify-between">
    <div className="font-bold text-xl mb-2">
    {getLabelDay(slug, data.day)} {data.day}
      </div>
    <div className="text-xs">{getParticipants(data.participants)}</div>
    </div>
    <ul className="min-h-32 min-w-32">
    {data.labels.map((label, i) =>
    <li key={i} className="text-gray-700 text-base">
      {label}
      </li>
    )}
    </ul>

      

  </div>
  <div className="absolute inset-x-0 bottom-0 px-6 pt-4 pb-2">
    <span className={`inline-block ${getColorType(data.type)} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>{`#${data.type}`}</span>
  </div>

  </div>)
}


