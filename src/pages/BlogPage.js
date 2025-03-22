import React, { useEffect, useState } from 'react'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import blogdata from '../components/API/blogdata'
import '../Styles/BlogPage.css'

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
              <h1 >{headerSlide.title}</h1>
              <p className='my-4'>{headerSlide.subtitle}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Row className='mt-5'>
        <Col md={8} >
          {blogContent.sections.map((section, index) => (
            <div key={index} className='mb-4'>
              <h1 className='mb-3'> {section.title}</h1>
              <Row>
                {section.posts.map((post, index) => (
                  <Col key={index} md={4}>
                  <Card className='shadow-sm card-blog'>
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Img variant='top' src={post.image} alt='Blog Img Loading...'/> 
                      <Card.Text>{post.description}</Card.Text>
                      <div>
                        {post.tags.map((tag, i)=>(
                      <span key={i} className='badge text-primary'> #{tag} </span>
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
      </Row>
        <Col md={4} className='bg-dark'>
        </Col>
    </Container>
  )
}

export default BlogPage
