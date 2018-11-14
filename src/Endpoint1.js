import React from "react";

class Endpoint1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: "" };
    }

    componentDidMount = async () => {
        this.props.ApiFacade.fetchData("").then(res => this.setState({ data: res }));
    }

    render() {
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

                    {this.data.map((user) =>
                        <tr key={user.name}>
                            <td>{user.name}</td>
                            <td>{user.height}</td>
                            <td>{user.mass}</td>
                            <td>{user.birth_year}</td>
                            <td>{user.gender}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    }
}

export default Endpoint1;