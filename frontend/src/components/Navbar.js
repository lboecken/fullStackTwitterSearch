import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/search'>Search</Link>
        <Link to='/stream'>Stream</Link>
        <Link to='/random'>Random</Link>
      </nav>
    </div>
  );
}

export default Navbar;
