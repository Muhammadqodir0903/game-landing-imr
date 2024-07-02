import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/img/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import img1 from '../../assets/img/header__img1.png'
import img2 from '../../assets/img/header__img2.png'
import burger from '../../assets/img/burger.png'

function Header() {
  const location = useLocation().pathname
  const [rang, setRang] = useState(false)
  return (

    <div className='Header' id='header'>
      <div className='container'>
          <div className="Header__div">
              <div className='logo'>
                  <Link>
                      <img className='logo' src={logo} alt="/" />
                  </Link>
              </div>
              <ul className='header__list'>
                <li className='header__item'>
                  <Link className={location == '/' ? 'active a__oq' : 'a__oq'} to='/'>MAIN</Link>
                </li>
                <li className='header__item'>
                  <a href='#about' className={location == '/about' ? 'active a__oq' : 'a__oq'}>ABOUT</a>
                </li>
                <li className='header__item'>
                  <a href='#game' className={location == '/game' ? 'active a__oq' : 'a__oq'}>GAME FEATURES</a>
                </li>
                <li className='header__item'>
                  <a href='#system' className={location == '/system' ? 'active a__oq' : 'a__oq'}>SYSTEM REQUIREMENTS</a>
                </li>
                <li className='header__item'>
                  <a href='#quotes' className={location == '/quotes' ? 'active a__oq' : 'a__oq'}>QUOTES</a>
                </li>
                {/* <li className='header__item burger'>
                  <button className='burger' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <img src={burger} alt="" />
                  </button>
                </li> */}
              </ul>
              <div className='Header__div2'>
                <select className='select' name="" id="">
                    <option className='option' value="ENG">ENG</option>
                    <option className='option' value="RUS">RUS</option>
                </select>

                <div className='control'>
                  <Link>
                    <img src={img1} alt="" />
                  </Link>
                  <Link>
                    <img src={img2} alt="" />
                  </Link>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Header