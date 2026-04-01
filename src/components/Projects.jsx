import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Accounting Management System',
      category: 'Full Stack',
      date: 'Oct 2025 – Nov 2025',
      industry: 'Plywood Manufacturing',
      problem: 'Manual ledgers slowed billing, audits, and stakeholder visibility.',
      solution: 'Designed a MERN-based companion to Tally ERP 9 with role-based dashboards, transaction workflows, and inventory reconciliation.',
      impact: '35% faster invoice turnaround and centralized operational context for leadership reviews.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
      artifacts: {
        code: 'https://github.com/nitesh7079',
        live: 'https://annapurnaveneer.online/'
      },
      callouts: ['Authentication & authorization', 'Ledger + inventory modules', 'Automated reporting deck']
    },
    {
      title: 'Personal Portfolio System',
      category: 'Frontend',
      date: 'Nov 2025',
      industry: 'Professional Branding',
      problem: 'Needed a boardroom-ready showcase that communicates both operations and engineering expertise.',
      solution: 'Crafted a React + Tailwind experience with data-driven sections, executive storytelling, and dark-mode ergonomics.',
      impact: '30% faster project walkthroughs and higher engagement during stakeholder demos.',
      tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
      artifacts: {
        code: 'https://github.com/nitesh7079',
        live: 'https://niteshraj.in'
      },
      callouts: ['Composable UI kit', 'Motion system reusable across pages', 'Content strategy aligned with resume']
    }
  ];

  const filters = ['All', 'Full Stack', 'Frontend'];
  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-[var(--bg-primary)] transition-colors duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up stagger-1">
          <p className="uppercase tracking-[0.4em] text-sm text-[var(--accent-primary)] font-bold mb-3">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6">
            Systems that prove business-first engineering
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Every engagement starts with an operational bottleneck and ends with a measurable outcome. These projects show how I translate sales, accounting, and product needs into software.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up stagger-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${filter === item
                  ? 'bg-[var(--accent-primary)] text-white shadow-xl shadow-[var(--accent-primary)]/20 scale-105'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-primary)]/40 hover:text-[var(--text-primary)]'
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="premium-card p-8 md:p-10 rounded-3xl bg-[var(--bg-secondary)] backdrop-blur-sm border border-[var(--border-color)] animate-slide-up relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 blur-2xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150"></div>

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent-primary)] font-bold">{project.category}</p>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-color)]"></span>
                    <p className="text-sm text-[var(--text-secondary)] font-medium">{project.industry}</p>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-2">{project.title}</h3>
                </div>
                <span className="shrink-0 px-4 py-2 rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] text-sm font-semibold whitespace-nowrap border border-[var(--border-color)]">
                  {project.date}
                </span>
              </div>

              <div className="relative z-10 grid md:grid-cols-3 gap-8 mb-10">
                <div className="md:col-span-1">
                  <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span> Problem
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div className="md:col-span-1 border-l border-gray-100 dark:border-gray-800 pl-8 hidden md:block">
                  <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> Solution
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{project.solution}</p>
                </div>
                <div className="md:col-span-1 md:hidden">
                  <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> Solution
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                </div>
                <div className="md:col-span-1 border-l border-gray-100 dark:border-gray-800 pl-8 hidden md:block">
                  <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Impact
                  </p>
                  <p className="text-[var(--text-primary)] text-sm leading-relaxed font-medium">{project.impact}</p>
                </div>
                <div className="md:col-span-1 md:hidden">
                  <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 dark:text-gray-500 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Impact
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed font-medium">{project.impact}</p>
                </div>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3.5 py-1.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs font-bold text-[var(--text-secondary)]">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-4 mb-8">
                {project.callouts.map((callout) => (
                  <div key={callout} className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-sm font-medium text-[var(--text-secondary)] flex items-start gap-3">
                    <svg className="w-5 h-5 text-[var(--accent-primary)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {callout}
                  </div>
                ))}
              </div>

              <div className="relative z-10 flex gap-4 flex-wrap pt-6 border-t border-gray-100 dark:border-gray-800">
                <a
                  href={project.artifacts.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold hover:bg-[var(--bg-primary)] hover:scale-[1.03] transition-all shadow-sm active:scale-95"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Repository
                </a>
                <a
                  href={project.artifacts.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-bold hover:shadow-lg hover:shadow-[var(--accent-primary)]/25 hover:scale-[1.03] transition-all active:scale-95"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Deployment
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;