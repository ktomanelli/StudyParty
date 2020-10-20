// import React and Router
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

// import components
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import Main from './Pages/Main/Main'
import About from './Pages/About/About'
import NavigationBar from './Components/NavigationBar/NavigationBar'

// import firebase auth
import { auth } from './firebase';

// import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  
  state = {
    user: null,
    displayNameFromForm: null,
  }

  componentDidMount() {
    auth.onAuthStateChanged(userAuth => {
      console.log(userAuth)
      this.setState({ user: userAuth },
        console.log(this.state))
    })
  }

  updateDisplayNameFromForm = (displayName) => {
    console.log(displayName)
    this.setState({
      displayNameFromForm: displayName,
    })
  }

  render() {
    return (
      <div className="Application">

        <NavigationBar displayName={this.state.displayNameFromForm} />

        <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
          <Switch>

            <Route exact path="/">
              {this.state.user ? <Redirect to="/main" /> : <SignIn />}
            </Route>

            <Route exact path="/signUp"
              render={props => (
                this.state.user ? <Redirect to="/main" /> : <SignUp updateDisplayNameFromForm={this.updateDisplayNameFromForm} />
              )}
            />

            <Route exact path="/main">
              {!this.state.user ? <Redirect to="/" /> : <Main />}
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
