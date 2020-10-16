import React, { Component } from 'react';
import { Container, Jumbotron, Form, Button } from 'react-bootstrap';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase';
import firebase from "firebase/app";

class SignIn extends Component {

  state = {
    email: "",
    password: "",
    error: null,
    typed: "",
  }

  // when component mounts, will run typewriter effect on subtitle after 1.5s
  componentDidMount() {
    const subtitleStr = 'Hey! You want to umm... study???'
    setTimeout(() => this.typeWriter(subtitleStr), 1500)
  }

  signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault()

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      });

    this.setState({
      email: "",
      password: "",
      displayName: ""
    })

  }

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
                  this.signInWithEmailAndPasswordHandler(event, this.state.email, this.state.password);
                }}
              >
                Sign In
              </Button>

              <div style={{ margin: '40px 0px' }}>
                <p className="ride-line"><span className="ride-line-span">or</span></p>
                <Button variant="outline-primary" block onClick={signInWithGoogle}>
                  Sign in with Google
                </Button>
              </div>

            </Form>

            <p style={{ paddingBottom: '100px' }}>
              Don't have an account? Sign up <Link to='signUp'>here</Link>
            </p>

          </div>

        </Container>

      </div>
    )
  }
}

export default SignIn;