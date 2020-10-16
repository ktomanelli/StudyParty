import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { auth } from '../../firebase';
import { UserContext } from '../../Providers/UserProvider'

function NavigationBar(props) {
  console.log(props);

  console.log(useContext(UserContext));
  const user = useContext(UserContext);
  console.log(user);
  const { displayName } = user || ""

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Navbar.Brand href="#home" className="permanent-marker">StudyParty!</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          {user ?
            <>
              <Nav.Link style={{ marginRight: "20px" }}>{`Welcome, ${displayName ? displayName : props.displayName}`}</Nav.Link>
              <Nav.Link style={{ marginRight: "20px" }} onClick={() => { auth.signOut() }}>Logout</Nav.Link>
            </>
            : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar