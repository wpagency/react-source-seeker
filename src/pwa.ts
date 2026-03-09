/**
 * Progressive Web App functionality
 */

// Check if environment supports Service Workers
function isServiceWorkerSupported(): boolean {
  // Check if Service Workers are available
  if (!('serviceWorker' in navigator)) {
    return false;
  }
  
  // Check if running in StackBlitz iframe
  if (window.parent !== window && 
      document.referrer.includes('stackblitz.com')) {
    console.log('Service Worker registration skipped: Running in StackBlitz iframe');
    return false;
  }

  // Check for WebContainer environment (StackBlitz)
  if (typeof (window as any).webcontainer !== 'undefined') {
    console.log('Service Worker registration skipped: WebContainer environment detected');
    return false;
  }

  // Check for StackBlitz-specific global variables
  if (typeof (window as any).StackBlitzVM !== 'undefined') {
    console.log('Service Worker registration skipped: StackBlitz VM detected');
    return false;
  }

  // Check for Bolt/StackBlitz preview environment
  if (window.location.hostname.includes('bolt.new') || 
      window.location.hostname.includes('stackblitz.io') ||
      window.location.hostname.includes('webcontainer.io')) {
    console.log('Service Worker registration skipped: StackBlitz/Bolt environment');
    return false;
  }

  // Additional check for localhost in iframe (common StackBlitz pattern)
  if (window.location.hostname === 'localhost' && 
      window.parent !== window) {
    console.log('Service Worker registration skipped: localhost in iframe context');
    return false;
  }
  
  // Skip registration in StackBlitz/WebContainer environments (port-based detection)
  if (window.location.hostname === 'localhost' && 
      (window.location.port === '8080' || window.location.port === '3000')) {
    console.log('Service Worker registration skipped: Running in development environment');
    return false;
  }

  // Check for development mode indicators
  if (import.meta.env?.DEV || process.env?.NODE_ENV === 'development') {
    console.log('Service Worker registration skipped: Development mode');
    return false;
  }
  
  // Skip registration in other known unsupported environments
  const unsupportedHosts = ['stackblitz.com', 'webcontainer.io'];
  if (unsupportedHosts.some(host => window.location.hostname.includes(host))) {
    console.log('Service Worker registration skipped: Unsupported environment');
    return false;
  }
  
  // Additional check for WebContainer environments
  if (typeof window !== 'undefined' && (window as any).__webcontainer__) {
    console.log('Service Worker registration skipped: WebContainer environment detected');
    return false;
  }
  
  return true;
}

// Register service worker
export function registerServiceWorker() {
  if (!isServiceWorkerSupported()) {
    console.log('Service Worker not supported or running in unsupported environment');
    return;
  }

  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/',
        updateViaCache: 'none'
      });
      
      console.log('ServiceWorker registration successful with scope:', registration.scope);
      
      // Check for updates when the page loads
      registration.update();
      
      // Set up update detection
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content is available, notify user
              showUpdateNotification();
            }
          });
        }
      });
      
      // Check for updates periodically
      setInterval(() => {
        registration.update();
      }, 60 * 60 * 1000); // Check every hour
      
    } catch (error) {
      console.error('ServiceWorker registration failed:', error);
    }
  });
  
  // Handle controller change (when a new service worker takes over)
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('New service worker controller');
  });
}

// Show notification when new content is available
function showUpdateNotification() {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'fixed bottom-24 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fadeIn';
  notification.innerHTML = `
    <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </div>
    <div>
      <h3 class="font-bold">Update Available</h3>
      <p class="text-sm">Refresh to see the latest version</p>
    </div>
    <button class="ml-2 p-2 hover:bg-white/10 rounded-full" id="update-refresh">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M23 4v6h-6"></path>
        <path d="M1 20v-6h6"></path>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
      </svg>
    </button>
    <button class="p-2 hover:bg-white/10 rounded-full" id="update-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;
  
  document.body.appendChild(notification);
  
  // Add event listeners
  document.getElementById('update-refresh')?.addEventListener('click', () => {
    window.location.reload();
  });
  
  document.getElementById('update-close')?.addEventListener('click', () => {
    notification.remove();
  });
  
  // Auto-remove after 10 seconds
  setTimeout(() => {
    notification.classList.add('animate-fadeOut');
    setTimeout(() => notification.remove(), 500);
  }, 10000);
}

// Check if app is running in standalone mode (installed PWA)
export function isInstalledPWA(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches || 
         (window.navigator as any).standalone === true;
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  if ('PerformanceObserver' in window) {
    try {
      // Core Web Vitals
      const vitalsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Report to analytics in production
          console.log(`[PWA Performance] ${entry.name}:`, entry);
        }
      });
      
      vitalsObserver.observe({ 
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
      });
      
      // Navigation timing
      const navigationObserver = new PerformanceObserver((list) => {
        const navEntry = list.getEntries()[0] as PerformanceNavigationTiming;
        
        // Calculate key metrics
        const pageLoadTime = navEntry.loadEventEnd - navEntry.startTime;
        const domContentLoaded = navEntry.domContentLoadedEventEnd - navEntry.startTime;
        const timeToFirstByte = navEntry.responseStart - navEntry.requestStart;
        
        console.log('[PWA Performance] Page Load Time:', pageLoadTime);
        console.log('[PWA Performance] DOM Content Loaded:', domContentLoaded);
        console.log('[PWA Performance] Time to First Byte:', timeToFirstByte);
      });
      
      navigationObserver.observe({ entryTypes: ['navigation'] });
      
    } catch (e) {
      console.warn('Performance monitoring not fully supported', e);
    }
  }
}

// Save form data for background sync when offline
export async function saveFormForBackgroundSync(formData: any) {
  if (!isServiceWorkerSupported()) {
    console.log('Background sync not available: Service Worker not supported');
    return false;
  }

  if ('serviceWorker' in navigator && 'SyncManager' in window) {
    try {
      const registration = await navigator.serviceWorker.ready;
      
      // Store form data in cache
      const cache = await caches.open('contact-forms');
      const formId = Date.now().toString();
      await cache.put(
        new Request(`/contact-form-${formId}`),
        new Response(JSON.stringify(formData))
      );
      
      // Register for background sync
      await registration.sync.register('contact-form-sync');
      
      return true;
    } catch (error) {
      console.error('Error saving form for background sync:', error);
      return false;
    }
  }
  return false;
}

// Request notification permission
export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications');
    return false;
  }
  
  if (Notification.permission === 'granted') {
    return true;
  }
  
  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }
  
  return false;
}

// Subscribe to push notifications
export async function subscribeToPushNotifications() {
  if (!isServiceWorkerSupported()) {
    console.log('Push notifications not available: Service Worker not supported');
    return null;
  }

  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    console.log('Push notifications not supported');
    return null;
  }
  
  try {
    const registration = await navigator.serviceWorker.ready;
    
    // Get permission
    const permissionGranted = await requestNotificationPermission();
    if (!permissionGranted) return null;
    
    // Subscribe user
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        'BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U'
      )
    });
    
    return subscription;
  } catch (error) {
    console.error('Error subscribing to push notifications:', error);
    return null;
  }
}

// Helper function to convert base64 to Uint8Array for VAPID keys
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');
  
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  
  return outputArray;
}

