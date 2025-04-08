import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import { Col, Container, Row } from 'react-bootstrap'
import '../Styles/CareersPage.css'
import bgcareer from '../Images/image233.jpg'
const HiringProcess = () => {
  return (
    <Container fluid className='hiring-container'>
    <Row>
      <Col md={5} className='p-0 mx-auto my-auto bg-dark'>
      <img src={bgcareer} alt='career page img loading...' width={'100%'} height={'100%'}/>
      </Col>
      <Col md={5} className='mx-auto my-auto p-0'>
        <motion.div className=' py-5'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeInOut }}
        >
          <h1 className='pt-5 text-primary text-center'>We Value ?</h1>
          <p className='my-5 fs-5 mx-5'><strong>Our approach is simple:</strong> <strong className='text-primary'>Show us what you can do.</strong> We value practical skills, real effort, and your willingness to grow.</p>
          <p className='my-5 fs-5 mx-5'>From first-time coders to seasoned developers, we support everyone with guidance, mentorship, and real project exposure.</p>
        </motion.div>
      </Col>
    </Row>
    </Container>
  )
}

export default HiringProcess
