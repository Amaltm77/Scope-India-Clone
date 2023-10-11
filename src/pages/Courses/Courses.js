import React from 'react'
import './Courses.css'
import Training from '../../components/Trainingposter/Training'
import CourseList from '../../components/CourseList/CourseList'
import Callback from './../../components/Callback/Callback';
import HeadFooter from './../../components/HeadFooter/HeadFooter';
import Footer from './../../components/Footer/Footer';

function Courses() {
  return (
    <>
    <div className='header'>
      <Training/>
      <CourseList/>
      <Callback/>
      <HeadFooter/>
      <div className='course_footer_div'>
        <Footer/>
      </div>
      
    </div>
      
    </>
  )
}

export default Courses
