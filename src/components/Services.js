import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/three.jpg"
import img2 from "../assets/four.jpg"

const Services = () => {
  return (
    <div className>
      <Carousel  infiniteLoop
       autoPlay 
       showStatus={false} 
       showArrows={false}
       interval = {1000}
        >
        <div>
            <img src={img1} alt='item1'/>
            <p className='legend'>Full stack</p>
        </div>

        <div>
            <img src={img2} alt='item2'/>
        
            <p className='legend' >Peer-to-peer-Support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
