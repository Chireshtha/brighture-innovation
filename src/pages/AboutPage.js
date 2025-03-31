import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import '../Styles/AboutPage.css'
import aboutimg1 from '../Images/image76.jpg'
import aboutimg2 from '../Images/image77.jpg'
import aboutimg3 from '../Images/image86.jpg'
import aboutimg4 from '../Images/image89.jpg'
import AboutMission from '../components/ui/AboutMission'
import AboutVission from '../components/ui/AboutVission'
import AboutJourney from '../components/ui/AboutJourney'
import CoreValues from '../components/ui/CoreValues'

const AboutPage = () => {

  return (
    <div className='about-page'>
      {/* section 1 */}
      <Container fluid className='d-flex justify-content-center align-items-center px-5 custom-about-container-1'>
        <Row className='align-items-center'>
          <Col md={6} className='d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-primary my-4 fs-1'>Who We Are</h1>
            <p className='text-primary my-4 fs-6 fw-medium'>Welcome to <strong>Brighture Innovation</strong>, where creativity meets technology! We are a forward-thinking digital marketing and IT solutions company dedicated to helping businesses grow, scale, and succeed in the digital world.</p>
            <p className='text-primary my-4 fs-6 fw-medium'>With expertise in web development, SEO, branding, social media marketing, and cutting-edge IT solutions, we empower startups, small businesses, and enterprises to establish a strong online presence and achieve their business goals.</p>
          </Col>
          <Col md={6} className='d-flex justify-content-center align-items-center'>
            <div className='diamond-layout'>
              <div className='diamond diamond-top'>
                <img src={aboutimg1} alt='Loading about img...' className='diamond-img' />
              </div>
              <div className='diamond diamond-left'>
                <img src={aboutimg2} alt='Loading about img...' className='diamond-img' />
              </div>
              <div className='diamond diamond-right'>
                <img src={aboutimg3} alt='Loading about img...' className='diamond-img' />
              </div>
              <div className='diamond diamond-bottom'>
                <img src={aboutimg4} alt='Loading about img...' className='diamond-img' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* section 2 */}
      <AboutMission />

      {/* section 3 */}
      <AboutVission />


      {/* Container 4 */}
      <AboutJourney />


      {/* Container 5 */}
      <CoreValues />

    </div>
  )
}

export default AboutPage
