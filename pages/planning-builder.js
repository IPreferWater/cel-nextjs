function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function participantsIsNull(elem) {
    if (elem.participants == null) {
        return true
    }
    return false
}

export default class PlanningBuilder extends React.Component {
    state = {
        month: "",
        year: "",
        file: {
            label: "label",
            color: "beach-green",

        },
        planning: []

    };

    componentDidMount() {
        const now = new Date()
        /*if (month <= 10) {
            month = `0${month}`
        }*/
        // const todayFileName = `${now.getFullYear()}_${month}.json`
        this.setState({ month: now.getMonth(), year: now.getFullYear() });
    }

    handleClick = (e) => {
        e.preventDefault();
        const nbrOfDays = getDaysInMonth(this.state.month, this.state.year)
        let planning = new Array(nbrOfDays)
        console.log(nbrOfDays)
        for (let i = 0; i < nbrOfDays; i++) {
            const dayPlanning = {
                day: i,
                events: [{ type: "", start: "", end: "" }]
            }
            planning[i] = dayPlanning
        }
        this.setState({ planning: planning });

    }

    handleChangeMonth = (e) => {
        this.setState({ month: e.target.value });
    }
    handleChangeYear = (e) => {
        this.setState({ year: e.target.value });
    }

    handleChangeType = (index) => (e) => {
        let newArray = [...this.state.planning]
        newArray[index].type = e.target.value

        this.setState({
            planning: newArray,
        });
    }

    handleChangePlaning = (index, parameter) => (e) => {
        let newArray = [...this.state.planning]
        const value = e.target.value
        let elem = newArray[index]
        switch (parameter) {
            case 'type':
                elem.type = value
                break;
            case 'start':
                elem.start = value
                break;
            case 'stop':
                elem.stop = value
                break;
            case 'label':
                elem.label = value
                break;
            case 'participants-max':
                elem.participants.max = value
                break;
            case 'participants-booked':
                elem.participants.booked = value
                break;
            default:
                console.log(`Sorry, we are out of ${expr}.`);
        }
        this.setState({
            planning: newArray,
        });
    }


    addParticipants = (index) => (e) => {
        e.preventDefault();
        let newArray = [...this.state.planning]
        let elem = newArray[index]

        if (participantsIsNull(elem)) {

            elem.participants = { max: 4, booked: 0 }
        } else {
            elem.participants = null
        }

        this.setState({
            planning: newArray,
        });
        console.log("ok")
    }

    render() {

        const availableType = ["access libre", "projet libre", "cours enfants", "cours ados", "cours adultes"]
        const availableHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

        return (
            <div>
                <button onClick={this.handleClick}>+</button>
                <label> month :
          <input type="text" value={this.state.month} onChange={this.handleChangeMonth} />
                </label>
                <label> year :
          <input type="text" value={this.state.year} onChange={this.handleChangeYear} />
                </label>

                {this.state.planning.map((dayPlanning, i) =>
                    <div key={i} className="flex flex-col mb-8" >
                            <h2>{`day ${i}`}</h2>
                        <section>
                            <label> type :
                        <input type="text" value={dayPlanning.type || ""} onChange={this.handleChangePlaning(i, "type")} />
                            </label>
                            <select name="type" onChange={this.handleChangePlaning(i, "type")} value={this.state.planning[i].type}>
                                <option value="choose">--SELECT TYPE--</option>
                                {availableType.map((type, i) =>
                                    <option key={i} value={type}>{type}</option>
                                )}
                            </select>
                        </section>

                        <section>
                            <label> start :
                        <input type="text" value={dayPlanning.start || ""} onChange={this.handleChangePlaning(i, "start")} />
                            </label>
                            <select name="type" onChange={this.handleChangePlaning(i, "start")} value={this.state.planning[i].type}>
                                <option value="choose">--SELECT START HOUR--</option>
                                {availableHours.map((hour, i) =>
                                    <option key={i} value={`${hour}h`}>{hour}</option>
                                )}
                            </select>
                        </section>

                        <section>
                            <label> stop :
                        <input type="text" value={dayPlanning.stop || ""} onChange={this.handleChangePlaning(i, "stop")} />
                            </label>
                            <select name="type" onChange={this.handleChangePlaning(i, "stop")} value={this.state.planning[i].type}>
                                <option value="choose">--SELECT STOP HOUR--</option>
                                {availableHours.map((hour, i) =>
                                    <option key={i} value={`${hour}h`}>{hour}</option>
                                )}
                            </select>
                        </section>

                        <section>
                            <label> label :
                        <input type="text" value={dayPlanning.label || ""} onChange={this.handleChangePlaning(i, "label")} />
                            </label>
                        </section>

                        <div>
                            <button className={`p-4 ${participantsIsNull(dayPlanning) ? "bg-beach-green" : "bg-beach-red"}`} onClick={this.addParticipants(i)} type="button">trigger participants</button>
                            { !participantsIsNull(dayPlanning) &&
                                <div className="flex flex-col">
                                    <label>max participants :
                                                            <input type="number" value={dayPlanning.participants.max} onChange={this.handleChangePlaning(i, "participants-max")} />
                                    </label>

                                    <label>booked participants :
                                                            <input type="number" value={dayPlanning.participants.booked} onChange={this.handleChangePlaning(i, "participants-booked")} />
                                    </label>
                                </div>
                            }

                        </div>
                    </div>
                )}


            </div>
        )
    }
}