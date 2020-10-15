import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
// import ProfilePage from "./Pages/ProfilePage";
// import PasswordReset from "./PasswordReset";
import Main from './Pages/Main/Main'
// importing react-boostrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
// import GoogleFont


class App extends Component {

  state = {
    loggedIn: false,
  }

  changeLoggedIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn
          ?
          <Main changeLoggedIn={this.changeLoggedIn} {...this.state} />
          :
          <Router>
            <Switch>
              <Route exact path="signUp">
                <SignUp />
              </Route>
              <Route exact path="/">
                <SignIn />
              </Route>
              {/* <PasswordReset path="passwordReset" /> */}
            </Switch>
          </Router>
        }
      </div>
    );
  }
}

export default App;
