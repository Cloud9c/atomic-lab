var cacheName = "cache-and-update";

self.addEventListener("install", function(evt) {
  console.log("The service worker is being installed.");
  evt.waitUntil(caches.open(cacheName).then(function (cache) {
    return cache.addAll(
      [
        "index.html",
        "script.js",
        "main.css",
        "manifest.webmanifest",
        "sw.js",
        "assets/icon.png",
        "assets/splash.png",
        "assets/favicon.ico"
      ]);
    })
  );
});

self.addEventListener("fetch", function(evt) {
  console.log("The service worker is serving the asset.");
  evt.respondWith(caches.open(cacheName).then(function (cache) {
    return cache.match(evt.request).then(function (matching) {
      return matching || Promise.reject("no-match");
    });
  });

  evt.waitUntil(caches.open(cacheName).then(function (cache) {
    return fetch(evt.request).then(function (response) {
      return cache.put(evt.request, response);
    });
  });
});