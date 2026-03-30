import { EDUCATION, UI_STRINGS } from '../constants';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Education = ({ locale = 'en' }) => {
  const copy = UI_STRINGS[locale];
  return (
    <section className='section-shell' id='education'>
      <div className='section-inner'>
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.8 }}
          className='mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'
        >
          <div>
            <div className='section-kicker'>{copy.education}</div>
            <h2 className='section-title'>{copy.educationTitle}</h2>
          </div>
          <p className='section-copy max-w-2xl text-sm leading-7 sm:text-base'>
            {copy.educationCopy}
          </p>
        </motion.div>

      <div className='flex flex-col items-center gap-5'>
        {EDUCATION.map((education, index) => (
          <motion.div 
            key={index} 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className='glass-card w-full max-w-4xl rounded-[2rem] p-6 shadow-lg'
          >
           <div className="flex items-start gap-4">
  {education.logo && (
    <motion.img
      src={education.logo}
      alt={education.institution}
      className="h-14 w-14 shrink-0 rounded-2xl object-contain bg-white p-1"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    />
  )}

  <div className="flex flex-col">
    <p className="text-xs uppercase tracking-[0.18em] text-emerald-200 leading-none">
      {education.year}
    </p>

    <h6 className="display-font mt-2 text-2xl font-bold text-white leading-tight">
      {education.degree}
    </h6>

    <p className="mt-2 text-sm italic text-slate-300 leading-snug">
      {education.institution}
    </p>
  </div>
</div>

            <p className='pt-5 text-sm leading-7 text-slate-300'>{education.coursework}</p>
            {education.cgpa && (
              <p className='mt-3 text-sm text-slate-300'>
                CGPA: <span className='text-emerald-200'>{education.cgpa}</span>
              </p>
            )}
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Education;

Education.propTypes = {
  locale: PropTypes.oneOf(['en', 'ta']),
};
