// Certifications.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Import your certification image
import certificationImage from './certificate.png';

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="p-8 bg-blue-900 text-white"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Certifications</h2>
      
      {/* Certificate Image */}
      <div className="flex items-center justify-center">
        <img src={certificationImage} alt="Code Camp Certificate" className="max-w-full h-auto" />
      </div>
    </motion.div>
  );
};

export default Certifications;
