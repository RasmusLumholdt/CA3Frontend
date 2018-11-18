import React, { Component } from 'react';
import LogIn from './LogIn';
import facade from './apiFacade';
import LoggedIn from './LoggedIn';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { LoggedIn: false, username: "" }
  }

  login = (user, pass) => {
    facade.login(user, pass)
      .then(res => this.setState({ loggedIn: true, username: user }));
  }
  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  }
  render() {
    return (
      <div>
        {/*
            Den skal nok have et brugernavn med ind. en anden måde at starte en component på?
            */}
        {!this.state.loggedIn ? (<LogIn login={this.login} />) :
          (<div>
            
            <LoggedIn logout={this.logout} username={this.state.username} />
          </div>)}
      </div>
    );
  }
}

export default App;
