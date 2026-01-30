import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFileDownload, FaAward } from 'react-icons/fa';
import { SiBuymeacoffee } from "react-icons/si";
import { motion } from 'framer-motion';
import { useState } from "react";


const setGoogleLanguage = (lang) => {
  // 1) Force Google translate via cookie (most reliable)
  const value = `/en/${lang}`;
  document.cookie = `googtrans=${value};path=/`;
  document.cookie = `googtrans=${value};path=/;domain=${window.location.hostname}`;

  // 2) Also try to set via the dropdown if it exists (no reload)
  const trySet = () => {
    const select = document.querySelector("select.goog-te-combo");
    if (!select) return false;
    select.value = lang;
    select.dispatchEvent(new Event("change"));
    return true;
  };

  // Try now; if not ready, retry briefly
  if (trySet()) return;

  let attempts = 0;
  const interval = setInterval(() => {
    attempts += 1;
    if (trySet() || attempts > 25) clearInterval(interval);
  }, 200);
};


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
  const [activeLang, setActiveLang] = useState("en");
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
      
<div className="flex items-center gap-2 text-sm skiptranslate">
  <span className={activeLang === "en" ? "text-purple-500" : "text-neutral-400"}>
    English
  </span>

  <button
    type="button"
    onClick={() => {
      const next = activeLang === "en" ? "ta" : "en";
      setActiveLang(next);
      setGoogleLanguage(next);
    }}
    className={`relative h-6 w-12 rounded-full transition-colors ${
      activeLang === "ta" ? "bg-purple-700" : "bg-neutral-700"
    }`}
    aria-label="Toggle language"
  >
    <span
      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all duration-300 ease-in-out ${
        activeLang === "en" ? "left-0.5" : "left-6"
      }`}
    />
  </button>

  <span className={activeLang === "ta" ? "text-purple-400" : "text-neutral-400"}>
    தமிழ்
  </span>
</div>

      {/* Social Icons moving together */}
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>

        {/* Download Resume Button */}
        <motion.a
          href="/Subashree_Resume_2YOE.pdf"
          download="Subashree_Resume_2YOE.pdf"
          variants={floatVariants}  // Same floating effect
          initial="initial"
          animate="animate"
          whileHover={hoverVariants.hover}
          className="nav-tip"
          data-tip="Download Resume"
        >
          <FaFileDownload />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/subashreevs/"
          variants={floatVariants}  // Same floating effect
          initial="initial"
          animate="animate"
          whileHover={hoverVariants.hover}
          className="nav-tip"
          data-tip="LinkedIn"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/subashreevs/"
          variants={floatVariants}  // Same floating effect
          initial="initial"
          animate="animate"
          whileHover={hoverVariants.hover}
          className="nav-tip"
          data-tip="GitHub"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://subashreevs-certificates.netlify.app/"
          variants={floatVariants}  // Same floating effect
          initial="initial"
          animate="animate"
          whileHover={hoverVariants.hover}
          className="nav-tip"
          data-tip="Certificates"
        >
          <FaAward />
        </motion.a>

      </div>
    </nav>
  );
};

export default Navbar;
