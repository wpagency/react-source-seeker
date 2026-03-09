import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, CheckCircle } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/micro-interactions';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPrompt: React.FC = () => {
  const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || 
        (window.navigator as any).standalone === true) {
      setIsInstalled(true);
      return;
    }
    
    // Check if user previously dismissed
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed && (Date.now() - parseInt(dismissed)) < 7 * 24 * 60 * 60 * 1000) {
      setIsDismissed(true);
      return;
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent Chrome 76+ from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later
      setInstallPromptEvent(e as BeforeInstallPromptEvent);
      // Show our custom install prompt after a delay
      setTimeout(() => setIsVisible(true), 3000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsVisible(false);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPromptEvent) return;

    // Show the install prompt
    await installPromptEvent.prompt();
    
    // Wait for the user to respond to the prompt
    const choiceResult = await installPromptEvent.userChoice;
    
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
      setIsInstalled(true);
    } else {
      console.log('User dismissed the install prompt');
      // Remember dismissal for 7 days
      localStorage.setItem('pwa-install-dismissed', Date.now().toString());
      setIsDismissed(true);
    }
    
    // Clear the saved prompt since it can't be used again
    setInstallPromptEvent(null);
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    // Remember dismissal for 7 days
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
    setIsDismissed(true);
  };

  // Don't render anything if already installed or permanently dismissed
  if (isInstalled || isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-0 right-0 mx-auto w-[90%] max-w-md z-50"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl">
            <button 
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Download className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">Install Source Seeker.space</h3>
                <p className="text-white/70 text-sm mb-4">
                  Add our app to your home screen for faster access and an enhanced experience, even when offline.
                </p>
                
                <div className="flex gap-3">
                  <ShimmerButton
                    onClick={handleInstall}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-sm"
                    shimmerColor="rgba(255, 255, 255, 0.3)"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Install App
                    </span>
                  </ShimmerButton>
                  
                  <button
                    onClick={handleDismiss}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-lg font-medium text-sm transition-colors"
                  >
                    Not Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InstallPrompt;

