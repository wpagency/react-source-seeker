// WPAgency.space Service Worker
const CACHE_NAME = 'wpagency-cache-v1';
const OFFLINE_URL = '/offline.html';
const OFFLINE_IMG = '/offline-image.svg';

// Assets to cache immediately on service worker install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/offline-image.svg',
  '/favicon.ico',
  '/favicon.svg',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Install event - precache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service worker pre-caching offline assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          console.log('Service worker removing old cache', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      console.log('Service worker now active');
      return self.clients.claim();
    })
  );
});

// Fetch event - network-first strategy with offline fallback
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // For HTML pages - network first, then cache, then offline page
  if (event.request.headers.get('Accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache the latest version
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If network fails, try cache
          return caches.match(event.request)
            .then((cachedResponse) => {
              // Return cached response or offline page
              return cachedResponse || caches.match(OFFLINE_URL);
            });
        })
    );
    return;
  }

  // For images - try cache first, then network, then offline image
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          return cachedResponse || fetch(event.request)
            .then((response) => {
              // Cache the image
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
              return response;
            })
            .catch(() => {
              // If both cache and network fail, use offline image
              return caches.match(OFFLINE_IMG);
            });
        })
    );
    return;
  }

  // For other assets - stale-while-revalidate strategy
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response immediately
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // Update cache with fresh response
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, networkResponse.clone());
              });
            return networkResponse;
          });
        return cachedResponse || fetchPromise;
      })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForms());
  }
});

// Push notification event handler
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  try {
    const data = event.data.json();
    const options = {
      body: data.body || 'New update from WPAgency.space',
      icon: '/icons/icon-192x192.png',
      badge: '/icons/badge-72x72.png',
      data: {
        url: data.url || '/'
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title || 'WPAgency.space', options)
    );
  } catch (err) {
    // Fallback for non-JSON push messages
    event.waitUntil(
      self.registration.showNotification('WPAgency.space', {
        body: event.data.text(),
        icon: '/icons/icon-192x192.png'
      })
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then((clientList) => {
        // If a window client is already open, focus it
        for (const client of clientList) {
          if (client.url === event.notification.data?.url && 'focus' in client) {
            return client.focus();
          }
        }
        // Otherwise open a new window
        if (clients.openWindow) {
          return clients.openWindow(event.notification.data?.url || '/');
        }
      })
  );
});

// Helper function to sync contact forms
async function syncContactForms() {
  try {
    const cache = await caches.open('contact-forms');
    const requests = await cache.keys();
    
    const syncPromises = requests.map(async (request) => {
      const formData = await cache.match(request).then(r => r.json());
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          return cache.delete(request);
        }
      } catch (error) {
        console.error('Failed to sync form data:', error);
      }
    });
    
    await Promise.all(syncPromises);
  } catch (error) {
    console.error('Error syncing contact forms:', error);
  }
}