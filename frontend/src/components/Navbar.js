import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSearch,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <NavLink to='/' className='navbar__link'>
          <FontAwesomeIcon icon={faHome} className='navbar__link__icon' />
        </NavLink>
        <NavLink to='/search' className='navbar__link'>
          <FontAwesomeIcon icon={faSearch} />
        </NavLink>
        <NavLink to='/random' className='navbar__link'>
          <FontAwesomeIcon icon={faQuestionCircle} />
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
