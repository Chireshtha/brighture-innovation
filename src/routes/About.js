import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaChartLine, FaGlobeAfrica, FaRocket } from 'react-icons/fa'
import {motion} from 'framer-motion'


const About = () => {

    const about = [
        {icon: <FaRocket />, title: "Innovative Solutions", description: "We use the latest technologies to craft cutting-edge strategies.", bgColor: "#2ec4b6" , color:"#755c1b"},
        {icon:<FaGlobeAfrica />, title: "Customer-Centric Approach", description: "Every solution is tailored to meet your business goals.", bgColor: "#fb6f92", color:"#33658a" },
        {icon: <FaChartLine />, title: "Proven Results", description: "We focus on measurable growth and long-term success.", bgColor: "#b388eb", color:"#d72483" }
    ]


    return (
        <Container className='my-5 p-3 custom-home-container-4 text-center'>
            <motion.div 
                    initial = {{opacity:0, y:100}}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }} 
                    transition = {{duration:0.5}}
                    > 
            <h2 className='fw-bold mb-5 text-primary'>Why Choose Us?</h2>
            <Row className='g-5'>
                {about.map((item, index)=>(
                <Col key = {index} md={4} sm={6}>
                     <motion.div
                     whileHover={{scale:1.03}}
                     transition={{duration:0.5, ease:'easeInOut'}}
                     >
                    <Card className='p-5 text-light' style={{backgroundColor:item.bgColor, cursor:'pointer'}}>
                        <div className='fs-1' style={{color:item.color}}>{item.icon}</div>
                        <Card.Title className='fw-bold mt-4'>{item.title}</Card.Title>
                        <Card.Text className='my-3'>{item.description}</Card.Text>
                    </Card>
                    </motion.div>
                 </Col>
                ))}
            </Row>
            </motion.div>
        </Container>
    )
}

export default About
