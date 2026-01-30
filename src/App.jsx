import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'
import { motion } from "framer-motion";

const App = () => {

  const floatVariants = (duration) => ({
    initial: { y: -6 },
    animate: {
      y: [6, -6],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });


  return (
  <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
    <div className='fixed top-0 -z-10 h-full w-full '>
      <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%, rgba(120,119,198,0.3),rgba(255,255.255,0))]'>      
      </div>
    </div>
    
    <div className='container mx-auto px-8'>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />

      <motion.a
        href="https://suba-ai-assistant.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="ai-chat-float skiptranslate"
        variants={floatVariants(3)}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        💬 AI Assistant
      </motion.a>

    </div>

  </div>

  )
}

export default App