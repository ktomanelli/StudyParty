import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import './Login.css';

class Login extends Component {

  render() {
    console.log(this.props.loggedIn)
    return (
      <div>
      <NavigationBar changeLoggedIn={this.props.changeLoggedIn} loggedIn={this.props.loggedIn} />
      <Container>
        <Jumbotron style={{backgroundColor: 'white'}}>
          <h1 className="main-title permanent-marker blue">StudyParty!</h1>
        </Jumbotron>
      </Container>
      </div>
    )
  }
}

export default Login;