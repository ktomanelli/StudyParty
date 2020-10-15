import React, { Component } from 'react';
import { Container, Jumbotron, Button, Form } from 'react-bootstrap';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    displayName: "",
    error: null,
  }

  signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault()
  }

  onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      this.setState({
        email: value
      })
    } else if (name === 'userPassword') {
      this.setState({
        password: value
      })
    } else if (name === 'displayName') {
      this.setState({
        displayName: value
      })
    }
  }

  render() {
    console.log(this.props.loggedIn)
    return (
      <div>
        <NavigationBar changeLoggedIn={this.props.changeLoggedIn} loggedIn={this.props.loggedIn} />
        <Container>

          <Jumbotron style={{ backgroundColor: 'white', marginBottom: '0px' }}>
            <h1 className="main-title permanent-marker blue">StudyParty!</h1>
          </Jumbotron>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Form>
              <Form.Group controlId="userName">
                <Form.Label>Display name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" name="displayName" value={this.state.displayName} onChange={(event) => this.onChangeHandler(event)} />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
              </Form.Group>

              <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="userEmail" value={this.state.email} onChange={(event) => this.onChangeHandler(event)} />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="userPassword" value={this.state.password} onChange={(event) => this.onChangeHandler(event)} />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Sign Up
            </Button>
              <div style={{ margin: '40px 0px' }}>
                <p className="ride-line"><span className="ride-line-span">or</span></p>
                <Button variant="outline-primary" block>
                  Sign in with Google
            </Button>
              </div>
            </Form>
            <p>
              Already have an account? Sign in <Link to='/'>here</Link>
            </p>
          </div>
        </Container>
      </div>
    )
  }
}

export default SignUp;