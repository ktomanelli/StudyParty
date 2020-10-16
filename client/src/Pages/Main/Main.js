import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

class Main extends Component {

  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1>Main page</h1>
          </Jumbotron>
        </Container>
      </div>
    )
  }
}

export default Main;