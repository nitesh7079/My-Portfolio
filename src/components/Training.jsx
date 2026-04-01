import React from 'react';

const Training = () => {
  const trainings = [
    {
      title: 'Java Fundamentals',
      organization: 'Skill Stone (Grazitti Interactive initiative)',
      description: 'Strengthened OOP patterns, data structures, and best practices that now guide my Node.js architecture decisions.',
      details: [
        'Hands-on assignments covering control flow, data handling, and error management improved debugging speed by 30%.',
        'Mini projects reinforced writing readable, testable code—habits I carry into every MERN engagement.'
      ],
      date: "Jun'25 – Jul'25"
    }
  ];

  const certificates = [
    {
      title: 'Cloud Computing',
      organization: 'NPTEL',
      date: "Jul'24 – Dec'24"
    },
    {
      title: 'ChatGPT Made Easy: AI Essentials for Beginners',
      organization: 'Coursera',
      date: "Jul'25 – Aug'24"
    }
  ];

  return (
    <section id="training" className="py-24 bg-[var(--bg-primary)] transition-colors duration-500 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up stagger-1">
          <p className="uppercase tracking-[0.4em] text-xs font-bold text-[var(--text-secondary)] mb-4">
            Training & Credentials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] leading-tight">
            Continuous learning keeps <br className="hidden md:block"/>the playbook sharp
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-light mt-6">
            Formal training backs the instincts I use in the field. Here’s the structured learning that supports my on-the-ground experience.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 space-y-10 animate-slide-up stagger-2">
            {trainings.map((training) => (
              <div key={training.title} className="p-10 rounded-[2.5rem] bg-[var(--bg-secondary)] backdrop-blur-sm border border-[var(--border-color)] shadow-xl premium-card group relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-6 relative z-10">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-2">Immersive Sprint</p>
                    <h3 className="text-3xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-tight">{training.title}</h3>
                    <p className="text-[var(--accent-primary)] font-extrabold text-base mt-1">{training.organization}</p>
                  </div>
                  <span className="shrink-0 px-5 py-2 rounded-xl bg-[var(--bg-primary)] text-xs font-black uppercase tracking-widest text-[var(--text-secondary)] border border-[var(--border-color)] self-start">
                    {training.date}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] mb-8 text-lg font-medium leading-relaxed relative z-10">{training.description}</p>
                <ul className="space-y-4 text-[var(--text-secondary)] relative z-10">
                  {training.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-4 group/item">
                      <span className="shrink-0 w-6 h-6 rounded-lg bg-[var(--bg-primary)] text-[var(--accent-primary)] flex items-center justify-center font-bold text-xs mt-0.5 group-hover/item:bg-[var(--accent-primary)] group-hover/item:text-white transition-all">
                        ▹
                      </span>
                      <span className="text-sm font-medium leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 animate-slide-up stagger-3">
            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-2xl premium-card relative overflow-hidden group">
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-70 mb-4">Certifications</p>
              <h3 className="text-2xl font-extrabold mb-8 relative z-10">Credentials reinforcing <br/>delivery rigor</h3>
              <div className="space-y-6 relative z-10">
                {certificates.map((cert) => (
                  <div key={cert.title} className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all hover:-translate-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-100 mb-2">{cert.organization}</p>
                    <h4 className="text-lg font-extrabold leading-tight mb-2 uppercase tracking-tight">{cert.title}</h4>
                    <p className="text-white/60 text-xs font-bold">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;