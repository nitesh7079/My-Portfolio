import React from 'react';

const skillStacks = [
  {
    title: 'Operations Stack',
    subtitle: 'Accounting & Sales Leadership',
    accent: 'from-amber-500 to-orange-500',
    highlight: 'Business Operations',
    skills: [
      { name: 'Tally ERP 9', detail: 'Daily ledger entries, GST readiness, receivable controls', level: 95 },
      { name: 'Sales Management', detail: 'Forecasting, pipeline reviews, client coordination', level: 90 },
      { name: 'Microsoft Excel & MIS', detail: 'Pivot dashboards, reconciliations, reporting packs', level: 92 },
    ],
  },
  {
    title: 'Engineering Stack',
    subtitle: 'Full Stack Product Delivery',
    accent: 'from-blue-600 to-purple-600',
    highlight: 'Web Systems',
    skills: [
      { name: 'React & Frontend Systems', detail: 'Component libraries, Tailwind UI, motion design', level: 90 },
      { name: 'Node.js & Express APIs', detail: 'REST design, auth flows, deployment scripts', level: 88 },
      { name: 'MongoDB & Data Modeling', detail: 'Schema design, aggregation, backups', level: 85 },
    ],
  },
];

const learningFocus = ['Next.js for production routing', 'Docker for repeatable deployments', 'AWS foundations'];
const signatureOffers = [
  {
    title: 'Operations Intelligence Layer',
    description: 'Digitize ledgers, invoices, and inventory with accurate data flows between Tally ERP 9 and custom dashboards.',
    icon: '📊',
  },
  {
    title: 'Sales Enablement Portals',
    description: 'React + Node.js applications that streamline quoting, approvals, and communication with customers.',
    icon: '🤝',
  },
  {
    title: 'Full Stack Delivery Playbook',
    description: 'From requirements to deployment, I bring documentation, testing, and measurable KPIs for every release.',
    icon: '⚙️',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[var(--bg-primary)] transition-colors duration-500 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-slide-up stagger-1">
          <p className="uppercase tracking-[0.4em] text-xs font-bold text-[var(--text-secondary)] mb-4">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--text-primary)] leading-tight">
            Bridging Business Operations <br className="hidden md:block" />& Full Stack Engineering
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-light">
            The same person who balances ledgers in Tally ERP 9 also writes the APIs and interfaces that automate those workflows. This mix keeps my solutions grounded and executable.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
          {skillStacks.map((stack, index) => (
            <div
              key={stack.title}
              className="p-10 rounded-[2.5rem] bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl premium-card animate-slide-up relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-500/5 dark:bg-white/5 blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-6 relative z-10">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-2">
                    {stack.highlight}
                  </p>
                  <h3 className="text-3xl font-extrabold text-[var(--text-primary)]">{stack.title}</h3>
                  <p className="text-sm font-bold text-[var(--text-secondary)] mt-1">{stack.subtitle}</p>
                </div>
                <div className={`shrink-0 px-5 py-2 rounded-full text-white text-xs font-black uppercase tracking-widest bg-gradient-to-r shadow-lg ${stack.accent}`}>
                  Proven
                </div>
              </div>

              <div className="space-y-10 relative z-10">
                {stack.skills.map((skill) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between mb-4 items-end">
                      <div className="max-w-[80%]">
                        <p className="text-xl font-extrabold text-[var(--text-primary)] group-hover/skill:text-[var(--accent-primary)] transition-colors">{skill.name}</p>
                        <p className="text-xs font-bold text-[var(--text-secondary)] mt-1 leading-relaxed">{skill.detail}</p>
                      </div>
                      <span className="text-[var(--text-primary)] font-black text-lg">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-[var(--bg-primary)] rounded-full overflow-hidden border border-[var(--border-color)]">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r shadow-inner transition-all duration-1000 ease-out ${stack.accent}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center mt-24 animate-slide-up stagger-4">
          <div className="inline-block p-10 rounded-[3rem] bg-[var(--accent-primary)] text-white shadow-2xl relative overflow-hidden premium-card group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <h3 className="text-2xl font-extrabold mb-4 relative z-10">
              Currently Leveling Up
            </h3>
            <p className="text-blue-100/70 text-sm mb-10 max-w-xl mx-auto font-medium relative z-10">
              Expanding my deployment and architecture toolkit to match the reliability expected from enterprise systems.
            </p>
            <div className="flex flex-wrap justify-center gap-3 relative z-10">
              {learningFocus.map((item) => (
                <span
                  key={item}
                  className="px-6 py-3 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md text-white font-bold text-xs border border-white/10 hover:bg-white/20 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-24">
          {signatureOffers.map((offer, index) => (
            <div
              key={offer.title}
              className="p-10 rounded-[2.5rem] bg-[var(--bg-secondary)] backdrop-blur-sm border border-[var(--border-color)] shadow-sm hover:border-[var(--accent-primary)]/30 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform origin-left">{offer.icon}</div>
              <h4 className="text-xl font-extrabold text-[var(--text-primary)] mb-4 leading-tight group-hover:text-[var(--accent-primary)] transition-colors">{offer.title}</h4>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-medium">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;