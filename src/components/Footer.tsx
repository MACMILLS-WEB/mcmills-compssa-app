import { GraduationCap, Mail, MessageSquare, Heart, ExternalLink, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://chat.whatsapp.com/your-compssa-channel-link', '_blank');
  };

  return (
    <footer id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background with glassmorphic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">mcmills</h3>
                  <p className="text-gray-300 text-sm font-medium">School of Excellence</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Building a stronger computer science community through innovation, 
                collaboration, and unwavering support for every student's success.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <div className="p-3 glass rounded-xl hover:glass-strong transition-all duration-300 cursor-pointer group">
                  <Instagram className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </div>
                <div className="p-3 glass rounded-xl hover:glass-strong transition-all duration-300 cursor-pointer group">
                  <Twitter className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </div>
                <div className="p-3 glass rounded-xl hover:glass-strong transition-all duration-300 cursor-pointer group">
                  <Facebook className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Quick Access</h4>
              <nav className="space-y-4">
                <button
                  onClick={() => scrollToSection('policies')}
                  className="block text-gray-300 hover:text-white transition-all duration-200 font-medium hover:translate-x-2"
                >
                  My Vision
                </button>
                <button
                  onClick={() => scrollToSection('manifesto')}
                  className="block text-gray-300 hover:text-white transition-all duration-200 font-medium hover:translate-x-2"
                >
                  Read Manifesto
                </button>
                <button
                  onClick={() => scrollToSection('questions')}
                  className="block text-gray-300 hover:text-white transition-all duration-200 font-medium hover:translate-x-2"
                >
                  Past Questions
                </button>
                <button
                  onClick={() => scrollToSection('resources')}
                  className="block text-gray-300 hover:text-white transition-all duration-200 font-medium hover:translate-x-2"
                >
                  Study Resources
                </button>
                <button
                  onClick={() => scrollToSection('timetable')}
                  className="block text-gray-300 hover:text-white transition-all duration-200 font-medium hover:translate-x-2"
                >
                  Exam Schedule
                </button>
              </nav>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 glass rounded-xl">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <span className="text-gray-300 font-medium">president@compssa.edu</span>
                </div>
                <button 
                  onClick={handleWhatsApp}
                  className="flex items-center space-x-4 p-4 glass rounded-xl hover:glass-strong transition-all duration-300 w-full"
                >
                  <MessageSquare className="h-6 w-6 text-green-400" />
                  <span className="text-gray-300 font-medium">COMPSSA WhatsApp</span>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Support Section */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Academic Support</h4>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Need help with coursework or have questions about university policies? 
                  I'm here to support every CS student.
                </p>
                <div className="space-y-3">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                    Submit Question
                  </button>
                  <button className="w-full px-6 py-3 glass text-gray-300 rounded-xl hover:glass-strong hover:text-white transition-all duration-300 font-semibold">
                    Request Resource
                  </button>
                </div>
              </div>
            </div>
          </div>

          
          {/* Bottom Section */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="font-medium">© 2025 mcmills Campaign.</span>
                <span>Made with</span>
                <Heart className="h-5 w-5 text-red-500 fill-current animate-pulse" />
                <span>for CS students</span>
              </div>
              <div className="glass px-6 py-3 rounded-xl">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  Vote for innovation. Vote for excellence. Vote for progress.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;