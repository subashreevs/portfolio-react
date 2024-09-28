import React, { useState, useEffect } from 'react';
import { HERO_CONTENT } from '../constants';
import profilepic from '../assets/kevinRushProfile.jpg';
import { motion, AnimatePresence } from 'framer-motion';

// Animation for letter-by-letter appearance
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

// Animation for fading titles in and out
const titleSwapAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const Hero = () => {
  const [isTitle1, setIsTitle1] = useState(true);
  const title1 = 'Software Engineer';
  const title2 = 'MS CS Grad Student';

  // Toggle between the two titles after a delay
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTitle1((prev) => !prev);
    }, 2500); // Change title every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap lg:flex-nowrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className='pb-12 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-center'>
              Subashree V S
            </motion.h1>

            {/* Container for Titles */}
            <div className='relative h-12 text-center lg:text-left w-full'>
              <AnimatePresence>
                {/* Show Title 1: "Software Engineer" */}
                {isTitle1 && (
                  <motion.div
                    key="title1"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={titleSwapAnimation}
                    className='absolute w-full'>
                    {title1.split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        custom={index}
                        variants={letterAnimation}
                        initial='hidden'
                        animate='visible'
                        className='text-2xl lg:text-3xl tracking-tight text-purple-500'>
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </motion.div>
                )}

                {/* Show Title 2: "MS CS Grad Student" */}
                {!isTitle1 && (
                  <motion.div
                    key="title2"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={titleSwapAnimation}
                    className='absolute w-full'>
                    {title2.split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        custom={index}
                        variants={letterAnimation}
                        initial='hidden'
                        animate='visible'
                        className='text-2xl lg:text-3xl tracking-tight text-purple-500'>
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className='my-2 max-w-xl py-6 font-light tracking-tighter text-sm lg:text-base text-left'>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className='rounded-full mt-10 w-40 h-40 lg:w-72 lg:h-72'
              src={profilepic}
              alt='Subashree'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
