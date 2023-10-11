import React from 'react'
import './Contact.css'
import star from './5star.png'
import Callback from './../../components/Callback/Callback';
import { IoLocationSharp } from "react-icons/io5";
import { AiFillPhone } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { FaLink } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

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
        <div className="location container">
          <h2 class="st-current">Locations</h2>
          <div className="row locations">
            <div className="col-md-6">
              <div className="thumnail">
                <ul>
                  <li><h3>Technopark TVM, Kerala</h3></li>
                  <li class="address" style={{ margin: '10px' }}>
                    <span class="icon"><IoLocationSharp color='white' />  </span>
                    <span class="address_wrapper">Opp. Technopark, Trivandrum, Kerala 695581</span>
                  </li>
                  <li class="phone phone-1" style={{ margin: '10px' }}>
                    <span class="icon"><AiFillPhone color='white' /></span>
                    <a class="footer_links" href="tel:+919745936073">9745936073</a>
                  </li>
                  <li class="mail"style={{ margin: '10px' }}>
                    <span class="icon"><HiMail color='white' /></span>
                    <a class="footer_links" href="mailto:info@scopeindia.org">technopark@scopeindia.org</a>
                  </li>
                  <li class="www" style={{ margin: '10px' }}>
                    <span class="icon"><FaLink color='white' /></span>
                    <a class="footer_links" href="https://scopeindia.org/" title="A trusted IT Partner">www.scopeindia.org </a>
                  </li>
                  <li class="www" style={{ margin: '10px' }}>
                    <span class="icon"><FaMapLocation color='white' /></span>
                    <a class="footer_links" href="https://g.page/r/CXbW6SZGeJPfEAE" title="SCOPE INDIA Google Map Location to Trivandrum, Kerala" target="_blank">Location Route Map </a>
                  </li>
                </ul>
                <br/>
              </div>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
