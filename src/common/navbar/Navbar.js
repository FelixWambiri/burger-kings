import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo-white.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
        <div class="row">
          <Link to="/">
            <img src={logo} alt="BurgerKings logo" className="logo"/>
          </Link>
          <ul className="main-navigation">
            <li><a href="#">More Recipes</a></li>
            <li><a href="#">Signup</a></li>
          </ul>
        </div>
      </nav>
  )
}
