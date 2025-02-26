// components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import '../assets/styles/projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isInView, setIsInView] = useState(false);

  // Enhanced project data with more details
const allProjects = [
    {
        id: 1,
        title: "School management system",
        description: "A comprehensive admin dashboard for managing school activities with real-time analytics, student management, and teacher insights.",
        longDescription: "Built with React, Redux, and Django , this dashboard features real-time data visualization, customizable widgets, and automated report generation. It integrates with multiple payment gateways and shipping APIs.",
        technologies: ["React", "Redux", "Node.js", "DjangoRest", "Postgres", "Chart.js"],
        image: "https://smartstudent.app/media/2022/09/managment-software-1024x1024.png",
        demo: "https://demo-link.https://github.com/sameer266/school-management",
        category: "web",
        github: "https://github.com/sameer266/school-management",

        featured: true
    },
    {
        id: 2,
        title: "Real Time Live Score and Chat",
        description: "A real-time web application that provides live sports scores and allows users to chat during games.",
        technologies: ["Django", "React js", "Node", "Websockets", "Redis"],
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*DfmKdD8EwFzmpapP3lWj5Q.png",
        category: "web",
        github: "https://github.com/sameer266/Real-time-Live-Score-and-Chat-web",
        featured: false
    },
    {
        id: 3,
        title: " School Management Mobile App",
        description: "A mobile app for parents, teachers, and students to manage school activities, view progress reports, and communicate in real-time.",
        technologies: ["Python", "DRF", "Flutter", "React", "FCS"],
        image: "https://www.ebhaktapur.com/wp-content/uploads/2019/05/namaste-bhaktapur.png",
        category: "web",
        github: "https://github.com/sameer266/bhaktapur_portal",
        demo:"https://bhaktapur-sameer.vercel.app/",
        featured: true
    },
   
    {
        id: 4,
        title: "Pet Ordering Web App",
        description: "An e-commerce platform for pet products with advanced search, filtering, and recommendation features.",
        technologies: ["JS","php","Html-css", "mysql"],
        image: "https://www.shutterstock.com/image-photo/labradoodle-dog-ordering-online-by-260nw-1938261973.jpg",
        category: "web",
        github: "https://github.com/sameer266/pet_order",
       
        featured: false
    },
    {
        id: 5,
        title: "Nodejs Apache Linux Deploy",
        description: "A script to deploy Node.js apps on Apache servers running on Linux.",
        technologies: ["ARKit", "ARCore", "Unity", "C#", "Mapbox API"],
        image: "https://storage.googleapis.com/assets.iankumu.com/2022/04/laravel-apache-1024x576.webp",
        category: "mobile",
        github: "https://github.com/sameer266/nodejs-apache-linux-deploy",
        featured: false
    },
    {
        id: 6,
        title: "Gemini AI Assistant Clone",
        description: "A clone of the Gemini AI assistant with voice commands, real-time weather updates, and personalized recommendations.",
        technologies: [ "React", "Gemini Api", "Node.js"],
        image: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_1315/8d5f730a405cac7da4786981fe3aaee0.jpg",
        category: "web",
        github: "https://github.com/sameer266/Gemini-AI-assistant",
        demo: "https://demo-link.com",
        featured: true
    },

    {
        id: 7,
        title: "Bus Queue Management System",
        description: "A real-time queue management system for bus stops with live updates, wait times, and passenger notifications.",
        technologies: ["HTML5", "MYsql", "PHP", "JS"],
        image: "https://www.shutterstock.com/image-photo/queue-people-waiting-bus-stop-260nw-1938261973.jpg",
        category: "web",
        github: "https://github.com/sameer266/php",
        featured: false

    },

    {
        id: 8,
        title: "News Showcase Web App",
        description: "A news showcase web app with real-time updates, search, and filtering based on user preferences.",
        technologies: ["React", "Node.js", "Django", "Sqlite"],
        image:"https://colorlib.com/wp/wp-content/uploads/sites/2/newspaper-wordpress-theme-2.jpg.avif",
        category: "web",
        github: "https://github.com/sameer266/django-news",
        demo:"https://django-news-sameer.vercel.app/",
        featured: true
    },
    {
        id: 9,
        title: "Bot Fb Post",
        description: "A Facebook bot that automatically posts content to your page based on user-defined schedules.",
        technologies: ["Python", "Django", "Facebook API"],
        image:"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ADfT0WNAGLxu0wv1IGqOTQ.png",
        category: "web",
        github: "https://github.com/sameer266/bots_news_post_fb",
        featured: false


    },
    {
        id: 10,
        title: "React appwrite Recepie",
        description: "A recipe app with user authentication, real-time updates, and a favorites list.User can add, delete, update and view the recipe",
        technologies: ["React", "Appwrite", "Node.js", ],
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEv7dRdzBOj8MkzOvCMsWz8qiQ-SpbzfQ8w&s",
        category: "web",
        github: "https://github.com/sameer266/React_Appwrite_Auth_Recepie",
        demo:"https://react-appwrite-recepie-website-sameer.vercel.app/",
        featured: true


    }

];

  useEffect(() => {
    // Filter projects based on selected category
    if (filter === 'all') {
      setVisibleProjects(allProjects);
    } else if (filter === 'featured') {
      setVisibleProjects(allProjects.filter(project => project.featured));
    } else {
      setVisibleProjects(allProjects.filter(project => project.category === filter));
    }

    // Simulate projects loading into view
    const timeout = setTimeout(() => {
      setIsInView(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [filter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Explore my recent work across various technologies and domains
          </p>
        </motion.div>

        <motion.div 
          className="filter-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Apps
          </button>
          <button 
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI/ML
          </button>
          <button 
            className={`filter-btn ${filter === 'iot' ? 'active' : ''}`}
            onClick={() => setFilter('iot')}
          >
            IoT
          </button>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {visibleProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">
                      <FaCode className="tech-icon" /> {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag more-tag">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {visibleProjects.length === 0 && (
          <motion.div 
            className="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>No projects in this category yet. Check back soon!</p>
          </motion.div>
        )}

        <motion.div 
          className="view-more"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="https://github.com/sameer266/" target="_blank" rel="noopener noreferrer" className="view-all-btn">
            View All Projects on GitHub <FaGithub className="btn-icon" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;