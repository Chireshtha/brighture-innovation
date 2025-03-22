import React from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Images/logoimg.jpeg';
import logotxt from '../../Images/logotxt.jpeg'
import '../../Styles/NavigationBar.css';
import useDropdown from "../../hooks/useDropdown";
import useToggleBtn from "../../hooks/useToggleBtn";
import { FaTimes, FaBars } from 'react-icons/fa';
import services from "../API/servicedata";

const Navigationbar = () => {
    const { openDropdown, togglerRef, handleMouseEnter, handleMouseLeave, handleDropdownItemClick, handlemobileDropdownItemClick } = useDropdown();
    const { isToggled, handleToggle } = useToggleBtn();


    return (
        <Navbar variant="dark" expand='md' className="fs-5 fixed-top h-80 custom-navbar">
            <Container >
                <Navbar.Brand as={NavLink} to="/">
                    <img src={logo} alt="Brighture logo loading" height="70" className="me-2 custom-img" />
                    <img src={logotxt} alt="text loading" height="45" className="me-2 custom-img" />
                </Navbar.Brand>
                <Navbar.Toggle ref={togglerRef} aria-controls="navbar-nav" className="custom-navbar-toggler" onClick={handleToggle}>{isToggled ? <FaTimes size={24} /> : <FaBars size={24} />}
                </Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav" className="navbar-collapse">
                    <Nav className="ms-auto mt-4 pt-3 px-6">
                        <Nav.Link as={NavLink} to="/" className="nav-link custom-nav-link" onClick={handlemobileDropdownItemClick}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="nav-link custom-nav-link" onClick={handlemobileDropdownItemClick}>About</Nav.Link>
                        {/* Services Dropdown */}

                        <NavDropdown title="Services" id="services-dropdown" align="end" show={openDropdown === "services"} onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave} className="custom-nav-link" onClick={() => { handleMouseEnter(openDropdown === "services" ? "null" : "services") }} >
                            <Container className="custom-dropdown p-3">
                                <Row className="dropdown-row">
                                    {services.map((service, index) => (
                                        <Col md={4} sm={6} xs={12} key={index} className="dropdown-col">
                                            <NavDropdown.Item className="custom-nav-item" as={NavLink} to={`/services/${service.slug}`} onClick={() => { handleDropdownItemClick(); handlemobileDropdownItemClick(); }}>{service.title}</NavDropdown.Item>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/portfolio" className="nav-link custom-nav-link" onClick={handlemobileDropdownItemClick}>Portfolio</Nav.Link>
                        <Nav.Link as={NavLink} to="/blog" className="nav-link custom-nav-link" onClick={handlemobileDropdownItemClick}>Blog</Nav.Link>
                        {/* {career Dropdown} */}
                        <NavDropdown title="Careers" id="careers-dropdown" show={openDropdown === "careers"} onMouseEnter={() => handleMouseEnter("careers")} onMouseLeave={handleMouseLeave} className="custom-nav-link" onClick={() => { handleMouseEnter(openDropdown === "careers" ? "null" : "careers") }}>
                            <Container className="custom-dropdown-1">
                                <NavDropdown.Item className="custom-nav-item" as={NavLink} to="/careers/internships" onClick={() => { handleDropdownItemClick(); handlemobileDropdownItemClick(); }}>Internships</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" as={NavLink} to="/careers/fulltime" onClick={() => { handleDropdownItemClick(); handlemobileDropdownItemClick(); }}>Full-Time Jobs</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" as={NavLink} to="/careers/parttime" onClick={() => { handleDropdownItemClick(); handlemobileDropdownItemClick(); }}>Part-Time Jobs</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" as={NavLink} to="/careers/remote" onClick={() => { handleDropdownItemClick(); handlemobileDropdownItemClick(); }}>Remote Opportunities</NavDropdown.Item>
                            </Container>
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/contact" className="nav-link custom-nav-link" onClick={handlemobileDropdownItemClick}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigationbar;