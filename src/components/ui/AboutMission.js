import React from 'react'
import aboutimg5 from '../../Images/image74.jpg'
import { Col, Container, Row } from 'react-bootstrap'
// import { motion } from 'framer-motion'
import '../../Styles/AboutPage.css'


const AboutMission = () => {
    return (
        <Container id='mission' fluid className='text-center d-flex align-items-center justify-content-center custom-about-container-2'>
                <Row className='align-items-center'>
                    <Col md={6} className='d-flex justify-content-center align-items-center'>
                        <img src={aboutimg5} alt='Loading about img...' className='img-fluid Mission-image' />
                    </Col>
                    <Col md={6} className='text-primary d-flex justify-content-center align-items-center flex-column'>
                        <h1 className='my-4 display-5 fw-semibold pb-4'>Our Mission</h1>
                        <p className='fs-6 text-start fw-medium px-4'>At Brighture Innovation, our mission is to bridge the gap between innovation and success by providing tailored digital solutions that drive engagement, enhance visibility, and boost revenue for our clients.</p>
                    </Col>
                </Row>
        </Container>
    )
}

export default AboutMission
