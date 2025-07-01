import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-start py-10 px-8 border-t border-theme'>
            <div className='text-center md:text-left'>
                &copy; {new Date().getFullYear()} Eduarda Cardoso Brandão. Todos os direitos reservados.
            </div>
        </div>
    )
}

export default Footer
