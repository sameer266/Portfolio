import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // Get current path

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <span>Portfolio</span>
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-close" onClick={toggleMenu}>
          <FaTimes className="close-icon" />
        </div>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              <FaUser className="icon" /> About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              <FaBriefcase className="icon" /> Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              <FaEnvelope className="icon" /> Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-actions">
        <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle theme">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <FaBars />
        </button>
        <Link to="/contact"  onClick={() => setMenuOpen(false)}><button className="navbar-cta"> Hire Me</button></Link>
      </div>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;
