import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';

class Main extends Component {

  render() {
    return (
      <div>
        <NavigationBar />
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