import React from 'react'
import './Wraper.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import star5logo from './5star.png'
import training from './trainingsession.png'
import grooming from './groomingsession.png'
import placements from './placementsession.png'
import internship from './internshipsession.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWhatsapp } from 'react-icons/fa';

function Box({ image, title, description, url }) {
  return (
    <a href={url} className="wrapperbox">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </a>
  );
}

function Wraper() {
  const handleClick = (event) => {
    event.preventDefault();
    alert('Cannot Contact NOW!');
  };
  const boxes = [
    { image: training, title: 'Training', description: 'You are trained under Suffix E Solutions working professionls, on-the-job training model', url: '/Courses' },
    { image: internship, title: 'Internship', description: 'After course completion,you will be proceeded to live projects with 6 months experience certificate', url: '/Courses' },
    { image: grooming, title: 'Grooming', description: 'CV Preparation,Interbiew Preparation, and Personality Development', url: '/Courses' },
    { image: placements, title: 'Placement', description: "Gives 100% FREE placement support to all our fellow techies through SCOPE INDIA's Placement Cell", url: '/Placement' },
  ];


  return (
    <div className='wrappermain'>
      <div className='wrapper'>
        <div className='starimgdiv'>
          <a href='https://g.page/r/CXbW6SZGeJPfEAE'>
            <img src={star5logo} alt='star5logo' className='starimg' />
          </a>
          <p className='rating'> Google 4.9 * Rated Institute</p>
        </div>
        <h1 className='wrapperh1'>SCOPE INDIA, your career partner!</h1>
        <h2 className='wrapperh2'>One of the best Training Destination for Software, Networking and Cloud Computing courses in India</h2>
        <p className='wrapperp1'>Software, Networking, and Cloud Professional Education Centre in Kerala from Suffix E Solutions with WORKING PROFESSIONALS oriented on-
        the-job TRAINING model. SCOPE INDIA provides courses for <strong> Software Programming </strong>  in Python (Data Science | Artificial Intelligence |
        Machine Learning | Deep Learning), Java, PHP, .Net, <strong>Software Testing</strong> Manual and Automation,<strong> Cloud </strong> in AWS, Azure,<strong>Server Administration</strong>
        in MCSE, and RHCE, <strong>CCNA</strong>, <strong>Mobile App Development</strong> in Flutter, and,<strong>Digital Marketing</strong> . Training with 100% Trusted Job Based Internship
        Model. SCOPE INDIA has a Strong Placement Cell that provides jobs to 1000's of students every year. We assure you, you won't regret it after
        training from SCOPE INDIA!</p>
        <p className='wrapperp2'>This is how SCOPE INDIA can support both newbies and experienced in the industry to upgrade their skills.</p>
        <div className='btndiv'>
        <a className='btn btn-primary wbtn' href='/Placement'><span>Recent Placements</span></a>
        <a className='btn btn-warning wbtn' href='/Courses'><span>Courses</span></a>
        <a className='btn btn-success wbtn' href='/Register'><span>Register Now!</span></a>
        <a className='btn btn-success wbtn' href='#' onClick={handleClick}><FaWhatsapp style={{ marginRight: '10px' }} /><span>Chat on Whatsapp</span></a>
        </div>
        <div className='sessionwrapper'>
          <div className='session'>
            <div className="wrappercontainer">
              {boxes.map((box, index) => (
                <Box key={index} {...box} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wraper
