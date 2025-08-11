import React from 'react';
import './Navbar.css';
import logo from '../assets/starbucks.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Starbucks Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#">MENU</a></li>
        <li><a href="#">REWARDS</a></li>
        <li><a href="#">GIFT CARDS</a></li>
      </ul>
      <div className="nav-actions">
        <button className="nav-button">Sign in</button>
        <button className="nav-button black">Join now</button>
      </div>
    </nav>
  );
};

export default Navbar;