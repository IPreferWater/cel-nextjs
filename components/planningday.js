import PropTypes from "prop-types";


function getColorType(type){
  switch (type) {
    case 'Oranges':
      return "bg-gray-200"
    default:
      return "bg-gray-200"
  }
}
export function PlanningDay({day}) {
  return(<div className="min-h-200 min-w-200 rounded overflow-hidden shadow-lg relative">

<div className="px-6 py-4 pb-16">
    <div className="font-bold text-xl mb-2">{day.day}</div>
    <ul className="min-h-32 min-w-32">
    {day.labels.map((label, i) =>
    <li key={i} className="text-gray-700 text-base">
      {label}
      </li>
    )}
    </ul>

  </div>
  <div className="absolute inset-x-0 bottom-0 px-6 pt-4 pb-2">
    <span className={`inline-block ${getColorType(day.type)} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>{`#${day.type}`}</span>
  </div>

  </div>)
}
 /* return (<div>
    <h1 className="text-2xl">{day.day}</h1>
    <h2 className="text-2xl">{day.type}</h2>
    <ul>
    {day.labels.map((label, i) =>
    <li key={i}>{label}</li>
    )}
    </ul>
  </div> 
  );
} */
//PlanningDay.PropTypes.arrayOf(string)
/*PlanningDay.propTypes = {
  title: PropTypes.string,
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      benefits: PropTypes.string
    })
  )
};*/
/*PlanningDay.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string)
};*/


