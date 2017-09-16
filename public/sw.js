const version = 1;

self.addEventListener('install', function(event) {
  console.log('SW v%s Installed at', version, new Date().toLocaleTimeString());
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('SW v%s Activated at', version, new Date().toLocaleTimeString());
});

self.addEventListener('fetch', function(event) {
  // reliable to check not onLine, but b/c of LiFi, can't rely on is onLine.
  if (!navigator.onLine) {
    event.respondWith(new Response('<h1> Offline: ( </h1>', { headers: { 'Content-Type': 'text/html' } }));
  } else {
    console.log(event.request.url);
    event.respondWith(fetch(event.request));
  }
});