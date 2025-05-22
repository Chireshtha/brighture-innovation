import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, ListGroup, Row, Spinner } from 'react-bootstrap'
import careerdata from '../API/careerdata'
import { useParams } from 'react-router-dom'
import '../../Styles/ApplyJobs.css'
import Validation from './ApplicatioValidation'

const ApplyJob = () => {
    const [values, setValues] = useState({
        fullname: '',
        email: '',
        ph_no: '',
        upload_file: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new formData();
        formData.append('fullname', values.fullname);
        formData.append('email', values.email);
        formData.append('ph_no', values.ph_no);
        formData.append('upload_file', values.upload_file);
        formData.append('message', values.message);

        setErrors(Validation(values))
        setLoading(true)


        try {
            const response = await fetch('https://contact-backend-nput.onrender.com/applyjob', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: formData
            })
            if (response.ok) {
                alert("Applied Successfully!");
                setValues({ fullname: '', email: '', ph_no: '', upload_file: '', message: '' });
            }
            else {
                alert('Failed to send. Please try again')
            }
        }
        catch (error) {
            console.error('Error:', error);
            alert('An error occurred. check console');
        }
        finally {
            setLoading(false);
        }
    }

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
                            <Card.Text className='fs-6'> {job.description}</Card.Text>
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
                            <Form className='ms-5' onSubmit={handleSubmit}>
                                <Form.Group className='mb-3' controlId='formName'>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type='text' name='fullname' value={values.fullname} placeholder='Enter your name' required onChange={handleChange} />
                                    {errors.fullname && <span className='text-danger name-error'>{errors.fullname}</span>}
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formEmail'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' name='email' value={values.email} placeholder='Enter your email' required onChange={handleChange} />
                                    {errors.email && <span className='text-danger email-error'>{errors.email}</span>}
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formPhone'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type='tel' name='ph_no' value={values.ph_no} placeholder='Enter your phone number' required onChange={handleChange} />
                                    {errors.ph_no && <span className='text-danger ph_no-error'>{errors.ph_no}</span>}
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formResume'>
                                    <Form.Label>Upload Resume</Form.Label>
                                    <Form.Control type='file' name='upload_file' className='w-100 custom-width' required onChange={setValues({...values, upload_file:e.target.files[0]})} />
                                    {errors.upload_file && <span className='text-danger upload_file-error'>{errors.upload_file}</span>}
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formMessage'>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as='textarea' name='message' value={values.message} rows={5} placeholder='Write a message' required onChange={handleChange} />
                                    {errors.message && <span className='text-danger message-error'>{errors.message}</span>}
                                </Form.Group>

                                <Button variant='primary' type='submit' className='w-100 mt-3' disabled={loading}>{loading ? (<div className='d-flex justify-content-center align-items-center w-100'><Spinner animation='border' size='lg' /></div>) : (
                                    'Submit'
                                )}</Button>
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
