import { useState } from 'react';
import { Calendar, Clock, Book, Monitor, FileText, MapPin, GraduationCap, Users, Code, Globe, ExternalLink, BookOpen, Download, Award, Target, Heart, Lightbulb } from 'lucide-react';

function App() {
  const [selectedLevel, setSelectedLevel] = useState('100');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProgrammingModal, setShowProgrammingModal] = useState(false);
  const [showExternalModal, setShowExternalModal] = useState(false);
  const [showCourseMaterialModal, setShowCourseMaterialModal] = useState(false);
  const [showOnlineToolsModal, setShowOnlineToolsModal] = useState(false);

  // Complete Exam Timetable Data
  const examData = {
    '100': [
      {
        code: 'DCIT104',
        title: 'Programming Fundamentals',
        date: 'Wednesday, September 3, 2025',
        time: '11:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT102',
        title: 'Computer Hardware Fundamentals and Circuits',
        date: 'Friday, September 5, 2025',
        time: '3:30 PM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'MATH122',
        title: 'Calculus I',
        date: 'Sunday, September 7, 2025',
        time: '3:30 PM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'MATH126',
        title: 'Algebra and Geometry',
        date: 'Thursday, September 11, 2025',
        time: '11:30 AM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'MATH124',
        title: 'Mechanics',
        date: 'Monday, September 1, 2025',
        time: '11:30 AM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'STAT112/102',
        title: 'Introduction to Statistics and Probability',
        date: 'Wednesday, September 10, 2025',
        time: '11:30 AM',
        mode: 'Onsite/Physical with Answer Booklet'
      }
    ],
    '200': [
      {
        code: 'DCIT204',
        title: 'Data Structures and Algorithms I',
        date: 'Wednesday, August 21, 2025',
        time: '7:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT202',
        title: 'Human Computer Interaction',
        date: 'Sunday, August 31, 2025',
        time: '7:30 AM',
        mode: 'Take Home'
      },
      {
        code: 'DCIT206',
        title: 'Systems Administration',
        date: 'Friday, August 29, 2025',
        time: '11:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT212',
        title: 'Numerical and Computational Methods',
        date: 'Thursday, September 4, 2025',
        time: '7:30 AM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'DCIT214',
        title: 'Information Modelling and Specification',
        date: 'Tuesday, September 2, 2025',
        time: '7:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT208',
        title: 'Software Engineering',
        date: 'Tuesday, September 9, 2025',
        time: '3:30 PM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'MATH220',
        title: 'Introductory Programming for Computational Maths',
        date: 'Wednesday, September 10, 2025',
        time: '7:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'MATH222',
        title: 'Vector Mechanics',
        date: 'Monday, September 1, 2025',
        time: '3:30 PM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'STAT222',
        title: 'Introduction to Time Series and Regression Analysis',
        date: 'Tuesday, September 2, 2025',
        time: '7:30 AM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'STAT224/204',
        title: 'Introductory Probability II',
        date: 'Wednesday, September 3, 2025',
        time: '7:30 AM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'STAT226',
        title: 'Official Statistics',
        date: 'Friday, September 5, 2025',
        time: '3:30 PM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'STAT228',
        title: 'Introduction to Non-Parametric Statistics',
        date: 'Thursday, September 4, 2025',
        time: '3:30 PM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'STAT230',
        title: 'Data Mining',
        date: 'Saturday, September 6, 2025',
        time: '11:30 AM',
        mode: 'Onsite/Physical with Answer Booklet'
      }
    ],
    '300': [
      {
        code: 'DCIT302',
        title: 'Human Computer Interaction',
        date: 'Sunday, August 31, 2025',
        time: '11:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT304',
        title: 'Research Methods',
        date: 'Monday, September 1, 2025',
        time: '7:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT306',
        title: 'Cloud Computing',
        date: 'Friday, September 5, 2025',
        time: '7:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT308',
        title: 'Data Structures and Algorithms II',
        date: 'Monday, September 8, 2025',
        time: '11:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT312',
        title: 'Information Security Management',
        date: 'Friday, August 29, 2025',
        time: '7:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT314',
        title: 'Game Engine Architecture',
        date: 'Tuesday, September 9, 2025',
        time: '3:30 PM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'DCIT318',
        title: 'Programming II',
        date: 'Sunday, September 7, 2025',
        time: '11:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT322',
        title: 'Database Management Administration',
        date: 'Wednesday, September 3, 2025',
        time: '11:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'MATH354',
        title: 'Abstract Algebra I',
        date: 'Tuesday, September 9, 2025',
        time: '11:30 AM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'MATH356',
        title: 'Analysis II',
        date: 'Tuesday, September 2, 2025',
        time: '3:30 PM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'MATH358',
        title: 'Computational Mathematics I',
        date: 'Wednesday, August 27, 2025',
        time: '11:30 AM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'MATH368',
        title: 'Introductory Number Theory',
        date: 'Thursday, August 28, 2025',
        time: '3:30 PM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'MATH372',
        title: 'Topology',
        date: 'Sunday, September 7, 2025',
        time: '3:30 PM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'STAT332',
        title: 'Multivariate Distributions',
        date: 'Thursday, August 28, 2025',
        time: '11:30 AM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'STAT336',
        title: 'Design of Experiments',
        date: 'Friday, September 5, 2025',
        time: '11:30 AM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'STAT338',
        title: 'Decision Theory',
        date: 'Thursday, September 11, 2025',
        time: '7:30 AM',
        mode: 'Onsite/Physical with Answer Booklet'
      },
      {
        code: 'STAT356',
        title: 'Life Insurance and Retirement Security',
        date: 'Sunday, August 31, 2025',
        time: '7:30 AM',
        mode: 'Onsite/Physical with Answer Booklet'
      }
    ],
    '400': [
      {
        code: 'DCIT402',
        title: 'Management Principles in Computing',
        date: 'Friday, August 29, 2025',
        time: '3:30 PM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT404',
        title: 'Advanced Databases',
        date: 'Wednesday, August 27, 2025',
        time: '3:30 PM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT406',
        title: 'Advanced Computer Networks',
        date: 'Tuesday, September 2, 2025',
        time: '11:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT408',
        title: 'Compilers',
        date: 'Thursday, September 4, 2025',
        time: '11:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT412',
        title: 'Computer Vision',
        date: 'Saturday, September 6, 2025',
        time: '7:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT414',
        title: 'Data Mining and Warehousing',
        date: 'Monday, September 8, 2025',
        time: '7:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT418',
        title: 'Systems and Network Security',
        date: 'Wednesday, September 10, 2025',
        time: '7:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT422',
        title: 'Information Visualization',
        date: 'Friday, September 5, 2025',
        time: '11:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT426',
        title: 'Telecommunication Systems',
        date: 'Sunday, September 7, 2025',
        time: '11:30 AM',
        mode: 'Online/Onsite using Sakai'
      },
      {
        code: 'DCIT428',
        title: 'Wireless Systems and Networks',
        date: 'Monday, September 1, 2025',
        time: '3:30 PM',
        mode: 'Onsite/Physical with Answer Booklet'
      }
    ]
  };

  const getModeIcon = (mode: string) => {
    if (mode.includes('Take Home')) return <FileText className="h-4 w-4" />;
    if (mode.includes('Online')) return <Monitor className="h-4 w-4" />;
    if (mode.includes('Physical')) return <Book className="h-4 w-4" />;
    return <MapPin className="h-4 w-4" />;
  };

  const getModeColor = (mode: string) => {
    if (mode.includes('Take Home')) return 'bg-green-100 text-green-800 border-green-200';
    if (mode.includes('Online')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (mode.includes('Physical')) return 'bg-purple-100 text-purple-800 border-purple-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Programming Resources Modal */}
      {showProgrammingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Code className="h-6 w-6 text-green-600 mr-2" />
                  Programming Resources
                </h2>
                <button 
                  onClick={() => setShowProgrammingModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-green-600 mr-2" />
                  Recommended Study Sites for Programming
                </h3>
                <p className="text-gray-600">Verified platforms offering excellent tutorials and practice problems for computer science courses</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'W3Schools', url: 'https://w3schools.com', desc: 'Web development tutorials' },
                  { name: 'FreeCodeCamp', url: 'https://freecodecamp.org', desc: 'Interactive coding lessons' },
                  { name: 'GeeksforGeeks', url: 'https://geeksforgeeks.org', desc: 'CS fundamentals & algorithms' },
                  { name: 'LeetCode', url: 'https://leetcode.com', desc: 'Coding practice problems' },
                  { name: 'HackerRank', url: 'https://hackerrank.com', desc: 'Programming challenges' },
                  { name: 'Codecademy', url: 'https://codecademy.com', desc: 'Interactive programming courses' },
                  { name: 'Khan Academy', url: 'https://khanacademy.org', desc: 'Free educational content' }
                ].map((site, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{site.name}</h4>
                      <button 
                        onClick={() => window.open(site.url, '_blank')}
                        className="text-green-600 hover:text-green-700 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{site.desc}</p>
                    <button 
                      onClick={() => window.open(site.url, '_blank')}
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      Visit Site
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* External Resources Modal */}
      {showExternalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Globe className="h-6 w-6 text-teal-600 mr-2" />
                  External Learning Resources
                </h2>
                <button 
                  onClick={() => setShowExternalModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'W3Schools', url: 'https://w3schools.com', desc: 'Complete web development tutorials', color: 'bg-blue-50 border-blue-200' },
                  { name: 'Roadmap.sh', url: 'https://roadmap.sh', desc: 'Developer roadmaps and guides', color: 'bg-green-50 border-green-200' },
                  { name: 'JavaTpoint', url: 'https://javatpoint.com', desc: 'Programming tutorials and examples', color: 'bg-orange-50 border-orange-200' },
                  { name: 'Udemy', url: 'https://udemy.com', desc: 'Online courses and certifications', color: 'bg-purple-50 border-purple-200' },
                  { name: 'Codecademy', url: 'https://codecademy.com', desc: 'Interactive coding lessons', color: 'bg-indigo-50 border-indigo-200' },
                  { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', desc: 'Web development documentation', color: 'bg-yellow-50 border-yellow-200' },
                  { name: 'Stack Overflow', url: 'https://stackoverflow.com', desc: 'Programming Q&A community', color: 'bg-red-50 border-red-200' },
                  { name: 'GitHub', url: 'https://github.com', desc: 'Code repositories and collaboration', color: 'bg-gray-50 border-gray-200' },
                  { name: 'YouTube', url: 'https://youtube.com', desc: 'Programming video tutorials', color: 'bg-pink-50 border-pink-200' },
                  { name: 'GeeksforGeeks', url: 'https://geeksforgeeks.org', desc: 'CS fundamentals and algorithms', color: 'bg-teal-50 border-teal-200' }
                ].map((resource, index) => (
                  <div key={index} className={`${resource.color} border rounded-lg p-4 hover:shadow-md transition-shadow`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{resource.name}</h4>
                      <button 
                        onClick={() => window.open(resource.url, '_blank')}
                        className="text-teal-600 hover:text-teal-700 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{resource.desc}</p>
                    <button 
                      onClick={() => window.open(resource.url, '_blank')}
                      className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
                    >
                      Visit Site
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course Materials Modal */}
      {showCourseMaterialModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Book className="h-6 w-6 text-blue-600 mr-2" />
                  Course Materials
                </h2>
                <button 
                  onClick={() => setShowCourseMaterialModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🚧 Coming Soon!</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Comprehensive course materials including lecture notes, slides, and supplementary materials for all DCIT, MATH, and STAT courses will be available by the end of this semester.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Coming:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Lecture Notes & Slides
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Study Guides
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Supplementary Materials
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    Course Syllabus
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={() => window.open('https://whatsapp.com/channel/0029Vag7DK547XeJZ2fpTa06', '_blank')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Get Updates
                </button>
                <button 
                  onClick={() => setShowCourseMaterialModal(false)}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Online Tools Modal */}
      {showOnlineToolsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Monitor className="h-6 w-6 text-orange-600 mr-2" />
                  Online Tools
                </h2>
                <button 
                  onClick={() => setShowOnlineToolsModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔧 Coming Soon!</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Digital calculators, simulators, and interactive learning platforms will be available soon to enhance your understanding of complex concepts.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Tools in Development:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    Scientific Calculators
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Algorithm Simulators
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    Interactive Demos
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                    Code Compilers
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={() => window.open('https://whatsapp.com/channel/0029Vag7DK547XeJZ2fpTa06', '_blank')}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                >
                  Stay Updated
                </button>
                <button 
                  onClick={() => setShowOnlineToolsModal(false)}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-xl border-b border-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  mcmills
                </span>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('exam-schedule')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Exam Schedule
              </button>
              <button onClick={() => scrollToSection('resources')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Resources
              </button>
              <button onClick={() => scrollToSection('manifesto')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Manifesto
              </button>
              <button onClick={() => scrollToSection('policies')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Policies
              </button>
              <button onClick={() => scrollToSection('past-questions')} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Past Questions
              </button>
            </nav>

            <button 
              className="md:hidden p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Home</button>
                <button onClick={() => scrollToSection('exam-schedule')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Exam Schedule</button>
                <button onClick={() => scrollToSection('resources')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Resources</button>
                <button onClick={() => scrollToSection('manifesto')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Manifesto</button>
                <button onClick={() => scrollToSection('policies')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Policies</button>
                <button onClick={() => scrollToSection('past-questions')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Past Questions</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
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
              Your elected COMPSSA President. Together, we're building a brighter future and transforming student life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button 
                onClick={() => scrollToSection('resources')}
                className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 justify-center text-sm sm:text-base font-medium"
              >
                <BookOpen size={18} className="sm:w-5 sm:h-5" />
                Browse Resources
              </button>
              <button 
                onClick={() => window.open('https://whatsapp.com/channel/0029Vag7DK547XeJZ2fpTa06', '_blank')}
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

      {/* Exam Schedule Section */}
      <section id="exam-schedule" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Exam Schedule
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              COMPSSA Exam Timetable
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl lg:max-w-3xl mx-auto font-normal leading-relaxed px-2">
              Stay organized and prepared with our comprehensive exam schedule. Never miss an exam again!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {['100', '200', '300', '400'].map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 ${
                  selectedLevel === level
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
                }`}
              >
                Level {level}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {(examData[selectedLevel as keyof typeof examData] || []).map((exam, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {exam.code}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                      {exam.title}
                    </p>
                  </div>
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
                    <Book className="h-5 w-5 text-blue-600" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Date</p>
                      <p className="text-sm sm:text-base text-gray-900 font-medium">{exam.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Clock className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Time</p>
                      <p className="text-sm sm:text-base text-gray-900 font-medium">{exam.time}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className={`inline-flex items-center space-x-2 px-3 py-2 rounded-lg border text-xs sm:text-sm font-medium ${getModeColor(exam.mode)}`}>
                      {getModeIcon(exam.mode)}
                      <span>{exam.mode}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Users className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Important Notice</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Please verify exam details with your course instructors and check the official university portal for any last-minute changes. 
                Good luck with your exams! 🎓
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4 mr-2" />
              Study Resources
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Academic Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to excel in your studies - from course materials to study tools
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">� COMPSSA Resource Hub - Coming Soon!</h3>
            <p className="text-lg mb-6 text-blue-100">
              All academic resources will be available by end of this semester!
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => window.open('https://whatsapp.com/channel/0029Vag7DK547XeJZ2fpTa06', '_blank')}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Join Updates Channel
              </button>
              <button 
                onClick={() => window.open('https://whatsapp.com/channel/0029Vag7DK547XeJZ2fpTa06', '_blank')}
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Notified
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 sm:p-6 border border-blue-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Book className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Course Materials</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Comprehensive lecture notes, slides, and supplementary materials for all DCIT, MATH, and STAT courses.
              </p>
              <button 
                onClick={() => setShowCourseMaterialModal(true)}
                className="text-blue-600 font-medium hover:text-blue-700 flex items-center text-sm sm:text-base"
              >
                Coming Soon <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 sm:p-6 border border-green-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Code className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Programming Resources</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Code examples, project templates, and programming tutorials for software development courses.
              </p>
              <button 
                onClick={() => setShowProgrammingModal(true)}
                className="text-green-600 font-medium hover:text-green-700 flex items-center text-sm sm:text-base"
              >
                Browse Resources <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 sm:p-6 border border-purple-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Study Groups</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Connect with classmates for collaborative learning and group study sessions.
              </p>
              <button 
                onClick={() => window.open('https://whatsapp.com/channel/0029Vag7DK547XeJZ2fpTa06', '_blank')}
                className="text-purple-600 font-medium hover:text-purple-700 flex items-center text-sm sm:text-base"
              >
                Join WhatsApp <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 sm:p-6 border border-orange-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Monitor className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Online Tools</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Digital calculators, simulators, and interactive learning platforms for better understanding.
              </p>
              <button 
                onClick={() => setShowOnlineToolsModal(true)}
                className="text-orange-600 font-medium hover:text-orange-700 flex items-center text-sm sm:text-base">
                Coming Soon <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 sm:p-6 border border-teal-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">External Resources</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Curated links to useful websites, documentation, and learning platforms.
              </p>
              <button 
                onClick={() => setShowExternalModal(true)}
                className="text-teal-600 font-medium hover:text-teal-700 flex items-center text-sm sm:text-base">
                Explore Resources <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 sm:p-6 border border-red-200">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Assignment Help</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Guidelines, templates, and examples to help you complete assignments successfully.
              </p>
              <button className="text-red-600 font-medium hover:text-red-700 flex items-center text-sm sm:text-base">
                Get Help <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-16 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-medium mb-4">
              <Heart className="h-4 w-4 mr-2" />
              Presidential Agenda
            </div>
            <h2 className="text-4xl font-bold mb-6">My Presidential Vision</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Implementing real change and building the stronger COMPSSA community we promised
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
              <p className="text-blue-100">
                NOW IMPLEMENTING: Comprehensive study resources, peer tutoring programs, and 24/7 academic support systems to help every student succeed.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Building</h3>
              <p className="text-blue-100">
                LAUNCHING THIS MONTH: Enhanced social events, networking opportunities, and collaborative projects to strengthen our COMPSSA family.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-blue-100">
                SCHEDULED FOR NEXT SEMESTER: Tech hackathons, industry partnerships, and innovation workshops to prepare you for the future.
              </p>
            </div>
          </div>

          <div className="text-center">
            <blockquote className="text-2xl font-light italic text-blue-100 mb-6 max-w-4xl mx-auto">
              "Thank you for your trust! Together, we have transformed COMPSSA into a thriving community where every student 
              has the opportunity to excel, connect, and innovate. Your success IS our collective achievement."
            </blockquote>
            <p className="text-lg font-semibold">- mcmills, COMPSSA President</p>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section id="policies" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <Target className="h-4 w-4 mr-2" />
              Implementation Plan
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Active Initiatives & Timeline</h2>
          
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "24/7 Study Resources - Launching Soon!",
                description: "Digital library launched with past questions, study guides, and video tutorials accessible anytime.",
                benefits: ["50+ past papers uploaded", "Interactive study schedules", "Mobile app in development"]
              },
              {
                title: "Peer Tutoring Network - recruiting now",
                description: "Connecting students with high-performing peers for personalized academic support starting next week.",
                benefits: ["30+ tutors registered", "Free 1-on-1 sessions", "Group study coordination"]
              },
              {
                title: "Industry Mentorship Program - Partenerships underway",
                description: "Tech companies confirmed partnerships to provide career guidance and internship opportunities.",
                benefits: ["5 tech companies committed", "Monthly industry talks", "Internship placements guaranteed"]
              },
              {
                title: "Student Welfare & Wellness - launching soon",
                description: "New support programs focusing on student welfare, wellbeing and stress management during.",
                benefits: ["Financial/Material support", "Peer support groups active", "Stress-free study zones created"]
              }
            ].map((policy, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{policy.title}</h3>
                <p className="text-gray-600 mb-4">{policy.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {policy.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Questions Section */}
      <section id="past-questions" className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Download className="h-3 sm:h-4 w-3 sm:w-4 mr-1 sm:mr-2" />
              Study Materials
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Past Questions Bank</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Access comprehensive past examination questions to boost your preparation
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 mb-8 sm:mb-12">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">📚 Coming Soon!</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">
                I'm actively collecting and organizing past questions for all courses in the department.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">750+</div>
                <div className="text-xs sm:text-sm text-gray-600">Questions Collected</div>
              </div>
              <div className="p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">25+</div>
                <div className="text-xs sm:text-sm text-gray-600">Courses Covered</div>
              </div>
              <div className="p-3 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Free Access Forever</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {['Level 100', 'Level 200', 'Level 300', 'Level 400'].map((level, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{level}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Complete question bank with solutions</p>
                <button className="w-full bg-blue-600 text-white py-2 px-3 sm:px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-xs sm:text-sm">
                  <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    mcmills
                  </span>
                  <p className="text-blue-200 text-sm font-medium">COMPSSA President</p>
                </div>
              </div>
              <p className="text-blue-100 mb-6 text-lg leading-relaxed max-w-md">
                Leading COMPSSA with transparency, innovation, and unwavering commitment to student success. 
                Building the future of our academic community together.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => window.open('https://whatsapp.com/channel/0029Vag7DK547XeJZ2fpTa06', '_blank')}
                  className="group bg-white/10 hover:bg-white/20 backdrop-blur-lg p-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  <Users className="h-5 w-5 text-blue-300 group-hover:text-white transition-colors" />
                </button>
                <button 
                  onClick={() => window.open('https://dcs.ug.edu.gh/', '_blank')}
                  className="group bg-white/10 hover:bg-white/20 backdrop-blur-lg p-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  <Globe className="h-5 w-5 text-blue-300 group-hover:text-white transition-colors" />
                </button>
                <button 
                  onClick={() => window.open('https://whatsapp.com/channel/0029Vag7DK547XeJZ2fpTa06', '_blank')}
                  className="group bg-white/10 hover:bg-white/20 backdrop-blur-lg p-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  <ExternalLink className="h-5 w-5 text-blue-300 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('exam-schedule')} 
                    className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                    Exam Schedule
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('resources')} 
                    className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                    Resources
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('manifesto')} 
                    className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                    Presidential Vision
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('policies')} 
                    className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                    Active Initiatives
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('past-questions')} 
                    className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></div>
                    Past Questions
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Contact & Support */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Get in Touch</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <GraduationCap className="h-4 w-4 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Contact</p>
                    <p className="text-white font-medium">Executive Committee</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <MapPin className="h-4 w-4 text-purple-300" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">Location</p>
                    <p className="text-white font-medium">University of Ghana</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => window.open('https://whatsapp.com/channel/0029Vag7DK547XeJZ2fpTa06', '_blank')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Executive Committee
              </button>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-blue-200 text-sm">
                  &copy; 2025 mcmills COMPSSA Presidential Administration. All rights reserved.
                </p>
                <p className="text-blue-300 text-sm mt-1">
                  Democratically elected • Serving with integrity • Delivering results
                </p>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
                <Award className="h-4 w-4 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm">Leading with Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;