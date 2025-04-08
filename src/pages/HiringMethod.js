import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { Col, Container, Row } from 'react-bootstrap'
import '../Styles/CareersPage.css'
const HiringMethod = () => {
  return (
    <Container fluid className='hiring-container-1'>
    <Row>
      <Col className='p-0'>
        <motion.div className='px-4 text-light text-center my-auto py-5'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeInOut }}
        >
          <h1 className='fs-1 my-5 pt-5 fw-bold'>We Hire with Heart & Vision</h1>
          <p className='my-5 fs-4 w-75 pt-3 mx-auto'>At <strong>Brighture Innovations</strong>, we don’t believe in just checking boxes.
            Whether you're a fresher or experienced — if you have the passion to learn, build, and grow,
            there's a place for you here.</p>
        </motion.div>
      </Col>
    </Row>
    </Container>
  )
}

export default HiringMethod
