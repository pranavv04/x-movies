import React, { useState, useEffect } from 'react'
import './banner.css'
import bgImg from '../images/bg-no-hard-feelings.jpeg'
import Moviecontent from '../components/Moviecontent';
import Moviedate from '../components/Moviedate';
import PlayBtn from '../components/PlayBtn';
import Movieswiper from '../components/Movieswiper';

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch('https://pranavv04.github.io/movies-api/movieData.json')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData()
  }, [])

  const handleSlideChange = id=>{
     const newMovies = movies.map(movie=>{
      movie.active=false;
      if(movie._id===id){
        movie.active=true;
      }
      return movie;
     })
     setMovies(newMovies);
  }

  return (
   <>
      <div className='banner'>
        {
          movies && movies.length>0 && movies.map(movie=>(
            <div className="movie">
            <img src={movie.bgImg} alt="Background Image" className={`bgImg ${movie.active ? 'active' : undefined}`} />
            <div className="container-fluid">
              <div className="row">
                <div className="col-log-6 col-md-12">
                  <Moviecontent movie={movie} />
  
                </div>
                <div className="col-log-6 col-md-12 ">
                  <Moviedate   movie={movie}/>
                  <PlayBtn  movie={movie}/>
                </div>
              </div>
            </div>
          </div>
          ))
        }
       
      
        {movies && movies.length > 0 && <Movieswiper slides={movies} slideChange={handleSlideChange} />}
      </div>
      
      
      </>
   
  )
}

export default Banner


