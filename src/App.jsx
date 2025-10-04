import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Details from './components/Details';
import SwadeshiDigital from './components/SwadeshiDigital';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

function App() {
  return (
    <div className="min-h-screen gradient-bg relative overflow-x-hidden">
      <FloatingElements />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Header />
        <Hero />
        <SwadeshiDigital />
        <Details />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;