import React from "react";

class Endpoint1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { people: [] };
    }

    componentDidMount = async () => {
        this.update();
    }

    update = async () => {
        const json = await this.props.ApiFacade.fetchData("/api/sw/people", false);
        this.setState({ people: json.results });
        console.log(this.state.people);
        console.log(this.state.people.results);
    }


    render() {
        return <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Birth year</th>
                        <th>Home world</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.people.map((el) =>

                        <tr>
                            <td>{el.name}</td>
                            <td>{el.height}</td>
                            <td>{el.mass}</td>
                            <td>{el.birth_year}</td>
                            <td>{el.homeworld}</td>
                        </tr>
                    )
                    }</tbody>
            </table>
        </div>
    }
}

export default Endpoint1;