import React from 'react'
import './trendcard.css'
const TrendCard = ({slide}) => {
  return (
    <div className='trend-card'>
        <img className='img-fluid' src={slide.previewImg} alt="" />
        <a href="#" >Add to Calendar <ion-icon name="calendar-clear-outline"></ion-icon></a>
       
    </div>
  )
}

export default TrendCard
