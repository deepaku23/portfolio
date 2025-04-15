import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Data Scientist and ML Engineer with 2+ years of industry experience, delivering end-to-end machine learning solutions across insurance and e-commerce. Proven success in predictive analytics, generative AI, and advanced analytics for high-impact business use cases.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Experienced in building custom ML models, statistical diagnostics, and MLOps pipelines with tools like MLflow, Docker, and Airflow. Adept at translating complex quantitative analysis into decision-support tools and collaborating cross-functionally to drive value-driven insights.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Passionate about open-source innovation, scalable systems, and deploying AI in real-world applications.
          </p>
        </div>
      </div>
    </section>
  )
} 