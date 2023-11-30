import React from 'react'
import './moviedate.css'
const Moviedate = ({movie}) => {
  return (
    <div>
      <div className={`date ${movie.active ? 'active':undefined}`}>
        <h2>On {movie.date}</h2>
      </div>
    </div>
  )
}

export default Moviedate
