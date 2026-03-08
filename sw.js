const CACHE_NAME = "mulher-prioridade-v1";

const URLS_TO_CACHE = [
  "/mulher-prioridade/",
  "/mulher-prioridade/quiz.html",
  "/mulher-prioridade/app.html",
  "/mulher-prioridade/acesso.html",
  "/mulher-prioridade/obrigada.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
