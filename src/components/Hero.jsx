import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaDownload, FaNetworkWired } from 'react-icons/fa';
import { DiReact, DiPython } from 'react-icons/di';
import { SiDjango } from 'react-icons/si';
import { Link } from 'react-router-dom';
import ProfileImage from '../assets/images/profile.png';
import CV from '../assets/CV.pdf';

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Parallax effect calculations
  const y = useTransform(scrollY, [0, 500], [0, isMobile ? 50 : 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, isMobile ? 0.8 : 0.5]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse position tracking for 3D effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const skills = [
    { 
      Icon: DiReact, 
      label: "React.js", 
      color: "#61DAFB",
      description: "Frontend Expert"
    },
    { 
      Icon: SiDjango, 
      label: "Django", 
      color: "#092E20",
      description: "Backend Master"
    },
    { 
      Icon: DiPython, 
      label: "Python", 
      color: "#3776AB",
      description: "Core Language"
    },
    { 
      Icon: FaNetworkWired, 
      label: "Networking", 
      color: "#4A6CF7",
      description: "Infrastructure"
    }
  ];

  const skillsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ y, opacity }}
      className={isDarkMode ? "hero-container dark-mode" : "hero-container"}
    >
      <style jsx>{`
        .hero-container {
          margin-top: 60px;
          margin-bottom: 100px;
          min-height: calc(100vh - 160px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          transition: all 0.3s ease;
        }
        
        .dark-mode {
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          color: #e2e8f0;
        }

        .hero-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 4rem;
          z-index: 2;
          padding: 0 1rem;
        }

        .hero-text {
          flex: 1;
          max-width: 600px;
        }

        .greeting {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          background: linear-gradient(135deg, #4a6cf7, #f06292);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1.2rem;
          font-weight: 600;
          letter-spacing: -0.5px;
        }

        .title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -1px;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #2d3748;
        }

        .dark-mode .title {
          color: #e2e8f0;
        }

        .highlight {
          color: #4a6cf7;
          position: relative;
          display: inline-block;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30%;
          background: rgba(74, 108, 247, 0.1);
          z-index: -1;
          transform: skewX(-15deg);
        }

        .profession {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #4a6cf7, #f06292);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dark-mode .profession {
          color: #a0aec0;
        }

        .description {
          font-size: clamp(1rem, 2vw, 1.2rem);
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 2.5rem;
          max-width: 600px;
        }

        .cta-buttons {
          display: flex;
          gap: clamp(0.8rem, 2vw, 1rem);
          z-index: 5;
        }

        .primary-btn, .secondary-btn {
          padding: clamp(0.6rem, 2vw, 0.8rem) clamp(1.2rem, 3vw, 1.8rem);
          border-radius: 12px;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }

        .primary-btn {
          background: linear-gradient(135deg, #4a6cf7, #6e8aff);
          color: white;
          box-shadow: 0 4px 15px rgba(74, 108, 247, 0.2);
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.9);
          color: #4a6cf7;
          border: 2px solid #4a6cf7;
          backdrop-filter: blur(10px);
        }

        .dark-mode .secondary-btn {
          background: rgba(45, 55, 72, 0.9);
        }

        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: clamp(1rem, 2vw, 1.5rem);
          margin: 2.5rem 0;
          width: 100%;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: clamp(1rem, 2vw, 1.5rem);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          transition: all 0.4s ease;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
        }

        .skill-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(74, 108, 247, 0.05), rgba(240, 98, 146, 0.05));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .skill-item:hover::before {
          opacity: 1;
        }

        .skill-icon {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 1rem;
          transition: all 0.4s ease;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
        }

        .skill-label {
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .skill-description {
          font-size: clamp(0.8rem, 1.5vw, 0.9rem);
          color: #718096;
          text-align: center;
          transition: all 0.3s ease;
          opacity: 0.8;
        }

        .dark-mode .skill-item {
          background: rgba(45, 55, 72, 0.9);
        }

        .dark-mode .skill-item::before {
          background: linear-gradient(135deg, rgba(74, 108, 247, 0.1), rgba(240, 98, 146, 0.1));
        }

        .dark-mode .skill-label {
          color: #e2e8f0;
        }

        .dark-mode .skill-description {
          color: #a0aec0;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: clamp(300px, 50vw, 400px);
          aspect-ratio: 1;
          perspective: 1000px;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.5s ease;
        }

        .profile-image {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          object-fit: cover;
        }

        .image-backdrop {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #4a6cf7 0%, #6e8aff 100%);
          border-radius: 20px;
          z-index: 1;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(74, 108, 247, 0.1) 0%, rgba(110, 138, 255, 0.1) 100%);
          border-radius: 20px;
          z-index: 3;
        }

        .floating-dots {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          z-index: 1;
        }

        .dot {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(74, 108, 247, 0.15);
        }

        .theme-toggle {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 100;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          background: rgba(74, 108, 247, 0.1);
        }

        .theme-icon {
          width: 24px;
          height: 24px;
          transition: all 0.3s ease;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          z-index: 5;
        }

        .mouse {
          width: 26px;
          height: 40px;
          border: 2px solid #4a6cf7;
          border-radius: 20px;
          position: relative;
        }

        .wheel {
          width: 4px;
          height: 8px;
          background: #4a6cf7;
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll 1.5s ease-in-out infinite;
        }

        .arrow-down {
          width: 12px;
          height: 12px;
          border-right: 2px solid #4a6cf7;
          border-bottom: 2px solid #4a6cf7;
          transform: rotate(45deg);
          animation: bounce 1.5s ease-in-out infinite;
        }

        @keyframes scroll {
          0% {
            transform: translate(-50%, 0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, 15px);
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: rotate(45deg) translate(0, 0);
          }
          50% {
            transform: rotate(45deg) translate(5px, 5px);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        /* Responsive improvements */
        @media (max-width: 1200px) {
          .hero-content {
            padding: 0 2rem;
          }
        }

        @media (max-width: 1024px) {
          .hero-container {
            padding: 4rem 1rem;
          }

          .hero-content {
            flex-direction: column-reverse;
            text-align: center;
            gap: 3rem;
          }

          .hero-text {
            max-width: 100%;
          }

          .skills-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .cta-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            margin-top: 40px;
            margin-bottom: 60px;
            padding: 2rem 1rem;
          }

          .hero-content {
            gap: 2rem;
            padding: 0;
          }

          .skills-container {
            gap: 1rem;
          }

          .cta-buttons {
            flex-direction: column;
            width: 100%;
          }

          .primary-btn, .secondary-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            margin-top: 20px;
            margin-bottom: 40px;
          }

          .skills-container {
            grid-template-columns: 1fr;
          }

          .skill-item {
            padding: 1rem;
          }
        }
      `}</style>

      {/* Theme toggle button */}
      <motion.button 
        className="theme-toggle"
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDarkMode ? (
          <svg className="theme-icon" fill="#e2e8f0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/>
          </svg>
        ) : (
          <svg className="theme-icon" fill="#2d3748" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"/>
          </svg>
        )}
      </motion.button>

      {/* Animated background dots */}
      <div className="floating-dots">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="dot"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.1,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%"
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%"
              ],
              opacity: [Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.3, Math.random() * 0.3 + 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              width: Math.random() * 30 + 10 + "px",
              height: Math.random() * 30 + 10 + "px",
            }}
          />
        ))}
      </div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="greeting"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hello World! 👋
          </motion.h2>
          
          <motion.h1
            className="title"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm <span className="highlight">Sameer Baiju</span>
          </motion.h1>
          
          <motion.div 
            className="profession"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Full Stack Developer & Tech Enthusiast
          </motion.div>
          
          <motion.p
            className="description"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Passionate about crafting exceptional digital experiences through clean code and innovative solutions. Specializing in modern web technologies and scalable applications.
          </motion.p>

          <motion.div 
            className="skills-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {skills.map(({ Icon, label, color, description }, index) => (
              <motion.div
                key={label}
                className="skill-item"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={skillsVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: `${color}11`,
                  boxShadow: `0 8px 25px ${color}22`
                }}
              >
                <Icon className="skill-icon" style={{ color }} />
                <span className="skill-label">{label}</span>
                <span className="skill-description">{description}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="cta-buttons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              className="primary-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(74, 108, 247, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects" style={{textDecoration:"none", color:"white", display: "flex", alignItems: "center", gap: "0.5rem"}}>
                View Projects <FaNetworkWired />
              </Link>
            </motion.button>
            
            <motion.a 
              href={CV}
              download 
              className="secondary-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(74, 108, 247, 0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV <FaDownload />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="image-container"
            style={{ 
              transform: !isMobile ? 
                `rotateY(${mousePosition.x * 0.05}deg) rotateX(${-mousePosition.y * 0.05}deg)` : 
                'none'
            }}
          >
            <motion.div 
              className="image-backdrop"
              initial={{ opacity: 0, scale: 0.9, x: -20, y: -20 }}
              animate={{ 
                opacity: 0.2, 
                scale: 1, 
                x: 20, 
                y: 20,
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.img 
              src={ProfileImage} 
              alt="Sameer" 
              className="profile-image"
              initial={{ scale: 0.9 }}
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <motion.div 
              className="image-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              style={{ 
                background: `radial-gradient(
                  circle at ${!isMobile ? mousePosition.x + 50 : 50}% ${!isMobile ? mousePosition.y + 50 : 50}%, 
                  rgba(74, 108, 247, 0.3) 0%, 
                  rgba(110, 138, 255, 0) 70%
                )`
              }}
            />
          </motion.div>
        </motion.div>
      </div>
      
      {!isMobile && (
      <motion.div 
        className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="mouse">
            <div className="wheel" />
        </div>
          <div className="arrow-down" />
      </motion.div>
      )}
    </motion.section>
  );
};

export default Hero;