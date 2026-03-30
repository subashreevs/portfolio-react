import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HERO_CONTENT, HERO_CONTENT_TA, UI_STRINGS } from '../constants';
import profilepic from '../assets/subaProfile.jpeg';
import { AnimatePresence, motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

const titleSwapAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const Hero = ({ locale = 'en' }) => {
  const [isTitle1, setIsTitle1] = useState(true);
  const title1 = 'Software Engineer';
  const title2 = 'MS CS Grad Student';
  const copy = UI_STRINGS[locale];
  const heroContent = locale === 'ta' ? HERO_CONTENT_TA : HERO_CONTENT;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTitle1((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='section-shell' id='home'>
      <div className='section-inner'>
        <div className='grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]'>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='display-font max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl'
            >
              Subashree V S
            </motion.h1>

            <div className='mt-6 min-h-[3rem]'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={isTitle1 ? title1 : title2}
                  initial='hidden'
                  animate='visible'
                  exit='hidden'
                  variants={titleSwapAnimation}
                  className='text-xl font-semibold tracking-[0.18em] text-emerald-200 uppercase'
                >
                  {(isTitle1 ? title1 : title2).split('').map((letter, index) => (
                    <motion.span
                      key={`${letter}-${index}`}
                      custom={index}
                      variants={letterAnimation}
                      initial='hidden'
                      animate='visible'
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className='section-copy mt-6 max-w-2xl text-base leading-8 sm:text-lg'
            >
              {heroContent}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className='mt-10 flex flex-wrap gap-4'
            >
              <a href='/Subashree_Resume_2YOE.pdf' download='Subashree_Resume_2YOE.pdf' className='secondary-button'>
                {copy.resume}
                <FaDownload />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className='relative mx-auto w-full max-w-md'
          >
            <div className='absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-300/30 via-cyan-400/10 to-transparent blur-3xl' />
            <div className='glass-card relative overflow-hidden rounded-[2rem] p-4'>
              <div className='rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4'>
                <img
                  className='h-[420px] w-full rounded-[1.25rem] object-cover object-top'
                  src={profilepic}
                  alt='Subashree'
                />
              </div>
              <div className='mt-4 flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-slate-900/80 px-4 py-3'>
                <div>
                  <p className='text-sm uppercase tracking-[0.2em] text-emerald-200'>{copy.basedIn}</p>
                  <p className='display-font text-lg text-white'>Bloomington, Indiana</p>
                </div>
                <div className='flex gap-3 text-slate-300'>
                  <a className='nav-tip rounded-full border border-white/10 p-3 transition hover:border-emerald-300/40 hover:text-white' data-tip='LinkedIn' href='https://www.linkedin.com/in/subashreevs/' target='_blank' rel='noreferrer'>
                    <FaLinkedin />
                  </a>
                  <a className='nav-tip rounded-full border border-white/10 p-3 transition hover:border-emerald-300/40 hover:text-white' data-tip='GitHub' href='https://github.com/subashreevs/' target='_blank' rel='noreferrer'>
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

Hero.propTypes = {
  locale: PropTypes.oneOf(['en', 'ta']),
};
