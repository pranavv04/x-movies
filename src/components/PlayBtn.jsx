import React from 'react'

import './playBtn.css'
import Modal from './Modal'
import { useState } from 'react'



const PlayBtn = ({movie}) => {
    const [modal,setModal] = useState(false);
    const toggleModal = ()=>{
        setModal(!modal);
        
    
    }
   

    return (
        <>
        <div>
            <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active':undefined}`}>
                <a href="#" className="playBtn"  onClick={toggleModal}><ion-icon name="play-outline"></ion-icon></a>
                <p>Watch Trailer</p>
            </div>
        </div>
       {movie.active && <Modal movie={movie} status = {modal} toggleModal={toggleModal}/>}
        </>
    )
}

export default PlayBtn;
