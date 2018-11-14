import React, { Component } from "react"
import facade from './apiFacade';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import Welcome from './Welcome';
import Endpoint1 from './Endpoint1';

class LoggedIn extends Component {
  constructor(props) {
    super(props);
  }


  logout = () => {
    this.props.logout();
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <NavLink className="navbar-brand" exact to="/">CA3</NavLink>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Welcome</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/endpoint1">Endpoint 1</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="#">Endpoint 2</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="#">Endpoint 3</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="#">Endpoint 4</NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Route exact path="/" component={Welcome} />
          <Route path="/endpoint1" render={() => <Endpoint1 ApiFacade={facade} />} />

        </div>
      </Router>
    )
  }
}

export default LoggedIn;