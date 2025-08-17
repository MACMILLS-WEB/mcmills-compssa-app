import { GraduationCap, Briefcase, Heart, Users } from 'lucide-react';

const Policies: React.FC = () => {
  const policies = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic Support",
      description: "Launch structured peer-led study groups, coding clinics, and faculty-student mentorships to enhance learning outcomes.",
      points: [
        "Peer-led study groups and coding clinics",
        "Faculty-student mentorship programs", 
        "Timely release of lecture materials and past question bank",
        "CV writing and interview preparation workshops"
      ]
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Industry Access",
      description: "Bridge the gap between academic learning and industry requirements through practical exposure and networking.",
      points: [
        "Monthly workshops on AI, cloud computing, and cybersecurity",
        "Tech company partnerships for internship pipelines",
        "COMPSSA GitHub showcase for student portfolios",
        "Departmental hackathons and coding competitions"
      ]
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Student Welfare",
      description: "Create comprehensive support systems addressing financial, academic, and emotional challenges faced by students.",
      points: [
        "COMPSSA Welfare Fund for student emergencies",
        "Mental Health Days and counselling support",
        "Food relief during exam periods",
        "Support for women in tech and students with disabilities"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community & Inclusion",
      description: "Foster an inclusive environment where every student feels valued, supported, and connected to the CS community.",
      points: [
        "COMPSSA Welcome Series for Level 100 students",
        "Monthly 'Tech & Chill Fridays' for community bonding",
        "CS Open Forums for student-faculty dialogue",
        "Anonymous feedback systems for continuous improvement"
      ]
    }
  ];

  return (
    <section id="policies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            My Vision for COMPSSA
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-normal">
            Building a responsive, innovative, and future-focused COMPSSA that champions student welfare, 
            advances academic excellence, and bridges the gap between school and industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {policy.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{policy.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {policy.description}
              </p>
              
              <ul className="space-y-3">
                {policy.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Policies;