import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactForm from '../components/forms/ContactForm'
import '../Styles/ContactPage.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import footerroutes from '../routes/footerroutes'
import { FaLocationDot } from 'react-icons/fa6'
import { FaEnvelope, FaGlobe, FaPhoneAlt } from 'react-icons/fa'
import 'leaflet/dist/leaflet.css' 


const ContactPage = () => {


  return (
    <Container fluid className='contact-main-container p-0'>
      <Container fluid className='contact-main-content p-0'>
        <div className='text-light text-center fw-bold h-100 w-75 contact-content'>
          <h1 className='display-3'>Start Your Journey with <br /><span className='text-primary display-1 fw-bold'>Brighture</span> <span className='color fw-bold display-1'>Innovation</span></h1>
          <p className='lead mt-5 contact-content-para'>Whether you're looking to grow your business, build something new, or just explore possibilities — <br />
            we're here to partner, innovate, and make it happen together.</p>
        </div>

      </Container>
      <ContactForm />
      <Container id='contact-form' fluid className='contact-address'>
        <Row>
          <Col md={4} className='my-auto'>
            <div className='w-75 mx-auto'>
              <h1 className='display-4 fw-bold mb-4'>Get In Touch</h1>

              <address>
                <address className='custom-color'><strong><FaLocationDot size={24} className='pb-1' /> Address </strong><br />123 Tech Street, Abc City, 600001, India</address>
              </address>
              <hr />
              <address>
                <a href='tel:+91 12345 67890' className='text-decoration-none custom-color'><strong><FaPhoneAlt size={24} className='pb-1'/> Phone Number</strong><br />+123 456 7890</a>
              </address>
              <hr />
              <address>
                <a href='mailto:support@example.com' className='text-decoration-none custom-color'><strong><FaEnvelope size={24} className='pb-1' /> Email </strong><br /> brightureinnovation@brinnov.com</a></address>
              <hr />
              <address>
                <a href='https://chireshtha-brighture-innovation.netlify.app/' className='text-decoration-none custom-color'><strong><FaGlobe size={24} className='pb-1' /> Website</strong> <br /> www.brinnov.com</a></address>
              <div className='d-flex gap-3 mt-2 d-sm-flex pb-3'>
                {
                  footerroutes.addressLink.map((link, index) => (
                    <a key={index} href={link.path} target='_blank' rel='noopener noreferrer' className='text-info fs-4'>{link.icon}</a>
                  ))
                }
              </div>
            </div>
          </Col>
          <Col md={8} className='p-0'>
            <MapContainer className='map-container' center={[12.9716, 77.5946]} zoom={14} scrollWheelZoom={false}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[12.9716, 77.5946]}>
                <Popup>Brighture Innovation Office Location</Popup>
              </Marker>
            </MapContainer>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default ContactPage
