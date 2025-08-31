const CACHE_NAME = "kohi-peguin-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/assets/placeholder.png",
  "/assets/penguin.png",
  "/assets/kohipeguin.png",
  "/assets/reading-today.png",
  "/assets/kohi-laying.png",
  "/assets/loading.png",
  "/assets/Large-notbutton.png",
  "https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js",
  "https://cdn.jsdelivr.net/npm/epubjs/dist/epub.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});