function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
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

    handleChangeType = (e) => {
        // this.setState({ year: e.target.value });
    }

    handleChangeTypeSelect = (index) => (e) => {
        console.log(e.target.value)
        console.log(index)
     
        this.setState({ year: e.target.value });
       };

    render() {
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

                    <div>
                        <label> type :
                        <input type="text" value={dayPlanning.type} onChange={this.handleChangeType} />
                        </label>
                        <select name="type" onChange={this.handleChangeTypeSelect(i)}  value={this.state.planning[i].type}>
                        <option value="choose">--SELECT TYPE--</option>
                            <option value="access libre">access libre</option>
                            <option value="projet libre">projet libre</option>
                            <option value="cours enfants">cours enfants</option>
                            <option value="cours ados">cours ados</option>
                            <option value="cours adultes">cours adultes</option>
                        </select>
                    </div>



                        <label> start :
                        <input type="text" value={dayPlanning.start} onChange={this.handleChangeType} />
                        </label>
                    </div>
                )}


            </div>
        )
    }
}