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
            <p className='mb-2 text-sm text-neutral-400'>{education.year}</p>
            <h6 className='font-semibold mb-1 text-purple-600'>{education.degree}</h6>
            <p className='mb-2 text-sm italic text-neutral-300'>{education.institution}</p>
            <p className='text-sm text-neutral-400'>{education.coursework}</p>
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
