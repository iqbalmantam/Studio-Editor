// Service worker Mantam Studio Editor: cache offline.
// Naikkan VER setiap rilis agar cache lama dibuang.
const VER='v1',CORE='mse-core-'+VER,RUN='mse-run-'+VER;
const PRE=['./','./index.html','./manifest.webmanifest','./vendor/mp4-muxer.min.js','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CORE).then(c=>Promise.all(PRE.map(u=>c.add(u).catch(()=>0)))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('mse-')&&k!==CORE&&k!==RUN).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  if(r.headers.has('range'))return;
  if(r.mode==='navigate'){ // jaringan dulu supaya update cepat terlihat, cache jika offline
    e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(CORE).then(h=>h.put('./index.html',c));return x}).catch(()=>caches.match('./index.html').then(x=>x||caches.match('./'))));return}
  // aset lain: cache dulu, perbarui di belakang
  e.respondWith(caches.match(r).then(hit=>{const net=fetch(r).then(x=>{if(x&&x.ok){const c=x.clone();caches.open(RUN).then(h=>h.put(r,c))}return x}).catch(()=>hit);return hit||net}))});
