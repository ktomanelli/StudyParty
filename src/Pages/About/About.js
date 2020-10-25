import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import './About.css'

class About extends Component {

  render() {
    return (
      <div>
        <Container>
          <Jumbotron style={{ backgroundColor: 'white', marginBottom: '0px', textAlign: "center" }}>
            <h1 className="main-title permanent-marker pink animate__animated animate__bounceInDown">About!</h1>
          </Jumbotron>
          <Row>
            <Col>
              <p className='about-description montserrat'>StudyParty helps students study together to achieve their learning goals. We are dedicated to the simple idea that learning should be social. When we learn together, we help each other stay on task, work through gaps in our comprehension, and have fun!
              </p>
            </Col>
          </Row>
          <div className='about-us'>
            <Row>
              <Col>
                <h3 className='permanent-marker team-header'>Our Team!</h3>
              </Col>
            </Row>
            <Row style={{ paddingBottom: '50px', marginBottom: '50px' }}>
              <Col xs={6} md={4}>
                <Image src='https://media-exp1.licdn.com/dms/image/C4E03AQGKsgdfdQXnJw/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=ZJ3-LwvQrKUUhx8jbm-BXswrxepBGU53Qn-oae16MFA' className="headshot" roundedCircle />
                <h6 className='name montserrat'>David Spector</h6>
              </Col>
              <Col xs={6} md={4}>
                <Image src='https://media-exp1.licdn.com/dms/image/C4E03AQHw0jvKd0WnFw/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=fNt6IWpTjRKRKlTL5obfhT5Z9P66MVFCbv6pyN9ig_Y' className="headshot" roundedCircle />
                <h6 className='name montserrat'>Allen Cooper</h6>
              </Col>
              <Col xs={6} md={4}>
                <Image src="https://media-exp1.licdn.com/dms/image/C4D03AQE2ep-1HcU4Pg/profile-displayphoto-shrink_800_800/0?e=1608768000&v=beta&t=eQoL80w2D5zd6G1KRCGJMkQ4Sad34veoB-naV4-H2gM" className="headshot" roundedCircle />
                <h6 className='name montserrat'>Danny Grossman</h6>
              </Col>
              <Col xs={6} md={4}>
                <Image src="data:image/jpeg;base64,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" className="headshot" roundedCircle />
                <h6 className='name montserrat'>Kyle Tomanelli</h6>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}

export default About;