
import React, { useEffect } from 'react';

// Simplified font loader that properly uses React hooks
interface FontLoaderProps {
  children: React.ReactNode;
}

export const FontLoader = ({ children }: FontLoaderProps) => {
  useEffect(() => {
    // Only run if we're in the browser
    if (typeof window === 'undefined') return;
    
    // Simple font loading without complex state management
    const loadFonts = async () => {
      try {
        // Check if FontFace is supported
        if (!window.FontFace) {
          document.body.classList.add('font-loaded');
          return;
        }

        const interFont = new FontFace(
          'Inter',
          'url(https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2)',
          { weight: '100 900', style: 'normal', display: 'swap' }
        );

        await interFont.load();
        document.fonts.add(interFont);
        document.body.classList.add('font-loaded');
      } catch (error) {
        console.warn('Font loading failed:', error);
        document.body.classList.add('font-loaded', 'font-error');
      }
    };

    loadFonts();
  }, []);

  return <>{children}</>;
};


