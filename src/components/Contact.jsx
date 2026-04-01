import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactDetails = [
    {
      label: 'Email',
      value: 'support@niteshraj.in',
      href: 'mailto:support@niteshraj.in',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Operations Desk',
      value: '+91 8581951334',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: 'Base',
      value: 'Punjab, India',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--bg-primary)] transition-colors duration-500 overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900/50 dark:to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up stagger-1">
          <p className="uppercase tracking-[0.4em] text-sm text-[var(--text-secondary)] font-bold mb-3">
            Executive Desk
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6">
            Let’s design operations that scale
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Whether it’s improving accounting discipline, shipping a new product module, or planning a business pivot—send a note and we will map it out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
          <div className="p-10 rounded-[2rem] bg-[var(--bg-secondary)] text-[var(--text-primary)] shadow-2xl executive-panel relative overflow-hidden group animate-slide-up stagger-2">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <p className="text-xs uppercase tracking-[0.4em] text-[var(--text-secondary)] mb-6 font-bold">Direct Line</p>
            <h3 className="text-3xl font-extrabold mb-6 leading-tight">Accounting & Web Systems Discussions</h3>
            <p className="text-[var(--text-secondary)] mb-10 text-lg font-light leading-relaxed">
              I split my day between Tally ERP 9 dashboards and React/Node codebases. Reach out if you need someone who understands both the books and the build.
            </p>

            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-center gap-5 group/item">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[var(--bg-primary)] flex items-center justify-center border border-[var(--border-color)] group-hover/item:bg-[var(--accent-primary)]/20 group-hover/item:border-[var(--accent-primary)]/30 transition-colors">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--text-secondary)] mb-1">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="text-lg font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-lg font-bold text-[var(--text-primary)]">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <p className="text-sm font-bold text-[var(--text-primary)]">Accepting consulting and product mandates</p>
              </div>
              <p className="text-[var(--text-secondary)] text-sm mt-3 font-medium">
                Preferred window: 9 AM – 7 PM IST | Monday – Saturday
              </p>
            </div>

            <div className="mt-10 flex gap-4 relative z-10">
              <a
                href="https://github.com/nitesh7079"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--accent-primary)]/10 hover:-translate-y-1 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                aria-label="GitHub Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/niteshraj91/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--accent-primary)]/10 hover:-translate-y-1 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="p-10 rounded-[2rem] bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl premium-card animate-slide-up stagger-3">
            <h3 className="text-3xl font-extrabold text-[var(--text-primary)] mb-8">Send a detailed brief</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[var(--text-secondary)] mb-2">Name <span className="text-[var(--accent-primary)]">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] focus:bg-[var(--bg-secondary)] focus:border-[var(--accent-primary)] focus:ring-4 focus:ring-[var(--accent-primary)]/10 outline-none transition-all placeholder-[var(--text-secondary)]/50 font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--text-secondary)] mb-2">Email <span className="text-[var(--accent-primary)]">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] focus:bg-[var(--bg-secondary)] focus:border-[var(--accent-primary)] focus:ring-4 focus:ring-[var(--accent-primary)]/10 outline-none transition-all placeholder-[var(--text-secondary)]/50 font-medium"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--text-secondary)] mb-2">Subject <span className="text-[var(--accent-primary)]">*</span></label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] focus:bg-[var(--bg-secondary)] focus:border-[var(--accent-primary)] focus:ring-4 focus:ring-[var(--accent-primary)]/10 outline-none transition-all placeholder-[var(--text-secondary)]/50 font-medium"
                    placeholder="What should we discuss?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--text-secondary)] mb-2">Message <span className="text-[var(--accent-primary)]">*</span></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-5 py-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] focus:bg-[var(--bg-secondary)] focus:border-[var(--accent-primary)] focus:ring-4 focus:ring-[var(--accent-primary)]/10 outline-none transition-all resize-none placeholder-[var(--text-secondary)]/50 font-medium"
                    placeholder="Share business context, timelines, or any existing systems."
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-bold text-lg hover:shadow-lg hover:shadow-[var(--accent-primary)]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Submit Brief
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;