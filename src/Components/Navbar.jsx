import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="main-navbar">
      <div className="logo">GoTrip</div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/packages" onClick={() => setMenuOpen(false)}>Packages</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
