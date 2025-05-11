import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { motion } from 'framer-motion'
import aboutimg6 from '../../Images/image87.jpg'
import aboutimg7 from '../../Images/image84.jpg'
import aboutimg8 from '../../Images/image71.jpg'
import aboutimg9 from '../../Images/image80.jpg'
// import '../../Styles/AboutPage.css'


const AboutVission = () => {
    return (
        <Container id='vision' fluid className='text-center text-light d-flex justify-content-center align-items-center custom-about-container-3'>
                <Row className='align-items-center'>
                    <Col md={6} className='text-primary d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='my-4 display-5 fw-semibold pt-4'>Our Vision</h1>
                        <p className='fs-6 text-start fw-medium px-4'>At Brighture Innovation, our vision is to empower businesses to thrive in the digital era through innovative, creative, and result-driven solutions.</p>
                        <p className='fs-6 text-start fw-medium px-4'>We aim to become a trusted partner for businesses of all sizes by combining cutting-edge technology, strategic insigcustom-vissionht, and creativity to deliver impactful digital marketing and IT solutions.
                            Our goal is to transform brands, enhance their online presence, and drive sustainable growth in a constantly evolving digital world.</p>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center align-items-center py-5'>
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
        </Container>
    )
}

export default AboutVission
