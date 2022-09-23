import {IPlanningEvent} from '@/interfaces/index'

type PlanningInputProps = {
    field: string
    event: IPlanningEvent
    indexDay: number
    indexEvent: number
    handleChangePlaning: GreetFunction
    options: Array<string>
}

type GreetFunction = (indexDay: number, indexEvent: number, parameter: string) => void;

export function PlanningInput({ field, event, indexDay, indexEvent, handleChangePlaning, options }:PlanningInputProps) {


    return (

        <section>
            <label> {field} :
<input type="text" value={event[field] || ""} onChange={handleChangePlaning(indexDay, indexEvent, field)} />
            </label>
            <select name={field} onChange={handleChangePlaning(indexDay, indexEvent, field)} value={event[field]}>
                <option value="choose">--SELECT {field}--</option>
                {options.map((value, index) =>
                    <option key={index} value={value}>{value}</option>
                )}
            </select>
        </section>
    );
}