import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import footerroutes from '../../routes/footerroutes'
import subscribeimg from '../../Images/image241.jpg'
import subscribebgimg from '../../Images/image242.png'
import '../../Styles/SubscribePageForm.css'
import { useState } from 'react'
import Validation from './SubscribeValidation'

const SubscribePageForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    setLoading(true);

    try {
      // const response = await fetch(`${process.env.REACT_APP_API_URL}/subscribe`, {
      const response = await fetch('https://contact-backend-nput.onrender.com/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert("Thank you for subscribing!");
        setValues({ name: '', email: '' });
      }
      else {
        alert("Failed to send. Please try again");
      }
    }
    catch (error) {
      console.error('Error:', error);
      alert('An error occurred. check console');
    }
    finally {
      setLoading(false);
    }
  };


  return (
    <Container fluid className='subscribe-container py-5'>
      <img src={subscribebgimg} alt='subscribe img loading...' className='img-fluid subscribe-img' />

      <div className='d-flex flex-column justify-content-center align-items-center pb-5 py-3 my-auto mx-auto custom-bg'>
        <h3 className='fw-semibold my-4 custom-h3'>Subscribe Form</h3>
        <Card className='d-flex justify-content-center align-items-center custom-bg1 rounded-3 overflow-hidden'>
          <Row>
            <Col md={6}>
              <img src={subscribeimg} alt='subscribe img loading...' className='img-fluid' />
            </Col>
            <Col md={6} className='px-5 py-3 d-flex flex-column justify-content-center align-items-center'>
              <h6 className='fw-semibold custom-h6'>Subscribe Now</h6>
              <p className='text-muted custom-p'>Lets keep in touch! Please subscribe to our newsletter and stay updated</p>
              <Form onSubmit={handleSubmit} noValidate>
                <Form.Group controlId='formName'>
                  <Form.Control type='text' placeholder='Enter Your Name' name='name' value={values.name} className='input-text' onChange={handleChange} required /> 
                  {errors.name && <span className='text-danger name-error'>{errors.name}</span>}
                </Form.Group>
                <Form.Group className='mt-3' controlId='formEmail'>
                  <Form.Control type='email' placeholder='Enter Your Email' name='email' value={values.email} className='input-text' onChange={handleChange} required /> 
                  {errors.email && <span className='text-danger email-error'>{errors.email}</span>}
                </Form.Group>
                <Button type='submit' className='custom-button w-100 mt-3' disabled={loading}>{loading ? (<div className='d-flex justify-content-center align-items-center w-100'><Spinner animation='border' size='lg' /></div>) : (
                  'Subscribe'
                )} </Button>
                <div className='mt-4 text-center'>
                  {
                    footerroutes.addressLink.map((link, index) => (
                      <a key={index} href={link.path} target='_blank' rel='noopener noreferrer' className='px-2 input-text' style={{ color: link.color, fontSize: "23px" }}>{link.icon}</a>
                    ))
                  }
                </div>
              </Form>
            </Col>
          </Row>
        </Card>
      </div>
      <Row className='pt-5'>
        <Col md={12} className='text-center d-sm-flex justify-content-center align-items-center'>
          <span>&copy;{new Date().getFullYear()} Brighture Innovations. All rights reserved.</span>
        </Col>
      </Row>
    </Container>
  )
}

export default SubscribePageForm
