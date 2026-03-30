import { EXPERIENCES, UI_STRINGS } from '../constants'
import PropTypes from 'prop-types'
import {motion} from "framer-motion"
const Experience = ({ locale = 'en' }) => {
  const copy = UI_STRINGS[locale]
  return (
    <section className='section-shell' id='experience'>
      <div className='section-inner'>
        <motion.div 
        whileInView={{opacity:1 , y:0}}
        initial = {{opacity:0, y:-60}}
        transition={{duration: 0.8}}
        className='mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <div className='section-kicker'>{copy.experience}</div>
            <h2 className='section-title'>{copy.experienceTitle}</h2>
          </div>
          <p className='section-copy max-w-2xl text-sm leading-7 sm:text-base'>
            {copy.experienceCopy}
          </p>
        </motion.div>

        <div className='space-y-5'>
            {EXPERIENCES.map((experience, index) =>
            <div key={index} className='glass-card flex flex-wrap gap-6 rounded-[2rem] p-6 lg:justify-center'>
                <motion.div 
                whileInView={{opacity:1 , x:0}}
                initial = {{opacity:0, x:-60}}
                transition={{duration: 0.6}}
                className='w-full lg:w-1/4'>
                <p className="mb-3 text-sm uppercase tracking-[0.18em] text-emerald-200">
                {experience.year}
                </p>

                {experience.logo && (
                <motion.img
                    src={experience.logo}
                    alt={experience.company}
                    className="h-20 w-20 rounded-2xl object-contain bg-white p-1"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                />
                )}
                </motion.div>
                <motion.div 
                whileInView={{opacity:1 , x:0}}
                initial = {{opacity:0, x:60}}
                transition={{duration: 0.6}}
                className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='display-font mb-2 text-2xl font-bold text-white'>{experience.role}</h6>
                    <p className='mb-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>{experience.company}</p>
                    <p className='mb-5 text-sm leading-7 text-slate-300 sm:text-base'>{experience.description}</p>
                    {experience.technologies.map((tech, index) => (
                        <span className='mr-2 mt-2 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-200' key={index}>{tech}</span>
                    ))}
                </motion.div>
            </div>
            )}
        </div>
      </div>
    </section>
  )
}

export default Experience

Experience.propTypes = {
  locale: PropTypes.oneOf(['en', 'ta']),
}
