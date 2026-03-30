import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { CONTACT, UI_STRINGS } from '../constants';
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';

const ContactForm = ({ locale = 'en' }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const copy = UI_STRINGS[locale];

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
      .then(() => {
        setIsSubmitting(false);
        setSubmissionStatus('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error('EmailJS send failed:', error);
        setIsSubmitting(false);
        setSubmissionStatus(error?.text || 'Oops! Something went wrong.');
      });
  };

  return (
    <section className='section-shell mb-20' id='contact'>
      <div className='section-inner'>
        <div className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='section-kicker'>{copy.contactMe}</div>
            <h2 className='section-title max-w-lg'>{copy.contactMe}</h2>

            <div className='mt-8 grid gap-4'>
              <a href={`mailto:${CONTACT.email}`} className='glass-card flex items-center gap-4 p-4 transition hover:border-emerald-300/35'>
                <span className='rounded-2xl bg-emerald-300/10 p-3 text-emerald-200'><FaEnvelope /></span>
                <div>
                  <p className='text-xs uppercase tracking-[0.2em] text-slate-400'>{copy.email}</p>
                  <p className='mt-1 text-white'>{CONTACT.email}</p>
                </div>
              </a>

              <a href={`tel:${CONTACT.phoneNo.replaceAll(' ', '')}`} className='glass-card flex items-center gap-4 p-4 transition hover:border-cyan-300/35'>
                <span className='rounded-2xl bg-cyan-300/10 p-3 text-cyan-200'><FaPhoneAlt /></span>
                <div>
                  <p className='text-xs uppercase tracking-[0.2em] text-slate-400'>{copy.phone}</p>
                  <p className='mt-1 text-white'>{CONTACT.phoneNo}</p>
                </div>
              </a>

              <div className='glass-card flex items-center gap-4 p-4'>
                <span className='rounded-2xl bg-amber-300/10 p-3 text-amber-200'><FaLocationArrow /></span>
                <div>
                  <p className='text-xs uppercase tracking-[0.2em] text-slate-400'>{copy.location}</p>
                  <p className='mt-1 text-white'>{CONTACT.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='glass-card rounded-[2rem] p-6'
          >
            <div className='mb-6 flex items-center justify-between gap-4'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200'>{copy.sendMessage}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <input
                type='text'
                name='name'
                placeholder={copy.yourName}
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40'
              />
              <input
                type='email'
                name='email'
                placeholder={copy.yourEmail}
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40'
              />
              <textarea
                name='message'
                placeholder={copy.yourMessage}
                value={formData.message}
                onChange={handleChange}
                required
                rows='6'
                className='w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-300/40'
              />
              <button
                type='submit'
                disabled={isSubmitting}
                className='primary-button w-full border-0'
              >
                {isSubmitting ? copy.sending : copy.send}
              </button>
            </form>

            {submissionStatus && (
              <motion.p
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className='mt-4 text-sm text-emerald-200'
              >
                {submissionStatus}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Reach Out Directly Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='hidden'
      >
        <motion.h3 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-10 text-center text-3xl'
        >
          Reach Out Directly
        </motion.h3>
        
        <div className='flex flex-col items-center text-center'>
          <p className='mb-2'>
            <span role='img' aria-label='phone'>📞</span> 
            <span className='text-purple-500'> +1 (812) 318-0901</span>
          </p>
          <p className='mb-2'>
            <span role='img' aria-label='location'>📍</span> 
            <span className='text-purple-500'> 720 S College Mall Rd, Bloomington</span>
          </p>
          <p className='mb-2'>
            <span className='text-purple-500'>Indiana 47401, USA</span>
          </p>
          <p className='mb-2'>
            <span role='img' aria-label='email'>✉️</span> 
            <span className='text-purple-500'> subavenk@iu.edu | subashree.sundharesan@gmail.com</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  locale: PropTypes.oneOf(['en', 'ta']),
};
