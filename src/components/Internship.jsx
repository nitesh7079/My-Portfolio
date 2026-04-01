import React from 'react';

const experiences = [
  {
    title: 'Accounting & Sales Manager',
    organization: 'Family Manufacturing Business',
    timeline: 'Aug 2023 – Present',
    focus: 'Operations Leadership',
    highlights: [
      'Own daily ledgers, GST readiness, and receivable controls inside Tally ERP 9.',
      'Run sales forecasting huddles, track inquiries through closure, and report deviations.',
      'Standardized Excel-based MIS packs for leadership, reducing reconciliation time by 30%.'
    ],
    stack: ['Tally ERP 9', 'Sales Playbooks', 'Excel MIS'],
    accent: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Sales & Accounts Intern',
    organization: 'Annapurna Veneer Udyog',
    timeline: 'Jun 2025 – Sept 2025',
    focus: 'Process Optimization',
    highlights: [
      'Processed invoices, purchase orders, and bank entries with near-zero discrepancies.',
      'Improved Excel data hygiene, helping the team prepare accuracy-driven reports.',
      'Supported coordination between sales, inventory, and finance for on-time dispatches.'
    ],
    stack: ['Tally ERP 9', 'Microsoft Excel', 'Sales Coordination'],
    accent: 'from-blue-600 to-purple-600'
  }
];

const Internship = () => {
  return (
    <section id="experience" className="py-24 bg-[var(--bg-primary)] transition-colors duration-500 overflow-hidden relative">
      {/* Decorative Orb */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up stagger-1">
          <p className="uppercase tracking-[0.4em] text-xs font-bold text-[var(--text-secondary)] mb-4">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6 leading-tight">
            Operating inside the business <br className="hidden md:block"/>while engineering the system
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-light">
            Real exposure to ledgers, sales calls, and client escalations keeps my software pragmatic. These engagements show how I pair accounting discipline with product thinking.
          </p>
        </div>

        <div className="grid gap-12 max-w-5xl mx-auto">
          {experiences.map((item, index) => (
            <div
              key={item.title}
              className="p-10 rounded-[2.5rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] backdrop-blur-sm shadow-sm premium-card animate-slide-up relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
            >
              <div className="absolute top-0 right-10 w-4 h-full bg-gradient-to-b from-blue-600/10 to-transparent transition-colors group-hover:from-blue-600/20"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 gap-6 relative z-10">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent-primary)] mb-2">
                    {item.focus}
                  </p>
                  <h3 className="text-3xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors uppercase tracking-tight">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] text-lg font-bold mt-1">{item.organization}</p>
                </div>
                <div className={`shrink-0 px-6 py-2.5 rounded-full text-white text-xs font-black uppercase tracking-widest bg-gradient-to-r shadow-lg ${item.accent} self-start`}>
                  {item.timeline}
                </div>
              </div>

              <ul className="space-y-4 text-[var(--text-secondary)] mb-10 relative z-10">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-4 items-start group/item">
                    <span className="shrink-0 w-6 h-6 rounded-lg bg-[var(--bg-primary)] text-[var(--accent-primary)] flex items-center justify-center font-bold text-xs mt-0.5 group-hover/item:bg-[var(--accent-primary)] group-hover/item:text-white transition-all">
                      ✓
                    </span>
                    <span className="text-base font-medium leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2.5 relative z-10 pt-8 border-t border-gray-100 dark:border-gray-800">
                {item.stack.map((badge) => (
                  <span key={badge} className="px-4 py-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs font-bold text-[var(--text-secondary)] shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;