import { Code2, Lightbulb, Trophy, GraduationCap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap size={32} />,
      title: 'Education',
      description: 'BTech in Computer Science & Engineering',
    },
    {
      icon: <Code2 size={32} />,
      title: 'Focus Areas',
      description: 'DSA, Web Development, Problem Solving',
    },
    {
      icon: <Trophy size={32} />,
      title: 'Goals',
      description: 'Building impactful software solutions',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Passion',
      description: 'Learning new technologies & innovation',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate Computer Science student pursuing my BTech degree,
              with a strong foundation in programming and problem-solving. My
              journey in tech started with a curiosity about how things work,
              which quickly evolved into a deep interest in building efficient
              and elegant solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I specialize in Data Structures and Algorithms, having solved
              numerous problems on competitive programming platforms. I'm also
              deeply interested in web development, creating responsive and
              user-friendly applications using modern technologies.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Currently, I'm focused on expanding my skills in full-stack
              development and exploring opportunities in software engineering
              internships. I believe in continuous learning and staying updated
              with the latest industry trends.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Coding workspace"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg -z-10"></div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-blue-500 dark:text-teal-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
