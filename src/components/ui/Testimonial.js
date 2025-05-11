import React from 'react'
import ClientReview from '../API/Clientreview'
import { Card, Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import '../../Styles/Testimonial.css'
import StarRating from '../../routes/StarRating'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FaSmile } from 'react-icons/fa'

const Testimonial = () => {
  return (
    <Container id='testimonials' fluid className='my-5 testimonial-section'>
      <motion.h2 className='text-center'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
      >
        What Our Clients Say <FaSmile size={34} color="gold" />
      </motion.h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        loopedSlides={ClientReview.length}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {ClientReview.map((user) => (
          <SwiperSlide key={user.id} className='my-5 testimonial-swiper'>
            <Card className='p-3 testimonial-container'>
              <Card.Body>
                <Card.Title className='py-2 fs-3'>{user.name}</Card.Title>
                <Card.Subtitle className='py-2 fs-5 text-muted'>{user.project}</Card.Subtitle>
                <Card.Text className='fst-italic'>{user.feedback}</Card.Text>
                <StarRating className='d-flex justify-content-center' rating={user.rating} size={24} />
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Testimonial
