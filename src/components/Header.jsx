import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#home', label: 'Home', hindi: 'मुख्यपृष्ठ' },
    { href: '#swadeshi', label: 'Digital India', hindi: 'डिजिटल इंडिया' },
     { href: '#details', label: 'Details', hindi: 'तपशील' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gold/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-deep-red" />
            <span className="text-lg sm:text-xl font-elegant text-deep-red font-semibold">
              शुभ लग्न
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1, color: '#D4AF37' }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-gold transition-colors duration-300 font-medium"
              >
                <span className="block text-sm">{item.label}</span>
                <span className="block text-xs font-hindi text-gray-500">{item.hindi}</span>
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gold transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md"
        >
          <nav className="py-4 space-y-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-gold hover:bg-gold/10 transition-colors duration-300"
              >
                <span className="block font-medium">{item.label}</span>
                <span className="block text-sm font-hindi text-gray-500">{item.hindi}</span>
              </motion.button>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;