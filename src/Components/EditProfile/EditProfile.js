import React, { useState } from 'react';
import { Button, Modal, NavDropdown, Form, Col } from 'react-bootstrap';

import { updateUserProfile } from '../../firebase';
import firebase from "firebase/app";

const EditProfile = props => {
  console.log(props.user)

  const [userInput, setUserInput] = useState({
    displayName: props.user.displayName,
    phoneNumber: props.user.phoneNumber,
    photoURL: props.user.photoURL,
    error: null,
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setUserInput({ ...userInput, email: value })
    } else if (name === 'phoneNumber') {
      setUserInput({ ...userInput, phoneNumber: value })
    } else if (name === 'displayName') {
      setUserInput({ ...userInput, displayName: value })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const user = firebase.auth().currentUser;

    // update user authentication profile
    user.updateProfile({
      displayName: userInput.displayName,
      phoneNumber: userInput.phoneNumber,
      photoURL: userInput.photoURL
    })
      .then(function () {
        const updatedUser = {
          uid: user.uid,
          email: user.email,
          displayName: userInput.displayName,
          phoneNumber: userInput.phoneNumber,
          photoURL: userInput.photoURL
        }
        console.log(updatedUser)

        // update user profile in Realtime database
        updateUserProfile(updatedUser)

        console.log(`Successfully updated profile with displayName`)
      })
      .then(function () {
        handleClose()
      })
      .catch(function (error) {
        setUserInput({ ...userInput, error: error.message })
        console.log(`Error updating user with displayName:`, error)
      });
  }

  return (
    <>
      <NavDropdown.Item onClick={handleShow}>Edit Profile</NavDropdown.Item>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Display Name
              </Form.Label>
              <Col>
                <Form.Control type="text" name="displayName" value={userInput.displayName} onChange={handleChange} />
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Label column lg={2}>
                Phone Number
              </Form.Label>
              <Col>
                <Form.Control type="text" name="phoneNumber" value={userInput.phoneNumber} onChange={handleChange} />
              </Col>
            </Form.Row>
            <br />
            <Form.Row>
              <Form.Label column lg={2}>
                Image URL
              </Form.Label>
              <Col>
                <Form.Control type="text" name="photoURL" value={userInput.photoURL} onChange={handleChange} />
              </Col>
            </Form.Row>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default EditProfile;