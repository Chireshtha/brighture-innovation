import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import '../../Styles/AboutPage.css'


const AboutJourney = () => {
    return (
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
                            <p className='fs-6 text-start fw-medium px-4'>From humble beginnings to a growing name in digital marketing and IT solutions, our journey has been fueled by passion, dedication, and the drive to create value for businesses of all sizes.</p>
                            <p className='fs-6 text-start fw-medium px-4'>We have successfully partnered with startups, small businesses, and enterprises, helping them navigate the digital landscape and achieve their goals.</p>
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
                            <p className='fs-6 text-start fw-medium px-4'>We are excited to collaborate and grow together.
                                Whether you’re a startup aiming for growth, a brand looking for a strong online presence, or a business seeking innovative IT solutions — Brighture Innovation is here to help you succeed.</p>
                            <p className='fs-6 text-start fw-medium px-4'>👉 Let’s connect and create something great together!</p>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default AboutJourney
