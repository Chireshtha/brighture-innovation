import services from '../components/API/servicedata'
import '../Styles/ServicePage.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import serviceimg from '../Images/image127.jpg'
import { motion } from 'framer-motion'
import serviceinfo from '../components/API/servicedata1'
import { FaChartLine, FaCloud, FaHeadset, FaLaptopCode, FaRobot, FaRocket, FaShieldAlt, FaShoppingCart, FaTasks } from 'react-icons/fa'


const ServicePage = () => {
    const { slug } = useParams();
    const service = services.find(s => s.slug === slug); //Find matching service

    if (!service) {
        return <h2 className="text-center text-danger my-5 py-5">Service Not Found</h2> //Handle 404 Error
    }

    return (
        <div>
            <div className={`${service.containerClass}`} style={{ background: service.background }}>
                <Container fluid className={`${service.titleClass} text-primary py-5 p-0 d-flex flex-column justify-content-center align-items-center service-container-1`}>
                    <Row className='align-items-center'>
                        <Col md={6} className='d-flex flex-column service-content'>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <h1 className='py-3 fw-semibold'>{service.title}</h1>
                                <p className='fw-medium'>{service.overview}</p>
                                <h3 className='py-3 fw-semibold'>Technologies We Use:</h3>
                                <div className='w-100 py-2 text-left'>
                                    {service.technologies.map((techlist, index) => (
                                        <p key={index} >✅ {techlist}</p>
                                    ))}
                                </div>
                                <p className=''>{service.para1}</p>
                                <p className='fw-semibold fs-5'>{service.para2}</p>
                                <Link as={Link} to="/contact"><button className='service-btn btn-lg w-75 mt-4 fs-5'>{service.ctaText}</button></Link>
                            </motion.div>
                        </Col>

                        <Col md={6} className='d-flex flex-column'>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <img className={`img-fluid bg-sevice-img ${service.imageClass}`} src={service.image} alt='Service Img Loading...' style={{ borderRadius: service.borderRadius }} />
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container fluid className='service-container-2 py-4 px-0'>
                <Row >
                    {service.keyBenefits.map((benefit, index) => (
                        <Col key={index} md={3} className='benefit-box'>
                            <Card fluid className='h-100 shadow-sm-md bg-danger key-benefit-card'>
                                <Card.Body>
                                    <p className='text-light' key={index} ><span className='fs-5'>✅</span>  {benefit}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container>


            <Container fluid className='text-primary py-5 p-0 d-flex flex-column service-container-3'>
                <Row className='align-items-center'>
                    <Col sm={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, ease:
                                 "easeInOut" }}
                        >
                            <img className='img-fluid bg-sevice-img' src={serviceimg} alt='Service Img Loading...' />
                        </motion.div>
                    </Col>

                    <Col sm={12} md={6} className='d-flex flex-column m-0 p-0'>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <div className='bg-danger text-light p-2 container-4-content'>
                                <h3 className='pt-5 text-center'>Why Choose Our Services?</h3>
                                <p className='px-5 small'>At Brighture Innovation, we offer a diverse range of IT and digital solutions to help businesses thrive in the modern world. From development to marketing, automation to security, we deliver high-quality, scalable, and innovative services tailored to meet your business needs.</p>
                                <div className='service-list bg-danger lh-1 text-light mx-5'>
                                    <p> <FaRocket className='text-danger fs-4 bg-warning rounded-3 p-1' /> &nbsp; Technology solutions designed to enhance business productivity.</p>
                                    <p><FaLaptopCode className='text-danger fs-4 bg-warning rounded-3 p-1' /> &nbsp; Scalable and high-performing software applications.</p>
                                    <p><FaShoppingCart className='text-danger fs-4 bg-warning rounded-3 p-1' /> &nbsp; User-friendly websites and powerful e-commerce platforms.</p>
                                    <p><FaChartLine className='text-danger fs-4 bg-warning rounded-3 p-1' /> &nbsp; SEO, PPC, and social media strategies for online growth.</p>
                                    <p><FaRobot className='text-danger fs-4 bg-warning rounded-3 p-1' /> &nbsp; AI-driven automation for efficiency and innovation.</p>
                                    <p><FaCloud className='text-danger fs-4 bg-warning rounded-3 p-1' /> &nbsp; Secure and scalable cloud solutions with DevOps integration.</p>
                                    <p><FaShieldAlt className='text-danger fs-4 bg-warning rounded-3 p-1' /> &nbsp; Advanced cybersecurity measures for data protection.</p>
                                    <p><FaTasks className='text-danger fs-4 bg-warning rounded-3 p-1' /> &nbsp; Agile methodologies for fast and flexible solutions.</p>
                                    <p><FaHeadset className='text-danger fs-3 bg-warning rounded-3 p-1' /> &nbsp; Expert consulting and ongoing technical support.</p>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='service-container-4 my-5'>
                <Row className='align-items-center'>

                    {serviceinfo.map((service, index) => (
                        <Col key={index} md={4} className='custom-col'>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ scale: 1.03, duration: 0.6, ease: "easeInOut" }}
                            >
                                <img src={service.img} alt='Service Img Loading...' className='img-fluid service-info-img my-auto' />
                                <div className='serviceinfo-effect mx-auto p-3'>
                                    <h4 className='custom-color-h4 text-center'>{service.icon} {service.title}</h4>
                                    <p className='custom-color-p'>{service.desc}</p>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ServicePage

