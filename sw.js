const C = 'stonecutter-v4';
const A = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'background.mp3',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(A)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== C).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.mode === 'navigate' || req.url.endsWith('index.html')) {
    e.respondWith(
      fetch(req).then(r => {
        const cp = r.clone();
        caches.open(C).then(c => c.put(req, cp));
        return r;
      }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
    );
  } else {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req)));
  }
});
