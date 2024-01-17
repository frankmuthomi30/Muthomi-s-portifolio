// Projects.js
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="p-8 bg-blue-900 text-white"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1: Garage Website */}
        <a
          href="https://proxy-auto-garage-react.vercel.app/"  // Replace with your actual website URL
          target="_blank"  // Open in a new tab
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-slate-200 flex flex-col text-gray-900 rounded-md transition-transform duration-300 shadow"
          >
            <h3 className="text-xl font-bold mb-2 text-center">Garage Website</h3>
            <img
              id="imageBG"
              src={process.env.PUBLIC_URL + "./garage.png"}
              alt="Garage image"
              className="rounded-lg w-full h-full object-cover"
            />
            <p className="text-gray-800">
              A website showcasing a garage, including services offered, contact information, and a gallery of
              projects.
            </p>
            {/* Add more details about the project */}
          </motion.div>
        </a>

        {/* Add more projects as needed */}
      </div>
    </motion.div>
  );
};

export default Projects;
