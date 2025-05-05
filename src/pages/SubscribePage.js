import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import footerroutes from '../routes/footerroutes'
import subscribeimg from '../Images/image241.jpg'
import subscribebgimg from '../Images/image242.png'
import '../Styles/SubscribePage.css'

const SubscribePage = () => {
  return (
    <Container fluid className='subscribe-container py-5'>
      <img src={subscribebgimg} alt='subscribe img loading...' className='img-fluid subscribe-img' />

      <div className='d-flex flex-column justify-content-center align-items-center pb-5 py-3 my-auto mx-auto custom-bg '>
        <h3 className='fw-semibold my-4 custom-h3'>Subscribe Form</h3>
        <Card className='d-flex justify-content-center align-items-center custom-bg1 rounded-3 overflow-hidden'>
          <Row>
            <Col md={6}>
              <img src={subscribeimg} alt='subscribe img loading...' className='img-fluid' />
            </Col>
            <Col md={6} className='px-5 py-3 d-flex justify-content-center align-items-center'>
              <Form>
                <h6 className='fw-semibold custom-h6'>Subscribe Now</h6>
                <p className='text-muted custom-p'>Lets keep in touch! Please subscribe to our newsletter and stay updated</p>
                <Form.Group>
                  <Form.Control placeholder='Enter Your Name' className='input-text'></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3'>
                  <Form.Control placeholder='Enter Your Email' className='input-text'></Form.Control>
                </Form.Group>
                <Button type='submit' className='custom-button w-100 mt-3'>Subscribe</Button>
                <div className='mt-4 text-center'>
                  {
                    footerroutes.addressLink.map((link, index) => (
                      <a key={index} href={link.path} target='_blank' rel='noopener noreferrer' className='px-2 input-text' style={{ color: link.color, fontSize: "23px" }}>{link.icon}</a>
                    ))
                  }
                </div>
              </Form>
            </Col>
          </Row>
        </Card>
      </div>
      <Row className='pt-5'>
        <Col md={12} className='text-center d-sm-flex justify-content-center align-items-center'>
          <span>&copy;{new Date().getFullYear()} Brighture Innovations. All rights reserved.</span>
        </Col>
      </Row>
    </Container>
  )
}

export default SubscribePage
