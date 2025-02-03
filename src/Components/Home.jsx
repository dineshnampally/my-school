import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../home-components/Hero'
import Infrastructure from '../home-components/Infrastructure'
import EventsCourousal from '../home-components/EventsCourousal'
import Donor from '../home-components/Donor'
import Volunteer from '../home-components/Volunteer'

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Home = () => {
  return (
    <>
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInVariants}
      >
        <Hero />
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInVariants}
      >
        <Infrastructure />
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInVariants}
      >
        <EventsCourousal />
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInVariants}
      >
        <Volunteer />
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInVariants}
      >
        <Donor />
      </motion.div>
    </>
  )
}

export default Home
