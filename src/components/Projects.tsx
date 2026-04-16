import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  image: string;
  status: string;
  duration: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "GenTwin: AI-Powered Digital Twin for Cybersecurity Gap Detection",
      description:
        "Developing a cyber-aware digital twin system using generative AI (VAE/GAN) and simulation to detect hidden vulnerabilities and unsafe states in industrial systems.",
      techStack: [
        "Python",
        "Generative AI",
        "VAE/GAN",
        "SimPy",
        "Data Analysis",
      ],
      status: "Ongoing",
      duration: "Jan 2026 – Present",
      github: "#",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "AI-Based Deepfake & Voice Attack Detection System",
      description:
        "Built a deep learning-based system to detect audio deepfakes, voice cloning, and replay attacks using CNNs and real-time risk scoring.",
      techStack: ["Python", "Deep Learning", "OpenCV", "NLP", "CNN", "Flask"],
      status: "Completed",
      duration: "Oct 2025 – Dec 2025",
      github: "#",
      image:
        "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "AI-Based Hospital Management System",
      description:
        "Developed a scalable healthcare backend with REST APIs, JWT authentication, and face recognition supporting 100+ users.",
      techStack: ["Python", "Flask", "OpenCV", "SQLite", "REST APIs"],
      status: "Completed",
      duration: "Jul 2025 – Sep 2025",
      github: "https://github.com/subodh-git77/CareSync.git",
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Built a multi-client chat system with socket programming and multithreading supporting 50+ concurrent users.",
      techStack: ["Python", "Socket Programming", "Multithreading"],
      status: "Completed",
      duration: "May 2025 – Jun 2025",
      github: "https://github.com/subodh-git77/NetTalk.git",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Collaborative Online Code Editor",
      description:
        "Developed a real-time collaborative code editor with Firebase enabling live synchronization.",
      techStack: ["JavaScript", "Firebase", "HTML", "CSS"],
      status: "Completed",
      duration: "Mar 2025 – Apr 2025",
      github: "https://github.com/subodh-git77/realtime-code-editor.git",
      image:
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "GranthWorld – Online Book Management Platform",
      description:
        "Developed a book management platform enabling users to browse, manage, and organize digital book collections with an intuitive UI.",
      techStack: ["JavaScript", "HTML", "CSS"],
      status: "Completed",
      duration: "2024",
      github: "https://github.com/subodh-git77/granthWorld.git",
      image:
        "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            AI-focused projects with real-world impact, cybersecurity insights,
            and scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 leading-snug">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${
                      project.status === "Ongoing"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 animate-pulse"
                        : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {project.duration}
                </p>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-teal-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-teal-400 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-teal-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
