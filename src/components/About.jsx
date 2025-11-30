import React from 'react';

const About = () => {
  const stats = [
    { icon: '💼', value: '2+', label: 'Real-World Projects' },
    { icon: '🏢', value: '1+', label: 'Internship Completed' },
    { icon: '🏆', value: '2+', label: 'Certifications Earned' },
    { icon: '⚡', value: '100+', label: 'Code Commits' },
  ];

  const funFacts = [
    {
      icon: '🎓',
      text: 'B.Tech CSE Student at LPU | Focused on Modern Web Technologies'
    },
    {
      icon: '💼',
      text: 'Delivered Production-Grade Accounting System for Real Business'
    },
    {
      icon: '🏆',
      text: 'MERN Stack Specialist | React • Node.js • MongoDB Expert'
    },
    {
      icon: '⚡',
      text: 'Fast Learner | Passionate About Clean Code & Best Practices'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
            Passionate Full Stack Developer | MERN Stack Expert | Building Digital Solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <div className="animate-slide-in">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm currently a 3rd-year B.Tech Computer Science Engineering student at <span className="font-semibold text-blue-600 dark:text-blue-400">Lovely Professional University</span>, passionate about building scalable web solutions. I specialize in the <span className="font-semibold">MERN stack</span> (MongoDB, Express.js, React.js, Node.js) and have hands-on experience creating real-world applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My journey began with Java and JavaScript fundamentals, and has evolved into full-stack development with modern frameworks like React and Tailwind CSS. I've successfully delivered commercial projects including an <span className="font-semibold text-purple-600 dark:text-purple-400">Account Management System</span> for a plywood company, demonstrating my ability to solve real business problems through technology.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm actively seeking <span className="font-semibold text-green-600 dark:text-green-400">internship opportunities</span> to apply my skills in professional environments and contribute to innovative projects.
            </p>
          </div>

          {/* Right content - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 text-9xl opacity-10">"</div>
            <p className="text-xl md:text-2xl font-medium mb-4 relative z-10 italic">
              "First, solve the problem. Then, write the code."
            </p>
            <p className="text-right text-blue-100 font-semibold">
              - John Johnson
            </p>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white animate-slide-up">
            Fun Facts About Me
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl flex-shrink-0">{fact.icon}</div>
                <p className="text-gray-700 dark:text-gray-300">
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Strengths */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Core Strengths
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Problem Solving', 'Critical Thinking', 'Adaptability', 'MERN Stack', 'Full Stack Development', 'Database Management'].map((strength, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;