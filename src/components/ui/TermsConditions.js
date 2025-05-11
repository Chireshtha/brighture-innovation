import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import terms from '../API/TermsConditionsData'

const TermsConditions = () => {
  return (
    <Container fluid id='terms-conditions' className='my-5'>
      <Row className="d-flex justify-content-center align-items-center">
        {
          terms.map((data, index)=>(
            <Col key={index} md={10} className="d-flex flex-column">
              <h1 className="fw-bold">{data.title}</h1>
              <p>{data.intro}</p>
              {data.sections.map((termdata, index)=>(
                <div key={index}>
                  <h5 className="fw-bold">{termdata.heading}</h5>
                  <p>{termdata.content}</p>
                </div>
              ))}
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default TermsConditions
