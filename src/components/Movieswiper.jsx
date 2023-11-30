import React from 'react'
import './movieswiper.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import {Autoplay, EffectCoverflow} from 'swiper/modules'
const Movieswiper = ({slides, slideChange}) => {
  return (
    <Swiper
     effect={'coverflow'}
     grabCursor={true}
     centeredSlides={true}
     slidesPerView={'auto'}
     autoplay={{
        delay:2500,
        disableOnInteraction:false,
     }}
     coverflowEffect={
        {
            rotate:50,
            stretch:0,
            depth:100,
            modifier:1,
            slideShadows:true,
        }
     }
     loop={true}
     modules={[Autoplay,EffectCoverflow]}
     className='movieSwiper'

    
    >
      
   
       {
        slides.map(slides=>(
            <SwiperSlide key={slides._id}>
                <img src={slides.previewImg } alt="Preview Image" onClick={()=>slideChange(slides._id)} />
            </SwiperSlide>
        ))
       }
  
    </Swiper>
  )
}

export default Movieswiper
