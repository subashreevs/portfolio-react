import { motion } from "framer-motion"
import PropTypes from 'prop-types'
import { UI_STRINGS } from '../constants'
import { RiAngularjsLine } from 'react-icons/ri'
import { RiReactjsLine } from 'react-icons/ri'
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiGit } from "react-icons/si";

import { SiPython } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiOpenai } from "react-icons/si";


const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"

        }
    }
})

const Technologies = ({ locale = 'en' }) => {
  const copy = UI_STRINGS[locale]
  return (
    <section className='section-shell' id='technologies'>
      <div className='section-inner'>
        <motion.div
          whileInView={{opacity:1 , y:0}}
          initial = {{opacity:0, y:-60}}
          transition={{duration: 0.8}}
          className='mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'
        >
          <div>
            <div className='section-kicker'>{copy.technologies}</div>
            <h2 className='section-title'>{copy.technologiesTitle}</h2>
          </div>
          <p className='section-copy max-w-2xl text-sm leading-7 sm:text-base'>
            {copy.technologiesCopy}
          </p>
        </motion.div>

        <motion.div whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -60}}
        transition={{duration:0.8}}
        className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
            
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='glass-card flex items-center justify-center rounded-[1.5rem] p-5'>
                <RiAngularjsLine className='text-7xl text-red-600' />
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='glass-card flex items-center justify-center rounded-[1.5rem] p-5'>
                <SiSpringboot className='text-7xl text-lime-500' />
            </motion.div>
            <motion.div 
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className='glass-card flex items-center justify-center rounded-[1.5rem] p-5'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='glass-card flex items-center justify-center rounded-[1.5rem] p-5'>
                <BiLogoPostgresql className='text-7xl text-sky-700' />
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='glass-card flex items-center justify-center rounded-[1.5rem] p-5'>
                <SiMongodb  className='text-7xl text-green-500' />
            </motion.div>

            <motion.div 
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className='glass-card flex items-center justify-center rounded-[1.5rem] p-5'>
                <SiMysql  className='text-7xl text-sky-600' />
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='glass-card flex items-center justify-center rounded-[1.5rem] p-5'>
                <SiJavascript  className='text-7xl text-yellow-300' />
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='glass-card flex items-center justify-center rounded-[1.5rem] p-5'>
                <SiGit  className='text-7xl text-orange-600' />
            </motion.div>

            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="glass-card flex items-center justify-center rounded-[1.5rem] p-5"
            >
            <SiPython className="text-7xl text-yellow-300" />
            </motion.div>

            <motion.div
            variants={iconVariants(2.8)}
            initial="initial"
            animate="animate"
            className="glass-card flex items-center justify-center rounded-[1.5rem] p-5"
            >
            <SiFastapi className="text-7xl text-emerald-400" />
            </motion.div>

            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="glass-card flex items-center justify-center rounded-[1.5rem] p-5"
            >
            <SiDocker className="text-7xl text-sky-500" />
            </motion.div>

            <motion.div
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
            className="glass-card flex items-center justify-center rounded-[1.5rem] p-5"
            >
            <FaAws className="text-7xl text-orange-400" />
            </motion.div>

            <motion.div
            variants={iconVariants(4.2)}
            initial="initial"
            animate="animate"
            className="glass-card flex items-center justify-center rounded-[1.5rem] p-5"
            >
            <SiNodedotjs className="text-7xl text-green-400" />
            </motion.div>

            <motion.div
            variants={iconVariants(2.6)}
            initial="initial"
            animate="animate"
            className="glass-card flex items-center justify-center rounded-[1.5rem] p-5"
            >
            <SiTypescript className="text-7xl text-blue-500" />
            </motion.div>

            <motion.div
            variants={iconVariants(3.7)}
            initial="initial"
            animate="animate"
            className="glass-card flex items-center justify-center rounded-[1.5rem] p-5"
            >
            <SiPytorch className="text-7xl text-orange-500" />
            </motion.div>

            <motion.div
            variants={iconVariants(4.4)}
            initial="initial"
            animate="animate"
            className="glass-card flex items-center justify-center rounded-[1.5rem] p-5"
            >
            <SiOpenai className="text-7xl text-neutral-200" />
            </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Technologies

Technologies.propTypes = {
  locale: PropTypes.oneOf(['en', 'ta']),
}
