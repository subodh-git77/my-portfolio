import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  description: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: 'HTML5 Certification',
      issuer: 'Infosys Springboard',
      date: 'March 2024',
      credentialId: 'HTML5-2024-001',
      link: '#',
      description:
        'Comprehensive certification covering HTML5 semantics, forms, multimedia, and web standards.',
    },
    {
      title: 'Python for Data Science',
      issuer: 'Coursera / IBM',
      date: 'February 2024',
      credentialId: 'PY-DS-2024-045',
      link: '#',
      description:
        'In-depth course on Python programming, NumPy, Pandas, data visualization, and data analysis techniques.',
    },
    {
      title: 'Generative AI: Introduction & Applications',
      issuer: 'Coursera',
      date: 'January 2026',
      credentialId: '#',
      link: '#',
      description:
        'Foundation course covering network security, cryptography, threat detection, and best security practices.',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'December 2023',
      credentialId: 'JS-DSA-2023-234',
      link: '#',
      description:
        'Advanced certification focusing on ES6+, functional programming, and algorithm implementation in JavaScript.',
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">& Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and courses that validate my skills and
            commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-100 dark:bg-gray-700 rounded-lg group-hover:bg-blue-500 dark:group-hover:bg-teal-400 transition-colors">
                  <Award
                    size={32}
                    className="text-blue-600 dark:text-teal-400 group-hover:text-white transition-colors"
                  />
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 dark:hover:text-teal-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {cert.title}
              </h3>

              <div className="space-y-1 mb-3">
                <p className="text-blue-600 dark:text-teal-400 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Issued: {cert.date}
                </p>
                {cert.credentialId && (
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl shadow-xl">
            <div className="flex items-center gap-4 text-white">
              <Award size={48} />
              <div className="text-left">
                <div className="text-4xl font-bold mb-1">4+</div>
                <div className="text-lg">Professional Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
