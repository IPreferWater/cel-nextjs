import React from 'react'
import { PlanningInput } from '@/components/plannings/PlanningInput'
import { getLabelDay, getMonthLabelFromInt } from '@/utils/calendar'
import {IPlanning, IPlanningDay, IPlanningEvent} from '@/interfaces/index'

interface IStatePlanningCreation {
    month: string
    year: string
    showJsonFile: boolean
    days: Array<IPlanningDay>
  }

export default class PlanningCreation extends React.Component<IStatePlanningCreation> {

    state: IStatePlanningCreation = {
        month: "",
        year: "",
        showJsonFile: false,
        days: []

    };

    componentDidMount() {
        const now = new Date()
        this.setState({ month: now.getMonth()+1, year: now.getFullYear() });
    }


    getDaysInMonth(month:number, year:number) {
        return new Date(year, month, 0).getDate();
    }

    participantsIsNull(eveng: IPlanningEvent) {
        if (eveng.participants == null) {
            return true
        }
        return false
    }

    getJsonFileName() {
        let month = this.state.month
        const monthInt = parseInt(month)
        if (monthInt <= 10) {
            month = `0${month}`
        }
        return `${this.state.year}_${month}.json`
    }

    deleteEvent = (indexDay: number, indexEvent: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let newArray = [...this.state.days]
        let elem = newArray[indexDay].events
        elem.splice(indexEvent, 1);

        this.setState({
            days: newArray,
        });
    }

    addEvent = (indexDay: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let newArray = [...this.state.days]
        const emptyEvent :IPlanningEvent = {
            type: "",
            start: "",
            end: "",
            label: ""
        }
        newArray[indexDay].events.push(emptyEvent)
        this.setState({
            days: newArray,
        });
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const monthInt = parseInt(this.state.month)
        const yearInt = parseInt(this.state.year)
        const nbrOfDays = this.getDaysInMonth(monthInt, yearInt)
        let planning = new Array(nbrOfDays)

        for (let i = 0; i < nbrOfDays; i++) {
            const dayPlanning = {
                //array start at 0 but day at 1
                day: i + 1,
                events: [{ type: "", start: "", end: "" }]
            }
            planning[i] = dayPlanning
        }
        this.setState({ days: planning });

    }

    handleChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ month: e.target.value });
    }
    handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ year: e.target.value });
    }

    handleChangePlaning = (indexDay: number, indexEvent: number, parameter: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        let newArray = [...this.state.days]
        const value = e.target.value
        const elem = newArray[indexDay].events[indexEvent] as IPlanningEvent
        
        switch (parameter) {
            case 'type':
                elem.type = value
                break;
            case 'start':
                elem.start = value
                break;
            case 'end':
                elem.end = value
                break;
            case 'label':
                elem.label = value
                break;
            case 'participants-max':
                elem.participants!.max = parseInt(value)
                break;
            case 'participants-booked':
                elem.participants!.booked = parseInt(value)
                break;
            default:
                console.log(`Error handleChangePlaning can't find a value to set in event for input type ${parameter} with value ${value}.`);
        }
        this.setState({
            days: newArray,
        });
    }


    triggerParticipants = (indexDay: number, indexEvent: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let newArray = [...this.state.days]
        let elem = newArray[indexDay].events[indexEvent]

        if (this.participantsIsNull(elem)) {
            elem.participants = { max: 3, booked: 0 }
        } else {
            delete elem.participants
        }

        this.setState({
            planning: newArray,
        });
    }

    showJsonFile = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const previousShowJsonFile = this.state.showJsonFile
        this.setState(({
            showJsonFile: !previousShowJsonFile
        }))
    };

     downloadTxtFile = () => {
        const element = document.createElement("a");
        const planningToSave :IPlanning = {
            title: "TODO",
            days: this.state.days
        }
        const file = new Blob([JSON.stringify(planningToSave, null, 2)], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = this.getJsonFileName();
        document.body.appendChild(element);
        element.click();
      };

    render() {

        const availableHours = ["9h00", "10h00", "11h00", "12h00", "13h00", "14h00", "15h00", "15h30", "16h00", "17h00", "17h30", "18h00", "18h15", "19h00", "20h00"]
        const availableType = ["access libre", "projet libre", "cours enfants", "cours ados", "cours adultes", "atelier à theme", "cours particulier"]
        const availableLabel = ["Complet","Réservé","Libre"]


        return (
            <div>
                <section>
                    <button onClick={this.handleClick}>+</button>
                    <label className='text-2xl underline decoration-8 decoration-blue-500'> month : ({getMonthLabelFromInt(parseInt(this.state.month))})
          <input className='border border-slate-500' type="text" value={this.state.month} onChange={this.handleChangeMonth} />
                    </label>
                    <label> year :
          <input className='border border-slate-500' type="text" value={this.state.year} onChange={this.handleChangeYear} />
                    </label>

                    {this.state.days.map((day, indexDay) =>
                        <div key={indexDay} className="flex flex-row ">
                            <div className="flex flex-col mb-8 w-1/2">
                                <h2>{`${getLabelDay(this.state.year, this.state.month, indexDay+1)} - ${indexDay + 1}`}</h2>
                                {day.events.map((event, indexEvent) =>
                                    <div key={`event_${indexEvent}`}>
                                        <button className={`p-4 bg-red-300`} onClick={this.deleteEvent(indexDay, indexEvent)} type="button">X</button>
                                        <PlanningInput field="type" event={event} indexDay={indexDay} indexEvent={indexEvent} handleChangePlaning={this.handleChangePlaning} options={availableType} />
                                        <PlanningInput field="start" event={event} indexDay={indexDay} indexEvent={indexEvent} handleChangePlaning={this.handleChangePlaning} options={availableHours} />
                                        <PlanningInput field="end" event={event} indexDay={indexDay} indexEvent={indexEvent} handleChangePlaning={this.handleChangePlaning} options={availableHours} />
                                        <PlanningInput field="label" event={event} indexDay={indexDay} indexEvent={indexEvent} handleChangePlaning={this.handleChangePlaning} options={availableLabel} />
                                        <div>
                                            <button className={`p-4 ${this.participantsIsNull(event) ? "bg-blue-200" : "bg-orange-300"}`} onClick={this.triggerParticipants(indexDay, indexEvent)} type="button">trigger participants</button>
                                            {!this.participantsIsNull(event) &&
                                                <div className="flex flex-col">
                                                    <label>max participants :
                                                            <input type="number" value={event.participants!.max} onChange={this.handleChangePlaning(indexDay, indexEvent, "participants-max")} />
                                                    </label>

                                                    <label>booked participants :
                                                            <input type="number" value={event.participants!.booked} onChange={this.handleChangePlaning(indexDay, indexEvent, "participants-booked")} />
                                                    </label>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                )}
                                <button className={`p-2 bg-purple-200`} onClick={this.addEvent(indexDay)} type="button">+</button>

                            </div>
                            <div className='bg-green-200'>
                                <pre>{JSON.stringify(day, null, 2)}</pre>
                            </div>

                        </div>

                    )}
                </section>

                {this.state.showJsonFile &&
                    <section className="bg-red-200">
                        <h2>file : {this.getJsonFileName()}</h2>
                        <pre>{JSON.stringify(this.state.days, null, 2)}</pre>
                    </section>}

                    <div>
      <button className='p-4 bg-red-400 text-white' onClick={this.downloadTxtFile}>Telecharger le planning en json</button>
    </div>
            </div>
        )
    }
}