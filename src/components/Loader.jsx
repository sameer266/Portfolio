import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/loader.css';

const Loader = () => {
  return (
    <motion.div 
      className="loader-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader">
        <div className="loader-content">
          <div className="loader-circle-container">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                className="loader-circle"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          <motion.div 
            className="loader-text-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              className="loader-text"
              animate={{
                color: ['#4a6cf7', '#f06292', '#4a6cf7'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.span
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Loading
              </motion.span>
              <motion.span 
                className="loader-dots"
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
              >
                .
              </motion.span>
              <motion.span 
                className="loader-dots"
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4
                }}
              >
                .
              </motion.span>
              <motion.span 
                className="loader-dots"
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6
                }}
              >
                .
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="loader-progress"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader; 