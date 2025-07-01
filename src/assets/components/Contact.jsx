import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="fixed bottom-6 left-0 w-full z-50 pointer-events-none">
            <div className="max-w-7xl mx-auto px-6 flex justify-end pointer-events-auto">
                <a
                    href="https://wa.me/5566999043964"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contato via WhatsApp"
                    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300"
                >
                    <FaWhatsapp className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};

export default Contact;










{/* <div className='border-b border-theme pb-20'>
    <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className='my-10 pb-8 text-center text-4xl'
        id='contact'
    >
        Entre em contato
    </motion.h1>
    <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1}} 
    >
        <div className='flex flex-wrap items-center justify-center gap-10'>
            <div className='p-6 rounded-lg text-center'>
                <div className='w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <FaWhatsapp className='text-4xl'/>
                </div>
                <h3 className='text-xl font-bold mb-2'>WhatsApp</h3>
                <a 
                    href="https://wa.me/5566999043964" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-gray-600 dark:text-gray-400 hover:text-violet-600 transition-colors'
                >
                    {CONTACT.phone}
                </a>
            </div> 
            <div className='p-6 rounded-lg text-center'>
                <div className='w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <MdOutlineEmail className='text-4xl'/>
                </div>
                <h3 className='text-xl font-bold mb-2'>Email</h3>
                <a 
                    className='text-gray-600 dark:text-gray-400 hover:text-violet-600 transition-colors'
                    href={`mailto:${CONTACT.email}`}
                >
                    {CONTACT.email}
                </a>
            </div> 
        </div>
    </motion.div>
</div> */}