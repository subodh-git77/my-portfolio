import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Web Development Intern (Project-Based Experience)',
      company: 'Self / Academic Internship Simulation',
      period: 'Jun 2024 - Aug 2024',
      location: 'Remote',
      description: [
        'Developed responsive web applications using React and JavaScript',
        'Built and structured reusable UI components with clean architecture principles',
        'Worked with REST APIs for data integration and frontend-backend communication',
        'Practiced code optimization techniques and improved UI performance',
        'Followed version control practices using Git for project management',
      ],
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Git', 'REST APIs'],
    },
    {
      title: 'Open Source & Project Development',
      company: 'GitHub / Personal Projects',
      period: 'Jan 2024 - Present',
      location: 'Remote',
      description: [
        'Built multiple software projects involving AI, backend systems, and web applications',
        'Worked on Python and JavaScript-based applications for real-world problem solving',
        'Improved code structure, debugging, and modular design practices',
        'Explored collaborative development workflows using Git and GitHub',
      ],
      technologies: ['JavaScript', 'Python', 'Git', 'GitHub'],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My practical experience through internships, projects, and software development work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-blue-500 dark:border-teal-400 last:pb-0"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 dark:bg-teal-400 border-4 border-white dark:border-gray-800"></div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-teal-400 font-medium mb-2">
                      <Briefcase size={18} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {exp.location}
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 dark:text-gray-400 flex items-start"
                    >
                      <span className="text-blue-500 dark:text-teal-400 mr-2 mt-1">
                        ▹
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-teal-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
