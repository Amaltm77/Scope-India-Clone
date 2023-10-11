import React from 'react'
import sliderbg from './sliderbg.jpg'
import sliderlogo from './sliderlogo.png'
import './Slider.css'

function Slider() {
  return (
    <>
      <div className="sliderdiv" style={{ backgroundImage: `url(${sliderbg})` }}>
      <img src={sliderlogo} alt="Center" className="slider-image"/>
    </div>
    </>
  )
}

export default Slider
