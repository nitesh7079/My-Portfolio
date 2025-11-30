import React from 'react';

const Skills = () => {
  const skillsData = {
    Frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind', level: 88 },
    ],
    Backend: [
      { name: 'Node.js', level: 88 },
      { name: 'Express', level: 85 },
    ],
    Database: [
      { name: 'MongoDB', level: 85 },
    ],
    'Tools & Others': [
      { name: 'Git', level: 90 },
      { name: 'Python', level: 75 },
      { name: 'Java', level: 70 },
    ],
  };

  const learningSkills = ['Next.js', 'TypeScript', 'Docker', 'AWS'];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {Object.entries(skillsData).map(([category, skills], catIndex) => (
            <div 
              key={category}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {category}
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center justify-center gap-2">
            <span>Currently Learning</span>
            <span className="text-3xl">🚀</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {learningSkills.map((skill, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Expertise cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
            <div className="text-5xl mb-4">💻</div>
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Full Stack Development
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              End-to-end application development from concept to deployment
            </p>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl mb-4">📱</div>
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Responsive Design
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Creating beautiful, mobile-first designs that work on all devices
            </p>
          </div>
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl mb-4">⚡</div>
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Performance Optimization
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Building fast, efficient applications with optimal user experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;