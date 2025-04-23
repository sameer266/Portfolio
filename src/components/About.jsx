import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, FaBriefcase, FaCode, FaNetworkWired, FaDocker, FaLock, 
  FaMobile, FaShieldAlt, FaBug, FaWifi, FaUserSecret, 
} from 'react-icons/fa';
import { 
  SiPython, SiDjango, SiReact, SiTensorflow, SiFlutter, 
  SiOpenai, SiWireshark, SiKalilinux, SiMetasploit 
} from 'react-icons/si';


import '../assets/styles/about.css';


const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const experiences = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      items: [
        {
          title: "B.Tech in Computer Science",
          place: "College of Engineering Trivandrum",
          year: "2020 - 2024"
        }
      ]
    },
    {
      icon: <FaBriefcase />,
      title: "Experience",
      items: [
        {
          title: "Full Stack Developer Intern",
          place: "Tech Company",
          year: "2023"
        }
      ]
    },
    {
      icon: <FaCode />,
      title: "Core Technologies",
      items: [
        {
          title: "Languages & Frameworks",
          description: "Python, JavaScript, React, Django"
        },
        {
          title: "Mobile Development",
          description: "Flutter, Cross-platform Development"
        },
        {
          title: "AI & ML",
          description: "Langchain, TensorFlow, AI Integration"
        }
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      items: [
        {
          title: "Network Security",
          description: "Nmap, Wireshark, Network Analysis"
        },
        {
          title: "Web Security",
          description: "Burp Suite, OWASP Top 10, Penetration Testing"
        },
        {
          title: "Exploitation",
          description: "Metasploit, Social Engineering, Kali Linux"
        }
      ]
    }
  ];
  const skills = [
    { Icon: SiPython, name: "Python", level: "Advanced" },
    { Icon: SiDjango, name: "Django", level: "Advanced" },
    { Icon: SiReact, name: "React", level: "Advanced" },
    { Icon: SiFlutter, name: "Flutter", level: "Intermediate" },
    { Icon: SiTensorflow, name: "Machine Learning", level: "Basic" },
    { Icon: SiOpenai, name: "Langchain", level: "Intermediate" },
    { Icon: FaDocker, name: "Docker", level: "Intermediate" },
    { Icon: FaNetworkWired, name: "Nmap", level: "Intermediate" },
    { Icon: SiWireshark, name: "Wireshark", level: "Intermediate" },
    { Icon: FaLock, name: "Burp Suite", level: "Intermediate" },  // Updated here
    { Icon: SiMetasploit, name: "Metasploit", level: "Intermediate" },
    { Icon: SiKalilinux, name: "Kali Linux", level: "Intermediate" },
    { Icon: FaUserSecret, name: "Social Engineering", level: "Basic" },
    { Icon: FaWifi, name: "Network Security", level: "Intermediate" },
    { Icon: FaBug, name: "Penetration Testing", level: "Intermediate" }
  ];
  

  return (
    <motion.div 
      className="about-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="about-header"
        variants={itemVariants}
      >
        <h1>About Me</h1>
        <motion.div 
          className="header-underline"
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

      <motion.p 
        className="about-intro"
        variants={itemVariants}
      >
        I'm a passionate full-stack developer with expertise in modern web technologies,
        mobile development, and a growing interest in cybersecurity and machine learning. 
        My diverse skill set spans from frontend development with React to backend solutions 
        with Django, complemented by knowledge in network security, penetration testing, 
        and ethical hacking tools.
      </motion.p>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            className="skill-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
          >
            <skill.Icon className="skill-icon" />
            <h3>{skill.name}</h3>
            <span className={`skill-level ${skill.level.toLowerCase()}`}>{skill.level}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="experience-grid"
        variants={containerVariants}
      >
        {experiences.map((section, index) => (
          <motion.div 
            key={section.title}
            className="experience-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
          >
            <div className="card-header">
              <span className="card-icon">{section.icon}</span>
              <h2>{section.title}</h2>
            </div>
            <div className="card-content">
              {section.items.map((item, i) => (
                <motion.div 
                  key={i}
                  className="content-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                >
                  <h3>{item.title}</h3>
                  {item.place && (
                    <p className="place">{item.place}</p>
                  )}
                  {item.year && (
                    <p className="year">{item.year}</p>
                  )}
                  {item.description && (
                    <p className="description">{item.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;