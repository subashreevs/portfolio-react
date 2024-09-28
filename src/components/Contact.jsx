import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_2k90xw9', 'template_qws2i4k', templateParams, 'FRBMIklPm-xZ24rKl')
      .then((response) => {
        setIsSubmitting(false);
        setSubmissionStatus('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setIsSubmitting(false);
        setSubmissionStatus('Oops! Something went wrong.');
      });
  };

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'
      >
        Contact Me
      </motion.h2>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          type='text'
          name='name'
          placeholder='Your Name'
          value={formData.name}
          onChange={handleChange}
          required
          className='mb-4 w-full max-w-md rounded border border-neutral-900 p-2 text-neutral-900'
        />
        <motion.input
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          type='email'
          name='email'
          placeholder='Your Email'
          value={formData.email}
          onChange={handleChange}
          required
          className='mb-4 w-full max-w-md rounded border border-neutral-900 p-2 text-neutral-900'
        />
        <motion.textarea
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          name='message'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          required
          className='mb-4 w-full max-w-md rounded border border-neutral-900 p-2 text-neutral-900'
        />
        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full max-w-md rounded bg-purple-600 p-2 text-white hover:bg-purple-500'
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {submissionStatus && (
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='mt-4 text-center text-purple-100'
        >
          {submissionStatus}
        </motion.p>
      )}

      {/* Reach Out Directly Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mt-15 flex flex-col items-center'
      >
        <h3 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-3xl'>
        Reach Out Directly
        </h3>
        <p>📞 <span className='text-purple-500'>+1 9309044770</span></p>
        <p>📍 <span className='text-purple-500'>3209 E 10th St, Bloomington, Indiana - 47408, USA</span></p>
        <p>✉️ <span className='text-purple-500'>subavenk@iu.edu</span></p>
      </motion.div>
    </div>
  );
};

export default ContactForm;
