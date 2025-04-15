import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            I'm always open to discussing new opportunities, innovative projects, or potential collaborations.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:udayakumar.de@northeastern.edu"
              className="flex items-center space-x-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <FaEnvelope className="h-6 w-6" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/deepakuday"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <FaGithub className="h-6 w-6" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/deepakuday"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <FaLinkedin className="h-6 w-6" />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="mt-12">
            <p className="text-gray-600 dark:text-gray-300">
              Boston, Massachusetts, USA
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Available to work from April 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 