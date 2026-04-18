import { useEffect, useState, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'C++', level: 90, category: 'Programming' },
    { name: 'Data Structures & Algorithms', level: 85, category: 'Programming' },
    { name: 'Python', level: 80, category: 'Programming' },
    { name: 'HTML5', level: 95, category: 'Web Development' },
    { name: 'CSS3', level: 90, category: 'Web Development' },
    { name: 'JavaScript', level: 85, category: 'Web Development' },
    { name: 'React', level: 75, category: 'Web Development' },
    { name: 'Git & GitHub', level: 85, category: 'Tools' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels across different domains.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                {category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mb-2">
              150+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              DSA Problems Solved
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Projects Completed
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mb-2">
              3+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Certifications
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mb-2">
              2+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Years Learning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
