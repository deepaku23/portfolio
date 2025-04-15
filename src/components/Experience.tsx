import React from 'react'

interface ExperienceItem {
  company: string
  role: string
  period: string
  achievements: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: 'Liberty Mutual Insurance, Solaria Labs',
    role: 'Data Scientist',
    period: 'Jan 2024 - Jun 2024',
    achievements: [
      'Delivered predictive analytics models using fine-tuned cross-encoders for business classification',
      'Built a generative AI pipeline with Mistral 7B to summarize unstructured business descriptions',
      'Engineered synthetic data generation workflows using generative AI',
      'Applied advanced analytics and model retraining strategies improving classification performance by 15%'
    ]
  },
  {
    company: 'Mindtree Ltd',
    role: 'Data Scientist',
    period: 'Aug 2021 - Dec 2022',
    achievements: [
      'Built a personalized recommendation engine combining collaborative filtering and content-based methods',
      'Developed customer segmentation models to support quantitative decision-making',
      'Led cross-functional collaboration with marketing and e-commerce teams for A/B testing',
      'Containerized solutions with Docker and implemented MLOps practices including DVC and CI/CD'
    ]
  },
  {
    company: 'Northeastern University',
    role: 'Teaching Assistant – Foundations of Data Science',
    period: 'Aug 2024 - Present',
    achievements: [
      'Supported 250+ graduate students in mastering AI, ML, and data science concepts',
      'Specialized in explaining complex ML techniques in NLP, generative AI, and predictive modeling'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
          Professional Experience
        </h2>
        <div className="mx-auto max-w-4xl">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900"
            >
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                {exp.company}
              </h3>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-lg font-medium text-blue-600 dark:text-blue-400">
                  {exp.role}
                </span>
                <span className="text-gray-500 dark:text-gray-400">•</span>
                <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 