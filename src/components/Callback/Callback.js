import React from 'react'
import './Callback.css'
import callimg from './call.jpg'

function Callback() {
  return (
    <div>
      <div className='callbackmain' >
        <div className='callimgdiv' >
          <img src={callimg} alt="call" className='callbackimg' />
        </div>
        <div className='callbackinput'>
          <h2 style={{ fontWeight: 'bold', color: '#000c81' }}>SCOPE INDIA
            <br />is open 365 days a year</h2>
          <p style={{ marginTop: '50px', width: '300px', marginBottom: '50px' }}>We are open 7 days 24 hrs to talk to you and listen to your queries.</p>

          <div className='callbackinput'>
            <ul style={{ listStyle: 'none', margin: '0px' }}>
              <li><h3 style={{ color: '#009318', fontWeight: 'bold', marginLeft: '-30px', marginBottom: '50px' }}>GET A FREE CALL BACK</h3></li>
              <li><input type="text" placeholder="Name" name="text" className="callforminput" id='inputname' />  </li>
              <li><input type="number" placeholder="Phone Number" name="text" className="callforminput" id='inputnumber' /> </li>
              <li><button className='callmebutton' alt="Call Me">
                <i>C</i>
                <i>a</i>
                <i>l</i>
                <i>l</i>
                <i>&nbsp;</i>
                <i>M</i>
                <i>e</i>
              </button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Callback
