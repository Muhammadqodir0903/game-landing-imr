import React from 'react'
import './What.css'
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { Swiper, SwiperSlide } from 'swiper/react';
import screnshot1 from '../../assets/img/screenshot 1.png'
import screnshot2 from '../../assets/img/screenshot 2.png'
import screnshot3 from '../../assets/img/screenshot 3.png'



function What() {

  return (
    <div className='What' id='about'>
      <div className="container">
        <div className='what__div'>

          <div className='div__div'>
            <p className='what__p'>What is SOS?</p>
            <h1 className='what__h1'>social battle royale game</h1>
            <span className='what__span'></span>
            <p className='what__info'>Each round, you and 15 other contestants compete to
              escape a deadly island filled with monsters. The trick is: three people can survive. Will you run
              solo or form friendships with others to escape?
            </p>
            <p className='what__info2'>
              Making the right decisions could be the
              difference between life and death.</p>

          </div>


          <div className='swiper__div'>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img className='swiper__img' src={screnshot1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='swiper__img' src={screnshot2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='swiper__img' src={screnshot3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </div>
    </div>
  )
}

export default What