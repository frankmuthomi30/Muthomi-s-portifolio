// Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaLightbulb, FaClock, FaComments } from 'react-icons/fa';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="p-8 bg-white text-gray-900"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {[
          { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: 'HTML5' },
          { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: 'CSS3' },
          { icon: <FaJsSquare className="text-yellow-500 text-5xl" />, name: 'JavaScript' },
          { icon: <FaReact className="text-cyan-500 text-5xl" />, name: 'React' },
          // Use different icons for soft skills
          { icon: <FaLightbulb className="text-yellow-300 text-5xl" />, name: 'Problem Solving' },
          { icon: <FaClock className="text-blue-900 text-5xl" />, name: 'Time Management' },
          { icon: <FaComments className="text-green-500 text-5xl" />, name: 'Communication Skills' },
        ].map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white flex flex-col items-center justify-center p-4 rounded-md transition-transform duration-300 h-30 w30"
          >
            {skill.icon}
            <p className="mt-2 text-lg font-bold text text-gray-800">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
