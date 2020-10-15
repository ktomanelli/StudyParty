import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
// import ProfilePage from "./Pages/ProfilePage";
// import PasswordReset from "./PasswordReset";
import Main from './Pages/Main/Main'
import { UserContext } from './Providers/UserProvider'


function Application() {

  const user = useContext(UserContext);

  return (
    <div className="Application">
      {user
        ?
        <Main />
        :
        <Router>
          <Switch>
            <Route exact path="/signUp">
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

export default Application;
