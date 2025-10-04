import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Wedding Invitation - शुभ लग्न',
          text: 'You are cordially invited to our wedding celebration!',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert('Wedding invitation link copied to clipboard!');
    }
  };

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/30 to-white/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          {/* Important Note */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 card-shadow max-w-2xl mx-auto mb-8">
            <h4 className="text-lg font-semibold text-deep-red mb-3">
              Important Information
            </h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p>• Venue has parking facilities available</p>
              <p>• Traditional Indian attire is appreciated</p>
              <p>• For any queries, please contact the numbers provided above</p>
            </div>
            <p className="font-hindi text-gray-600 mt-3 text-sm">
              कृपया वेळेवर पधारा आणि आपले आशीर्वाद द्या।
            </p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gold/20 pt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-600">
                Made with ❤️ for our special day
              </p>
              <p className="text-xs text-gray-500 mt-1">
                © 2024 Wedding Invitation. All rights reserved.
              </p>
            </div>

            {/* Wedding Date Reminder */}
            <div className="text-center sm:text-right">
              <p className="text-sm font-semibold text-deep-red">
                Save the Date: 03rd November 2025
              </p>
              <p className="text-xs text-gray-600">
                We can't wait to celebrate with you!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
        
      </div>
    </footer>
  );
};

export default Footer;