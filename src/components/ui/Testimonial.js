import React from 'react' 
import Clientreview from '../../routes/Clientreview'
import { Card, Container } from 'react-bootstrap'
import { motion } from 'framer-motion'
import '../../Styles/Testimonial.css'
import StarRating from '../../routes/StarRating' 
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FaSmile } from 'react-icons/fa'

const Testimonial = () => {
  return (
    <Container className='my-5'>
      <motion.h2 className='text-center'
      initial = {{opacity:0, y:-30}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:false, amount:0.2}}
      whileHover={{scale:1.03}}
      transition={{duration: 0.5}}
       >
        What Our Clients Say <FaSmile size={34} color="gold"/>
      </motion.h2>
      <Swiper 
      modules = {[Navigation, Pagination, Autoplay]}
      spaceBetween = {50}
      slidesPerView = {1}
      breakpoints = {{
        640: {slidesPerView : 1},
        768: {slidesPerView : 2},
        1024: {slidesPerView : 3}
      }}
      navigation
      pagination = {{clickable:true}}
      autoplay = {{delay: 3000}}
      loop
      >
         {
          Clientreview.map((user, index)=>(
            <SwiperSlide key={index} className='my-5 custom-swiper'>
            <Card key={index} className='p-3 testimonial-container'>
              <Card.Body>
                <Card.Title className='py-2 fs-4'>{user.name}</Card.Title>
                <Card.Subtitle className='py-2'>{user.project}</Card.Subtitle>
                <Card.Text className='fst-italic'>{user.feedback}</Card.Text>
                <StarRating className='d-flex justify-content-center' rating={user.rating} size={24} />
              </Card.Body>
            </Card>
            </SwiperSlide>
          ))
        }
       </Swiper>
    </Container>
  )
}

export default Testimonial
