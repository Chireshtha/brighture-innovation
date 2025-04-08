import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import '../../Styles/ContactPage.css'

const ContactForm = () => {
    return (
        <Container fluid className='contact-container-1'>
            <Row>
                <Col md={5} className='text-light mx-auto my-auto'>
                <div>
                <h1 className='display-3 contact-heading fw-bold'>HAVE YOUR SAY!</h1>
                <p className='lead my-5 contact-para fw-bold'>Whether you have a <span className='span-color'>compliment /complaint / need more information</span> about our <span className='span-color'>services or your application</span>, get in touch with us and we’ll get back to you as soon as we can.</p>
                </div>
                </Col>
                <Col md={4} className='text-light mx-auto my-5'>
                    <div className='contact-form'>
                        <Form>
                            <Form.Group className='mb-3' controlId='formFirstName'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type='text' placeholder='First Name' className='rounded-0' />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formLastName'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='text' placeholder='Last Name' className='rounded-0' />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formEmail'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' placeholder='Email' className='rounded-0' />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formPhone'>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type='tel' placeholder='Phone Number' className='rounded-0' />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formMessage'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as='textarea' rows={5} placeholder='Write a message' className='rounded-0' />
                            </Form.Group>
                            <Button type='submit' className='w-25 mt-3 rounded-0 color-2'>Submit</Button>
                        </Form>
                    </div>
                </Col>
            </Row>

        </Container>

    )
}

export default ContactForm
