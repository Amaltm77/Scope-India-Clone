import React from 'react'
import './CourseList.css'

function CourseList() {
  return (
    <div className='container'>
        <div className='row'>
            <h3>Software Programming Courses</h3>
        </div>
        <div className='row'>
            <div className='box'><h6>Java Full Stack Internship </h6></div>
            <div className='box'><h6>Python Full Stack Internship</h6></div>
            <div className='box'><h6>PHP Full Stack Internship</h6></div>
        </div>
        <div className="row">
            <div className='box'><h6>.Net Core Full Stack Internship </h6></div>
            <div className='box'><h6>MERN Full Stack Internship </h6></div>
            <div className='box'><h6>MEAN Full Stack Internship</h6></div>
        </div>
        <div className="row">
            <div className='boxl'><h6>Android/iOS Mobile App Course in Google Flutter </h6></div>
            <div className='boxl'><h6>Android/iOS Mobile App Course in IONIC </h6></div>
            <div className='box'><h6>Website Designing Course</h6></div>
        </div>
        <div className='row'>
            <h3>Software Testing Courses </h3>
        </div>
        <div className='row'>
            <div className='boxl'><h6>Software Testing Advanced Course</h6></div>
        </div>
        <div className='row'>
            <h3>Networking, Server, & Cloud</h3>
        </div>
        <div className='row'>
            <div className='boxl'><h6>Networking, Server, & Cloud Administration </h6></div>
            <div className='box'><h6>AWS Architect Associate </h6></div>
            <div className='box'><h6>MS Azure Cloud Administrator </h6></div>
        </div>
        <div className='row'>
            <div className='boxl'><h6>Red Hat Certified System Administrator (RHCSA) </h6></div>
            <div className='boxl'><h6>Red Hat Certified Engineer (RHCE)</h6></div>
        </div>
        <div className='row'>
            <h3>Other Courses</h3>
        </div>
        <div className='row'>
            <div className='box'><h6>Data Science </h6></div>
            <div className='box'><h6>Data Analytics </h6></div>
            <div className='box'><h6>Digital Marketing Expert </h6></div>
        </div>
    </div>
  )
}

export default CourseList
