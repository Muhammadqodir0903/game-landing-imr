import React from 'react'
import './Footer.css'
import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import facebook from '../../assets/img/facebook.png'
import twitter from '../../assets/img/twitter.png'
import youtube from '../../assets/img/youtube.png'
import twitch from '../../assets/img/twitch.png'

function Footer() {
  return (
    <div className='Footer'>
        <div className="container">
            <div className='Footer__div'>
            <div>
                <Link>
                    <img className='footer__img' src={logo} alt="" />
                </Link>
            </div>
            <ul className='Footer__list'>
                <li className='Footer__item'>
                  <a href='#header'>MAIN</a>
                </li>
                <li className='Footer__item'>
                  <a href='#about'>ABOUT</a>
                </li>
                <li className='Footer__item'>
                  <a href='#game'>GAME FEATURES</a>
                </li>
                <li className='Footer__item'>
                  <a href='#system'>SYSTEM REQUIREMENTS</a>
                </li>
                <li className='Footer__item'>
                  <a href='#quotes'>QUOTES</a>
                </li>
                <li className='Footer__item'>
                  <Link to='https://www.facebook.com'>
                    <img src={facebook} alt="" />
                  </Link>
                </li>
                <li className='Footer__item'>
                  <Link to='https://www.twitter.com'>
                    <img src={twitter} alt="" />
                  </Link>
                </li>
                <li className='Footer__item'>
                  <Link to='https://www.youtube.com'>
                    <img src={youtube} alt="" />
                  </Link>
                </li>
                <li className='Footer__item'>
                  <Link to='https://www.twitch.com'>
                    <img src={twitch} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='Footer__div2'>
              <p className='Footer__p1'> © 2018 Outpost Games, Inc. All Rights Reserved</p>
              <p className='Footer__p2'>Privacy Policy | Terms of Services | Code of Conduct </p>
            </div>
        </div>
    </div>
  )
}

export default Footer