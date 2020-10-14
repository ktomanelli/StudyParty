import React, { Component } from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';

class Main extends Component {

  render() {
    console.log(this.props)
    return(
      <Container>
        <Jumbotron>
          <h1>Main page</h1>
          <Button onClick={this.props.changeLoggedIn}> Logout </Button>
        </Jumbotron>
      </Container>
    )
  }
}

export default Main;