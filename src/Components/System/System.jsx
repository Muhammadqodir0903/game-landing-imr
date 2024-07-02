import React from 'react'
import './System.css'
import system from '../../assets/img/system__img.png'

function System() {
  return (
    <div className='System' id='system'>
        <div className="container">
            <p className='system__p'>Can My Computer Run this game?</p>
            <h1 className='system__h1'>system requirements</h1>
            <div className='system__wrapper'>
              <img className='img' src={system} alt="" />
            </div>
        </div>
    </div>
  )
}
 
export default System