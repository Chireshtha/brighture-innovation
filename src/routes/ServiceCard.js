import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaChartPie, FaCogs, FaGlobe, FaMobileAlt, FaRocket, FaSearchDollar } from "react-icons/fa"
import { motion } from 'framer-motion'

const ServiceCard = () => {

    const services = [
        { icon: <FaSearchDollar />, title: "SEO & Marketing", description: "Increase your visibility and drive organic traffic." },
        { icon: <FaMobileAlt />, title: "Mobile App Development", description: "Build sleek, high-performance mobile apps." },
        { icon: <FaCogs />, title: "Automation & AI", description: "Leverage AI and automation to streamline operations." },
        { icon: <FaRocket />, title: "Startup Growth Strategy", description: "Helping startups scale with smart digital strategies." },
        { icon: <FaChartPie />, title: "Data Analytics", description: "Make data-driven decisions with real-time insights." },
        { icon: <FaGlobe />, title: "Web Development", description: "Create dynamic, high-quality web applications." }
    ]

    return (
        <Container fluid className='my-5 custom-home-container-2'>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, ease:'easeInOut' }}>
                <h2 className='my-4 text-center fw-bold custom-heading'>Our Expertise</h2>
                <Row className='g-5'>
                    {services.map((item, index) => (
                        <Col key={index} md={4} sm={6}>
                            <motion.div
                            whileHover={{scale:1.03}}
                            transition={{duration:0.5, ease:'easeInOut'}}
                            >
                            <Card className='text-center shadow-sm custom-card'>
                                <Card.Body className='custom-card-body'>
                                    <div className='fs-1 text-success'>{item.icon}</div>
                                    <Card.Title className='fw-bold text-dark mt-3'>{item.title}</Card.Title>
                                    <Card.Text className='text-muted'>{item.description}</Card.Text>
                                </Card.Body>
                            </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </motion.div>
        </Container>
    )
}

export default ServiceCard
