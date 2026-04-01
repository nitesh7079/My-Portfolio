import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { currentTheme, setTheme, isDark, themes } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemePickerOpen, setIsThemePickerOpen] = useState(false);
  const themePickerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themePickerRef.current && !themePickerRef.current.contains(event.target)) {
        setIsThemePickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'about', label: 'Story' },
    { id: 'skills', label: 'Capabilities' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Connect' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/70 dark:border-gray-800/60 bg-white/90 dark:bg-gray-950/85 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="z-50 relative">
            <p className="text-xs uppercase tracking-[0.45em] text-gray-500 dark:text-gray-400 font-semibold mb-0.5">
              Nitesh Raj
            </p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Executive Portfolio • {themes.find(t => t.id === currentTheme)?.name}
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 uppercase tracking-widest ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-lg shadow-[var(--accent-primary)]/25 scale-105'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 z-50 relative">
            {/* Theme Picker Dropdown */}
            <div className="relative" ref={themePickerRef}>
              <button
                onClick={() => setIsThemePickerOpen(!isThemePickerOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                aria-label="Selection Theme"
              >
                <div 
                  className="w-4 h-4 rounded-full shadow-inner transition-colors duration-500" 
                  style={{ backgroundColor: themes.find(t => t.id === currentTheme)?.color }}
                />
              </button>

              {isThemePickerOpen && (
                <div className="absolute right-0 mt-3 w-64 p-4 rounded-3xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800 animate-slide-up origin-top-right">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-4 px-2">
                    Premium Boardroom Themes
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => {
                          setTheme(theme.id);
                          setIsThemePickerOpen(false);
                        }}
                        className={`flex items-center gap-3 p-2 rounded-xl border transition-all text-left ${
                          currentTheme === theme.id
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        <div className="w-4 h-4 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: theme.color }} />
                        <span className={`text-[10px] font-bold truncate ${
                          currentTheme === theme.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          {theme.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] text-sm font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-md group"
            >
              Consultation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl z-40 transition-all duration-300 lg:hidden flex flex-col items-center justify-center min-h-screen ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-4 w-full max-w-sm px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full py-4 text-center rounded-2xl text-lg font-semibold transition-all border ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/20'
                  : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 hover:border-blue-500'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full py-4 mt-2 text-center rounded-2xl text-lg font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-xl hover:scale-[1.02] transition-transform"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;