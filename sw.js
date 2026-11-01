// Sushi Slash service worker, created by Eitan Feldman.
// Serves the game from cache so it runs offline, and refreshes the cache in the
// background so a new deploy shows up on the following launch.

const CACHE = 'sushi-slash-v4';
const FILES = ['./', './index.html'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;

  const refresh = fetch(request).then(async response => {
    if (response.ok) {
      const cache = await caches.open(CACHE);
      await cache.put(request, response.clone());
    }
    return response;
  });

  event.waitUntil(refresh.catch(() => {}));
  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then(cached => {
      if (cached) return cached;
      return refresh.catch(() => caches.match('./'));
    })
  );
});
