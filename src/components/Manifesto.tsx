import React from 'react';
import { FileText, Quote, Target, Users, Briefcase, Heart } from 'lucide-react';

const Manifesto: React.FC = () => {
  const manifestoSections = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Academic Support",
      content: "Launch structured peer-led study groups and coding clinics, establish faculty-student mentorships, advocate for timely release of lecture materials, and create a comprehensive past question bank."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Industry Access", 
      content: "Host monthly workshops on trending tech areas, build partnerships with local tech companies, organize departmental hackathons, and facilitate company visits and immersion days."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Student Welfare",
      content: "Create a COMPSSA Welfare Fund, appoint a Welfare and Inclusion Officer, collaborate on Mental Health Days, and provide food relief during exams for those who need it most."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community & Inclusion",
      content: "Launch COMPSSA Welcome Series for new students, host monthly 'Tech & Chill Fridays', organize CS Open Forums, and maintain open communication channels."
    }
  ];

  return (
    <section id="manifesto" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Presidential Manifesto
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            A Vision for Excellence
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl lg:max-w-3xl mx-auto font-normal leading-relaxed px-2">
            My commitment to building a COMPSSA that listens, leads, and delivers for every Computer Science student.
          </p>
        </div>

        {/* Opening Statement */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 border-l-4 border-blue-600">
          <div className="flex items-start space-x-3 sm:space-x-4">
            <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-normal leading-relaxed italic">
                "My name is Kusi Boateng Mills, and I am honored to stand as a candidate for President of the Computer Science Students Association. 
                Throughout my time here, I have seen firsthand the challenges that our community faces—from academic struggles to limited industry exposure, 
                from student welfare concerns to the need for stronger peer connections."
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-normal leading-relaxed mt-4">
                "I am committed to building a COMPSSA that not only addresses these challenges but anticipates them, 
                creating an environment where every student can thrive academically, professionally, and personally."
              </p>
            </div>
          </div>
        </div>

        {/* Key Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {manifestoSections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-6 border border-gray-100"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-blue-100 text-blue-600 rounded-lg">
                  {section.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{section.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Leadership Values */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-6 sm:p-8 text-white">
          <div className="text-center space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold">Leadership Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h4 className="font-medium text-sm sm:text-base">Integrity</h4>
                <p className="text-xs sm:text-sm text-blue-100 font-normal">Students first in every decision</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h4 className="font-medium text-sm sm:text-base">Efficiency</h4>
                <p className="text-xs sm:text-sm text-blue-100 font-normal">Turning plans into results</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h4 className="font-medium text-sm sm:text-base">Team Spirit</h4>
                <p className="text-xs sm:text-sm text-blue-100 font-normal">Collaboration across year groups</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h4 className="font-medium text-sm sm:text-base">Innovation</h4>
                <p className="text-xs sm:text-sm text-blue-100 font-normal">Fresh ideas for old problems</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h4 className="font-medium text-sm sm:text-base">Accountability</h4>
                <p className="text-xs sm:text-sm text-blue-100 font-normal">Answerable to students</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
              This manifesto is more than a campaign promise—it's a commitment to action. 
              Together, we can build a COMPSSA that truly serves every student's needs and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm sm:text-base">
                Join the Movement
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium text-sm sm:text-base">
                Share Your Ideas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
