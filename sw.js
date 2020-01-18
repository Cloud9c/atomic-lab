var cacheName = "cache-and-update";

self.addEventListener("install", function(evt) {
  console.log("The service worker is being installed.");
  evt.waitUntil(caches.open(cacheName).then(function (cache) {
    return cache.addAll(
      [
        // "./",
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
  evt.respondWith(fromCache(evt.request));
  evt.waitUntil(update(evt.request));
});

function fromCache(request) {
  return caches.open(cacheName).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject("no-match");
    });
  });
}

function update(request) {
  return caches.open(cacheName).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}
