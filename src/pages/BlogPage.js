import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import blogdata from '../components/API/blogdata'
import '../Styles/BlogPage.css'
import { Link } from 'react-router-dom'

const BlogPage = () => {
  const [blogContent, setBlogContent] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);


  useEffect(() => {
    setBlogContent(blogdata[0].blog);

    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % blogdata[0].blog.headerSlides.length);
    }, 5000);

    return () => clearInterval(slideInterval)
  }, [])

  if (!blogContent)
    return <p className='text-center mt-5'>Loading...</p>;

  console.log(blogdata[0].blog)


   return (
    <Container fluid className='blog-container-1 p-0 m-0'>
      <Carousel className='blog-header-img' activeIndex={activeSlide} onSelect={(selectedIndex) => setActiveSlide(selectedIndex)}>
        {blogContent.headerSlides.map((headerSlide, index) => (
          <Carousel.Item key={index} className='text-center py-5 carousel-item'>
            <div className='text-light'>
              <h1>{headerSlide.title}</h1>
              <p className='my-4'>{headerSlide.subtitle}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Row className='mt-5'>
        <Col md={8} >
          {blogContent.sections.map((section, index) => (
            <div key={index} className='mb-4 ms-2'>
              <h1 className='pb-3 text-center fs-1'> {section.title}</h1>
              <Row className='g-4'>
                {section.posts.map((post, index) => (
                  <Col key={index} md={4}>
                    <Card className='shadow-sm card-blog'>
                      <Card.Body className='p-0'>
                        <Card.Img variant='top' src={post.image} alt='Blog Img Loading...' className=' blog-post' />
                        <Card.Title className='text-start text-primary my-3 mx-3 blog-title'>{post.title}</Card.Title>
                        <Card.Text className='text-start my-3 mx-3 post-desc'>{post.description}</Card.Text>
                        <div className='ms-3'>
                          {post.tags.map((tag, i) => (
                            <span key={i} className='badge bg-primary me-1 mb-4 text-light'> # {tag} </span>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Col>
        <Col md={4}>
          <div className='custom-font'>
            <h3 className='text-primary fs-4'>➡️ Categories</h3>
            <ul className='text-primary px-1'>
              {blogContent.sidebar.categories.map((category, index) => (
                <li className='list-unstyled' key={index}>✅ &nbsp;{category}</li>
              ))}
            </ul>
          </div>
          <div className='me-2'>
            <h3 className='text-primary fs-4 my-3 custom-font'>➡️ Popular Posts</h3>
            <Row className='g-2'>
              {blogContent.sidebar.popular_posts.map((post, index) => (
                <Col key={index} md={4} >
                  <Card className='shadow-sm card-blog-1'>
                    <Card.Body className='p-0'>
                      <Card.Img variant='top' src={post.image} alt='Blog Img Loading...' className='blog-post-img' />
                      <Card.Title className='text-start fs-6 text-primary mt-3 ms-2 e-1 blog-title-1'>{post.title}</Card.Title>
                      <Link to={post.link} className='d-flex justify-content-center text-decoration-none'><button className='btn btn-danger btn-sm px-3 text-center mb-3'> Read More </button></Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <div id='news-updates' className='my-4 text-center custom-font'>
            <h3 className='text-center text-primary'>Newsletter</h3>
            <h5 className='text-start text-primary mt-4'>{blogContent.additionalContent.newsletter.title}</h5>
            <p className='text-start'>{blogContent.additionalContent.newsletter.description}</p>
            <div className='subscribe-block'>
              <Button className='btn-outline-light btn-warning subscribe-btn my-1 my-5'><Link to="/subscribe" className='text-light fs-5 text-decoration-none'>SUBSCRIBE NOW</Link></Button>
            </div>
          </div>
          <div className='me-2'>
            <h3 className='text-primary fs-4 my-3 custom-font'>➡️ Featured Topics</h3>
            <Row className='g-2'>
              {blogContent.additionalContent.featuredTopics.map((topic, index) => (
                <Col key={index} md={4} >
                  <Card className='shadow-sm card-blog-1'>
                    <Card.Body className='p-0'>
                      <Card.Img variant='top' src={topic.image} alt='Blog Img Loading...' className='blog-post-img' />
                      <Card.Title className='text-start fs-6 text-primary mt-3 ms-2 me-1 blog-title-1'>{topic.title}</Card.Title>
                      <Link to={topic.link} className='d-flex justify-content-center text-decoration-none'><button className='btn btn-danger btn-sm px-3 text-center mb-3'> Read More </button></Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <div className='px-3 bg-light'>
            <Row>
              <Col md={8}>
                <h5 className='text-primary mt-3 fw-lighter'>Company: <span className='fw-bold fw-lighter'>{blogContent.meta.company}<span className='text-success fst-italic'> {blogContent.meta.company1}</span></span></h5>
                <p className='text-muted text-start me-4'>{blogContent.meta.last_updated}</p>
                <div>
                  {blogContent.meta.tags.map((tag, index) => (
                    <span key={index} className='badge me-1 text-dark bg-warning'>#{tag}</span>
                  ))}
                </div>
              </Col>
              <Col md={4}>
                <div className='mr-5 d-flex justify-content-center align-items-center'>
                  <Button className='btn-outline-light btn-warning subscribe-btn my-1 my-5'><Link to="/subscribe" className='text-light fs-5 text-decoration-none custom-font'>SUBSCRIBE NOW</Link></Button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

    </Container>
  )
}

export default BlogPage
