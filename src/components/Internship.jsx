import React from 'react';

const Internship = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Internship Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl p-8 border-l-4 border-blue-600 hover:shadow-3xl transition-all duration-300 animate-slide-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Annapurna Veneer Udhyog – Paid Internship
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  Sales and Accounts Department
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  Jun'25 – Sept'25
                </span>
              </div>
            </div>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start group">
                <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 text-xl group-hover:scale-125 transition-transform">▹</span>
                <span className="leading-relaxed">
                  Worked in the Sales and Accounts Department, handling daily business and client transactions using <strong className="text-blue-600 dark:text-blue-400">Tally ERP 9</strong>, maintaining high accuracy in financial entries and record-keeping.
                </span>
              </li>
              <li className="flex items-start group">
                <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 text-xl group-hover:scale-125 transition-transform">▹</span>
                <span className="leading-relaxed">
                  Maintained and analyzed data in <strong className="text-purple-600 dark:text-purple-400">Microsoft Excel</strong>, assisting in invoice and report preparation and improving overall data organization.
                </span>
              </li>
              <li className="flex items-start group">
                <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1 text-xl group-hover:scale-125 transition-transform">▹</span>
                <span className="leading-relaxed">
                  Enhanced understanding of real-world financial processes by supporting day-to-day sales coordination, <strong className="text-green-600 dark:text-green-400">improving record-keeping accuracy by 25%</strong>, and contributed to <strong className="text-green-600 dark:text-green-400">15% smoother business operations</strong>.
                </span>
              </li>
            </ul>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['Tally ERP 9', 'Microsoft Excel', 'Financial Management', 'Data Analysis'].map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;