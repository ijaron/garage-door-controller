self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        './img/',
        './img/open.png',
        './img/opening.png',
        './img/closed.png',
        './img/closing.png',
        './img/closed_192.png',
        './img/closed_512.png',
        './css/',
        './css/jquery.mobile-1.2.1.min.css',
        './css/jquery.mobile.simpledialog.css',
        './css/images/',
        './css/images/ajax-loader.gif',
        './index.html',
        './js/',
        './js/client.js',
        './js/date.format.js',
        './js/jquery-1.8.3.min.js',
        './js/jquery.mobile-1.2.1.min.js',
        './js/jquery.mobile.simpledialog2.js',
        './js/js.cookie.js'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (!response) {
        return fetch(event.request, {
          credentials: "include",
          mode: "same-origin"
        });
      }else{
        return response
      }

    })
  );
});
