import React from 'react'
import { Button, Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap'
import careerdata from '../components/API/careerdata'
import { useParams } from 'react-router-dom'
import '../Styles/ApplyJobs.css'

const ApplyJob = () => {
    const { slug } = useParams();
    const job = careerdata.careers.find(job => job.slug === slug);
    return (
        <Container fluid className='apply-container'>
            <Row>
                <Col md={5} className='mx-auto'>
                    <Card className='apply-card border-0 ms-4'>
                        <Card.Body className='my-5'>
                            <Card.Title className='mb-3 fs-1 fw-bold'> {job.title}</Card.Title>
                            <Card.Subtitle className='mb-4 text-muted'>{job.location} &nbsp; | &nbsp; {job.job_type}</Card.Subtitle>
                            <strong className='fs-4'>Description:</strong>
                            <Card.Text> {job.description}</Card.Text>
                            <strong className='fs-4 mt-2'>Experience Required:</strong>
                            <Card.Text className='fw-semibold mb-3'>{job.experience}</Card.Text>
                            <h5 className='fs-4 fw-bold'>Responsibilities:</h5>
                            <ListGroup className='ms-5 my-3'>
                                {job.responsibilities.map((responsibility, index) => (
                                    <li className='p-1' key={index}>{responsibility}</li>
                                ))}
                            </ListGroup>
                            <h5 className='fs-4 fw-bold'>Qualifications:</h5>
                            <ListGroup className='ms-5 my-3'>
                                {job.qualifications.map((qualification, index) => (
                                    <li className='p-1' key={index}>{qualification}</li>
                                ))}
                            </ListGroup>
                            <h5 className='fs-4 fw-bold'>Benefits:</h5>
                            <ListGroup className='ms-5 my-3'>
                                {job.benefits.map((benefit, index) => (
                                    <li className='p-1' key={index}>{benefit}</li>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} className='mx-auto'>
                    <Card className='border-0 w-100'>
                        <Card.Body>
                            <Card.Title className='fs-1 text-center my-5 fw-bold'>Apply Now</Card.Title>
                            <Form className='ms-5'>
                                <Form.Group className='mb-3' controlId='formName'>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type='text' placeholder='Enter your name' />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='formEmail'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' placeholder='Enter your email' />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='formPhone'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type='tel' placeholder='Enter your phone number' />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='formResume'>
                                    <Form.Label>Upload Resume</Form.Label>
                                    <Form.Control type='file' className='w-50' />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='formMessage'>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as='textarea' rows={5} placeholder='Write a message' />
                                </Form.Group>
                                <Button variant='primary' type='submit' className='w-25'>Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='text-light py-5 mail-container'>
                <Col className='text-center py-5'>
                    <h1 className='mb-5'>Need Help?</h1>
                    <address>📧 Reach out to us at <a href='mailto:support@example.com' className='text-decoration-none text-primary'>brightureinnovation@brinnov.com</a> for queries about the application process.</address>
                    <address>📞 Call us at <a href='tel:+91 12345 67890' className='text-decoration-none text-primary'>+123 456 7890</a> </address>
                    <address>🌐 Visit our careers page for more openings: <a href='/career' className='text-decoration-none text-primary'>www.brinnov.com</a></address>
                </Col>
            </Row>
        </Container>
    )
}

export default ApplyJob
