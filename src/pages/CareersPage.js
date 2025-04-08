import { Container } from 'react-bootstrap'
import '../Styles/CareersPage.css'
import careerimg from '../Images/image197.jpeg'
import careerimg1 from '../Images/image209.png'
import careerimg2 from '../Images/image211.png'
import careerimg3 from '../Images/image212.png'
import careerimg4 from '../Images/image213.png'
import careerimg5 from '../Images/image214.png'
import careerimg6 from '../Images/image215.png'
import careerimg7 from '../Images/image216.png'
import careerimg8 from '../Images/image213.gif'
import careerdata from '../components/API/careerdata'
import { easeInOut, motion } from 'framer-motion'
import JobApplication from '../components/forms/JobApplication'
import HiringProcess from './HiringProcess'
import HiringMethod from './HiringMethod'


const CareersPage = () => {

  return (
    <Container fluid className='main-container p-0'>
    <Container fluid className='career-container p-0 d-flex flex-column'>
      
      <div className='career-bg-overlay'></div>
      <img src={careerimg} alt='Career Page Loading Img' className='career-bg-img' />

      <img src={careerimg2} alt='Career Page Loading Img' className='img-fluid career-bg-img1' />
      <img src={careerimg3} alt='Career Page Loading Img' className='career-bg-img2' />
      <img src={careerimg1} alt='Career Page Loading Img' className='career-bg-img3' />
      <img src={careerimg4} alt='Career Page Loading Img' className='career-bg-img4' />
      <img src={careerimg6} alt='Career Page Loading Img' className='career-bg-img5' />
      <img src={careerimg5} alt='Career Page Loading Img' className='career-bg-img6' />
      <img src={careerimg7} alt='Career Page Loading Img' className='career-bg-img7' />
      <img src={careerimg8} alt='Career Page Loading Img' className='career-bg-img8' />
      <motion.div className='career-content text-center mx-auto my-auto'
      initial={{ opacity: 0, scale: 0}}
      whileInView={{ opacity: 1, scale: 1}}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease:easeInOut }}
      >
      <h1 className='text-primary career-content-c1 fw-bold mt-3 display-1'>{careerdata.company.name} <span className='cn1'>{careerdata.company.name1}</span></h1>
        <h2 className='my-4'>
          <span className='career-content-t1 display-4'>{careerdata.company.tagline1} </span> &nbsp; 
          <span className='career-content-t2 display-4 fw-
          '>{careerdata.company.tagline2} </span> &nbsp;
          <span className='career-content-t3 display-4 fw-semibold'>{careerdata.company.tagline3}</span>
          </h2>
        <p className='career-content-desc text-muted fw-semibold'>{careerdata.company.description}</p>
      </motion.div>
    </Container>
    <HiringProcess />
    <HiringMethod />
    <JobApplication /> 
    </Container>
  )
}

export default CareersPage
