import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import '../Styles/AboutPage.css'
import aboutimg1 from '../Images/image76.jpg'
import aboutimg2 from '../Images/image77.jpg'
import aboutimg3 from '../Images/image86.jpg'
import aboutimg4 from '../Images/image89.jpg'
import aboutimg5 from '../Images/image74.jpg'
import aboutimg6 from '../Images/image87.jpg'
import aboutimg7 from '../Images/image84.jpg'
import aboutimg8 from '../Images/image71.jpg'
import aboutimg9 from '../Images/image80.jpg'

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

      <Container fluid className='text-center d-flex text-light align-items-center justify-content-center custom-about-container-2'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Row className='align-items-center'>
            <Col md={6} className='d-flex justify-content-center align-items-center'>
              <img src={aboutimg5} alt='Loading about img...' className='Mission-image' />
            </Col>
            <Col md={6} className='text-primary d-flex justify-content-center align-items-center flex-column'>
              <h1>Our Mission</h1>
              <p className='text-start fs-6 fw-medium px-4'>At Brighture Innovation, our mission is to bridge the gap between innovation and success by providing tailored digital solutions that drive engagement, enhance visibility, and boost revenue for our clients.</p>
            </Col>
          </Row>
        </motion.div>
      </Container>
      {/* section 3 */}

      <Container fluid className='text-center text-light d-flex justify-content-center align-items-center custom-about-container-3'>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Row className='align-items-center'>
            <Col md={6} className='text-primary d-flex flex-column justify-content-center align-items-center'>
              <h1>Our Vision</h1>
              <p className='text-start fs-6 fw-medium px-4'>At Brighture Innovation, our vision is to empower businesses to thrive in the digital era through innovative, creative, and result-driven solutions.</p>
              <p className='text-start fs-6 fw-medium px-4'>We aim to become a trusted partner for businesses of all sizes by combining cutting-edge technology, strategic insigcustom-vissionht, and creativity to deliver impactful digital marketing and IT solutions.
                Our goal is to transform brands, enhance their online presence, and drive sustainable growth in a constantly evolving digital world.</p>
            </Col>
            <Col md={6} className='d-flex justify-content-center align-items-center'>
              <div className='d-flex justify-content-center align-items-center design-layout'>
                <div className='design design-top'>
                  <img src={aboutimg6} alt='Loading about img...' className='design-img' />
                </div>
                <div className='design design-left'>
                  <img src={aboutimg7} alt='Loading about img...' className='design-img' />
                </div>
                <div className='design design-right'>
                  <img src={aboutimg8} alt='Loading about img...' className='design-img' />
                </div>
                <div className='design design-bottom'>
                  <img src={aboutimg9} alt='Loading about img...' className='design-img' />
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      {/* Container 4 */}
      <Container fluid className='text-center text-light d-flex justify-content-center align-items-center p-0 m-0 custom-about-container-4'>
        <div className='about-image'></div>
        <div className='about-content-container'>
        <Row className='align-items-center'>
          <Col md={6} className='d-flex flex-column justify-content-center align-items-center'>
          <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <h1 className='py-4 fs-1'>✅ Our Journey</h1>
            <p className='text-start fs-6 fw-medium px-4'>From humble beginnings to a growing name in digital marketing and IT solutions, our journey has been fueled by passion, dedication, and the drive to create value for businesses of all sizes.</p>
            <p className='text-start fs-6 fw-medium px-4 py-3'>We have successfully partnered with startups, small businesses, and enterprises, helping them navigate the digital landscape and achieve their goals.</p>
            </motion.div>
          </Col>
          
          <Col md={6} className='d-flex flex-column justify-content-center align-items-center'>
          <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        > 
            <h1 className='py-4 fs-1'>✅ Join Us in Our Journey!</h1>
            <p className='text-start fs-6 fw-medium px-4'>We are excited to collaborate and grow together.
              Whether you’re a startup aiming for growth, a brand looking for a strong online presence, or a business seeking innovative IT solutions — Brighture Innovation is here to help you succeed.</p>
            <p className='text-start fs-6 fw-medium px-4 py-3'>👉 Let’s connect and create something great together!</p>
            </motion.div>
          </Col>
        </Row>
        </div>
      </Container>
      <Container fluid className='d-flex flex-column justify-content-center align-items-center  custom-about-container-5'>
      <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        > 
        <Row className='align-items-center mb-5'>
          <h1 className='fs-1 text-primary d-flex flex-column justify-content-center align-items-center'>Our Core Values</h1>
        </Row>
        <Row className='align-items-center text-light'> 
          <Col xs={12} sm={6} md={3} className='d-flex flex-column justify-content-center align-items-center col-item-1'>
          <h3 className='my-4 fs-3'>Innovation</h3>
          <p className='text-start fs-6 fw-medium px-3'>We constantly seek creative and cutting-edge solutions</p>
          </Col>
          <Col xs={12} sm={6}  md={3} className='d-flex flex-column justify-content-center align-items-center col-item-2'>
          <h3 className='my-4 fs-3'>Integrity</h3>
          <p className='text-start fs-6 fw-medium px-3'>Honesty, transparency, and strong ethics guide our work</p>
          </Col>
          <Col xs={12} sm={6}  md={3} className='d-flex flex-column justify-content-center align-items-center col-item-3'>
          <h3 className='my-4 fs-3'>Customer First</h3>
          <p className='text-start fs-6 fw-medium px-3'>We put our clients at the heart of every decision</p>
          </Col>
          <Col xs={12} sm={6} md={3} className='d-flex flex-column justify-content-center align-items-center col-item-4'>
          <h3 className='my-4 fs-3'>Excellence</h3>
          <p className='text-start fs-6 fw-medium px-3'>We strive for the highest quality in every project we undertake</p>
          </Col>
        </Row>
        </motion.div>
      </Container>
    </div>
  )
}

export default AboutPage
