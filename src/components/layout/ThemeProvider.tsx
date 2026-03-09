
import React, { createContext, useContext, useState, useEffect } from 'react';
import { errorLogger } from '@/utils/errorLogger';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    try {
      // Check for saved theme preference or default to light
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setTheme(savedTheme);
      } else {
        // Default to light mode instead of system preference
        setTheme('light');
      }
    } catch (error) {
      errorLogger.log(error as Error, 'Theme initialization');
      setTheme('light'); // Fallback to light theme
    }
  }, []);

  useEffect(() => {
    try {
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    } catch (error) {
      errorLogger.log(error as Error, 'Theme application');
    }
  }, [theme]);

  const toggleTheme = () => {
    try {
      setTheme(prev => prev === 'light' ? 'dark' : 'light');
    } catch (error) {
      errorLogger.log(error as Error, 'Theme toggle');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


