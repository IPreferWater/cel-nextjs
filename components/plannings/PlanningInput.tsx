import {IPlanningEvent} from '@/interfaces/index'

type PlanningInputProps = {
    field: string
    event: any
    indexDay: number
    indexEvent: number
    handleChangePlaning: functionChanglePlanning
    options: Array<string>
}

type functionChanglePlanning = (indexDay: number, indexEvent: number, parameter: string) => any;

export function PlanningInput({ field, event, indexDay, indexEvent, handleChangePlaning, options }:PlanningInputProps) {


    return (

        <section>
            <label> {field} :
<input className='border border-slate-500' type="text" value={event[field] || ""} onChange={handleChangePlaning(indexDay, indexEvent, field)} />
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