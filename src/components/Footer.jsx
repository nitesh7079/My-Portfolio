import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/nitesh7079',
      className: 'bg-[#181717] text-white',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/niteshraj91/',
      className: 'bg-[#0A66C2] text-white',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/nitesh_raj_7079/',
      className: 'text-white',
      style: {
        background:
          'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
      },
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm10 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      ),
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@EVERAPIDVLOG/shorts',
      className: 'bg-[#FF0000] text-white',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.543 6.498a2.648 2.648 0 00-1.863-1.874C18.353 4.25 12 4.25 12 4.25s-6.353 0-7.68.374A2.648 2.648 0 002.457 6.5 27.42 27.42 0 002.25 12a27.42 27.42 0 00.207 5.502 2.648 2.648 0 001.863 1.874C5.647 19.75 12 19.75 12 19.75s6.353 0 7.68-.374a2.648 2.648 0 001.863-1.874c.138-1.83.207-3.665.207-5.502a27.42 27.42 0 00-.207-5.502zM10 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-16 border-t border-[var(--border-color)]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-[var(--text-secondary)] mb-3">Nitesh Raj</p>
            <h3 className="text-3xl font-bold mb-4">Accounting & Sales Manager • Full Stack Developer</h3>
            <p className="text-[var(--text-secondary)]">
              Building companies from the inside out—balancing ledgers, guiding sales teams, and writing the web systems that keep everything synchronized.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-[var(--text-secondary)]">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="text-left hover:text-[var(--accent-primary)] transition"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">Contact</h4>
            <div className="space-y-3 text-[var(--text-secondary)]">
              <a href="mailto:niteshrajkumar66@gmail.com" className="flex items-center gap-3 hover:text-[var(--accent-primary)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@niteshraj.in
              </a>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 8581951334
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Punjab, India
              </p>
              <div className="flex gap-3 pt-2">
                {socialLinks.map(({ label, href, className, style, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={style}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center text-sm text-[var(--text-secondary)]">
          <p>© {new Date().getFullYear()} Nitesh Raj. Designed and built with React & Tailwind.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="w-2 h-2 bg-[var(--accent-primary)] rounded-full animate-pulse"></span>
            <span>Open for strategic collaborations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;