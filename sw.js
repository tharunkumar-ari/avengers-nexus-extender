const CACHE_NAME='avengers-nexus-v3';
const CORE=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('avengers-nexus-')&&key!==CACHE_NAME).map(key=>caches.delete(key)))));self.clients.claim()});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 // Always prefer fresh HTML so fixes are not hidden behind an old cached app shell.
 if(req.mode==='navigate'||new URL(req.url).pathname.endsWith('/index.html')){
   event.respondWith(fetch(req).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,copy));}return response;}).catch(()=>caches.match(req).then(cached=>cached||caches.match('./index.html'))));
   return;
 }
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,copy));}return response}).catch(()=>caches.match('./index.html'))));
});
