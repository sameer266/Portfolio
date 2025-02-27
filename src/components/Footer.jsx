import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaHeart, FaArrowUp } from 'react-icons/fa';
import '../assets/styles/footer.css';

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <span>Portfolio</span>
          <p className="tagline">Creating digital experiences that matter</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><a href="#web-development">Web Development</a></li>
              <li><a href="#ui-design">UI/UX Design</a></li>
              <li><a href="#mobile-apps">Mobile Apps</a></li>
              <li><a href="#consulting">Consulting</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:sameerbaiju792@gmail.com">sameerbaiju792@gmail.com</a></li>
              <li><a href="tel:+1234567890">+977 9843019129</a></li>
              <li>Kathmandu Nepal</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} <span className="name">Sameer</span>. Made with <FaHeart className="heart-icon" /> All rights reserved.</p>
        </div>

        <div className="social-links">
          <a href="https://github.com/sameer266/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sameer-baiju-7a3054240/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" aria-label="Dribbble"><FaDribbble /></a>
        </div>

        <button 
          className={`scroll-top ${showScrollButton ? 'visible' : ''}`} 
          onClick={scrollToTop} 
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;