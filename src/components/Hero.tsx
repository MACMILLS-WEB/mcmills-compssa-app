import React from 'react';
import { GraduationCap, BookOpen, Users, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/your-compssa-channel-link', '_blank');
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <GraduationCap size={48} className="text-blue-600 sm:w-16 sm:h-16" />
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              mcmills
            </span>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 sm:mb-10 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
            Empowering students to achieve excellence. Join us in building a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 justify-center text-sm sm:text-base font-medium">
              <BookOpen size={18} className="sm:w-5 sm:h-5" />
              Browse Resources
            </button>
            <button 
              onClick={handleJoinCommunity}
              className="border border-blue-600 text-blue-600 px-6 py-3 sm:px-8 sm:py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2 justify-center text-sm sm:text-base font-medium"
            >
              <Users size={18} className="sm:w-5 sm:h-5" />
              Join COMPSSA Community
              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg">
            <BookOpen size={40} className="text-blue-600 mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Study Materials</h3>
            <p className="text-sm sm:text-base text-gray-600">Access comprehensive study materials and resources for all subjects.</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg">
            <GraduationCap size={40} className="text-green-600 mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Past Questions</h3>
            <p className="text-sm sm:text-base text-gray-600">Practice with previous exam questions to improve your performance.</p>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg">
            <Users size={40} className="text-purple-600 mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Community</h3>
            <p className="text-sm sm:text-base text-gray-600">Connect with peers and collaborate on academic projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;