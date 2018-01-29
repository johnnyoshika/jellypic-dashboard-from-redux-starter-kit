const version = 'v7'

self.addEventListener('install', function (event) {
  console.log('SW version %s Installed at', version, new Date().toLocaleTimeString())
  event.waitUntil(
    caches.open(version)
    .then(function (cache) {
      return cache.addAll([
        ...global.serviceWorkerOption, // global.serviceWorkerOption comes from serviceworker-webpack-plugin: https://github.com/oliviertassinari/serviceworker-webpack-plugin#3-write-your-own-swjs
        '/favicon.ico',
        '/humans.txt',
        '/offline/',
        '/offline/dinosaur.gif'
      ])
    }))
})

self.addEventListener('activate', function (event) {
  console.log('SW version %s Activated at', version, new Date().toLocaleTimeString())
  event.waitUntil(
    caches.keys()
    .then(function (keys) {
      return Promise.all(keys.filter(function (key) {
        return key !== version
      }).map(function (key) {
        return caches.delete(key)
      }))
    }))
})

self.addEventListener('fetch', function (event) {
  console.log('fetch', event.request.url)
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          console.log('retrieving from cache', event.request.url)
          return response
        }

        // reliable to check not onLine, but b/c of LiFi, can't rely on is onLine.
        if (!navigator.onLine)
          return caches.match(new Request('/offline/'))

        return fetchAndUpdate(event.request)
      }))
})

var fetchAndUpdate = function (request) {
  return fetch(request)
    .then(function (response) {
      if (!response)
        return

      // check opaque for cross-domain fetch (e.g. cloudinary images, google fonts): https://github.com/whatwg/fetch/issues/299
      if (!response.ok && response.type !== 'opaque') {
        console.log('not ok, not caching', request.url, response.status)
        return response
      }

      if (request.method !== 'GET') {
        console.log('not GET method, not caching', request.url, response.status)
        return response
      }

      console.log('ok, caching', request.url, response.status)
      return caches.open(version)
        .then(function (cache) {
          return cache.put(request, response.clone())
            .then(function () {
              return response
            })
        })
    })
}
