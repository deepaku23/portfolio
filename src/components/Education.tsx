import React from 'react'

interface EducationItem {
  institution: string
  degree: string
  period: string
  gpa: string
  coursework: string[]
}

const education: EducationItem[] = [
  {
    institution: 'Northeastern University, Khoury College of Computer Sciences',
    degree: 'Master of Science (MS), Data Science',
    period: 'Jan 2023 - Apr 2025',
    gpa: 'GPA: 4.0/4.0',
    coursework: [
      'MLOps',
      'LLM',
      'Supervised Machine Learning',
      'Deep Learning',
      'Data Mining',
      'Data Processing and Management'
    ]
  },
  {
    institution: 'Nitte Meenakshi Institute of Technology',
    degree: 'Bachelor of Engineering, Electronics and Communication Engineering',
    period: 'Aug 2017 - Jul 2021',
    gpa: 'GPA: 8.92/10',
    coursework: [
      'Machine Learning',
      'Linear Algebra',
      'Pattern Recognition',
      'Python Programming',
      'Data Structures',
      'Image Processing'
    ]
  }
]

export default function Education() {
  return (
    <section id="education" className="bg-white py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="mx-auto max-w-4xl">
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-12 rounded-lg bg-gray-50 p-6 shadow-lg dark:bg-gray-800"
            >
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                {edu.institution}
              </h3>
              <div className="mb-4">
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                  {edu.degree}
                </p>
                <div className="mt-2 flex flex-wrap gap-4 text-gray-600 dark:text-gray-300">
                  <span>{edu.period}</span>
                  <span>•</span>
                  <span>{edu.gpa}</span>
                </div>
              </div>
              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">
                  Key Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 