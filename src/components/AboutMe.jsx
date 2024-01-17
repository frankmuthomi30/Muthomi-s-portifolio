// AboutMe.js
import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="p-8  bg-blue-900 flex flex-col text-white items-center"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        Hi there! I'm Frank Muthomi Mbauni, a passionate and creative frontend developer based in Nyeri, Kenya.
      </p>
      <p className="mb-4">
        Currently, I'm a finishing 3rd-year student pursuing a diploma in ICT, with a focus on becoming a skilled front-end developer.
      </p>
      <p className="mb-4">
        My journey in the world of technology has been exciting, and I am dedicated to honing my skills to create beautiful and user-friendly interfaces.
      </p>
      <p className="mb-4">
        In my free time, I enjoy painting, singing in choirs, and exploring the latest trends in technology. I find inspiration in both art and technology, and I believe in the power of combining creativity with technical expertise.
      </p>
    </motion.div>
  );
};

export default AboutMe;
