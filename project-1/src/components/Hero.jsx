import React from 'react'

const Hero = () => {
  return (
    <main className='hero'>
        <div className='contant'>
            <h1>YOUR FEET DESEVER THE BEST</h1>
          <p> Lorem ipsum  voluptatem minima ipsum quae nam quisquam ullam dolores dolore expedita praesentium iure, ducimus deleniti, placeat blanditiis!
         .</p>
         <div className='hero-button'>
            <button>Shop Now</button>
            <button>Category</button>
         </div>
         <div className="shopping">
            <p>Also Available On</p>
           <div className='brand-icon'>
                <img src="f.png" alt="" />
                <img src="amazon.png" alt="" />
            </div>
         </div>
          
        </div>
        <div className='hero-image'>
            <img src="soe.png" alt="" />
        </div>

    </main>
  )
}

export default Hero