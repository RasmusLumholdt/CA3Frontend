import React, { Component } from 'react';
import LogIn from './LogIn';
import facade from './apiFacade';
import LoggedIn from './LoggedIn';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { LoggedIn: false }
  }

  login = (user, pass) => {
    facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true }));
  }
  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  }
  render() {
    return (
      <div>
        {!this.state.loggedIn ? (<LogIn login={this.login} />) :
          (<div>
            <LoggedIn logout={this.logout} />
          </div>)}
      </div>
    );
  }
}

export default App;
