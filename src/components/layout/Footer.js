import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../../Styles/Footer.css'
import footerroutes from '../../routes/footerroutes'
import GoogleMapLocation from './GoogleMapLocation'

const Footer = () => {
  
  return (
    <footer className='bg-dark text-light d-flex  custom-footer'>
      <Container fluid className='footer-container'>
        <Row>
          <hr className='line1' />
        </Row>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <h5 className='my-5 mx-3'>Company</h5>
            <Nav as="ul" className='flex-column custom-nav'>
              {
                footerroutes.companyLinks.map((link, index) => (
                  <Nav.Item as="li" key={index}>
                    <Nav.Link as={NavLink} to={link.path} className='nav-link'>{link.name}</Nav.Link>
                  </Nav.Item>
                ))
              }
            </Nav>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5 className='my-5 mx-3'>About</h5>
            <Nav as="ul" className='flex-column custom-nav'>
              {
                footerroutes.aboutLinks.map((link, index) => (
                  <Nav.Item as="li" key={index}>
                    <Nav.Link as={NavLink} to={link.path} className='nav-link'>{link.name}</Nav.Link>
                  </Nav.Item>
                ))
              }
            </Nav>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5 className='my-5 mx-3'>Support</h5>
            <Nav as="ul" className='flex-column custom-nav'>
              {
                footerroutes.supportLinks.map((link, index) => (
                  <Nav.Item as="li" key={index}>
                    <Nav.Link as={NavLink} to={link.path} className='nav-link'>{link.name}</Nav.Link>
                  </Nav.Item>
                ))
              }
            </Nav>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5 className='my-5 mx-2'>Connect With Us</h5>
            <Nav className='flex-column custom-nav'>
              <address>📍 123 Tech Street, Abc City, 600001, India</address>
              <address className='custom-map mx-2'><GoogleMapLocation/></address>
              <address>📞 <a href='tel:+91 12345 67890' className='text-decoration-none text-light'>+123 456 7890</a></address>
              <address>📧 <a href='mailto:support@example.com' className='text-decoration-none text-light'>brightureinnovation@brinnov.com</a></address>
              <address>🌍 <a href='career/' className='text-decoration-none text-light'>www.brinnov.com</a></address>
            </Nav>
          </Col>
        </Row>
        <Row>
          <hr className='line2' />
        </Row>
        <Row className='py-5'>
          <Col md={9} className='text-center d-sm-flex justify-content-center align-items-center'>
            <span>&copy;{new Date().getFullYear()} Brighture Innovations. All rights reserved.</span>
          </Col>
          <Col md={3}>
            <div className='d-flex gap-3 mt-2 d-sm-flex justify-content-center'>
              {
                footerroutes.addressLink.map((link, index) => (
                  <a key={index} href={link.path} target='_blank' rel='noopener noreferrer' className='text-light'>{link.icon}</a>
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
