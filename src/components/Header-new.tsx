import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-blue-100/50' 
        : 'bg-gradient-to-br from-blue-50/90 via-white/85 to-purple-50/90 backdrop-blur-lg'
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <div className="p-3 sm:p-3.5 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <GraduationCap className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 bg-clip-text text-transparent">
                McMILLS
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <button
              onClick={() => scrollToSection('home')}
              className="relative px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base transition-all duration-300 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"></div>
            </button>
            <button
              onClick={() => scrollToSection('manifesto')}
              className="relative px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base transition-all duration-300 group"
            >
              <span className="relative z-10">Manifesto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"></div>
            </button>
            <button
              onClick={() => scrollToSection('policies')}
              className="relative px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base transition-all duration-300 group"
            >
              <span className="relative z-10">Vision</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"></div>
            </button>
            <button
              onClick={() => scrollToSection('questions')}
              className="relative px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base transition-all duration-300 group"
            >
              <span className="relative z-10">Past Questions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"></div>
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="relative px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base transition-all duration-300 group"
            >
              <span className="relative z-10">Resources</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"></div>
            </button>
            <button
              onClick={() => scrollToSection('timetable')}
              className="relative px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base transition-all duration-300 group"
            >
              <span className="relative z-10">Exam Schedule</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-3 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-sm lg:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Support
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 focus:outline-none transition-all duration-300 border border-blue-200/50"
          >
            {isMenuOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-blue-50/95 via-white/95 to-purple-50/95 backdrop-blur-xl border-b border-blue-100/50 shadow-xl">
            <nav className="px-4 py-6 space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('manifesto')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium"
              >
                Manifesto
              </button>
              <button
                onClick={() => scrollToSection('policies')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium"
              >
                Vision
              </button>
              <button
                onClick={() => scrollToSection('questions')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium"
              >
                Past Questions
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection('timetable')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 font-medium"
              >
                Exam Schedule
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg mt-3"
              >
                Support
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
