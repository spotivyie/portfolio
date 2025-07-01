import React from 'react'

import { HERO_CONTENT } from '../constants/constants'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    }
})

const Hero = () => {
    return (
        <div className='border-b border-theme pb-10 lg:pb-35 mt-50'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
                        >
                            Eduarda Cardoso
                        </motion.h1 >
                        <motion.span 
                            variants={container(0.3)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'
                        >
                            Desenvolvedor Full Stack
                        </motion.span>
                        <motion.p
                            variants={container(0.6)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light'
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                    <div>
                        <motion.div
                            variants={container(0.9)}
                            initial="hidden"
                            animate="visible"
                            className='mb-4 flex space-x-4'
                        >
                            <a
                                href='https://github.com/spotivyie'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-2xl hover:text-violet-600 transition-colors'
                            >
                                <FaGithub />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/eduarda-cardoso-brandão/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-2xl hover:text-violet-600 transition-colors'
                            >
                                <FaLinkedin />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
