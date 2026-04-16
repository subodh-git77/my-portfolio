import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>Designed & Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>by Subodh Kumar Agrahari</span>
          </div>

          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full hover:shadow-lg hover:scale-110 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
