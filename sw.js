self.addEventListener("install", function(evt) {
  console.log("The service worker is being installed.");

  evt.waitUntil(precache());
});

self.addEventListener("fetch", function(evt) {
  console.log("The service worker is serving the asset.");
  evt.respondWith(fromCache(evt.request));
  evt.waitUntil(update(evt.request));
});

function precache() {
  return caches.open("cache-and-update").then(function (cache) {
    return cache.addAll([
      "./index.html",
      "./script.js",
      "./main.css",
      "./manifest.json",
      "./assets/apple-icon.png",
      "./assets/cursor-auto.png",
      "./assets/cursor-drag-clicked.png",
      "./assets/cursor-pointer-clicked.png",
      "./assets/cursor-pointer.png",
      "./assets/cursor-drag.png",
      "./assets/favicon.png"
    ]);
  });
}

function fromCache(request) {
  return caches.open("cache-and-update").then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject("no-match");
    });
  });
}

function update(request) {
  return caches.open("cache-and-update").then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}