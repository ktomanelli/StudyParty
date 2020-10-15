import React, { Component } from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';

class Main extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <NavigationBar changeLoggedIn={this.props.changeLoggedIn} loggedIn={this.props.loggedIn} />
        <Container>
          <Jumbotron>
            <h1>Main page</h1>
            <Button onClick={this.props.changeLoggedIn}> Logout </Button>
          </Jumbotron>
        </Container>
      </div>
    )
  }
}

export default Main;