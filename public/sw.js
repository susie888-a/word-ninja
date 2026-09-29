const C='word-ninja-v40';
const A=['./','./index.html','./app-v16-preview-server.html','./app-v16.html','./app-v15.html','./app-v11.html','./vocabulary-import.js','./v16-preview-enhancements.js','./v16-preview-exam-mode.js','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('word-ninja-')&&x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res&&res.ok&&new URL(e.request.url).origin===location.origin)caches.open(C).then(c=>c.put(e.request,res.clone()));return res}))) });
