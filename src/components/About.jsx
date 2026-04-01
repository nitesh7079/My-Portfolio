import React from 'react';

const About = () => {
  const stats = [
    { icon: '🧩', value: '04+', label: 'Full Stack Products' },
    { icon: '🏢', value: '1', label: 'Industry Internship' },
    { icon: '📊', value: '120+', label: 'Business Records Automated' },
    { icon: '⚡', value: '3+', label: 'Years in CS Journey' },
  ];



  const narrativeSections = [
    {
      title: 'Accounting & Sales Manager',
      body: (
        <>
          Day-to-day, I run business operations with <span className="font-semibold text-[var(--accent-primary)]">Tally ERP 9</span>—posting ledgers, tracking receivables, preparing MIS packs, and aligning sales targets with actual bookings. The same rigor guides how I scope web products.
        </>
      ),
    },
    {
      title: 'Professional Summary',
      body: (
        <>
          Web development is more than code to me—it is about solving problems, learning from failure, and building scalable solutions. I’m <span className="font-semibold text-[var(--accent-primary)]">Nitesh Raj</span>, a 3rd-year B.Tech Computer Science student focused on full stack development, and this portfolio chronicles the skills, projects, and lessons I pick up along the way.
        </>
      ),
    },
    {
      title: 'Technical Toolkit',
      body: (
        <>
          My toolkit spans HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and supporting technologies such as Git, Python, and Java. I design REST APIs, reusable UI systems, and database schemas that scale while studying Next.js, Docker, and AWS to strengthen deployment workflows.
        </>
      ),
    },
    {
      title: 'Vision & Impact',
      body: (
        <>
          This journey reflects my growth from fundamentals to real-world delivery, and I’m committed to becoming a professional full stack developer who contributes to impactful industry projects.
        </>
      ),
    },
  ];

  const experienceTimeline = [
    {
      title: 'Accounting & Sales Manager — Family Business',
      meta: 'Operations | 2023 – Present',
      description: 'Own daily ledgers, inventory tracking, receivable follow-ups, and sales analytics using Tally ERP 9, Excel, and process checklists.'
    },
    {
      title: 'Paid Internship — Annapurna Veneer Udyog',
      meta: 'Sales & Accounts | 2024',
      description: 'Managed business data with Tally ERP and Microsoft Excel, translating operational needs into structured, reliable reporting.'
    },
    {
      title: 'Accounting Management System',
      meta: 'Full Stack Product | 2024',
      description: 'Built a MERN application that processes transactions, maintains records, and produces insights for stakeholders.'
    },
  ];

  const keyPromises = ['Problem-first approach', 'Well-documented delivery', 'Scalable architecture'];
  const currentFocus = ['Next.js', 'Docker', 'AWS'];
  const capabilityTags = ['MERN Stack Delivery', 'API Design', 'Data Modeling', 'UI Architecture', 'Testing & QA', 'Project Ownership'];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/4 w-[500px] h-[500px] bg-blue-100/30 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] bg-purple-100/30 dark:bg-purple-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up stagger-1">
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-[var(--accent-primary)]">
            Professional Story
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 text-[var(--text-primary)]">
            About Nitesh Raj
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-light">
            Web development is where I merge engineering thinking with business context—delivering products that are reliable, scalable, and grounded in user needs.
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
        </div>

        <div className="grid gap-12 lg:grid-cols-12 mb-20 items-start">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-10">
            <div className="p-10 rounded-[2.5rem] bg-[var(--bg-secondary)] text-[var(--text-primary)] shadow-2xl border border-[var(--border-color)] premium-card animate-slide-up stagger-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-2xl md:text-3xl font-extrabold leading-[1.2] relative z-10">
                Building scalable products at the intersection of engineering rigor and business context.
              </p>
              <p className="mt-6 text-[var(--text-secondary)] leading-relaxed text-lg font-light relative z-10">
                Every engagement starts with understanding the workflow, mapping data models, and designing an experience that feels intentional for end users.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-8 text-left relative z-10 pt-8 border-t border-white/10">
                {['Stakeholder empathy', 'Process automation', 'Documented handoffs'].map((item, index) => (
                  <div key={index} className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-primary)] opacity-80">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 animate-slide-up stagger-3">
              {narrativeSections.map((highlight, index) => (
                <div
                  key={index}
                  className="p-8 bg-[var(--bg-secondary)] backdrop-blur-sm rounded-3xl border border-[var(--border-color)] shadow-sm transition-all hover:border-[var(--accent-primary)]/30 group"
                >
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm font-medium">
                    {highlight.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-10 bg-[var(--bg-secondary)] backdrop-blur-md rounded-[2.5rem] border border-[var(--border-color)] shadow-sm premium-card animate-slide-up stagger-4">
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
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 space-y-8 animate-slide-up stagger-3">
            <div className="grid grid-cols-2 gap-4">
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

            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-2xl premium-card relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-200 mb-4 opacity-80">
                Current Focus
              </p>
              <h4 className="text-2xl font-extrabold leading-tight">Leveling up the software playbook</h4>
              <p className="mt-4 text-blue-100 leading-relaxed text-sm font-medium">
                Expanding my deployment and architecture toolkit with modern frameworks and cloud-native tooling to match enterprise standards.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-8">
                {currentFocus.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-xs font-bold border border-white/10 hover:bg-white/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-sm premium-card">
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
                    First, solve the problem. <br/>Then, write the code.
                 </p>
                 <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--accent-primary)]">
                    - John Johnson
                 </p>
             </div>
          </div>
        </div>
        
        {/* Expertise Highlights */}
        <div className="mt-16 text-center animate-slide-up stagger-4">
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