import React from 'react';

const Training = () => {
  const trainings = [
    {
      title: 'Java Fundamentals',
      organization: 'Skill Stone a Grazitti Interactive initiative',
      description: 'Completed training in core Java concepts, including OOP principles, classes & objects, inheritance, polymorphism, interfaces, and exception handling.',
      details: [
        'Gained practical experience with Java programming, including control statements, arrays, functions, string manipulation, and file handling.',
        'Worked on mini Java programs and practice tasks, improving logical thinking and debugging skills by 30%, and enhancing code quality and optimization by 25%.'
      ],
      date: 'Jun\'25 – Jul\'25'
    }
  ];

  const certificates = [
    {
      title: 'Cloud Computing',
      organization: 'Nptel',
      date: 'Jul\'24 – Dec\'24'
    },
    {
      title: 'ChatGPT Made Easy: AI Essentials For Beginner',
      organization: 'Coursera',
      date: 'Jul\'25 – Aug\'24'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Training & Certificates
        </h2>
        
        {/* Training Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <span className="w-2 h-8 bg-blue-600 dark:bg-blue-500 mr-3"></span>
            Training
          </h3>
          {trainings.map((training, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {training.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {training.organization}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                  {training.date}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {training.description}
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {training.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">▹</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certificates Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <span className="w-2 h-8 bg-purple-600 dark:bg-purple-500 mr-3"></span>
            Certificates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-start mb-3">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                      {cert.organization}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;