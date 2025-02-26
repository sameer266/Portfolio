import React from 'react';
import { FaCode, FaPalette, FaMobileAlt, FaServer, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../assets/styles/about.css';
import AboutImage from '../assets/images/about-image.png';
import CV from '../assets/CV.pdf';

const About = () => {
  // Skills data
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Django', level: 80 },
    { name: 'Security', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Python', level: 85 },
    { name: 'ML', level: 50 }
  ];

  // Services data
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Creating responsive and performant web applications using modern technologies and best practices.'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces that provide exceptional user experiences.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications that work seamlessly across different devices.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Developing robust server-side applications and APIs to power your digital solutions.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <motion.span 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Get To Know
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
        </div>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-container">
              <img 
                src={AboutImage} 
                alt="Profile" 
                loading="lazy" // Lazy load the image
              />
            </div>
          </motion.div>

          <div className="about-text">
            <motion.div 
              className="about-cards"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="about-card">
                <h3>Experience</h3>
                <p>1+ Years</p>
              </div>
              <div className="about-card">
                <h3>Projects</h3>
                <p>20+ Completed</p>
              </div>
              <div className="about-card">
                <h3>Clients</h3>
                <p>5+ </p>
              </div>
            </motion.div>

            <motion.p 
              className="bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              I'm a passionate full-stack developer with a focus on creating intuitive and engaging 
              web experiences. With over 1 year of experience in the industry. I specialize in Django and React JS, 
              and I’m exploring machine learning & deep learning to integrate AI solutions into web apps.
            </motion.p>

            <motion.p 
              className="bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              My approach combines technical expertise with creative problem-solving, ensuring that 
              the solutions I build not only function flawlessly but also deliver exceptional user 
              experiences. I'm constantly learning and adapting to new technologies.
            </motion.p>

            <motion.a 
              href="#contact" 
              className="contact-btn"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6 }}
            >
              Let's Talk
            </motion.a>
            <motion.a 
              href={CV}
              className="resume-btn"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaDownload /> Download Resume
            </motion.a>
          </div>
        </div>

        <motion.div 
          className="skills-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3>My Skills</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div 
                className="skill" 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="services-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3>Services I Offer</h3>
          <div className="services-container">
            {services.map((service, index) => (
              <motion.div 
                className="service-card" 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;