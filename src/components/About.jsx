import React from 'react'
import aboutpic from '../assets/subaAbout.jpeg'
import aboutgif from '../assets/subaGif.gif'
import { ABOUT_TEXT } from '../constants'
import {motion} from "framer-motion"
import { HiOutlineSparkles } from "react-icons/hi2";
// or
import { FaPlayCircle } from "react-icons/fa";


const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{opacity:1 , y:0}}
        initial = {{opacity:0, y:-100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>About Me</motion.h2>
        <div className='flex flex-wrap'>
            <motion.div 
            whileInView = {{opacity: 1, x:0}}
            initial={{opacity:0, x: -100}}
            transition={{duration: 1}}
            className='w-full lg:w-1/2 lg:p-8'>
            <div className="relative group rounded-lg overflow-hidden cursor-pointer">
  {/* Hint chip (visible by default, hides on hover) */}
  <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full
                  bg-black/45 backdrop-blur-md px-3 py-1.5
                  text-xs font-medium text-purple-200
                  border border-purple-500/30
                  shadow-[0_0_18px_rgba(147,51,234,0.25)]
                  transition-opacity duration-300
                  group-hover:opacity-0">
    <span className="hidden sm:inline">Hover</span>
    <span className="text-base leading-none">👆🏻</span>
    <span className="sm:hidden">Animate</span>
  </div>

  {/* Static image */}
  <img
    src={aboutpic}
    alt="Subashree"
    className="rounded-lg transition-opacity duration-300 group-hover:opacity-0"
  />

  {/* GIF */}
  <img
    src={aboutgif}
    alt="Subashree GIF"
    className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  />
</div>


            </motion.div>

            
            <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className='w-full lg:w-1/2' >
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-20 px-8'>{ABOUT_TEXT}</p>
                </div>  
            </motion.div>
        </div>
    </div>
  )
}

export default About