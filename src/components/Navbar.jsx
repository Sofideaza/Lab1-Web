import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Starbucks</div>
      <ul className="nav-links">
        <li><a href="#menu">Menú</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#location">Ubicación</a></li>
      </ul>
    </nav>
  )
}

export default Navbar