import { PROJECTS, UI_STRINGS } from '../constants';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Projects = ({ locale = 'en' }) => {
  const copy = UI_STRINGS[locale];
  return (
    <section className='section-shell' id='projects'>
      <div className='section-inner'>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.6 }}
          className='mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'
        >
          <div>
            <div className='section-kicker'>{copy.projects}</div>
            <h2 className='section-title max-w-2xl'>{copy.projects}</h2>
          </div>
        </motion.div>

        <div className='grid gap-6 lg:grid-cols-2'>
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className={`glass-card group overflow-hidden rounded-[2rem] p-4 ${
                index < 2 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`grid gap-5 ${index < 2 ? 'lg:grid-cols-[0.95fr_1.05fr] lg:items-center' : ''}`}>
                <div className='overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                      index < 2 ? 'h-[280px]' : 'h-56'
                    }`}
                  />
                </div>

                <div className='flex h-full flex-col'>
                  <div className='flex items-start justify-between gap-4'>
                    <div>
                      <h3 className='display-font mt-2 text-2xl font-bold text-white'>{project.title}</h3>
                    </div>
                    <span className='rounded-full border border-white/10 p-3 text-slate-200 transition group-hover:border-emerald-300/40 group-hover:text-white'>
                      <FaArrowUpRightFromSquare />
                    </span>
                  </div>

                  <p className='mt-4 flex-1 text-sm leading-7 text-slate-300 sm:text-base'>{project.description}</p>

                  <div className='mt-5 flex flex-wrap gap-2'>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={`${project.title}-${tech}-${techIndex}`}
                        className='rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-200'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

Projects.propTypes = {
  locale: PropTypes.oneOf(['en', 'ta']),
};
