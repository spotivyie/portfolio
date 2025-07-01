import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Modal = ({ project, onClose }) => {
    if (!project) return null

    const isStreamable = project.video?.includes('streamable.com')

    let streamableId = ''
    if (isStreamable) {
        const match = project.video.match(/streamable\.com\/(\w+)/)
        if (match) streamableId = match[1]
    }

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] p-4 overflow-y-auto"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-theme rounded-lg p-4 sm:p-6 w-full max-w-2xl shadow-lg relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                    aria-label="Fechar"
                >
                    &times;
                </button>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">{project.title}</h2>
                {project.video && (
                    <div className="w-full mb-4">
                        {isStreamable ? (
                            <iframe
                                src={`https://streamable.com/e/${streamableId}`}
                                width="100%"
                                height="360"
                                frameBorder="0"
                                allowFullScreen
                                className="rounded h-52 sm:h-80 w-full object-contain"
                                title={project.title}
                            ></iframe>
                        ) : (
                            <video
                                controls
                                className="w-full h-auto rounded max-h-[60vh] object-contain"
                            >
                                <source src={project.video} type="video/mp4" />
                                Seu navegador não suporta a tag de vídeo.
                            </video>
                        )}
                    </div>
                )}
                <p className="text-sm sm:text-base mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="technologies-theme rounded px-2 py-1 text-xs sm:text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap gap-4">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-theme transition-colors"
                        >
                            <FaExternalLinkAlt /> Ver Projeto
                        </a>
                    )}
                {project.github &&
                    project.github.map(({ type, url }) => (
                    <a
                        key={type}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-theme transition-colors"
                    >
                        <FaGithub /> {type}
                    </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Modal
