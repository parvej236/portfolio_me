import React, { createContext, useContext, useState, useEffect } from 'react';
import { personalInfo as defaultPersonalInfo } from '../data/portfolioData';
import { PersonalInfo } from '../types/portfolio';

interface PortfolioContextType {
  info: PersonalInfo;
  updateInfo: (updates: Partial<PersonalInfo>) => void;
  resetInfo: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  isResumeModalOpen: boolean;
  setIsResumeModalOpen: (open: boolean) => void;
  isConfigDrawerOpen: boolean;
  setIsConfigDrawerOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'parvej_portfolio_custom_info';
const THEME_KEY = 'parvej_portfolio_theme';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem(THEME_KEY);
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // default dark for modern engineering theme
  });

  // Modals state
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isConfigDrawerOpen, setIsConfigDrawerOpen] = useState(false);

  // Configurable personal info state
  const [info, setInfo] = useState<PersonalInfo>(() => {
    if (typeof window === 'undefined') return defaultPersonalInfo;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultPersonalInfo, ...JSON.parse(saved) };
      }
    } catch {
      // ignore JSON parse error
    }
    return defaultPersonalInfo;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem(THEME_KEY, 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem(THEME_KEY, 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const updateInfo = (updates: Partial<PersonalInfo>) => {
    setInfo(prev => {
      const updated = { ...prev, ...updates };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore storage error
      }
      return updated;
    });
  };

  const resetInfo = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setInfo(defaultPersonalInfo);
  };

  return (
    <PortfolioContext.Provider
      value={{
        info,
        updateInfo,
        resetInfo,
        isDark,
        toggleTheme,
        isResumeModalOpen,
        setIsResumeModalOpen,
        isConfigDrawerOpen,
        setIsConfigDrawerOpen
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
