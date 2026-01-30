import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>
        Education
      </motion.h2>
      
      <div className='flex flex-col items-center'>
        {EDUCATION.map((education, index) => (
          <motion.div 
            key={index} 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className='mb-8 w-full max-w-3xl rounded border border-neutral-900 bg-neutral-800 p-4 shadow-lg'
          >
           <div className="flex items-start gap-4">
  {education.logo && (
    <motion.img
      src={education.logo}
      alt={education.institution}
      className="h-14 w-14 shrink-0 rounded-lg object-contain bg-white p-0.5"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    />
  )}

  <div className="flex flex-col">
    <p className="text-sm text-neutral-400 leading-none">
      {education.year}
    </p>

    <h6 className="mt-1 font-semibold text-purple-600 leading-tight">
      {education.degree}
    </h6>

    <p className="mt-1 text-sm italic text-neutral-300 leading-snug">
      {education.institution}
    </p>
  </div>
</div>

            <p className='text-sm text-neutral-400 pt-4'>{education.coursework}</p>
            {education.cgpa && (
              <p className='text-sm text-neutral-400'>
                CGPA: <span className='text-purple-100'>{education.cgpa}</span>
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
