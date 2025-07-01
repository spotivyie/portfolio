import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Modal from './Modal'
import { PROJECTS } from '../constants/constants'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <div className='border-b border-theme pb-35 pt-35'>
            <motion.h1  
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='mb-20 text-center text-4xl'
                id='project'
            >
                Projetos
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-theme lg:p-6 rounded-md shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded object-cover w-full h-48 mb-4"
                        />
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="mb-4">{project.summary}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="rounded technologies-theme px-2 py-1 text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-2">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-theme transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FaExternalLinkAlt /> Ver Projeto
                                </a>
                            )}

                            {project.github && project.github.map(({ type, url }) => (
                                <a
                                    key={type}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-theme transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FaGithub /> {type}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* Modal */}
            {selectedProject && (
                <Modal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    )
}

export default Projects
