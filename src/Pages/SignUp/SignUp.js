import React, { Component } from 'react';
import { Container, Jumbotron, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase';
import firebase from "firebase/app";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    displayName: "",
    error: null,
    typed: "",
  }

  // when component mounts, will run typewriter effect on subtitle after 1.5s
  componentDidMount() {
    const subtitleStr = 'Hey! You want to umm... study???'
    setTimeout(() => this.typeWriter(subtitleStr), 1500)
  }

  createUserWithEmailAndPasswordHandler = (event, email, password, displayName) => {
    console.log(email);
    console.log(password);
    console.log(displayName);

    event.preventDefault();

    // adds displayName immediately to state on Application.js to display on navigation bar
    this.props.updateDisplayNameFromForm(this.state.displayName)

    firebase.auth()
      // .createUserWithEmailAndPassword(email, password)
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        console.log('Successfully created new user');
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: displayName
        })
          .then(function () {
            console.log(`Successfully updated profile with displayName`)
          })
          .catch(function (error) {
            console.log(`Error updating user with displayName:`, error)
          });
      })
      .catch(function (error) {
        console.log('Error creating new user:', error)
      });

    this.setState({
      email: "",
      password: "",
      displayName: ""
    })

  };

  //function to handle form change
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

  // function that will take add a letter from a given string to 'typed' string stored in state every 50 milliseconds
  typeWriter(slicedStr) {
    if (slicedStr.length !== 0) {
      this.setState((state) => ({
        typed: state.typed.concat(slicedStr[0])
      }));
      setTimeout(() => this.typeWriter(slicedStr.slice(1)), 50);
    }
  }

  render() {
    return (
      <div>
        <Container style={{ backgroundColor: 'white' }}>

          <Jumbotron style={{ backgroundColor: 'white', marginBottom: '0px', textAlign: "center" }}>
            <h1 className="main-title permanent-marker pink animate__animated animate__bounceInDown">StudyParty!</h1>
            <h6 className="montserrat">
              {this.state.typed}
              <span className="cursor">
                <span style={{ fontWeight: "normal" }}>|</span>
              </span>
            </h6>
          </Jumbotron>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Form>
              <Form.Group controlId="userName">
                <Form.Label>Display name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" name="displayName" value={this.state.displayName} onChange={(event) => this.onChangeHandler(event)} />
              </Form.Group>

              <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="userEmail" value={this.state.email} onChange={(event) => this.onChangeHandler(event)} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="userPassword" value={this.state.password} onChange={(event) => this.onChangeHandler(event)} />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                block
                onClick={event => {
                  this.createUserWithEmailAndPasswordHandler(event, this.state.email, this.state.password, this.state.displayName);
                }}
              >
                Sign Up
            </Button>
              <div style={{ margin: '40px 0px' }}>
                <p className="ride-line"><span className="ride-line-span">or</span></p>
                <Button onClick={signInWithGoogle} variant="outline-primary" block >
                  Sign up with Google
            </Button>
              </div>
            </Form>
            <p style={{ paddingBottom: '100px' }}>
              Already have an account? Sign in <Link to="/">here</Link>
            </p>
          </div>
        </Container>
      </div>
    )
  }
}

export default SignUp;