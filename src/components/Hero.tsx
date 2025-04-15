import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white md:text-6xl">
          Deepak Udayakumar
        </h1>
        <h2 className="mb-6 text-2xl font-medium text-gray-600 dark:text-gray-300 md:text-3xl">
          Data Scientist & ML Engineer
        </h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          Delivering end-to-end machine learning solutions with 2+ years of industry experience
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="https://github.com/deepakuday"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gray-800 p-3 text-white transition-colors hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <FaGithub className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/deepakuday"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 p-3 text-white transition-colors hover:bg-blue-500"
          >
            <FaLinkedin className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8">
          <a
            href="mailto:udayakumar.de@northeastern.edu"
            className="rounded-full bg-blue-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
} 