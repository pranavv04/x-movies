
import NavListItem from '../components/NavListItem'
import navListData from '../data/navListData'
import React, { useState } from 'react'
import './header.css'
import Logo from '../images/logo.png'
import Search from '../components/Search'
import Button from '../components/Button'
function Header ({scroll}) {
  const [navList, setNavList] =useState(navListData);


  const handleNavOnClick = id =>{

    const newNavList = navList.map(nav=>{
      nav.active = false;
      if(nav._id===id)nav.active=true;
      return nav;
    })

    setNavList(newNavList);
  }
  return (
    <header className={`${scroll>100 ? 'scrolled': undefined}`}>
        <a className="logo" href="#"><img src={Logo} className='logo-img' alt="" /> Movies</a>
       
        <ul className="nav">
          {navList.map((nav) => {
            return(
                <NavListItem key={nav._id} nav={nav} handleNavOnClick={handleNavOnClick}/>
            )})}
        </ul>
        <Search/>
        {/* <Button className='sign-in' icon={<ion-icon name="log-in-outline"></ion-icon>} name='Sign in'/> */}
        <input type="checkbox" name="" id="checks"  />
       <label htmlFor="check" className='checkbtn'>
           <ion-icon name="menu-outline"></ion-icon>
        </label>
       

    </header>
  )
}

export default Header;
