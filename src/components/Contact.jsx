import React, { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiMapPin, FiPhone } from 'react-icons/fi';
import '../assets/styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission with API call
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Feel free to reach out for collaborations, questions, or just a friendly hello. 
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FiMapPin />
              </div>
              <div className="info-details">
                <h3>Location</h3>
                <p>Kathmandu</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FiMail />
              </div>
              <div className="info-details">
                <h3>Email</h3>
                <p><a href="mailto:sameerbaiju792@gmail.com">sameerbaiju792@gmail.com</a></p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FiPhone />
              </div>
              <div className="info-details">
                <h3>Phone</h3>
                <p>9843019129</p>
              </div>
            </div>
            
            <div className="social-box">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://github.com/yourusername" aria-label="GitHub" className="social-link">
                  <FiGithub />
                </a>
                <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" className="social-link">
                  <FiLinkedin />
                </a>
                <a href="https://twitter.com/yourusername" aria-label="Twitter" className="social-link">
                  <FiTwitter />
                </a>
                <a href="mailto:youremail@example.com" aria-label="Email" className="social-link">
                  <FiMail />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send Me A Message</h3>
            {submitted ? (
              <div className="form-success">
                <FiSend className="success-icon" />
                <h4>Message Sent Successfully!</h4>
                <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <FiSend />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;