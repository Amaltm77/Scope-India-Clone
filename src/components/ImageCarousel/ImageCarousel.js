import React from 'react'
import './ImageCarousel.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import banner1 from './banner1.jpg'
import banner2 from './banner2.jpg'
import banner3 from './banner3.jpg'
import banner4 from './banner4.jpg'
import banner5 from './banner5.jpg'
import banner6 from './banner6.jpg'
import banner7 from './banner7.jpg'
import banner8 from './banner8.jpg'
import banner9 from './banner9.jpg'
import banner10 from './banner10.jpg'
import banner11 from './banner11.jpg'
import banner12 from './banner12.jpg'
import banner13 from './banner13.jpg'


function ImageCarousel() {
  return (
    <>
      <Carousel autoPlay interval={2000} infiniteLoop useKeyboardArrows dynamicHeight showThumbs={false} showStatus={false} showIndicators={false} >
            <div>
                <img src={banner1} alt="Image 1"/>
            </div>
            <div>
                <img src={banner2} alt="Image 2"/>
            </div>
            <div>
                <img src={banner3} alt="Image 3"/>
            </div>
            <div>
                <img src={banner4} alt="Image 4"/>
            </div>
            <div>
                <img src={banner5} alt="Image 5"/>
            </div>
            <div>
                <img src={banner6} alt="Image 6"/>
            </div>
            <div>
                <img src={banner7} alt="Image 7"/>
            </div>
            <div>
                <img src={banner8} alt="Image 8"/>
            </div>
            <div>
                <img src={banner9} alt="Image 9"/>
            </div>
            <div>
                <img src={banner10} alt="Image 10"/>
            </div>
            <div>
                <img src={banner11} alt="Image 11"/>
            </div>
            <div>
                <img src={banner12} alt="Image 12"/>
            </div>
            <div>
                <img src={banner13} alt="Image 13"/>
            </div>
        </Carousel>
        
    </>
  )
}

export default ImageCarousel;
