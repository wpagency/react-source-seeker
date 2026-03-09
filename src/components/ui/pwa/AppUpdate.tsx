import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, X } from 'lucide-react';

interface AppUpdateProps {
  checkInterval?: number; // in milliseconds
}

const AppUpdate: React.FC<AppUpdateProps> = ({ 
  checkInterval = 60 * 60 * 1000 // Default: check every hour
}) => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  
  useEffect(() => {
    // Check for service worker updates
    const checkForUpdates = async () => {
      if (!('serviceWorker' in navigator)) return;
      
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (!registration) return;
        
        // Force an update check
        await registration.update();
        
        // Listen for new service worker
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              // New service worker is installed and waiting
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setUpdateAvailable(true);
              }
            });
          }
        });
      } catch (error) {
        console.error('Error checking for updates:', error);
      }
    };
    
    // Check immediately on component mount
    checkForUpdates();
    
    // Set up periodic checks
    const intervalId = setInterval(checkForUpdates, checkInterval);
    
    return () => clearInterval(intervalId);
  }, [checkInterval]);
  
  const applyUpdate = () => {
    // Reload the page to apply the update
    window.location.reload();
  };
  
  const dismissUpdate = () => {
    setUpdateAvailable(false);
  };
  
  return (
    <AnimatePresence>
      {updateAvailable && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-4 z-50 max-w-xs"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-4 shadow-lg">
            <button 
              onClick={dismissUpdate}
              className="absolute top-2 right-2 text-white/80 hover:text-white"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
            
            <h3 className="font-bold mb-2">Update Available</h3>
            <p className="text-sm mb-4">A new version of the app is available. Refresh to update.</p>
            
            <button
              onClick={applyUpdate}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Update Now</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppUpdate;

