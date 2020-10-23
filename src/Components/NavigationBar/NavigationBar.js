import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { auth } from '../../firebase';

class NavigationBar extends Component {

  state = {
    user: null,
  }

  componentDidMount() {
    
    console.log(this.props.displayName);

    auth.onAuthStateChanged(userAuth => {
      console.log(userAuth)
      this.setState({
        user: userAuth,
      })
    })
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand href="/" className="permanent-marker">StudyParty!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={`${process.env.PUBLIC_URL}/about`}>About</Nav.Link>
            <Nav.Link href={`${process.env.PUBLIC_URL}/about`}>Contact Us</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            {this.state.user ?
              <>
                <Nav.Link style={{ marginRight: "20px" }}>{`Welcome, ${this.state.user.displayName ? this.state.user.displayName : this.props.displayName}`}</Nav.Link>
                <Nav.Link style={{ marginRight: "20px" }} onClick={() => { auth.signOut() }}>Logout</Nav.Link>
              </>
              : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar