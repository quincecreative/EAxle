self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("fox-store")
      .then((cache) =>
        cache.addAll([
          "/EDD/",
          "/EDD/index.html",
          "/EDD/index.js",
          "/EDD/style.css",
          "/EDD/main.js",
          "/EDD/dogClutch.JPG",
          "/EDD/actuator.JPG",
          "/EDD/coupling.JPG",
          "/EDD/housing.JPG",
          "/EDD/gear.JPG",
          "/EDD/Cheveron_process copy-frei.png",
          "/EDD/download.png",
          "/EDD/environment.env",
          "/EDD/gkn-au-stacked.svg",
          "/EDD/TundraRotation6.glb",
          "/EDD/Helvetica Neue STD/Helvetica Neue LT Std/HelveticaNeueLTStd-Lt.otf",
          "/EDD/Helvetica Neue STD/Helvetica Neue LT Std/HelveticaNeueLTStd-Bd.otf",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
