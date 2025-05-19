import { Col, Container, Row } from "react-bootstrap"
import PolicyData from '../API/PrivacyPolicyData'

const PrivacyPolicy = () => {
    return (
        <Container fluid id="privacy-policy">
            <Row className="d-flex justify-content-center align-items-center">
                {
                    PolicyData.map((data, index) => (
                        <Col key={index} md={10} className="d-flex flex-column">
                            <h1 className="fw-bold">{data.title}</h1>
                            <p>{data.intro}</p>
                            {
                                data.sections.map((policy, index) => (
                                    <div key={index} className="">
                                        <h5 className="fw-bold">{policy.heading}</h5>
                                        <p>{policy.content}</p>
                                    </div>
                                ))
                            }
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default PrivacyPolicy
