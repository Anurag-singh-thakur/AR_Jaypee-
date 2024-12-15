'use client';
import { motion } from 'framer-motion';
import { SparklesCore } from "./ui/sparkles";
import { BackgroundGradient } from "./ui/background-gradient";
import { TracingBeam } from "./ui/tracing-beam";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const About = () => {
  const missionText = "At The VR Estate, we are passionate about merging technology and real estate. Our mission is to simplify property showcasing while offering a visually compelling experience for buyers and sellers.";

  return (
    <div className="flex flex-col overflow-hidden">
      <div className='flex flex-col items-center'>
        <TracingBeam className="px-6">
          <div className="container mx-auto relative">
            {/* Enhanced Heading Section */}
            <div className="min-h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md p-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 text-center space-y-8 max-w-4xl mx-auto"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                  About Us
                </h1>
                <div className="absolute inset-0 w-full h-full">
                  <SparklesCore
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={50}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                  />
                </div>
                <p className="text-lg md:text-xl text-gray-100">
                  <TextGenerateEffect  words={missionText} />
                </p>
              </motion.div>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Innovation",
                  description: "Pushing boundaries in real estate technology",
                  icon: "🚀"
                },
                {
                  title: "Accuracy",
                  description: "Precise and detailed virtual representations",
                  icon: "🎯"
                },
                {
                  title: "Satisfaction",
                  description: "Exceeding client expectations consistently",
                  icon: "⭐"
                }
              ].map((value, index) => (
                <BackgroundGradient key={index} className="rounded-[22px] p-4 sm:p-10 bg-black">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex flex-col items-center text-center"
                  >
                    <span className="text-4xl mb-4">{value.icon}</span>
                    <h3 className="text-2xl font-bold mb-2 text-white">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </motion.div>
                </BackgroundGradient>
              ))}
            </div>

            {/* Vision and Team Section */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <BackgroundGradient className="rounded-[22px] p-6 bg-black">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <span>🎯</span> Our Vision
                  </h3>
                  <p className="text-gray-400">
                    To be the leading provider of VR solutions in the real estate market, 
                    transforming how properties are showcased and experienced globally.
                  </p>
                </motion.div>
              </BackgroundGradient>

              <BackgroundGradient className="rounded-[22px] p-6 bg-black">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <span>👥</span> Our Team
                  </h3>
                  <p className="text-gray-400">
                    A dynamic blend of tech enthusiasts, real estate experts, and creative 
                    visionaries working together to revolutionize property experiences.
                  </p>
                </motion.div>
              </BackgroundGradient>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '1000+', label: 'Properties Digitized' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <BackgroundGradient key={index} className="rounded-[22px] p-6 bg-black">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <motion.p
                      className="text-3xl font-bold text-white"
                      whileInView={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.number}
                    </motion.p>
                    <p className="text-gray-400 mt-2">{stat.label}</p>
                  </motion.div>
                </BackgroundGradient>
              ))}
            </div>

            {/* Closing Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-16 text-center mb-16"
            >
              <BackgroundGradient className="inline-block rounded-full px-8 py-3 bg-black">
                <span className="text-white font-medium">
                  Innovating Real Estate Through Technology
                </span>
              </BackgroundGradient>
            </motion.div>
          </div>
        </TracingBeam>
      </div>
    </div>
  );
};

export default About;
