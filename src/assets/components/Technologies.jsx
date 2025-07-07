import React from 'react'

import { RiReactjsLine } from 'react-icons/ri'
import { FaNode } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiJava } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-theme py-20 lg:py-35'>
            <motion.h1 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className='mb-20 text-center text-4xl'
                id='tecnology'
            >
                Tecnologias
            </motion.h1>
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5}}
                className='flex flex-wrap items-center justify-center gap-4'
            >
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-theme p-4'
                >
                    <RiReactjsLine className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-theme p-4'
                >
                    <TbBrandNextjs className='text-7xl'/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-theme p-4'
                >
                    <DiJavascript1 className='text-7xl text-yellow-300'/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-theme p-4'
                >
                    <SiMongodb className='text-7xl text-green-500'/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-theme p-4'
                >
                    <FaNode className='text-7xl text-green-500'/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-theme p-4'
                >
                    <DiJava className='text-7xl text-cyan-300'/>
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-theme p-4'
                >
                    <BiLogoPostgresql className='text-7xl text-sky-700'/>
                </motion.div>
            </motion.div >
        </div>
    )
}

export default Technologies
