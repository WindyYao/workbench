const CACHE_NAME = 'workbench-v7';
var BASE = self.registration ? self.registration.scope : './';
const APP_SHELL = [
  BASE + 'workbench.html',
  BASE + 'manifest.json',
  BASE + 'assets/app.js',
  BASE + 'assets/data.js',
  BASE + 'assets/cloud-api.js',
  'https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(APP_SHELL).catch(function () {});
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_NAME; })
          .map(function (k) { return caches.delete(k); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (e) {
  var url = new URL(e.request.url);
  if (url.hostname !== location.hostname) return;

  if (url.pathname.endsWith('.html') || url.pathname.endsWith('.js')) {
    e.respondWith(
      fetch(e.request).then(function (resp) {
        if (resp && resp.status === 200 && e.request.method === 'GET') {
          var clone = resp.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(e.request, clone).catch(function () {});
          });
        }
        return resp;
      }).catch(function () {
        return caches.match(e.request).then(function (cached) {
          return cached || new Response('Offline', { status: 503 });
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(function (cached) {
      var fetchPromise = fetch(e.request).then(function (resp) {
        if (resp && resp.status === 200 && e.request.method === 'GET') {
          var clone = resp.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(e.request, clone).catch(function () {});
          });
        }
        return resp;
      }).catch(function () { return cached; });
      return cached || fetchPromise;
    })
  );
});