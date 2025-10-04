import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Heart, Users, Shield } from 'lucide-react';

const SwadeshiDigital = () => {

  const swadeshiFeatures = [
    {
      icon: Shield,
      title: 'डेटा सुरक्षा',
      title_en: 'Data Security',
      description: 'तुमचा डेटा भारतात सुरक्षित आहे'
    },
    {
      icon: Users,
      title: 'स्थानिक समुदाय',
      title_en: 'Local Community',
      description: 'भारतीय संस्कृती आणि मूल्यांशी जोडणी'
    },
    {
      icon: Heart,
      title: 'मेड इन इंडिया',
      title_en: 'Made in India',
      description: 'स्वदेशी तंत्रज्ञानाचे समर्थन करा'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-green-300 rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-red-300 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-orange-400 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-orange-100 to-green-100 rounded-full mb-6">
            <Smartphone className="h-6 w-6 text-orange-600 mr-2" />
            <span className="text-orange-800 font-semibold text-sm">स्वदेशी डिजिटल इंडिया</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-red-500 to-green-600 bg-clip-text text-transparent">
              Digital With Swadeshi
            </span>
            <br />
            <span className="text-gray-700 text-3xl md:text-4xl">डिजिटल क्रांती</span>
          </h2>
          
          <p className="text-lg text-orange-600 font-medium">
            भारतीय प्लॅटफॉर्म - डिजिटल स्वराज्याची सुरुवात
          </p>
        </motion.div>



        {/* Swadeshi Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20 border border-orange-100/50"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-orange-600">Swadeshi</span> Digital?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              स्वदेशी डिजिटल प्लॅटफॉर्म का निवडावे? भारतीय मूल्यांसह तंत्रज्ञानाचा वापर करा
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {swadeshiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-10 w-10 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title_en}</h4>
                <p className="text-orange-600 font-medium mb-3 text-lg">{feature.title}</p>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default SwadeshiDigital;