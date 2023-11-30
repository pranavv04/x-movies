import './navListItem.css'
import React from "react"
const NavListItem = ({ nav ,handleNavOnClick}) => {
  return (
  
      <li>
        <a href={nav.link} className={`${nav.active ? 'active': undefined}`} onClick={()=>{handleNavOnClick(nav._id)}}>{nav.name}</a>
     </li>
    
  );
}

export default NavListItem;
