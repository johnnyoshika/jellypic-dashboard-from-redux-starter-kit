const version = 'v2';

self.addEventListener('install', function(event) {
  console.log('SW version %s Installed at', version, new Date().toLocaleTimeString());
  event.waitUntil(
    caches.open(version)
    .then(function(cache) {
      return cache.addAll([
        '/offline/',
        '/offline/dinosaur.gif'
      ]);
    }));
});

self.addEventListener('activate', function(event) {
  console.log('SW version %s Activated at', version, new Date().toLocaleTimeString());
  event.waitUntil(
    caches.keys()
    .then(function(keys) {
      return Promise.all(keys.filter(function(key){
        return key !== version;
      }).map(function(key){
        return caches.delete(key);
      }));
    }));
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response)
          return response;

        // reliable to check not onLine, but b/c of LiFi, can't rely on is onLine.
        if (!navigator.onLine)
          return caches.match(new Request('/offline/'));

        return fetch(event.request);
      }));
});