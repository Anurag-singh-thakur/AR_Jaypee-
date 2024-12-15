'use client';
import {  useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const placeholderImages = {
    main: "/Images/image-1.png.jpg",
    floating: "/Images/image02.jpg"
  };

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      style={{ opacity }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900">
        <div className="absolute inset-0 bg-grid-white/5 bg-grid animate-grid-fade" />
        
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ y }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative z-10"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Welcome to
                <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  The VR Estate
                </span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Reimagine property presentations with advanced VR solutions. We specialize in creating 
                stunning, interactive 3D property experiences that set you apart in the competitive real estate market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              {[
                'Boost buyer interest with immersive tours',
                'Simplify remote property viewings',
                'Leverage innovative visuals to drive results'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium
                         hover:from-blue-600 hover:to-purple-600 transform hover:shadow-lg transition-all duration-200"
              >
                Explore VR Models
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800/50
                         transform hover:shadow-lg transition-all duration-200"
              >
                Book Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '25%']) }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              <Image
                src={placeholderImages.main}
                alt="VR Estate Experience"
                fill
                className="object-cover mix-blend-overlay"
                priority
                sizes= "(max-width : 768px )  (max-width: 1200px) 50vw, 33vw"

                              />

              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-xl backdrop-blur-xl
                         border border-blue-500/20 flex items-center justify-center"
              >
                <span className="text-3xl">🏠</span>
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-xl backdrop-blur-xl
                         border border-purple-500/20 flex items-center justify-center"
              >
                <span className="text-3xl">🎮</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="w-1.5 h-1.5 rounded-full bg-gray-500"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;