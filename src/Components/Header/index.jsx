import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.svg';
import './Header.css';

class Header extends Component {
   render() {
      return (
         <div className="header">
            <Link to="/">
               <img src={logo} alt="Kasa" className="header__logo" />
            </Link>
            <div className="header__nav">
               <Link to="/" className="header__nav__item">
                  Accueil
               </Link>
               <Link to="/a-propos" className="header__nav__item">
                  A propos
               </Link>
            </div>
         </div>
      );
   }
}

export default Header;
