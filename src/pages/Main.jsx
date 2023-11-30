import React from 'react'
import './main.css'
import Schedule from './Schedule'
import Trends from './Trends'
import Blog from './Blog'
function Main() {
  return (
    <div> 
       <main>
        <Schedule/>
        <Trends/>
        <Blog/>
       </main>
    </div>
  )
}

export default Main
