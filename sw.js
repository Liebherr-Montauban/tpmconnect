// Service worker minimal : ne fait aucun cache (l'appli a besoin du réseau
// pour se synchroniser avec Google Sheets), il sert juste à rendre le site
// "installable" comme une application sur l'écran d'accueil.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {});
