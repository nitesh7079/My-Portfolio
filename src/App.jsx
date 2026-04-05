import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Training from './components/Training';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // We already have .animate-slide-up on individual elements (cards, headers, etc)
    // We just need to give them a way to trigger via scroll.
    const elements = document.querySelectorAll('.animate-slide-up');
    
    // Reset them to invisible initially so they can be revealed on scroll
    elements.forEach(el => {
      // Skip navbar dropdowns which are fixed
      if (!el.closest('nav')) {
        el.classList.add('scroll-hidden');
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Use a slight bounding rect check so it doesn't flicker 
        // aggressively when partially leaving the screen
        if (entry.isIntersecting) {
          entry.target.classList.remove('scroll-hidden');
          entry.target.classList.add('scroll-show');
        } else {
          // Removes animation so it can replay when scrolled back to
          entry.target.classList.remove('scroll-show');
          entry.target.classList.add('scroll-hidden');
        }
      });
    }, {
      // Adjusted rootMargin to ensure elements animate beautifully both up and down
      rootMargin: '10% 0px -10% 0px',
      threshold: 0
    });

    elements.forEach(el => {
      if (!el.closest('nav')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500 bg-[var(--bg-primary)]">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Training />
        <Education />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
