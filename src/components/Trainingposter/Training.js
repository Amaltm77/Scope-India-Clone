import React from 'react'
import './Training.css'
import poster from'./ad.jpg'
import starslogo from './star5.png'

function Training() {
  return (
    <>
    <div id='training'>
        <div className='chead'>
            <h1>Our Training Programs</h1>
            <h6>All Trainers are working professionals, Software Engineers, Networking Engineers, and Software Test Engineers of Suffix E Solutions</h6>
        </div>
        <a href='#'> <img src={poster}/> </a>
        <div className='starimgdiv'>
            <a href='https://g.page/r/CXbW6SZGeJPfEAE'>
            <img src={starslogo} alt='star5logo' className='starimg' />
            </a>
            <p className='trating'> Google 4.9 * Rated Institute</p>
        </div>
    </div>
   </>
  )
}

export default Training
