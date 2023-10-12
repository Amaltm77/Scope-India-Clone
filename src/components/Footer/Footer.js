import React from 'react'
import './Footer.css'
import scopelogo from './scopelogo.png'
import iso from './iso.png'

function Footer() {
  return (
    <div className='footermain'>
      <div className='footer'>
        <img src={scopelogo} alt='scope logo' />
        <img src={iso} alt='ISO logo' />
        <div className='linkz'>
          <a className="footer_links" href="tel:+919745936073">9745936073 (TVM)</a>
          <a className="footer_links " href="tel:+917592939481">7592939481 (EKM)</a>
          <a className="footer_links" href="tel:+918075536185">8075536185 (NGL)</a>
          <a className="footer_links" target="_blank" href="mailto:info@scopeindia.org" style={{outline: 'none'}}>info@scopeindia.org</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
