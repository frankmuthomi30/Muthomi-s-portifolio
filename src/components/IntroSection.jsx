import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3 } from 'react-icons/fa';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/backg.jpg)`,
        color: 'white', // Set text color to white
      }}
    >
      {/* Background overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="text-center space-y-4 relative z-10 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-4">
          Aspiring I.C.T Professional & Frontend Developer.
        </p>

        <div className="flex items-center mb-6">
          <img
            id="imageBG"
            src={process.env.PUBLIC_URL + "/frank.jpg"}
            alt="Garage image"
            className="rounded-full w-20 h-20 object-cover mr-4"
          />
          <div>
            <p className="text-lg font-bold text-center">Frank Muthomi.</p>
            <p className="text-lg">Web Developer</p>
          </div>
        </div>

        <a href="tel:+0797887378" className="text-blue-600 hover:text-blue-700">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
            Call Me
          </button>
        </a>

      </div>

      <div className="text-center mt-8 text-white relative z-10">
        <p className="text-lg mt-4 mb-8">Powered by the latest technologies</p>
        <div className="flex space-x-4">
          <FaReact className="text-5xl text-cyan-500" />
          <FaJs className="text-5xl text-yellow-400" />
          <FaHtml5 className="text-5xl" />
          <FaCss3 className="text-5xl text-red-500" />
        </div>
      </div>

    </motion.div>
  );
};

export default Home;
