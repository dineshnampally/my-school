import React from 'react';
import { motion } from 'framer-motion';

const Donor = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className='min-h-3 flex flex-col md:flex-row rounded-lg shadow-md bg-[#008EB2] max-w-[95%] mx-auto items-center justify-center p-6 mt-3 text-center'
    >
      <div className='md:w-1/2 w-full px-4'>
        <h2 className='text-white font-semibold xl:text-8xl lg:text-7xl md:text-6xl text-4xl'>LET NO CHILD GO HUNGRY</h2>
        <h2 className='text-white text-lg font-semibold mt-2 md:text-2xl lg:text-4xl xl:text-6xl' style={{fontFamily:"monospace"}}>SPONSOR A MIDDAY MEAL</h2>
        <p className='text-white text-base mt-4'>
          The Midday Meal provided to every student in RDF institutions is sometimes the only nutritious meal they receive in the day. It provides them with the much-needed sustenance to focus on their academics, sports, and other activities.
        </p>
        <motion.a 
          href='https://rdfindia.org/join-us/donate/'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='inline-block mt-6 px-6 py-2 text-white bg-[#e71321] rounded-lg shadow-md hover:bg-[#c1121f] transition-all'
        >
          DONATE NOW
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Donor;
