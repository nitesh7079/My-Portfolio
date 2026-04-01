/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
  { id: 'sky', name: 'Executive Sky', color: '#2563eb', type: 'light' },
  { id: 'midnight', name: 'Midnight Boardroom', color: '#0b1220', type: 'dark' },
  { id: 'emerald', name: 'Emerald Ledger', color: '#059669', type: 'light' },
  { id: 'amethyst', name: 'Royal Amethyst', color: '#7c3aed', type: 'light' },
  { id: 'obsidian', name: 'Obsidian Tech', color: '#000000', type: 'dark' },
  { id: 'slate', name: 'Slate Prestige', color: '#1e293b', type: 'dark' },
  { id: 'cyber', name: 'Cyber Innovation', color: '#84cc16', type: 'dark' },
  { id: 'sand', name: 'Cappuccino Pro', color: '#b45309', type: 'light' },
  { id: 'rose', name: 'Rose Executive', color: '#f43f5e', type: 'dark' },
  { id: 'ocean', name: 'Deep Ocean', color: '#020617', type: 'dark' },
];

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || 'midnight';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all existing theme classes
    themes.forEach(t => root.classList.remove(`theme-${t.id}`));
    root.classList.remove('dark');

    // Add new theme class
    root.classList.add(`theme-${currentTheme}`);
    
    // Manage Tailwind 'dark' class for compatibility with dark: utilities
    const themeData = themes.find(t => t.id === currentTheme);
    if (themeData?.type === 'dark') {
      root.classList.add('dark');
    }

    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  const setTheme = (themeId) => {
    if (themes.some(t => t.id === themeId)) {
      setCurrentTheme(themeId);
    }
  };

  // For backward compatibility with components that still use isDark
  const isDark = themes.find(t => t.id === currentTheme)?.type === 'dark';

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, isDark, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};