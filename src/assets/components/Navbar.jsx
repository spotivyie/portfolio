import React, { useCallback, useState } from 'react'

import ThemeToggle from './ThemeToggle' 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [])

    return (
        <div className='fixed top-0 left-0 w-full z-50 navbar-theme py-4 shadow-md'>
            <div className='max-w-7xl mx-auto flex items-center justify-end gap-4 px-6 text-2xl'>
                {/* Navegação Desktop */}
                <div className='m-8 md:flex items-center justify-center gap-4 text-2xl hidden'>
                    <a href="#about" className='mr-7'>Sobre</a>
                    <a href="#tecnology" className='mr-7'>Tecnologias</a>
                    <a href="#project" className='mr-7'>Projetos</a>
                    {/* <a href="#contact" className='mr-7'>Contato</a> */}
                    <ThemeToggle />
                </div>

                {/* Botão Hamburguer Mobile */}
                <button className='md:hidden p-2 top-6 right-6 absolute' onClick={toggleOpen}>
                    <div className='w-6 h-5 flex flex-col justify-between'>
                        <span className='w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all'></span>
                        <span className='w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all'></span>
                        <span className='w-full h-0.5 bg-gray-600 dark:bg-gray-400 transition-all'></span>
                    </div>
                </button>

                {/* Menu Mobile */}
                {isOpen && (
                    <div className='fixed inset-0 bg-theme flex flex-col items-center justify-center text-3xl z-40'>
                        <button
                            className='absolute top-6 right-8 text-4xl'
                            onClick={toggleOpen}
                            aria-label="Fechar menu"
                        >
                            ×
                        </button>
                        <div className='flex flex-col items-center gap-10'>
                            <a href="#about" onClick={toggleOpen}>Sobre</a>
                            <a href="#tecnology" onClick={toggleOpen}>Tecnologias</a>
                            <a href="#project" onClick={toggleOpen}>Projetos</a>
                            {/* <a href="#contact" onClick={toggleOpen}>Contato</a> */}
                            <ThemeToggle />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
