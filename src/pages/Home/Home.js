import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero/Hero';
import './Home.css';

function Home() {
  return (
    <>
    
      <Hero />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        
      </motion.div>
    </>
  );
}

export default Home;

