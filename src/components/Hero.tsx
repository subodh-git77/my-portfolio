import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Computer Science Student',
    'Problem Solver',
    'Web Developer',
    'DSA Enthusiast',
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                Subodh Kumar Agrahari
              </h1>
              <div className="h-12 flex items-center">
                <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
                  {text}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              BTech Computer Science student passionate about building elegant
              solutions to complex problems. Specializing in Data Structures,
              Algorithms, and Modern Web Development.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
              <a
                href="#"
                download
                className="px-8 py-3 border-2 border-blue-500 dark:border-teal-400 text-blue-500 dark:text-teal-400 rounded-lg font-semibold hover:bg-blue-500 dark:hover:bg-teal-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Resume
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/subodh-git77"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-teal-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/subodh-kumar-agrahari-0449652a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-teal-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:subodhagrahari717@gmail.com"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-teal-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 p-1 animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="/1000302414.jpg.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 dark:bg-teal-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-600 dark:text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
