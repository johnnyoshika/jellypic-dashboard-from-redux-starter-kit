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
  var url = event.request.url
  if (event.request.method === 'GET' && (url.includes('/image/') || url.endsWith('.png') || url.endsWith('jpg')))
    event.respondWith(cacheFirst(event.request))
  else
    event.respondWith(networkFirst(event.request))
})

var cacheFirst = request =>
  caches.match(request)
    .then(cacheResult => cacheResult || offline())
    .then(cacheOrOfflineresult => cacheOrOfflineresult || fetchAndStore(request))

var networkFirst = request =>
  fetchAndStore(request)
    .catch(() => caches.match(request))
    .then(result => result || offline())

var offline = () => {
  if (!navigator.onLine)
    return caches.match(new Request('/offline/'))
  else
    return Promise.resolve()
}

var fetchAndStore = request =>
  fetch(request)
    .then(function (response) {
      if (!response)
        throw new Error()

      // check opaque for cross-domain fetch (e.g. cloudinary images, google fonts): https://github.com/whatwg/fetch/issues/299
      if (!response.ok && response.type !== 'opaque') {
        console.log('not ok, not caching', request.url, response.status)
        return response
      }

      if (request.method !== 'GET')
        return response

      console.log('ok, caching', request.url, response.status)
      return caches.open(version)
        .then(cache => cache.put(request, response.clone()))
        .then(() => response)
    })

self.addEventListener('push', e => {
  var payload = e.data.json()
  e.waitUntil(
    self.registration.showNotification(payload.title, {
      body: payload.message,
      icon: payload.icon,
      // badge: '',
      data: payload,
      actions: [
        { action: 'view', title: 'View Post'/*, icon: ''*/ },
        { action: 'app', title: 'Open App'/*, icon: ''*/ },
      ]
    }))
})

self.addEventListener('notificationclick', e => {
  e.notification.close()
  var payload = e.notification.data

  switch (e.action) {
    case 'app':
      e.waitUntil(
        clients.openWindow(e.target.location.origin))
      break
    case 'view':
    default:
      e.waitUntil(
        clients.openWindow(`${e.target.location.origin}/posts/${payload.postId}`))
  }
})
