import React from 'react';

const About = () => {
  const stats = [
    { icon: '📒', value: '500+', label: 'Ledgers Reconciled' },
    { icon: '💼', value: '2', label: 'Ops Roles Secured' },
    { icon: '🧑‍🎓', value: '3rd', label: 'B.Tech Year' },
    { icon: '🧩', value: '01', label: 'Full Stack Platforms' },
  ];



  const narrativeSections = [
    {
      title: 'Business Operations in Action',
      body: (
        <>
          I work in accounting and sales operations, where I manage business data using <span className="font-semibold text-[var(--accent-primary)]">Tally ERP</span> and Microsoft Excel, including ledgers, receivables, and MIS reporting. Currently, I am learning and exploring new business strategies and working with tools like Tally, Excel, and other business software to strengthen my operational skills.
        </>
      ),
    },
    {
      title: 'Applied Engineering Journey',
      body: (
        <>
          My name is <span className="font-semibold text-[var(--accent-primary)]">Nitesh Raj</span>, and I am a 3rd-year B.Tech Computer Science student. What makes my journey different is that I do not just learn development in theory — I apply it in real business environments. My portfolio reflects this journey of combining business knowledge with technical skills to build practical and scalable solutions.
        </>
      ),
    },
    {
      title: 'Full Stack Craft',
      body: (
        <>
          Along with this, I am also a full stack developer, working with technologies like HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I have also developed a full stack Accounting Management System, which is inspired by real-world business problems and is designed to manage transactions, records, and data efficiently.
        </>
      ),
    },
    {
      title: 'Career Direction',
      body: (
        <>
          Recently, I have been placed in a plywood company in Nepal for the role of Accounting and Sales Manager with a good package, and I will be joining after this semester. My long-term goal is to become a businessman. I plan to gain 2–3 years of real industry experience, understand business operations deeply, and then start and run my own business.
        </>
      ),
    },
  ];

  const experienceTimeline = [
    {
      title: 'Accounting & Sales Manager — Nepal Plywood Company',
      meta: 'Business Ops | 2025 – Present',
      description: 'Lead ledgers, receivables, and sales analytics while aligning field insights with strategic decisions for leadership.'
    },
    {
      title: 'Incoming Manager — Annapurna Veneer Udyog',
      meta: 'Sales & Accounts | Joining Soon',
      description: 'Transitioning to Annapurna Veneer after the current semester to continue modernizing accounting workflows and MIS packs.'
    },
    {
      title: 'Accounting Management System',
      meta: 'Full Stack Product | 2024',
      description: 'Built a MERN platform inspired by real business problems to capture transactions, records, and analytics from a single source of truth.'
    },
  ];

  const keyPromises = ['Business-informed software', 'Real-world validation', 'Scale-ready delivery'];
  const aboutPoints = [
    'My name is Nitesh Raj, and I am a 3rd-year B.Tech Computer Science student.',
    'What makes my journey different is that I do not just learn development in theory — I apply it in real business environments.',
    'I work in accounting and sales operations, where I manage business data using Tally ERP and Microsoft Excel, including ledgers, receivables, and MIS reporting.',
    'Along with this, I am also a full stack developer, working with technologies like HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.',
    'Currently, I am learning and exploring new business strategies and working with tools like Tally, Excel, and other business software to strengthen my operational skills.',
    'I have also developed a full stack Accounting Management System, which is inspired by real-world business problems and is designed to manage transactions, records, and data efficiently.',
    'Recently, I have been placed in a plywood company in Nepal for the role of Accounting and Sales Manager with a good package, and I will be joining after this semester.',
    'My long-term goal is to become a businessman. I plan to gain 2–3 years of real industry experience, understand business operations deeply, and then start and run my own business.',
    'My portfolio reflects this journey of combining business knowledge with technical skills to build practical and scalable solutions.'
  ];
  const currentFocus = ['Next.js', 'Docker', 'AWS'];
  const capabilityTags = ['MERN Stack Delivery', 'API Design', 'Data Modeling', 'UI Architecture', 'Testing & QA', 'Project Ownership'];
  const achievements = [
    {
      badge: 'Operations',
      title: 'Accounting & Sales Manager',
      impact: 'Ledgers, receivables, MIS',
      description: 'Run accounting and sales operations daily, translating Tally ERP and Excel workflows into actionable data for leadership.'
    },
    {
      badge: 'Placement',
      title: 'Annapurna Veneer Opportunity',
      impact: 'Offer secured',
      description: 'Joining Annapurna Veneer after the semester to scale sales intelligence and bring software rigor to finance ops.'
    },
    {
      badge: 'Product Build',
      title: 'Accounting Management System',
      impact: 'End-to-end visibility',
      description: 'Shipped a MERN stack product modeled on real business problems to manage transactions, approvals, and analytics from one dashboard.'
    }
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/4 w-[500px] h-[500px] bg-blue-100/30 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] bg-purple-100/30 dark:bg-purple-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up stagger-1">
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-[var(--accent-primary)]">
            Professional Story
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-[var(--text-primary)]">
            About Nitesh Raj
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-light">
            I run accounting and sales operations today while engineering the web systems that will power tomorrow’s business—merging business discipline with reliable, scalable software.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {keyPromises.map((promise, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-sm text-xs font-bold text-[var(--text-primary)] transition-transform hover:scale-105"
              >
                {promise}
              </span>
            ))}
          </div>
          <div className="max-w-4xl mx-auto mt-10 space-y-4 text-left">
            {aboutPoints.map((point, index) => (
              <div
                key={point}
                className="flex gap-5 p-5 rounded-3xl bg-gradient-to-r from-[var(--bg-secondary)] to-[var(--bg-primary)] border border-[var(--border-color)]/60 shadow-sm"
              >
                <span className="text-xs font-black tracking-[0.4em] text-[var(--accent-primary)] pt-2">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 mb-14 items-start">
          <div className="p-10 bg-[var(--bg-secondary)] backdrop-blur-md rounded-[2.5rem] border border-[var(--border-color)] shadow-sm premium-card animate-slide-up stagger-3">
            <div className="mb-8">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-2">
                Recent Exposure
              </p>
              <h4 className="text-2xl font-extrabold text-[var(--text-primary)]">
                Industry Context & Delivery
              </h4>
            </div>
            <div className="space-y-8">
              {experienceTimeline.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="relative">
                    <div className="w-1.5 h-full bg-[var(--border-color)] rounded-full group-hover:bg-[var(--accent-primary)] transition-colors"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--bg-secondary)] border-2 border-[var(--accent-primary)] shadow-sm"></div>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent-primary)] mb-1">
                      {item.meta}
                    </p>
                    <h5 className="text-lg font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h5>
                    <p className="text-[var(--text-secondary)] mt-2 text-sm leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-slide-up stagger-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[var(--border-color)] bg-[var(--bg-secondary)] backdrop-blur-sm p-8 text-center shadow-sm hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:border-[var(--accent-primary)]/20 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-3xl font-black text-[var(--text-primary)] mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 rounded-[2.5rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-sm premium-card animate-slide-up stagger-5">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-6">
              Capabilities
            </p>
            <h4 className="text-2xl font-extrabold text-[var(--text-primary)] mb-6 leading-tight">
              Where I add specific value
            </h4>
            <div className="flex flex-wrap gap-3">
              {capabilityTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2.5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs font-bold text-[var(--text-primary)] hover:border-[var(--accent-primary)]/40 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-[var(--bg-primary)] border border-[var(--border-color)] text-center animate-fade-in">
            <div className="text-gray-300 dark:text-gray-600 text-7xl mb-4 font-serif">"</div>
            <p className="text-xl font-bold text-[var(--text-primary)] italic mb-6 leading-relaxed relative z-10">
              First, solve the problem. <br />Then, write the code.
            </p>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-primary)]">
              - John Johnson
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-12 mb-12 text-center animate-slide-up stagger-4">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--text-secondary)] mb-10">Achievements</p>
          <div className="grid gap-6 md:grid-cols-3">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="p-8 rounded-[2rem] bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-lg text-left hover:-translate-y-1.5 transition-all hover:border-[var(--accent-primary)]/40"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[var(--accent-primary)] mb-4">{achievement.badge}</p>
                <h5 className="text-xl font-bold text-[var(--text-primary)] mb-2">{achievement.title}</h5>
                <p className="text-sm font-semibold text-[var(--text-secondary)] mb-4 uppercase tracking-[0.2em]">{achievement.impact}</p>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Highlights */}
        <div className="mt-12 text-center animate-slide-up stagger-4">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--text-secondary)] mb-10">Core Strengths</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Problem Solving', 'Critical Thinking', 'Adaptability', 'MERN Stack', 'Process Automation', 'Database Management'].map((strength, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-2xl font-bold text-sm hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all hover:-translate-y-1 shadow-sm"
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