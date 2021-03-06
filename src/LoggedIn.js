import React, { Component } from "react"
import facade from './apiFacade';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Welcome from './Welcome';
import Endpoint1 from './Endpoint1';
import Endpoint2 from './Endpoint2';
import Endpoint3 from './Endpoint3';
import Endpoint4 from './Endpoint4';

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  logout = () => {
    this.props.logout();
  }

  render() {
    console.log(this.props)
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
                    <NavLink className="nav-link" to="/endpoint2">Endpoint 2</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/endpoint3">Endpoint 3</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/endpoint4">Endpoint 4</NavLink>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item"><h2 style={{ color: "#ffffff" }}>{this.props.username}</h2></li>
                  <li className="nav-item">
                    <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Route exact path="/" render={() => <Welcome username={this.props.username} />} />
          <Route path="/endpoint1" render={() => <Endpoint1 ApiFacade={facade} />} />
          <Route path="/endpoint2" render={() => <Endpoint2 ApiFacade={facade} />} />
          <Route path="/endpoint3" render={() => <Endpoint3 ApiFacade={facade} />} />
          <Route path="/endpoint4" render={() => <Endpoint4 ApiFacade={facade} />} />

        </div>
      </Router>
    )
  }
}

export default LoggedIn;