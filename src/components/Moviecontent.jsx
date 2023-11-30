import React from 'react'
import './moviecontent.css'
import banner from '../images/no-hard-feelings-title.png'
import Button from './Button'


const Moviecontent = ({ movie }) => {
    return (

        <div>
            <div className={`content ${movie.active ? 'active' : undefined}`}>
                <img src={movie.titleImg} alt="Movie Title" className="movie-title " />
                <h4><span>{movie.year}</span>
                    <span><bold>{movie.ageLimit}</bold></span>
                    <span>{movie.length}</span>
                    <span>{movie.category}</span>
                </h4>
                <p>{movie.description}</p>
                <div className="button d-flex " >
                <Button icon={<ion-icon name="bookmark-outline"></ion-icon>} name="Book" color='#ffff' bgColor='#0071e3' />
                <Button icon={<ion-icon name="add-outline"></ion-icon>} name='My List' />
               
            </div>
            </div>
        

        </div>



    )
}

export default Moviecontent
