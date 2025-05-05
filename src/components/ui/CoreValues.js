import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import '../../Styles/AboutPage.css'

const CoreValues = () => {
    return (
        <Container fluid className='d-flex flex-column justify-content-center align-items-center  custom-about-container-5 py-4'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <Row className='align-items-center'>
                    <h1 className='display-5 fw-semibold text-primary d-flex flex-column justify-content-center align-items-center'>Our Core Values</h1>
                </Row>
                <Row className='align-items-center text-light custom-height'>
                    <Col xs={12} sm={6} md={3} className='d-flex flex-column justify-content-center align-items-center col-item-1'>
                        <h3 className='my-4 fs-3'>Innovation</h3>
                        <p className='text-start fs-6 fw-medium px-3'>We constantly seek creative and cutting-edge solutions</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} className='d-flex flex-column justify-content-center align-items-center col-item-2'>
                        <h3 className='my-4 fs-3'>Integrity</h3>
                        <p className='text-start fs-6 fw-medium px-3'>Honesty, transparency, and strong ethics guide our work</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} className='d-flex flex-column justify-content-center align-items-center col-item-3'>
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
    )
}

export default CoreValues
