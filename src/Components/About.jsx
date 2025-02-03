
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RdfMs from '../about-componenets/RdfMs';
import MainRdf from '../about-componenets/MainRdf';
import OurSchools from '../about-componenets/OurSchools';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const refMainRdf = useRef(null);

  const handleScroll = () => {
    if (refMainRdf.current) {
      const rect = refMainRdf.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <RdfMs />
      <motion.div
        ref={refMainRdf}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.2 }}
      >
        <MainRdf />
        <OurSchools/>
      </motion.div>
    </>
  );
};

export default About;