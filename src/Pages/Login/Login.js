import React, { Component } from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';

class Login extends Component {

  render() {
    console.log(this.props.loggedIn)
    return (
      <Container>
        <Jumbotron>
          <h1>Login</h1>
          <Button onClick={this.props.changeLoggedIn}> Login </Button>
        </Jumbotron>
      </Container>
    )
  }
}

export default Login;