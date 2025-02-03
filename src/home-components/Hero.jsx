import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = {
  1: "https://rdfblog.wordpress.com/wp-content/uploads/2017/05/dscn6274.jpg",
  2: "https://rdfblog.wordpress.com/wp-content/uploads/2023/10/blog-3.jpg?w=2500&h=",
  3: "https://rdfblog.wordpress.com/wp-content/uploads/2024/02/blog-story-1.jpg",
  4: "https://rdfblog.wordpress.com/wp-content/uploads/2023/10/blog-2-1.jpg",
  5: "https://rdfblog.wordpress.com/wp-content/uploads/2018/12/dsc04731.jpg?w=2500&h="
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const imageKeys = Object.keys(images);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageKeys.length);
  };

  React.useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden bg-[#FEFEFE] py-6 rounded-lg shadow-md max-w-[95%] mx-auto p-4 md:p-6 mt-3 ">
      <motion.div
        className="absolute inset-0 w-full h-full"
        key={currentIndex}
        initial={{ scale: 1.1, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }} 
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img
          src={images[imageKeys[currentIndex]]}
          alt={`Slide ${currentIndex + 1}`}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 md:px-0">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-9xl font-normal leading-tight mb-2 text-white mix-blend-overlay"
          style={{
            fontFamily: 'fantasy',
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "backInOut" }}
        >
          Educate  Engage  Empower
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl font-medium"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "backInOut" }}
          style={{ fontFamily: 'sans-serif' }}
        >
          Beyond Textbook Education • Engaging the World • Creating Change Makers
        </motion.h2>
        <motion.button
          className="mt-6 bg-white text-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-green-300 hover:text-black transition duration-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
        >
          <Link to='/aboutus'>Learn More</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;