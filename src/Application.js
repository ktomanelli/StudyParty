import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
// import ProfilePage from "./Pages/ProfilePage";
// import PasswordReset from "./PasswordReset";
import Main from './Pages/Main/Main'
import { UserContext } from './Providers/UserProvider'


function Application() {

  console.log(useContext(UserContext))
  const user = useContext(UserContext);
  console.log(user)

    return (
      <div className="Application">
        <Router>
          <Switch>
            <Route exact path="/">
              {user ? <Redirect to="/main" /> : <SignIn />}
            </Route>
            <Route exact path="/signUp">
              {user ? <Redirect to="/main" /> : <SignUp />}
            </Route>
            <Route exact path="/main">
              {!user ? <Redirect to="/" /> : <Main />}
            </Route>
            {/* <PasswordReset path="passwordReset" /> */}
          </Switch>
        </Router>
      </div>
    );
  }

export default Application;
