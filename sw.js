// Bump this on any release where installed clients must pick up a new
// service worker (e.g. app rename) : changing these bytes is what makes
// the browser detect an update, since this worker does no caching itself.
const SW_VERSION = "2";

self.addEventListener("install", ()=>{
  self.skipWaiting();
});

self.addEventListener("activate", (event)=>{
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event)=>{
  event.respondWith(fetch(event.request));
});
