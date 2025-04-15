import React from 'react'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'R', 'SQL', 'MATLAB']
  },
  {
    title: 'Applied Data Science',
    skills: [
      'Predictive Modeling',
      'Generative AI',
      'Advanced Analytics',
      'Statistical Diagnostics',
      'Dimensionality Reduction',
      'Clustering',
      'Supervised & Unsupervised Learning',
      'Neural Networks (ANN, CNN, RNN)',
      'Transformers (BERT, GPT)',
      'Prompt Engineering'
    ]
  },
  {
    title: 'MLOps',
    skills: [
      'MLflow',
      'Docker',
      'DVC',
      'Airflow',
      'CI/CD',
      'Prometheus',
      'Drift Detection',
      'Model Compression',
      'AWS(SageMaker, S3, Lambda, ECR, EKS, RDS, EC2)'
    ]
  },
  {
    title: 'Toolkits/Frameworks',
    skills: [
      'NumPy',
      'Pandas',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Hugging Face',
      'Vector Databases',
      'LangChain'
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-50 p-6 shadow-lg dark:bg-gray-800"
            >
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {skill}
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