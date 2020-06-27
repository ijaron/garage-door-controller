/* self.addEventListener('install', (event) => {
  // console.log('👷', 'install', event);
  self.skipWaiting();
}); */

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
        './css/images/',
        './css/images/ajax-loader.gif'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // console.log('👷', 'activate', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  //console.log('👷', 'fetch', event);
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
  //event.respondWith(fetch(event.request));
});
