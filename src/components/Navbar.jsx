import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/navbar.css';

const Navbar = () => {
  const [state, setState] = useState({
    menuOpen: false,
    scrolled: false,
    darkMode: false,
  });
  const location = useLocation();

  // Close menu on navigation
  useEffect(() => {
    setState((prev) => ({ ...prev, menuOpen: false }));
    document.body.style.overflow = 'auto';
  }, [location.pathname]);

  // Handle scroll effect with debounce
  useEffect(() => {
    const handleScroll = () => {
      setState((prev) => ({ ...prev, scrolled: window.scrollY > 20 }));
    };

    const debounceScroll = () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', debounceScroll);
    return () => window.removeEventListener('scroll', debounceScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setState((prev) => ({ ...prev, darkMode: !prev.darkMode }));
    document.body.classList.toggle('dark-mode');
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setState((prev) => ({ ...prev, menuOpen: !prev.menuOpen }));
    document.body.style.overflow = state.menuOpen ? 'auto' : 'hidden';
  };

  // Utility for conditional class names
  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  // Reusable NavLink component
  const NavLink = ({ to, icon, label }) => (
    <li>
      <Link
        to={to}
        className={classNames(location.pathname === to && 'active')}
        onClick={() => setState((prev) => ({ ...prev, menuOpen: false }))}
      >
        {icon} {label}
      </Link>
    </li>
  );

  return (
    <nav className={classNames('navbar', state.scrolled && 'scrolled')}>
      <div className="navbar-logo">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>Portfolio</span>
        </Link>
      </div>

      <div
        className={classNames('navbar-links', state.menuOpen && 'active')}
        aria-hidden={!state.menuOpen}
      >
        <div className="mobile-close" onClick={toggleMenu}>
          <FaTimes className="close-icon" />
        </div>
        <ul>
          <NavLink to="/" icon={<FaHome className="icon" />} label="Home" />
          <NavLink to="/about" icon={<FaUser className="icon" />} label="About" />
          <NavLink to="/projects" icon={<FaBriefcase className="icon" />} label="Projects" />
          <NavLink to="/contact" icon={<FaEnvelope className="icon" />} label="Contact" />
        </ul>
      </div>

      <div className="navbar-actions">
        <button
          className="theme-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle theme"
        >
          {state.darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={state.menuOpen}
        >
          <FaBars />
        </button>
        <Link to="/contact" onClick={() => setState((prev) => ({ ...prev, menuOpen: false }))}>
          <button className="navbar-cta">Hire Me</button>
        </Link>
      </div>

      {state.menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;
