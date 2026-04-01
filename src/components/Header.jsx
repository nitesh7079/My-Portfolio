import React from 'react';

const heroMetrics = [
  {
    label: 'Business Operations',
    title: 'Accounting & Sales Manager',
    detail: 'Tally ERP 9 • Sales forecasting • MIS insights'
  },
  {
    label: 'Web Engineering',
    title: 'Full Stack Developer',
    detail: 'React, Node.js, Express, MongoDB, Tailwind'
  },
  {
    label: 'Trajectory',
    title: 'Future Business Leader',
    detail: 'Designing systems before scaling ventures'
  }
];

const trustSignals = ['Tally ERP 9', 'Sales Ledger Automation', 'Excel MIS', 'React • Node • Express', 'Next.js • Docker • AWS (learning)'];

const portraitHighlights = ['Internship Experience', 'Certified Developer', 'Production Projects'];

const Header = () => {
  return (
    <header
      id="home"
      className="executive-grid relative min-h-screen pt-32 pb-16 flex items-center text-gray-900 dark:text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--bg-primary)] opacity-95 transition-colors duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/10 via-transparent to-[var(--accent-secondary)]/5 pointer-events-none"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute inset-x-0 top-24 flex justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-yellow-400/20 blur-3xl animate-float"></div>
      </div>
      <div className="absolute right-0 bottom-0 pointer-events-none">
        <div className="w-80 h-80 rounded-full bg-gradient-to-l from-purple-500/20 to-blue-600/10 blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <div className="animate-slide-up stagger-1 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--bg-secondary)] text-[var(--accent-primary)] text-xs font-black uppercase tracking-[0.4em] backdrop-blur-sm border border-[var(--accent-primary)]/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              Dual Discipline
            </div>
            
            <h1 className="animate-slide-up stagger-2 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[var(--text-primary)] drop-shadow-sm">
              I run accounting & sales operations today while engineering the web systems that will power tomorrow's business.
            </h1>
            
            <p className="animate-slide-up stagger-3 text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto lg:mx-0 font-light">
              I currently manage business finances with <span className="font-semibold text-[var(--accent-primary)] font-bold">Tally ERP 9</span>, coordinate sales and reporting, and build MERN applications that automate the same workflows. The goal is clear: become a businessman who understands every layer—from ledger entries to cloud deployments.
            </p>

            <ul className="animate-slide-up stagger-3 grid sm:grid-cols-3 gap-4 text-left text-[var(--text-secondary)]">
              {['Operations-first mindset', 'Documented, measurable delivery', 'Systems built to scale'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-[var(--bg-secondary)] backdrop-blur-sm rounded-2xl px-4 py-3 border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-colors shadow-sm">
                  <span className="w-8 h-8 shrink-0 rounded-full border border-[var(--accent-primary)]/30 flex items-center justify-center text-sm font-semibold text-[var(--accent-primary)]">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium tracking-wide">{item}</span>
                </li>
              ))}
            </ul>

            <div className="animate-slide-up stagger-4 flex flex-wrap justify-center lg:justify-start gap-5">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full bg-[var(--accent-primary)] text-white font-semibold shadow-xl shadow-[var(--accent-primary)]/10 hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 active:scale-95"
              >
                Discuss Operations
              </a>
              <a
                href="/Nitesh Raj Cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full border border-[var(--accent-primary)]/40 text-[var(--accent-primary)] font-semibold hover:bg-[var(--accent-primary)]/5 transition-all duration-300 backdrop-blur-sm active:scale-95"
              >
                Executive Profile
              </a>
            </div>

            <div className="animate-slide-up stagger-4 flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              {trustSignals.map((signal, index) => (
                <span key={index} className="px-3.5 py-1.5 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] text-xs font-medium bg-[var(--bg-secondary)] transition-colors cursor-default">
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="animate-slide-up stagger-2 relative flex justify-center">
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-amber-500/30 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/40 shadow-[0_20px_50px_rgba(37,99,235,0.2)] overflow-hidden hover:scale-105 transition-transform duration-500 z-10">
                <img
                  src="/profile.jpg"
                  alt="Nitesh Raj portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full border-2 border-white/20 mix-blend-overlay pointer-events-none"></div>
              </div>
            </div>

            <div className="animate-slide-up stagger-3 flex flex-wrap justify-center gap-3 relative z-10">
              {portraitHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-4 py-2 rounded-full bg-[var(--bg-secondary)]/80 backdrop-blur-md text-[var(--text-primary)] text-xs font-semibold border border-[var(--border-color)] shadow-lg"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="animate-slide-up stagger-4 relative z-10 rounded-3xl p-8 bg-[var(--bg-secondary)] backdrop-blur-xl text-[var(--text-primary)] executive-panel border border-[var(--border-color)] shadow-2xl premium-card">
              <p className="text-sm uppercase tracking-[0.5em] text-gray-500 dark:text-gray-400 mb-6 font-semibold">
                Operating Snapshot
              </p>
              <div className="space-y-6">
                {heroMetrics.map((metric, index) => (
                  <div key={metric.label} className="border-l-4 pl-4 transition-colors duration-300" style={{ borderColor: index === 0 ? 'var(--accent-secondary)' : index === 1 ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>
                    <p className="text-xs uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 mb-1">
                      {metric.label}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {metric.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-up stagger-4 relative z-10 rounded-3xl p-6 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-2xl premium-card">
              <p className="text-xs uppercase tracking-[0.4em] mb-2 font-semibold text-blue-200">Current Focus</p>
              <h4 className="text-2xl font-bold mb-3">Scaling a business owner's mindset</h4>
              <p className="text-white/90 text-sm mb-5 leading-relaxed">
                Daily work in Tally ERP 9 and sales operations informs every product decision I make in React, Node.js, and the cloud. I bridge both so nothing gets lost between the ledger and the deployment pipeline.
              </p>
              <div className="golden-divider mb-5 opacity-50"></div>
              <div className="flex flex-wrap gap-2.5">
                {['Accounting Intelligence', 'Sales Enablement', 'Full Stack Delivery'].map((pill) => (
                  <span key={pill} className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium border border-white/10">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;