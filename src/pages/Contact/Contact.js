import React from 'react'
import './Contact.css'
import star from './5star.png'
import Callback from './../../components/Callback/Callback';
import Footer from './../../components/Footer/Footer';
import Locations from '../../components/Locations/Locations';

function Contact() {
  return (
    <>
      <div className="contactwrapper">
        <div className="wrapperc">
          <h1 className="contacth1">
            SCOPE INDIA is open 365 days a year
          </h1>
          <h2 className='contacth2'>
            Let's discuss your career, 24/7 free Consultation
          </h2>
          <div className="star">
            <a href="" className="stars">
              <img src={star} alt="" className='starimgcontact' />
            </a>
            <div className="contact5staro">
              <p style={{ color: 'white', marginTop: '10px' }}> Google 4.9 * Rated Institute</p>
            </div>
          </div>
        </div>
        <Callback />
      </div>
      <div className="afterwrappercontact">
        <Locations/>
      </div>
      <div className="footerabout">
        <div className="inneraboutfooter">
        <div className="container ">
        <Footer/>
        </div>
        </div>
      </div>
    </>
  )
}

export default Contact
