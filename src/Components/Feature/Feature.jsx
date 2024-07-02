import React from 'react'
import './Feature.css'

function Feature() {
    return (
        <div className='Feature' id='game'>
            <div className="container">
                <div className='feature__div'>
                    <p className='feature__p'>What’s so special?</p>
                    <h1 className='feature__h1'>features</h1>

                    <div className='feature__div2'>
                        <div className='div2__div1'>
                           <div className='div__span'></div>
                           <div className='div__span2'></div>
                           <div className='div__span3'></div>
                        </div>
                        <div className='div2__div2'>
                        <h6 className='div2__h6'>SURVIVE AT ALL COSTS</h6>
                        <p className='div2__p'>You have 30 minutes to find a relic, signal for extraction, and grab
                        one of three spots on the rescue chopper.</p>
                        <h6 className='div2__h6'>CREATE ALLIES AND ENEMIES</h6>
                        <h6 className='div2__h6'>IMPRESS THE AUDIENCE</h6>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature