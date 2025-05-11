import { useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import '../../Styles/ContactPage.css'
import Validation from './ValidationForm';

const ContactForm = () => {
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        ph_no: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues((prev) => ({...prev, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        setLoading(true);

        try{
            const response = await fetch(`${process.env.REACT_APP_API_URL}/messageme/${id}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(values),
            });
            if (response.ok){
                alert("Message sent successfully");
                setValues({first_name:'', last_name:'', email:'', ph_no:'', message:''});
            }
            else{
                alert("Failed to send. Please try again");
            }
        }
        catch(error){
            console.error('Error:', error);
            alert('An error occurred. check console');
        }
        finally{
            setLoading(false);
        }
    };



    return (
        <Container id='help-center' fluid className='contact-container-1'>
            <Row>
                <Col md={5} className='text-light mx-auto my-auto'>
                <div>
                <h1 className='display-3 contact-heading fw-bold'>HAVE YOUR SAY!</h1>
                <p className='lead my-5 contact-para fw-bold'>Whether you have a <span className='span-color'>compliment /complaint / need more information</span> about our <span className='span-color'>services or your application</span>, get in touch with us and we’ll get back to you as soon as we can.</p>
                </div>
                </Col>
                <Col md={4} className='text-light mx-auto my-5'>
                    <div className='contact-form'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='mb-3' controlId='formFirstName'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type='text' name='first_name' value={values.first_name} onChange={handleChange} required placeholder='First Name' className='rounded-0' />
                                {errors.first_name && <span className='text-danger name-error'>{errors.first_name}</span>}
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formLastName'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='text' name='last_name' value={values.last_name} onChange={handleChange} required placeholder='Last Name' className='rounded-0' />
                                { errors.last_name && <span className='text-danger name-error'>{errors.last_name}</span>}
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formEmail'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' name='email' value={values.email} onChange={handleChange} required placeholder='Email' className='rounded-0' />
                                {errors.email && <span className='text-danger email-error'>{errors.email}</span>}
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formPhone'>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type='tel' name='ph_no' value={values.ph_no} onChange={handleChange} required placeholder='Phone Number' className='rounded-0' />
                                {errors.ph_no && <span className='text-danger phno-error'>{errors.ph_no}</span>}
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formMessage'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as='textarea' rows={5} name='message' value={values.message} onChange={handleChange} required placeholder='Write a message' className='rounded-0' />
                                {errors.message && <span className='text-danger message-error'>{errors.message}</span>}
                            </Form.Group>
                            <Button type='submit' className='w-100 mt-3 rounded-0 color-2' disabled={loading}>{loading?(<div className='d-flex justify-content-center align-items-center w-100'><Spinner animation='border' size='lg' /></div>):('Submit')}</Button>
                        </Form>
                    </div>
                </Col>
            </Row>

        </Container>

    )
}

export default ContactForm
