import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Mail, Info, Menu, X } from 'lucide-react';
import { isInstalledPWA } from '@/pwa';

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const [isPWA, setIsPWA] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Check if running as installed PWA
    setIsPWA(isInstalledPWA());
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Don't render special PWA UI if not running as installed app
  if (!isPWA) {
    return <>{children}</>;
  }
  
  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { path: '/blog', label: 'Blog', icon: <FileText className="w-5 h-5" /> },
    { path: '/about', label: 'About', icon: <Info className="w-5 h-5" /> },
    { path: '/contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
  ];
  
  return (
    <div className="pwa-shell flex flex-col min-h-screen">
      {/* PWA Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">WP</span>
            <span className="text-xl font-light text-white/90">Agency</span>
            <span className="text-blue-400 text-lg font-bold">.xyz</span>
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white/80 hover:text-white"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>
      
      {/* PWA Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          >
            <nav className="py-4 px-4">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                        location.pathname === item.path
                          ? 'bg-blue-600/20 text-blue-400'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      } transition-colors`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main Content with PWA padding */}
      <main className="flex-grow pt-16 pb-16">
        {children}
      </main>
      
      {/* PWA Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-white/10">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full h-full ${
                location.pathname === item.path
                  ? 'text-blue-400'
                  : 'text-white/60 hover:text-white'
              } transition-colors`}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default AppShell;

