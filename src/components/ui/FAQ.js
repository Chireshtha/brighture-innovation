import React, { useState } from 'react'
import faqData from '../API/Faqsdata'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaChevronDown } from 'react-icons/fa';
import '../../Styles/FAQ.css'

const FAQ = () => {
    const [isActive, setIsActive] = useState(null);

    const handleToggle = (index) => {
        setIsActive(isActive === index ? null : index)
    }

    return (
        <Container fluid id='faqs' className='faqs-container pb-4'>
            <Row className='d-flex justify-content-center align-items-center px-4'>
                {faqData.map((faqs, index) => (
                    <Col key={index} md={10}>
                        <Card className='my-3 ps-4 rounded-3 border-0 faq-card' onClick={()=>handleToggle(index)}>
                            <Card.Body>
                                <div className='d-flex flex-row justify-content-between align-items-center'>
                                <h5 className='pt-3'>{faqs.question}</h5>
                                <FaChevronDown className={`chevron-icon ${isActive === index ? 'rotate':''}`} />
                                </div>
                                <p className={`faq-answer ${isActive === index ? 'show':''}`}>{faqs.answer}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default FAQ
