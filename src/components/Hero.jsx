import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin, Flame, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl text-deep-red">🕉️</div>
        <div className="absolute top-40 right-16 text-4xl text-gold">🪔</div>
        <div className="absolute bottom-32 left-20 text-5xl text-deep-red">🌺</div>
        <div className="absolute bottom-20 right-10 text-4xl text-gold">🔔</div>
        <div className="absolute top-60 left-1/4 text-3xl text-deep-red">🪷</div>
        <div className="absolute top-80 right-1/3 text-4xl text-gold">✨</div>
        <div className="absolute top-32 right-8 text-5xl text-deep-red">卐</div>
        <div className="absolute bottom-40 right-1/4 text-4xl text-gold">卐</div>
        <div className="absolute top-96 left-16 text-3xl text-deep-red">卐</div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Sanskrit Sloka */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-deep-red/10 to-gold/10 rounded-2xl p-6 max-w-4xl mx-auto">
            <p className="text-lg font-hindi text-deep-red mb-2">
              卐 सुभद्राष्टे सुवचनं वराभ्यो वरयोषिते। 卐
            </p>
            <p className="text-sm text-gray-600 italic">
              "May this auspicious union be blessed with happiness and prosperity"
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex justify-center items-center space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🪷</span>
              <Heart className="w-8 h-8 text-deep-red animate-pulse" />
              <span className="text-2xl">🪷</span>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold"></div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-elegant text-deep-red mb-4">
            <span className="block font-hindi text-2xl sm:text-3xl text-gold mb-2">
              🕉️ गणपति बप्पा मोरया 🕉️
            </span>
            <span className="block font-hindi text-3xl sm:text-4xl lg:text-5xl mb-2">
              शुभ विवाह
            </span>
            <span className="text-gradient">
               लग्न निमंत्रण
            </span>
          </h1>
        </motion.div>

        {/* Hindu Religious Ceremonies Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-gold/20 to-deep-red/10 rounded-2xl p-6 max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <Flame className="w-5 h-5 text-deep-red" />
                <span className="font-hindi text-deep-red">अग्नि साक्षी</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🪔</span>
                <span className="font-hindi text-deep-red">सप्तपदी</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🌿</span>
                <span className="font-hindi text-deep-red">कन्यादान</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">💍</span>
                <span className="font-hindi text-deep-red">मंगलसूत्र</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">🪷</span>
                <span className="font-hindi text-deep-red">पाणिग्रहण</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Couple Names - Update these with actual names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 card-shadow max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 space-y-8 lg:space-y-0">
              
              {/* Bride */}
              <div className="text-center lg:text-right flex-1">
                <div className="mb-3">
                  <span className="text-2xl">👰🏻</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-script text-deep-red mb-2">
                  Sanjivanee
                </h2>
                <p className="text-2xl font-hindi text-gray-600 mb-3">
                  संजीवनी
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  श्रीमती. सिमा व कै. दादासाहेब रामभाऊ नागरे यांची कन्या
                </p>
                <div className="flex justify-center lg:justify-end space-x-2 text-lg">
                  <span>🌺</span>
                  <span>💐</span>
                  <span>卐</span>
                </div>
              </div>

              {/* Heart Divider */}
              <div className="flex-shrink-0">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 bg-gradient-to-br from-deep-red to-rose-gold rounded-full flex items-center justify-center relative"
                >
                  <Heart className="w-8 h-8 text-white fill-current" />
                </motion.div>
              </div>

              {/* Groom */}
              <div className="text-center lg:text-left flex-1">
                <div className="mb-3">
                  <span className="text-2xl">🤵🏻</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-script text-deep-red mb-2">
                  Haresh
                </h2>
                <p className="text-2xl font-hindi text-gray-600 mb-3">
                  हरेश
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  सौ. सुनिता व श्री. धर्माजी जगन्नाथ केदार यांचे पुत्र
                </p>
                <div className="flex justify-center lg:justify-start space-x-2 text-lg">
                  <span>卐</span>
                  <span>🪔</span>
                  <span>⚡</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Wedding Date & Venue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12"
        >
          <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3">
            <Calendar className="w-5 h-5 text-gold" />
            <div className="text-center sm:text-left">
              <p className="font-semibold text-deep-red flex items-center space-x-2">
                <span>🗓️</span>
                <span>०३ नोव्हेंबर २०२५</span>
              </p>
             
            </div>
          </div>
          
          <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3">
            <MapPin className="w-5 h-5 text-gold" />
            <div className="text-center sm:text-left">
              <p className="font-semibold text-deep-red flex items-center space-x-2">
                <span>🏛️</span>
                <span>अर्जुना लॉन्स </span>
              </p>
              <p className="text-sm text-gray-600">[शेवगाव रोड पाथर्डी, अहिल्यादेवी नगर, महाराष्ट्र]</p>
            </div>
          </div>
        </motion.div>

        {/* Hindu Religious Invitation Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gold/10 to-deep-red/5 rounded-3xl p-8 mb-6">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
              गणेश जी आणि सर्व देवी-देवतांच्या आशीर्वादाने आमच्या पवित्र हिंदू विवाह संस्काराचा उत्सव साजरा करण्यासाठी आम्ही तुम्हाला आदराने आमंत्रित करतो.
            </p>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className="text-2xl">🪔</span>
              <p className="text-base font-hindi text-deep-red leading-relaxed text-center">
                यज्ञ अग्निसाक्षीने सप्तपदी गृहीत करून<br/>
                आमचे जीवन एकत्र करण्याच्या या पावन क्षणी<br/>
                तुमच्या उपस्थितीने आमच्या या मंगल प्रसंगाची शोभा वाढेल।
              </p>
              <span className="text-2xl">🪔</span>
            </div>
            <p className="text-center font-hindi text-gray-600 leading-relaxed">
              🙏 कृपया पधारा आणि आशीर्वाद द्या। 🙏<br/>
              <span className="text-sm text-gold font-semibold">卐 हर हर महादेव 卐</span>
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold rounded-full mx-auto flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;