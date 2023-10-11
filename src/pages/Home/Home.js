import React from 'react'
import './Home.css'
import Slider from '../../components/Slider/Slider'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import homeimg from './homeimgbackground.jpg'
import Wraper from '../../components/Wraper/Wraper'
import Callback from '../../components/Callback/Callback'
import HeadFooter from '../../components/HeadFooter/HeadFooter'
import Footer from './../../components/Footer/Footer';

function Home() {
  const backgroundImage = `linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,1)), url(${homeimg})`;
  return (
    <div >
      <Slider/>
      <div className='slider' style={{ background: backgroundImage}}>
        <ImageCarousel/>
        <Callback/>
      </div>
      <div>
        <Wraper/>
      </div>
      <div id='footerhd'>
        <HeadFooter/>
        <div id='footer'>
        <Footer/>
      </div>
      </div>
    </div>
  )
}

export default Home
