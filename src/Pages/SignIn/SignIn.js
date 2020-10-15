import React, { Component } from 'react';
import { Container, Jumbotron, Form, Button } from 'react-bootstrap';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import './SignIn.css';
import { Link } from 'react-router-dom';

class SignIn extends Component {

  state = {
    email: "",
    password: "",
    error: null,
    typed: "",
  }

  componentDidMount() {
    const subtitleStr = 'Hey! You want to umm... study???'
    setTimeout(()=> this.typeWriter(subtitleStr), 1500)

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
    }
  }

  typeWriter(slicedStr) {
    if (slicedStr.length !== 0) {
      this.setState((state) => ({
        typed: state.typed.concat(slicedStr[0])
      }));

      setTimeout(() => this.typeWriter(slicedStr.slice(1)), 50);
      // console.log(`this.state.typed: ${this.state.typed}`)
    }
  }

  render() {
    console.log(this.props.loggedIn)
    return (
      <div>
        <NavigationBar changeLoggedIn={this.props.changeLoggedIn} loggedIn={this.props.loggedIn} />
        <Container style={{ backgroundColor: 'white' }}>

          <Jumbotron style={{ backgroundColor: 'white', marginBottom: '0px' }}>
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
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="userPassword" value={this.state.password} onChange={(event) => this.onChangeHandler(event)} />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Sign In
            </Button>
              <div style={{ margin: '40px 0px' }}>
                <p className="ride-line"><span className="ride-line-span">or</span></p>
                <Button variant="outline-primary" block>
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