import React from 'react'
import './modal.css'
function Modal({movie,status,toggleModal}) {
 
  function onLinkClick(e) {
    e.preventDefault();
    // further processing happens here
 }

  return (
    <div>
      <div className={`movieModal ${status ? 'active':undefined}`}>
        <a href="" className='modalClose' onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
        </a>
        <iframe
        width="1280"
        height="720"
        src={movie.video}
        title={`${movie.title} |Official Trailer`}
         frameBorder='0'
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        >

        </iframe>
      </div>
    </div>
  )
}

export default Modal
