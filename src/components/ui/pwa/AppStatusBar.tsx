import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi, WifiOff, Battery, BatteryLow, BatteryMedium, BatteryFull, Clock } from 'lucide-react';
import { isInstalledPWA } from '@/pwa';

const AppStatusBar: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [batteryCharging, setBatteryCharging] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPWA, setIsPWA] = useState(false);
  
  useEffect(() => {
    // Check if running as installed PWA
    setIsPWA(isInstalledPWA());
    
    // Update online status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Get battery info if available
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        // Initial battery status
        setBatteryLevel(battery.level);
        setBatteryCharging(battery.charging);
        
        // Listen for battery changes
        battery.addEventListener('levelchange', () => {
          setBatteryLevel(battery.level);
        });
        
        battery.addEventListener('chargingchange', () => {
          setBatteryCharging(battery.charging);
        });
      });
    }
    
    // Update time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(timeInterval);
    };
  }, []);
  
  // Don't render if not in PWA mode
  if (!isPWA) return null;
  
  // Format time as HH:MM
  const formattedTime = currentTime.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  // Get appropriate battery icon
  const getBatteryIcon = () => {
    if (batteryLevel === null) return null;
    
    if (batteryLevel <= 0.2) {
      return <BatteryLow className="w-4 h-4 text-red-400" />;
    } else if (batteryLevel <= 0.5) {
      return <BatteryMedium className="w-4 h-4 text-yellow-400" />;
    } else {
      return <BatteryFull className="w-4 h-4 text-green-400" />;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md h-6 flex items-center justify-between px-4 text-xs text-white/80"
    >
      <div className="flex items-center gap-1">
        <Clock className="w-3 h-3" />
        <span>{formattedTime}</span>
      </div>
      
      <div className="flex items-center gap-3">
        {batteryLevel !== null && (
          <div className="flex items-center gap-1">
            {getBatteryIcon()}
            <span>{Math.round(batteryLevel * 100)}%</span>
            {batteryCharging && (
              <span className="text-green-400 text-[10px]">⚡</span>
            )}
          </div>
        )}
        
        <div className="flex items-center gap-1">
          {isOnline ? (
            <Wifi className="w-3 h-3 text-green-400" />
          ) : (
            <WifiOff className="w-3 h-3 text-red-400" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AppStatusBar;

