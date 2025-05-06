import React from 'react';
import { Link } from 'react-router';
import '../styles/NavBar.css'; // Assuming you have a CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/todo">To-Do</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;