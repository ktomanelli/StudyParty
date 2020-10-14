import React, { Component } from 'react';
import './App.css';
import Login from './Pages/Login/Login'
import Main from './Pages/Main/Main'

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
          <Login changeLoggedIn={this.changeLoggedIn} {...this.state} />
          :
          <Main changeLoggedIn={this.changeLoggedIn} {...this.state}/>
        }
      </div>
    );
  }
}

export default App;
