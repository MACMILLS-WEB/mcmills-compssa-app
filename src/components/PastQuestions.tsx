import React, { useState } from 'react';
import { Search, Download, Filter, FileText, Calendar } from 'lucide-react';

const PastQuestions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const questions = [
    {
      id: 1,
      course: "Data Structures & Algorithms",
      code: "CS201",
      year: "2024",
      semester: "Fall",
      type: "Final Exam",
      downloadUrl: "#"
    },
    {
      id: 2,
      course: "Object-Oriented Programming",
      code: "CS102",
      year: "2024",
      semester: "Spring",
      type: "Midterm",
      downloadUrl: "#"
    },
    {
      id: 3,
      course: "Database Systems",
      code: "CS301",
      year: "2023",
      semester: "Fall",
      type: "Final Exam",
      downloadUrl: "#"
    },
    {
      id: 4,
      course: "Computer Networks",
      code: "CS401",
      year: "2024",
      semester: "Spring",
      type: "Final Exam",
      downloadUrl: "#"
    },
    {
      id: 5,
      course: "Software Engineering",
      code: "CS302",
      year: "2023",
      semester: "Fall",
      type: "Project Guidelines",
      downloadUrl: "#"
    },
    {
      id: 6,
      course: "Machine Learning",
      code: "CS501",
      year: "2024",
      semester: "Spring",
      type: "Assignment",
      downloadUrl: "#"
    }
  ];

  const courses = ['All', ...new Set(questions.map(q => q.course))];
  const years = ['All', ...new Set(questions.map(q => q.year))];

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === 'All' || question.course === selectedCourse;
    const matchesYear = selectedYear === 'All' || question.year === selectedYear;
    
    return matchesSearch && matchesCourse && matchesYear;
  });

  return (
    <section id="questions" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Past Questions Repository
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive collection of past exam papers, assignments, and study materials 
            to help you prepare effectively for your courses.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses or codes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 appearance-none bg-white"
              >
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 appearance-none bg-white"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Questions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuestions.map(question => (
            <div 
              key={question.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{question.course}</h3>
                      <p className="text-blue-600 font-medium text-sm">{question.code}</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
                    {question.year}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Semester:</span>
                    <span className="font-medium text-gray-900">{question.semester}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium text-gray-900">{question.type}</span>
                  </div>
                </div>
                
                <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 font-medium">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PastQuestions;