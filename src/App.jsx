import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'
import { motion } from "framer-motion";

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem('theme') || 'dark';
  });
  const [locale, setLocale] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return window.localStorage.getItem('locale') || 'en';
  });

  const floatVariants = (duration) => ({
    initial: { y: -6 },
    animate: {
      y: [6, -6],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', locale === 'ta' ? 'ta' : 'en');
    window.localStorage.setItem('locale', locale);
  }, [locale]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleLocale = () => {
    setLocale((currentLocale) => (currentLocale === 'en' ? 'ta' : 'en'));
  };

  return (
  <div className={`app-shell theme-${theme} overflow-x-hidden antialiased selection:bg-emerald-200 selection:text-slate-950`}>
    <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
      <div className='app-glow app-glow-left absolute left-[-12rem] top-10 h-72 w-72 rounded-full blur-3xl' />
      <div className='app-glow app-glow-right absolute right-[-8rem] top-32 h-64 w-64 rounded-full blur-3xl' />
      <div className='app-glow app-glow-bottom absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl' />
    </div>

    <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
      <Navbar theme={theme} onToggleTheme={toggleTheme} locale={locale} onToggleLocale={toggleLocale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Education locale={locale} />
      <Technologies locale={locale} />
      <Experience locale={locale} />
      <Projects locale={locale} />
      <Contact locale={locale} />

      <motion.a
        href="https://suba-ai-assistant.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="ai-chat-float skiptranslate"
        variants={floatVariants(3)}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        💬 AI Assistant
      </motion.a>

    </div>

  </div>

  )
}

export default App
