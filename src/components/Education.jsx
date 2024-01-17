// Education.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaBriefcase } from 'react-icons/fa';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="p-8 bg-white text-gray-800"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* University */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 bg-slate-200 flex flex-col text-gray-900 rounded-md transition-transform duration-300 shadow"
        >
          <h3 className="text-xl font-bold mb-2 text-center">Diploma</h3>
          <FaUniversity className="mx-auto mb-4 text-4xl text-green-500" />
          <p className="text-gray-800">The Nyeri National Polytechnic</p>
          <p className="text-gray-800">Diploma in Information Communiction Technology</p>
        </motion.div>

        {/* Training */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-4 bg-slate-200 flex flex-col text-gray-900 rounded-md transition-transform duration-300 shadow"
        >
          <h3 className="text-xl font-bold mb-2 text-center">Web Development Training</h3>
          <FaBriefcase className="mx-auto mb-4 text-4xl text-green-500" />
          <p className="text-gray-800">Company: The Jitu</p>
          <p className="text-gray-800">Web Development Training</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
