import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTwitter } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function toggleNavBar() {
    if (isNavOpen === false) {
      setIsNavOpen(true);
    } else {
      setIsNavOpen(false);
    }
  }
  return (
    <div>
      <div className='header__wrapper'>
        <FontAwesomeIcon
          className='header__menuButton'
          icon={faBars}
          onClick={toggleNavBar}
        />
        <h1 className='header__title'> Search Twitter</h1>
      </div>
      <nav
        className={`header__navBar ${isNavOpen ? 'header__navBar--open' : ''}`}>
        <Link to='/' className='header__navBar__link' onClick={toggleNavBar}>
          Home
        </Link>
        <Link
          to='/search'
          className='header__navBar__link'
          onClick={toggleNavBar}>
          Search
        </Link>
        <Link
          to='/random'
          className='header__navBar__link'
          onClick={toggleNavBar}>
          Random
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
