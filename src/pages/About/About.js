import React from 'react'
import './About.css'
import star5 from './5star.png'
import HeadFooter from '../../components/HeadFooter/HeadFooter'
import Footer from '../../components/Footer/Footer'

function About() {
  return (
    <>
      <div className='sessionw'>
        <div className='aboutwrapper'>
          <div className='innerwrapper'>
            <div className='partial'>
              <h1 className='abouth1'>SCOPE INDIA, your career partner!</h1>
              <h2 className='abouth2'>One of the best Training Destination for Software, Networking and Cloud Computing courses in India</h2>
              <p className='aboutp'>Software, Networking, and Cloud Professional Education Centre in Kerala from Suffix E Solutions with WORKING PROFESSIONALS oriented on-the-job TRAINING model. SCOPE INDIA provides courses for
                <strong>Software Programming</strong>
                in Python (Data Science | Artificial Intelligence | Machine Learning | Deep Learning), Java, PHP, .Net,
                <strong>Software Testing</strong>
                Manual and Automation, Cloud in AWS, Azure,
                <strong>
                  Server Administration
                </strong>
                in MCSE, and RHCE,
                <strong>CCNA</strong>,
                <strong>Mobile App Development</strong>
                in Flutter, and,
                <strong>Digital Marketing</strong>.
                Training with 100% Trusted Job Based Internship Model. SCOPE INDIA has a Strong Placement Cell that provides jobs to 1000's of students every year. We assure you, you won't regret it after training from SCOPE INDIA!
              </p>
              <p className='aboutp'>
                This is how SCOPE INDIA can support both newbies and experienced in the industry to upgrade their skills.
              </p>
            </div>
          </div>
          <div className="outerwrapper">
            <div className="wrapperbottom">
              <img src={star5} alt="5star" className='about5starimg' />
              <p className="aboutp2">
                Google 4.9 * Rated Institute
              </p>
            </div>
          </div>
          <div className="aboutbtndiv">
            <a href='/placement'><span className='btn btn-primary buttonabout'>Recent Placements</span></a>
            <a href='/Courses'><span className='btn btn-warning buttonabout'>Courses</span></a>
            <a href='/Regitser'><span className='btn btn-success buttonabout'>Register Now</span></a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerh">
          <div className="footerinnerhead">
            <HeadFooter />
          </div>
          <div className="outerfooterhead">
          </div>
        </div>
        <div className="mainfooter">
          <div className="footerouterdiv">
          <div className="innerfootercontent">
          <Footer/>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
