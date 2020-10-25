import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { auth } from '../../firebase';
import EditProfile from '../EditProfile/EditProfile';


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
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/`} className="permanent-marker">StudyParty!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
          </Nav>
          <Nav className="mr-4">
            {this.state.user ?
              <NavDropdown title={this.state.user.displayName ? this.state.user.displayName : this.props.displayName} id="collasible-nav-dropdown">
                <NavDropdown.Item style={{ marginRight: "20px" }} onClick={() => { auth.signOut() }}>Logout</NavDropdown.Item>
                {/* <NavDropdown.Item href="#">Your Profile</NavDropdown.Item> */}
                <EditProfile user={this.state.user} />
              </NavDropdown>
              : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar