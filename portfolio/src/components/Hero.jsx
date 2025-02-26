import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { DiReact, DiPython } from 'react-icons/di'; // React and Python icons
import { SiDjango } from 'react-icons/si'; // Django icon
import '../assets/styles/hero.css';
import ProfileImage from '../assets/images/profile-image.jpg';
import CV  from '../assets/CV.pdf';

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  // 3D parallax effect on mouse movement
  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    
    const handleMouseMove = (e) => {
      if (!hero || !image) return;
      
      const rect = hero.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      
      image.style.transform = `
        perspective(1000px)
        rotateX(${y * -7}deg)
        rotateY(${x * 7}deg)
        translateX(${x * 20}px)
        translateY(${y * 20}px)
        scale(1.05)
      `;
      
      const shapeBg = image.querySelector('.shape-bg');
      if (shapeBg) {
        shapeBg.style.transform = `
          translateX(${x * 40}px)
          translateY(${y * 40}px)
          translateZ(-30px)
          rotate(${x * y * 5}deg)
        `;
      }
      
      const shapes = document.querySelectorAll('.floating-shape');
      shapes.forEach((shape, index) => {
        const factor = (index + 1) * 5;
        shape.style.transform = `
          translate(${x * factor}px, ${y * factor}px)
          scale(${1 + (x * y) * 0.1})
        `;
      });
    };
    
    let lastTime = 0;
    const throttledMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime >= 16) {
        lastTime = now;
        handleMouseMove(e);
      }
    };
    
    hero.addEventListener('mousemove', throttledMouseMove);
    
    const handleMouseLeave = () => {
      if (!image) return;
      
      image.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateX(0)
        translateY(0)
        scale(1)
      `;
      
      const shapeBg = image.querySelector('.shape-bg');
      if (shapeBg) {
        shapeBg.style.transform = 'translateZ(-20px)';
      }
    };
    
    hero.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      hero.removeEventListener('mousemove', throttledMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="hero"
    >
      <div className="hero-3d-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.span 
            className="greeting"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="greeting-3d">Hello, World!</span>
          </motion.span>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="hero-title-3d"
          >
            I'm <span className="highlight">Sameer Baiju</span>
          </motion.h1>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="profession"
          >
            <span className="typed-text">Full-Stack Developer</span>
          </motion.h2>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
           I’m a full-stack developer skilled in <SiDjango className="icon" /> Django (backend) and <DiReact className="icon" /> React + Tailwind (frontend). I specialize in real-time web apps with WebSockets & Celery, and integrate AI with TensorFlow & PyTorch. <DiPython className="icon" />

          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <motion.button 
              className="primary-btn button-3d"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work <FaArrowRight className="btn-icon" />
            </motion.button>
            
            <motion.a 
              href={CV}
              download 
              className="secondary-btn button-3d"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV <FaDownload className="btn-icon" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="image-container">
            <div className="shape-bg"></div>
            <div className="image-3d-shadow"></div>
            <img src={ProfileImage} alt="Sameer" className="profile-image-3d" />
            <div className="image-reflection"></div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
      >
        <span>Scroll Down</span>
        <div className="mouse mouse-3d">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
