import React from 'react'
import { FaGithub } from 'react-icons/fa'

interface ProjectItem {
  title: string
  description: string
  technologies: string[]
  github?: string
  link?: string
}

const projects: ProjectItem[] = [
  {
    title: 'medify AI',
    description: 'Open-source medical AI assistant deployed in AWS, built using fine-tuned LLAMA models for generative AI-based symptom intake and doctor report generation.',
    technologies: ['AWS', 'LLAMA', 'MLOps', 'Docker', 'Lambda'],
    github: 'https://github.com/yourusername/medify-ai'
  },
  {
    title: 'CodeSage',
    description: 'Code Optimization and Security Tool with LLMs - Built an open-source tool by fine-tuning LLAMA and Mistral models for secure code generation and optimization.',
    technologies: ['LLMs', 'GitHub Actions', 'Python', 'Security'],
    github: 'https://github.com/yourusername/codesage'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
          Academic Projects
        </h2>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:bg-gray-900"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                )}
              </div>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 