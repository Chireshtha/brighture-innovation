import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import careerdata from '../components/API/careerdata'
import { useParams } from 'react-router-dom'

const ApplyJob = () => {
    const { slug } = useParams();
    const job = careerdata.careers.find(job => job.slug === slug);
    return (
        <Container fluid className='p-0'>
            <Row>
                <Col md={12}>
                    <Card>
                        <Card.Body>
                            <Card.Title><strong>Title:</strong> {job.title}</Card.Title>
                            <Card.Subtitle>{job.location} &nbsp; | &nbsp; {job.job_type}</Card.Subtitle>
                            <Card.Text><strong>Description:</strong> {job.description}</Card.Text>
                            <Card.Text><strong>Experience Required:</strong>{job.experience}</Card.Text>
                            <h5>Responsibilities:</h5>
                            <ListGroup>
                                {job.responsibilities.map((responsibility, index) => (
                                    <span key={index}>{responsibility}</span>
                                ))}
                            </ListGroup>
                            <h5>Qualifications:</h5>
                            <ListGroup>
                                {job.qualifications.map((qualification, index) => (
                                    <span key={index}>{qualification}</span>
                                ))}
                            </ListGroup>
                            <h5>Benefits:</h5>
                            <ListGroup>
                                {job.benefits.map((benefit, index) => (
                                    <span key={index}>{benefit}</span>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ApplyJob
