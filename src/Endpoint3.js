import React from "react";

class Endpoint3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: "" };
    }
    componentDidMount = async () => {
        const json = await this.props.ApiFacade.fetchData("/api/roles/user", true);
        this.setState({ data: json });
    }

    render() {
        return <div className="container">
            <h1>{this.state.data}</h1>
        </div>
    }
}

export default Endpoint3;