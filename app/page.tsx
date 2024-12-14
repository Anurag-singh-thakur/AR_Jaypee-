'use client';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Works from '../components/Works';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import BookDemo from '../components/BookDemo';
import Blog from '@/components/Blog';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="relative min-h-screen bg-gray-900">
      
      <Header />
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />
        <div className="absolute inset-0 bg-grid-white/5 bg-grid animate-grid-fade" />
        
        <motion.div 
          className="fixed top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl opacity-20"
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
          className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl opacity-20"
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

      
      <div className="relative z-10">
  
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="services" className="py-20">
          <Services />
        </section>
        <section id="works" className="py-20">
          <Works />
        </section>

        <section id="blog" className="py-20">
          <Blog />
        </section>
        <section id="faq" className="py-20">
          <FAQ />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
        <section id="book-demo" className="py-20">
          <BookDemo />
        </section>
      </div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left z-50"
        style={{
          scaleX: scrollYProgress
        }}
      />
      <motion.button
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full z-50
                   hover:scale-110 transition-transform duration-200 shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollYProgress.get() > 0.1 ? 1 : 0 }}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </main>
  );
}