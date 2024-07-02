import React from 'react'
import './Hero.css'
import scroll from '../../assets/img/scroll down.png'

function Hero() {
  return (
    <div className='Hero'>
        <div className="container">
          <h1 className='hero__title'>SURVIVE AT ALL COSTS</h1>
          <p className='hero__info'>Experience new social battle royale game</p>
          <button className='hero__btn'>Buy now on Steam | $14.99</button>
          <div className='hero__div'>
              <img src={scroll} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Hero