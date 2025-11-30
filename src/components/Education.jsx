import React from 'react';

const Education = () => {
  const education = [
    {
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology – Computer Science and Engineering',
      grade: '',
      location: 'Phagwara, Punjab',
      date: 'Since Aug 2023',
      icon: '🎓',
      color: 'from-blue-600 to-purple-600'
    },
    {
      institution: 'Bhartiya Inter College',
      degree: 'Intermediate',
      grade: '',
      location: 'Gahri, Bihar',
      date: 'Apr\'20 – Mar\'22',
      icon: '📚',
      color: 'from-green-600 to-teal-600'
    },
    {
      institution: 'MKD Public School',
      degree: 'Matriculation',
      grade: '',
      location: 'Motihari, Bihar',
      date: 'March 2020',
      icon: '🏫',
      color: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-transparent hover:shadow-2xl transition-all duration-300 group animate-slide-up"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderImage: `linear-gradient(to bottom, var(--tw-gradient-stops)) 1`,
                borderImageSlice: 1
              }}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`text-5xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {edu.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${edu.color} transition-all">
                        {edu.institution}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
                        {edu.degree}
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`px-4 py-1 bg-gradient-to-r ${edu.color} text-white rounded-full font-semibold text-sm shadow-lg`}>
                          {edu.grade}
                        </div>
                      </div>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="font-medium">
                          {edu.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p>
                          {edu.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;