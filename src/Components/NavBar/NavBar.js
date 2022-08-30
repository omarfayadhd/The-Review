import React from 'react'
import "./NavBar.css";
import Logo from './logo1.png' 

function NavBar() {
  return (
    <div className='navbar'>
<img className='logo' src={Logo} alt="Netflix_logo" />
    </div>
  )
}

export default NavBar