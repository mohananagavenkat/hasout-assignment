import React from 'react'
import './Navbar.css'
import logo from '../../logo.svg';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="Github Logo" />
      </div>
    </div>
  )
}

export default Navbar
