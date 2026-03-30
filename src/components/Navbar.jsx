import { FaGlobeAmericas, FaLinkedin, FaGithub, FaFileDownload, FaAward, FaMoon, FaSun } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { UI_STRINGS } from '../constants';
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

const Navbar = ({ theme, onToggleTheme, locale, onToggleLocale }) => {
  const copy = UI_STRINGS[locale];
  return (
    <nav className='glass-card mb-8 flex flex-col gap-5 rounded-[2rem] px-5 py-4 lg:flex-row lg:items-center lg:justify-between'>
      {/* Buy Me a Coffee Icon */}
      <div className='mx-2 flex flex-shrink-0 items-center '>
        <motion.a
          href="https://buymeacoffee.com/subashreevs"
          className='coffee-button flex items-center rounded-full px-4 py-2 text-sm font-semibold'
          variants={floatVariants}  // All icons move together
          initial="initial"
          animate="animate"
          whileHover={hoverVariants.hover}
        >
          <SiBuymeacoffee className='text-2xl text-amber-400 transition-all duration-300' />
          <p className='mx-1'>{copy.buyMeCoffee}</p>
        </motion.a>
      </div>
      
<div className="flex items-center gap-3 text-sm lg:ml-auto">
  <button
    type="button"
    onClick={onToggleTheme}
    className='theme-toggle nav-tip'
    data-tip={theme === 'dark' ? copy.lightMode : copy.darkMode}
    aria-label='Toggle color theme'
  >
    {theme === 'dark' ? <FaSun /> : <FaMoon />}
  </button>
  <button
    type="button"
    onClick={onToggleLocale}
    className='language-toggle'
    aria-label='Toggle language'
    title='Toggle language'
  >
    <FaGlobeAmericas className='text-base' />
    <span className={locale === "en" ? "text-emerald-200" : ""}>EN</span>
    <span className='opacity-40'>/</span>
    <span className={locale === "ta" ? "text-emerald-200" : ""}>{"\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"}</span>
  </button>
</div>

      {/* Social Icons moving together */}
      <div className='flex items-center justify-center gap-4 text-2xl lg:ml-4'>

        {/* Download Resume Button */}
        <motion.a
          href="/Subashree_Resume_2YOE.pdf"
          download="Subashree_Resume_2YOE.pdf"
          variants={floatVariants}  // Same floating effect
          initial="initial"
          animate="animate"
          whileHover={hoverVariants.hover}
          className="nav-tip"
          data-tip={copy.resume}
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

Navbar.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  locale: PropTypes.oneOf(['en', 'ta']).isRequired,
  onToggleLocale: PropTypes.func.isRequired,
};

export default Navbar;
