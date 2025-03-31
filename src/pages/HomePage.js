import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom"
import '../Styles/HomePage.css'
import ServiceCard from '../routes/ServiceCard'
import About from '../routes/About'
import aboutImg from '../Images/image21.jpg'
import Testimonial from '../components/ui/Testimonial'


const HomePage = () => {

  return (
    <div>
      <Container fluid className='text-center d-flex text-light align-items-center justify-content-center custom-home-container-1'>
        <div>
          <h1 className='fw-bold'>Transform Your Digital Presence</h1>
          <p className='pt-2 fs-5'>We transform businesses with cutting-edge digital marketing, web development, and IT solutions.</p>
          <div className='mt-5'>
            <Button variant='light' className='me-3 text-dark fw-bold custom-btn-1' size='lg' as={Link} to="/blog">Discover More</Button>
            <Button variant='outline-light custom-btn-2' size='lg' as={Link} to="/contact">Get Started</Button>
          </div>
        </div>
      </Container>
      <ServiceCard />
      <Container fluid className='text-center text-primary custom-home-container-3'>
        <Row>
          <Col md={6}>
            <h2 className='fw-bold mb-5 mt-5'>About Brighture Innovation</h2>
            <p className='text-start fst-italic'>At Brighture Innovation, we empower businesses by merging technology and strategy. Our team of experts is dedicated to delivering customized solutions that drive digital success.</p>
            <p className='mt-5 text-start'><strong>Our Commitment:</strong> We deliver innovative digital solutions by combining technology with strategic insight.</p>
            <p className='text-start mt-3 fs-3 text-success p-2 fw-medium'>Our expert team transforms challenges into opportunities for measurable success.</p>
            <p className='text-muted fs-5 text-start fst-italic mt-2'>Join us in shaping a future where innovation drives lasting growth 🤝😊</p>
          </Col>

          <Col md={6} className='custom-img'>
            <img src={aboutImg} alt='Team collaborating on digital solutions' className='custom-image' />
          </Col>
        </Row>
      </Container>
      <About />
      <Testimonial />

    </div>
  )
}

export default HomePage
