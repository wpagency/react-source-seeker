import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerServiceWorker, initPerformanceMonitoring } from './pwa';
import { FontLoader } from './components/ui/font-loader';

// Register service worker for PWA functionality
registerServiceWorker();

// Initialize performance monitoring
initPerformanceMonitoring();

// Font preloading
const preloadFonts = () => {
  const fontLinks = [
    'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
    'https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff2'
  ];

  fontLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Preconnect to critical resources
const preconnectResources = () => {
  const resources = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://images.pexels.com'
  ];

  resources.forEach(href => {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      if (href.includes('gstatic')) link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  });
};

// Initialize optimizations
preconnectResources();
preloadFonts();

// Ensure the root element exists
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

// Optimize rendering with React 18 features
const root = createRoot(rootElement);
root.render(
  <FontLoader>
    <App />
  </FontLoader>
);

// Add PWA-specific styles if running as installed app
if (window.matchMedia('(display-mode: standalone)').matches || 
    (window.navigator as any).standalone === true) {
  document.body.classList.add('pwa-mode');
}

// Register event listeners for online/offline status
window.addEventListener('online', () => {
  document.body.classList.remove('offline-mode');
  document.body.classList.add('online-mode');
});

window.addEventListener('offline', () => {
  document.body.classList.remove('online-mode');
  document.body.classList.add('offline-mode');
});

// Set initial online/offline class
if (navigator.onLine) {
  document.body.classList.add('online-mode');
} else {
  document.body.classList.add('offline-mode');
}

