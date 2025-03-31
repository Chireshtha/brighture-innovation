import { Button, Card, Col, Container, Form, Pagination, Row } from 'react-bootstrap'
import useFilter from '../../hooks/useFilter'
import '../../Styles/CareersPage.css';
import { useEffect, useState } from 'react';
import {FaBriefcase, FaLocationDot} from 'react-icons/fa6'
import { Link } from 'react-router-dom';

const JobApplication = () => {
  const {
    categories,
    locations,
    jobTypes,
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    selectedJobType,
    setSelectedJobType,
    searchTerm,
    setSearchTerm,
    filteredJobs,
    applyFilter,
    allJobs
  } = useFilter();

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, selectedLocation, selectedJobType, searchTerm])


  const jobsToDisplay = filteredJobs.length > 0 || searchTerm || selectedCategory !== "All"
    || selectedLocation !== "All" || selectedJobType !== "All" ? filteredJobs : allJobs;

  const totalPages = Math.ceil(jobsToDisplay.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = currentPage * jobsPerPage;
  const paginatedJobs = jobsToDisplay.slice(startIndex, endIndex);
 
  return (
    <Container fluid className='career-job'>
      <h2 className='text-center py-4'>Open Positions</h2>
      <div className='bg-light py-4'>
        <Row className='py-3 w-100 d-flex justify-content-center align-items-center'>
          <Col md={5} >
            <Form.Control type='text' placeholder='Search for jobs or keywords' className='w-100 rounded-0 p-3' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </Col>
          <Col md={3} >
            <button onClick={applyFilter} className='btn btn-bg-color rounded-0 p-3 w-50'>Search</button>
          </Col>
        </Row>
        <Row className='py-3 w-100 d-flex justify-content-center align-items-center'>
          <Col md={3} >
            <p className='ps-1 fs-6 fw-bold'>Category</p>
            <Form.Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Form.Select>
          </Col>
          <Col md={3}>
            <p className='ps-1 fs-6 fw-bold'>Location</p>
            <Form.Select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </Form.Select>
          </Col>
          <Col md={2}>
            <p className='ps-1 fs-6 fw-bold'>Job Type</p>
            <Form.Select value={selectedJobType} onChange={(e) => setSelectedJobType(e.target.value)}>
              {jobTypes.map((jobType) => (
                <option key={jobType} value={jobType}>{jobType}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </div>
      <Row className='py-1'>
        {paginatedJobs && paginatedJobs.length > 0 ? (
          paginatedJobs.map((job) => (
            <Col md={12}>
              <Card key={job.id} className='my-2'>
                <Card.Body>
                  <Card.Title className='py-1 '>{job.title}</Card.Title>
                  <div className='d-flex flex-row'>
                    <Card.Subtitle className='mx-left my-auto w-25'><FaLocationDot color='#0a9396'/> {job.location}</Card.Subtitle>
                    <Card.Subtitle className='mx-auto my-auto w-25'>{job.job_type}</Card.Subtitle>
                    <Card.Subtitle className='mx-auto my-auto w-25'><FaBriefcase color='#0a9396'/> {job.experience}</Card.Subtitle>
                    <Button variant='dark' className='mx-last my-auto bg-primary border-0 btn-md'><Link to={`/applyjob/${job.slug}`} className='text-light fs-6 text-decoration-none'>Apply Now</Link></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className='my-5 text-center'>
            <p className='py-5 text-danger fs-5'>No Jobs Found</p>
          </div>
        )}
      </Row>
      {totalPages > 1 &&
        <Pagination className='justify-content-center py-5'>
          <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </Pagination>
      }
    </Container>
  )
}

export default JobApplication
