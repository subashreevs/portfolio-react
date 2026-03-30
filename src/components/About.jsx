import aboutpic from '../assets/subaAbout.jpeg'
import aboutgif from '../assets/subaGif.gif'
import { ABOUT_TEXT, ABOUT_TEXT_TA, UI_STRINGS } from '../constants'
import PropTypes from 'prop-types'
import {motion} from "framer-motion"

const About = ({ locale = 'en' }) => {
  const copy = UI_STRINGS[locale]
  const aboutText = locale === 'ta' ? ABOUT_TEXT_TA : ABOUT_TEXT
  return (
    <section className='section-shell' id='about'>
      <div className='section-inner'>
        <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr]'>
          <motion.div
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x: -80}}
            transition={{duration: 0.8}}
          >
            <div className='section-kicker'>{copy.aboutMe}</div>
            <h2 className='section-title max-w-lg'>{copy.aboutMe}</h2>
            <p className='section-copy mt-6 max-w-xl text-base leading-8 sm:text-lg'>{aboutText}</p>
          </motion.div>

          <motion.div
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x:80}}
            transition={{duration:0.8}}
            className='grid gap-5 sm:grid-cols-2'
          >
            <div className='glass-card group relative overflow-hidden rounded-[2rem] p-3 sm:col-span-2'>
              <div className='absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200'>
                Hover to reveal
              </div>
              <img
                src={aboutpic}
                alt='Subashree'
                className='h-full min-h-[320px] w-full rounded-[1.5rem] object-contain bg-slate-950/40 transition duration-500 group-hover:opacity-0'
              />
              <img
                src={aboutgif}
                alt='Subashree animated portrait'
                className='absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-[1.5rem] bg-slate-950/40 object-contain opacity-0 transition duration-500 group-hover:opacity-100'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

About.propTypes = {
  locale: PropTypes.oneOf(['en', 'ta']),
}
