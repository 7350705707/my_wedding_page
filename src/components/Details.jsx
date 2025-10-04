import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, Users } from 'lucide-react';

const Details = () => {
  const events = [
    {
      title: "Haldi Ceremony",
      hindi: "हळद संस्कार",
      date: "02nd November 2025",
      time: "06:00 PM",
      venue: "Arjuna Lawns, Pathardi",
      description: "A traditional ceremony where turmeric paste is applied to the bride and groom",
      icon: "🌻"
    },
    {
      title: "Sangam (Wedding)",
      hindi: "लग्न विधी",
      date: "03rd November 2025",
      time: "12:32 PM",
      venue: "Arjuna Lawns, Pathardi",
      description: "The sacred wedding ceremony where two souls unite as one",
      icon: "💍"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="details" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-elegant text-deep-red mb-4">
            Wedding Details
          </h2>
          <p className="text-xl font-hindi text-gray-600 mb-6">
            लग्नाचे तपशील
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-rose-gold mx-auto"></div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 card-shadow hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{event.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-deep-red mb-2">
                    {event.title}
                  </h3>
                  <p className="text-lg font-hindi text-gray-600 mb-4">
                    {event.hindi}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span className="text-gray-700">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-gold" />
                      <span className="text-gray-700">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span className="text-gray-700">{event.venue}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          
          {/* Contact Information */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 card-shadow">
            <div className="text-center mb-6">
              <Phone className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-deep-red mb-2">Contact</h3>
              <p className="font-hindi text-gray-600">संपर्क</p>
            </div>
            <div className="space-y-3 text-sm">
            
              <div>
                <p className="font-semibold text-gray-700">Phone Number:</p>
                <p className="text-gray-600">7350705707</p>
              </div>
            </div>
          </div>

          {/* Dress Code */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 card-shadow">
            <div className="text-center mb-6">
              <Users className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-deep-red mb-2">Dress Code</h3>
              <p className="font-hindi text-gray-600">वेषभूषा</p>
            </div>
            <div className="text-sm text-center">
              <p className="text-gray-700 mb-2">Traditional Indian Attire</p>
              <p className="text-gray-600">Colors: Red, Gold, Maroon, Pink</p>
              <p className="font-hindi text-gray-600 mt-2">पारंपारिक भारतीय पोशाख</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Details;