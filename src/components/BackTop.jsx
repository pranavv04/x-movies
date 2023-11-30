import React from 'react'
import './backtop.css'
const BackTop = ({scroll}) => {
    const backToTop =()=>{
        window.scrollTo(0,0);
    };
  return (
    <a href="" className={`back-to-top ${scroll > 100 ? 'active':undefined}`} onClick={backToTop}>

           <ion-icon name="arrow-up-outline"></ion-icon>
    </a>
  )
}

export default BackTop
