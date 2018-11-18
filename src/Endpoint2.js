import React from "react";

class Endpoint1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: "", nextPage: 2 };
    }

    componentDidMount = async () => {
        this.props.ApiFacade.fetchData("http://localhost:8084/CA3-Backend/api/sw/people/?page=1").then(res => this.setState({ data: res }));
    }
    getNextPage = async () => {
        this.props.ApiFacade.fetchData("http://localhost:8084/CA3-Backend/api/sw/people/?page=" + this.state.nextPage).then(res => this.setState({ data: res }));
        this.setState({ nextPage: this.state.nextPage + 1 });

    }

    update = async () => {
        const json = await this.props.ApiFacade.fetchData("/api/sw/people", false);
        this.setState({ people: json.results });
        console.log(this.state.people);
        console.log(this.state.people.results);
    }


    render() {
        console.log(this.state.data.results);
        console.log(this.state.nextPage);
        if (this.state.data === "") {
            return <h1>Loading...</h1>;
        }
        else {
            return <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Height</th>
                            <th scope="col">Mass</th>
                            <th scope="col">Birth year</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.data.results.map((user) =>
                            <tr key={user.name}>
                                <td>{user.name}</td>
                                <td>{user.height}</td>
                                <td>{user.mass}</td>
                                <td>{user.birth_year}</td>
                                <td>{user.gender}</td>
                            </tr>)}
                    </tbody>
                </table>
                <a href="#" onClick={() => this.getNextPage(this.state.page)}>Next</a>
                <p>Page {this.state.nextPage - 1}</p>

            </div>
        }


    }
}

export default Endpoint1;