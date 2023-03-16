import React from 'react';
import logo from './images/logo.png';
import './NavbarStyles.css';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import CallIcon from '@mui/icons-material/Call';

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div>
          <ul className="nav_item">
            <li><a href="index.html"><HomeIcon fontSize='small'/> Home </a></li>
            <li><a href="index.html"><InfoIcon fontSize='small'/> About Us</a></li>
            <li><a href="index.html"><GroupsIcon fontSize='small'/> Team page</a></li>
            <li><a href="index.html"><WorkIcon fontSize='small'/> Find Internships</a></li>
            <li><a href="index.html"><CallIcon fontSize='small'/> Contact Us</a></li>
          </ul>
        </div>

        <div className="login">
        <li><a href="#">Sign Up/Login</a></li>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
