import React from 'react'
import What from '../../Components/What/What'
import Feature from '../../Components/Feature/Feature'
import System from '../../Components/System/System'
import Press from '../../Components/Press/Press'
import Hero from '../../Components/Hero/Hero'

function Main() {
  return (
    <div>
      <Hero/>
      <What/>
      <Feature/>
      <System/>
      <Press/> 
      {/* <br /><br /><br /><br /><br /><br /><br /> */}
    </div>
  )
}

export default Main