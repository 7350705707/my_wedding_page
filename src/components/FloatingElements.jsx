import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const petals = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    duration: 8 + Math.random() * 4,
    x: Math.random() * 100,
    size: 10 + Math.random() * 15
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute opacity-30"
          style={{
            left: `${petal.x}%`,
            fontSize: `${petal.size}px`
          }}
          initial={{ y: -50, rotate: 0, opacity: 0 }}
          animate={{
            y: '100vh',
            rotate: 360,
            opacity: [0, 0.7, 0.7, 0],
            x: [0, 30, -30, 0]
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🌸
        </motion.div>
      ))}
      
      {/* Floating hearts */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-rose-gold opacity-20"
          style={{
            left: `${10 + i * 12}%`,
            fontSize: '20px'
          }}
          initial={{ y: '100vh' }}
          animate={{ y: -50 }}
          transition={{
            duration: 12 + i * 2,
            delay: i * 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          💕
        </motion.div>
      ))}
      
      {/* Floating Indian flags for Swadeshi theme */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`flag-${i}`}
          className="absolute opacity-25"
          style={{
            left: `${20 + i * 30}%`,
            fontSize: '24px'
          }}
          initial={{ y: '100vh', rotate: 0 }}
          animate={{ 
            y: -100, 
            rotate: [0, 10, -10, 0],
            x: [0, 20, -20, 0]
          }}
          transition={{
            duration: 15 + i * 3,
            delay: i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🇮🇳
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;