import React, { Component } from "react"
import facade from './apiFacade';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import Welcome from './Welcome';
import Endpoint1 from './Endpoint1';

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { dataFromServer: "Fetching!!" };
  }
  componentDidMount() {
    facade.fetchData().then(res => this.setState({ dataFromServer: res }));
  }
  render() {
    return (
      <Router>
        <div>




          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <NavLink className="navbar-brand" exact to="/">CA2</NavLink>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <NavLink className="nav-link" exact to="/">Welcome</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" to="/endpoint1">Endpoint 1</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" to="#">Endpoint 2</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink className="nav-link" to="#">Endpoint 3</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="#">Endpoint 4</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Route exact path="/" component={Welcome} />
          <Route path="/endpoint1" component={Endpoint1} />

        </div>

      </Router>
    )
  }
}

export default LoggedIn;