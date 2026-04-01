import React from 'react';

const Education = () => {
  const education = [
    {
      institution: 'Lovely Professional University',
      degree: 'B.Tech in Computer Science & Engineering',
      location: 'Phagwara, Punjab',
      date: 'Aug 2023 – Present',
      notes: 'Driving deeper into software architecture while applying lessons directly to business systems.',
    },
    {
      institution: 'Bhartiya Inter College',
      degree: 'Intermediate',
      location: 'Gahri, Bihar',
      date: "Apr'20 – Mar'22",
      notes: 'Commerce-focused curriculum that sparked my interest in accounting workflows.'
    },
    {
      institution: 'MKD Public School',
      degree: 'Matriculation',
      location: 'Motihari, Bihar',
      date: 'Mar 2020',
      notes: 'Strong fundamentals in mathematics and analytical problem-solving.'
    }
  ];

  return (
    <section id="education" className="py-24 bg-[var(--bg-primary)] transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up stagger-1">
          <p className="uppercase tracking-[0.4em] text-xs font-bold text-[var(--text-secondary)] mb-4">
            Academic Foundation
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] leading-tight">Education that backs <br className="hidden md:block"/>business literacy</h2>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-light mt-6">
            Formal studies ensure I understand both the theoretical and practical sides of building technology-led businesses.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <span className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[var(--accent-primary)] via-[var(--accent-secondary)] to-transparent opacity-20 hidden md:block -ml-0.5"></span>
          
          <div className="space-y-12 relative z-10">
            {education.map((edu, index) => (
              <div 
                key={edu.institution} 
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-slide-up`}
                style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 top-10 w-4 h-4 rounded-full bg-[var(--bg-secondary)] border-4 border-[var(--accent-primary)] shadow-lg z-20 -ml-2 hidden md:block"></div>
                
                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="p-10 rounded-[2.5rem] bg-[var(--bg-secondary)] backdrop-blur-sm border border-[var(--border-color)] shadow-sm premium-card group relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="px-4 py-1.5 rounded-xl bg-[var(--bg-primary)] text-[var(--accent-primary)] text-[10px] font-black uppercase tracking-[0.2em] border border-[var(--border-color)]">
                          {edu.date}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">
                           <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {edu.location}
                        </div>
                      </div>
                      <h3 className="text-2xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors leading-tight mb-2 tracking-tight">{edu.institution}</h3>
                      <p className="text-[var(--text-secondary)] font-extrabold text-sm uppercase tracking-wide">{edu.degree}</p>
                    </div>
                    
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-medium pt-6 border-t border-[var(--border-color)]">{edu.notes}</p>
                  </div>
                </div>
                
                {/* Spacer for other side */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;