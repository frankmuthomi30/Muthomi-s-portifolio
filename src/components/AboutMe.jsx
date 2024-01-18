import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentParagraph, setCurrentParagraph] = useState('');

  const content = [
    "Hi there! I'm Frank Muthomi Mbauni, a passionate and creative frontend developer based in Nyeri, Kenya.",
    "Currently, I'm a Recent Graduate student who pursued a diploma in ICT, with a focus on becoming a skilled front-end developer.",
    "My journey in the world of technology has been exciting, and I am dedicated to honing my skills to create beautiful and user-friendly interfaces.",
    "In my free time, I enjoy painting, singing in choirs, and exploring the latest trends in technology. I find inspiration in both art and technology, and I believe in the power of combining creativity with technical expertise."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < content.length) {
        const currentSentence = content[currentIndex];

        if (currentParagraph.length < currentSentence.length) {
          setCurrentParagraph((prev) => prev + currentSentence[currentParagraph.length]);
        } else {
          setParagraphs((prevParagraphs) => [...prevParagraphs, currentParagraph]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setCurrentParagraph('');
        }
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentParagraph, currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="p-8 bg-blue-900 flex flex-col text-white items-center"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
      <p className="mb-4">{currentParagraph}</p>
    </motion.div>
  );
};

export default AboutMe;
