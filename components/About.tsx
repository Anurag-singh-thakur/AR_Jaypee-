'use client';

import { motion } from 'framer-motion';
import { SparklesCore } from "./ui/sparkles";
import { BackgroundGradient } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { AnimatedTestimonials } from './ui/animated-testimonials';

const About = () => {
  const missionText =
    "At The VR Estate, we are passionate about merging technology and real estate. Our mission is to simplify property showcasing while offering a visually compelling experience for buyers and sellers.";

  const teamDescription =
    "We are a passionate team of ambitious, curious, and hardworking students with over 3 years of experience in cutting-edge technology. For the past 2 months, we have been dedicated to refining this innovative idea. Driven by commitment, we specialize in delivering high-quality, production-ready solutions tailored to our clients' needs, ensuring timely execution and exceptional results.";

  const teamMembers = [
    { name: "Eklavya", image: "/images/p1.jpg", linkedin: "https://linkedin.com/in/johndoe", role: "Founder & CEO" },
    { name: "Anchit Dixit", image: "/images/p2.jpg", linkedin: "https://linkedin.com/in/janesmith", role: "CTO" },
    { name: "Utkarsh Upadhyay", image: "/images/p3.jpeg", linkedin: "https://linkedin.com/in/alicebrown", role: "Lead Developer" },
    { name: "Bob Johnson", image: "/images/p1.jpg", linkedin: "https://linkedin.com/in/bobjohnson", role: "Marketing Manager" },
  ];

  return (
    <div className="flex flex-col overflow-hidden bg-gray-900 text-gray-100">
      <div className="flex flex-col items-center">
        <div className="container mx-auto relative">
          <div className="min-h-[40rem] w-full bg-gradient-to-r flex flex-col items-center justify-center overflow-hidden rounded-md p-8">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-20 text-center space-y-8 max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                About Us
              </h1>
              <div className="absolute inset-0 w-full h-full">
                <SparklesCore
                  background="transparent"
                  minSize={0.8}
                  maxSize={2}
                  particleDensity={60}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </div>
              <div className="text-lg md:text-xl text-gray-100">
                <TextGenerateEffect words={missionText} />
              </div>
            </motion.div>
          </div>

          {/* Team Section with Left and Right Layout */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-center">
                OUR TEAM
              </h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            
            <div className="team-desc text-center md:text-left text-lg md:text-xl text-gray-300" >
              <p className=''>{teamDescription}</p>
            </div>

            <div>
              <AnimatedTestimonials
                testimonials={[
                  {
                    quote:
                      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
                    name: "Archit Dixit",
                    designation: "Founder and CEO",
                    src: "/images/p2.jpg",
                  },
                  {
                    quote:
                      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
                    name: "Utkarsh Upadhyay",
                    designation: "Chief Technical Officer",
                    src: "/images/p3.jpeg",
                  },
                  {
                    quote:
                      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
                    name: "Eklavya Gautam",
                    designation: " CREATIVE DIRECTOR- 3D MODELLING",
                    src: "/images/p1.jpg",
                  },
                  {
                    quote:
                      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
                    name: "Utkarsh Mishra",
                    designation: "CFO",
                    src: "data:image/jpeg;base64,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",

                  },
                ]}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-16 text-center mb-16"
          >
            <BackgroundGradient className="inline-block rounded-full px-8 py-3 bg-black">
              <span className="text-white font-medium text-lg">
                Innovating Real Estate Through Technology
              </span>
            </BackgroundGradient>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
