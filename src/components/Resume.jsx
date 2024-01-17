// Resume.js
import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const downloadResume = () => {
    // You can replace the link with the actual path to your resume
    const resumeUrl = './cv-muthomi.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="p-8 bg-white text-gray-900 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <p className="text-gray-700 mb-4">
        Download my resume to learn more about my skills, education, and work experience.
      </p>
      <button
        onClick={downloadResume}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Download Resume
      </button>
    </motion.div>
  );
};

export default Resume;
