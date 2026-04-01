import React from 'react';
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
