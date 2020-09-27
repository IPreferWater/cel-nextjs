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

    deleteEvent = (indexDay, indexEvent) => (e) => {
        e.preventDefault();
        let newArray = [...this.state.planning]
        let elem = newArray[indexDay].events
        elem.splice(indexEvent, 1);

        this.setState({
            planning: newArray,
        });
    }

    addEvent = (indexDay) => (e) => {
        e.preventDefault();
        let newArray = [...this.state.planning]
        newArray[indexDay].events.push({ type: "", start: "", end: "" })
        this.setState({
            planning: newArray,
        });
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

    handleChangePlaning = (indexDay, indexEvent, parameter) => (e) => {
        let newArray = [...this.state.planning]
        const value = e.target.value
        let elem = newArray[indexDay].events[indexEvent]
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


    addParticipants = (indexDay, indexEvent) => (e) => {
        e.preventDefault();
        let newArray = [...this.state.planning]
        let elem = newArray[indexDay].events[indexEvent]

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

    copyToClipboard = (e) => {
        e.preventDefault();
        const copyText = "blaaaaaaa"
        copyText.select();
        document.execCommand("copy");
    };

    render() {

        const availableType = ["access libre", "projet libre", "cours enfants", "cours ados", "cours adultes"]
        const availableHours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

        return (
            <div className="flex flex-row">
                <div className="w-1/2">
                    <button onClick={this.handleClick}>+</button>
                    <label> month :
          <input type="text" value={this.state.month} onChange={this.handleChangeMonth} />
                    </label>
                    <label> year :
          <input type="text" value={this.state.year} onChange={this.handleChangeYear} />
                    </label>

                    {this.state.planning.map((dayPlanning, indexDay) =>

                        <div key={indexDay} className="flex flex-col mb-8">
                            <h2>{`day ${indexDay}`}</h2>
                            {dayPlanning.events.map((event, indexEvent) =>
                                <div key={`${indexDay}_${indexEvent}`}>

                                    <button className={`p-2 bg-beach-red`} onClick={this.deleteEvent(indexDay, indexEvent)} type="button">X</button>

                                    <section>
                                        <label> type :
                        <input type="text" value={event.type || ""} onChange={this.handleChangePlaning(indexDay, indexEvent, "type")} />
                                        </label>
                                        <select name="type" onChange={this.handleChangePlaning(indexDay, indexEvent, "type")} value={this.state.planning[indexDay].type}>
                                            <option value="choose">--SELECT TYPE--</option>
                                            {availableType.map((type, indexType) =>
                                                <option key={indexType} value={type}>{type}</option>
                                            )}
                                        </select>
                                    </section>

                                    <section>
                                        <label> start :
                        <input type="text" value={event.start || ""} onChange={this.handleChangePlaning(indexDay, indexEvent, "start")} />
                                        </label>
                                        <select name="type" onChange={this.handleChangePlaning(indexDay, indexEvent, "start")} value={this.state.planning[indexDay].type}>
                                            <option value="choose">--SELECT START HOUR--</option>
                                            {availableHours.map((hour, indexHours) =>
                                                <option key={indexHours} value={`${hour}h`}>{hour}</option>
                                            )}
                                        </select>
                                    </section>

                                    <section>
                                        <label> end :
                        <input type="text" value={event.end || ""} onChange={this.handleChangePlaning(indexDay, indexEvent, "end")} />
                                        </label>
                                        <select name="type" onChange={this.handleChangePlaning(indexDay, indexEvent, "end")} value={this.state.planning[indexDay].type}>
                                            <option value="choose">--SELECT END HOUR--</option>
                                            {availableHours.map((hour, indexHours) =>
                                                <option key={indexHours} value={`${hour}h`}>{hour}</option>
                                            )}
                                        </select>
                                    </section>

                                    <section>
                                        <label> label :
                        <input type="text" value={event.label || ""} onChange={this.handleChangePlaning(indexDay, indexEvent, "label")} />
                                        </label>
                                    </section>

                                    <div>
                                        <button className={`p-4 ${participantsIsNull(event) ? "bg-beach-green" : "bg-beach-red"}`} onClick={this.addParticipants(indexDay, indexEvent)} type="button">trigger participants</button>
                                        {!participantsIsNull(event) &&
                                            <div className="flex flex-col">
                                                <label>max participants :
                                                            <input type="number" value={event.participants.max} onChange={this.handleChangePlaning(indexDay, indexEvent, "participants-max")} />
                                                </label>

                                                <label>booked participants :
                                                            <input type="number" value={event.participants.booked} onChange={this.handleChangePlaning(indexDay, indexEvent, "participants-booked")} />
                                                </label>
                                            </div>
                                        }
                                    </div>
                                    <button className={`p-2 bg-beach-green`} onClick={this.addEvent(indexDay, indexEvent)} type="button">+</button>

                                </div>
                            )}
                        </div>

                    )}

                    <div>
                        <button onClick={this.copyToClipboard}>copy json file</button>
                        {this.state.copySuccess}
                    </div>
                </div>

                <div className="w-1/2">
                    <h2>file : {"filename_todo.json"}</h2>

                    <pre>{JSON.stringify(this.state.planning, null, 2)}</pre>
                </div>
            </div>
        )
    }
}