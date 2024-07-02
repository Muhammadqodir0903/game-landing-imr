import React from 'react'
import './Press.css'
import photo1 from '../../assets/img/photo1.png'
import photo2 from '../../assets/img/photo2.png'
import photo3 from '../../assets/img/photo3.png'
import twitter from '../../assets/img/twitter.png'
import img_1 from '../../assets/img/press__img_1.png'
import Footer from '../Footer/Footer'

function Press() {
  return (
    <div className='Press' id='quotes'>
        <div className="container">
          <div className='press__ummumiy'>
              <div className='press__1'>
                <p className='press__p'>WHAT PEOPLE THINK?</p>
                <h1 className='press__h1'>PREES QUOTES</h1>

                <p className='press__p2'>Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say.</p>

                <button className='press__btn'>Read more testimonials</button>
              </div>

              <div className='press__2'>
                <div className='press2__div'>
                  
                  <div className='card__div'>
                    <div className='card1'>
                      <img src={photo1} alt="" />
                      <div>
                        <h1 className='card1__h1'>Evan Lahti</h1>
                        <p className='card1__p'>PC Gamer</p>
                      </div>
                      <img className='tw' src={twitter} alt="" />
                    </div>
                  </div>

                  <div className='card__div2'>
                    <h1 className='card2__h1'>“One of my gaming highlights of the year.”</h1>
                    <p className='card2__p'>October 18, 2018</p>
                  </div>

                </div>


                <div className='press2__div card__2'>
                  
                  <div className='card__div'>
                    <div className='card1'>
                      <img src={photo2} alt="" />
                      <div>
                        <h1 className='card1__h1'>Evan Lahti</h1>
                        <p className='card1__p'>PC Gamer</p>
                      </div>
                      <img className='tw' src={twitter} alt="" />
                    </div>
                  </div>

                  <div className='card__div2'>
                    <h1 className='card2__h1'>“One of my gaming highlights of the year.”</h1>
                    <p className='card2__p'>October 18, 2018</p>
                  </div>

                </div>


                <div className='press2__div'>
                  
                  <div className='card__div'>
                    <div className='card1'>
                      <img src={photo3} alt="" />
                      <div>
                        <h1 className='card1__h1'>Evan Lahti</h1>
                        <p className='card1__p'>PC Gamer</p>
                      </div>
                      <img className='tw' src={twitter} alt="" />
                    </div>
                  </div>

                  <div className='card__div2'>
                    <h1 className='card2__h1'>“One of my gaming highlights of the year.”</h1>
                    <p className='card2__p'>October 18, 2018</p>
                  </div>

                </div>
              </div>
          </div>

          <div className='press__umumiy2'>
            <div>
              <img className='umumiy2__img' src={img_1} alt="" />
            </div>

            <div className='press__past'>
              <p className='umumiy2__p'>Want to stay in touch?</p>
              <h1 className='umumiy2__h1'>newsletter SUBSCRIBE </h1>
              <p className='umumiy2__p2'>In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.</p>
              <div className='umumiy2__div1'>
                <div className='umumiy2__div'>
                  <p className='p1'>Your email address</p>
                  <p className='p2'>aliciliniavopir@gmail.com</p>
                </div>
                <button className='press__btn2'>Subscribe now</button>
              </div>
            </div>
          </div>

          <Footer/>
        </div>
    </div>
  )
}

export default Press