import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface OfflineContentProps {
  title?: string;
  message?: string;
  showCachedPages?: boolean;
}

const OfflineContent: React.FC<OfflineContentProps> = ({
  title = "You're Offline",
  message = "Some content may not be available while you're offline. We'll automatically update when you're back online.",
  showCachedPages = true
}) => {
  const [cachedPages, setCachedPages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCachedPages = async () => {
      if (!('caches' in window)) {
        setIsLoading(false);
        return;
      }
      
      try {
        const cache = await caches.open('Source Seeker-cache-v1');
        const requests = await cache.keys();
        
        // Filter for HTML pages
        const htmlRequests = requests
          .filter(request => {
            const url = new URL(request.url);
            return (url.pathname.endsWith('.html') || 
                   url.pathname.endsWith('/') || 
                   !url.pathname.includes('.')) &&
                   !url.pathname.includes('offline');
          })
          .map(request => {
            const url = new URL(request.url);
            return url.pathname;
          });
        
        setCachedPages(htmlRequests);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading cached pages:', error);
        setIsLoading(false);
      }
    };
    
    loadCachedPages();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
          <WifiOff className="w-6 h-6 text-red-400" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/70 mb-6">{message}</p>
          
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refresh Page</span>
          </button>
        </div>
      </div>
      
      {showCachedPages && (
        <div className="mt-8 pt-6 border-t border-white/10">
          <h4 className="text-lg font-medium text-white mb-4">Available Offline</h4>
          
          {isLoading ? (
            <div className="flex items-center gap-2 text-white/60">
              <Clock className="w-4 h-4 animate-spin" />
              <span>Loading cached pages...</span>
            </div>
          ) : cachedPages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cachedPages.map((path, index) => (
                <Link
                  key={index}
                  to={path}
                  className="px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors text-sm"
                >
                  {path === '/' ? 'Home' : path.replace(/\//g, ' › ').trim()}
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-white/60">No pages available offline yet. Visit some pages while online to cache them for offline use.</p>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default OfflineContent;

