import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaDownload } from 'react-icons/fa';
import { SiBuymeacoffee } from "react-icons/si";
import { motion } from 'framer-motion';

// Define subtle floating animation variants for all icons moving together
const floatVariants = {
  initial: { y: 0 }, // Start at 0
  animate: {
    y: [3, -3], // Subtle up-and-down movement
    transition: {
      duration: 3, // Slower, smooth animation
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

// Define refined subtle hover effect
const hoverVariants = {
  hover: {
    scale: 1.05, // Slightly larger scale-up for a refined hover effect
    color: '#e0e0e0', // Gentle lighter shade on hover
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)', // Soft drop shadow
    transition: { 
      duration: 0.25, // Smooth and quick transition
      ease: 'easeInOut' // Ease in and out for fluidity
    },
  },
};

const Navbar = () => {
  return (
    <nav className='mb-15 flex items-center justify-between py-6'>
      {/* Buy Me a Coffee Icon */}
      <div className='mx-2 flex flex-shrink-0 items-center '>
        <motion.a
          href="https://buymeacoffee.com/subashreevs"
          className='flex'
          variants={floatVariants}  // All icons move together
          initial="initial"
          animate="animate"
          whileHover={hoverVariants.hover}
        >
          <SiBuymeacoffee className='text-2xl text-amber-400 transition-all duration-300' />
          <p className='mx-1'>Buy Me a Coffee</p>
        </motion.a>
      </div>

      {/* Social Icons moving together */}
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>

        {/* Download Resume Button */}
        <motion.a
          href="/Subashree_ResumeIntern_2YOE.pdf"
          download="Subashree_Resume_2YOE.pdf"
          variants={floatVariants}  // Same floating effect
          initial="initial"
          animate="animate"
          whileHover={hoverVariants.hover}
        >
          <FaDownload />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/subashreevs/"
          variants={floatVariants}  // Same floating effect
          initial="initial"
          animate="animate"
          whileHover={hoverVariants.hover}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/subashreevs/"
          variants={floatVariants}  // Same floating effect
          initial="initial"
          animate="animate"
          whileHover={hoverVariants.hover}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/subbbh/"
          variants={floatVariants}  // Same floating effect
          initial="initial"
          animate="animate"
          whileHover={hoverVariants.hover}
        >
          <FaInstagram />
        </motion.a>

      </div>
    </nav>
  );
};

export default Navbar;
