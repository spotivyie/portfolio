import React from 'react'
import aboutImg from '../projects/image1.jpeg'

import { ABOUT_TEXT } from '../constants/constants'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className='border-b border-theme py-20 lg:py-35'>
            <h1 className='mb-20 text-center text-4xl' id='about'>Sobre mim</h1>
            <div className='flex flex-wrap lg:flex-nowrap gap-10'>
                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                    className='w-full lg:w-1/2 lg:p-8'
                >
                    <div className='flex items-center lg:justify-end justify-center'>
                        <img className="w-96 h-auto rounded-2xl" src={aboutImg} alt="aboutImg" />
                    </div>
                </motion.div>
                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.5}}
                    className='w-full lg:w-1/2'
                >
                    <div className="flex flex-col items-center lg:items-baseline justify-center lg:justify-start lg:my-14">
                        {ABOUT_TEXT.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className="my-2 max-w-md">{paragraph}</p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
