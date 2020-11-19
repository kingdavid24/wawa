import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navstyle = {
        color: 'white'
    }
  return (
    <nav>
       <h3><img src='Graphic1.JPG' width='200' /></h3>
        <ul className='nav-links'>

        <Link style={navstyle} to='/homepage'>
            <li>Home </li>
            </Link>

            <Link style={navstyle} to='/shop'>
            <li>Next</li>
            </Link>

            <Link style={navstyle} to='/about'>
            <li>About</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
