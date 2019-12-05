/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9f5e57b9afdbf903fdb2ee5e8b6191b6"
  },
  {
    "url": "404/index.html",
    "revision": "9f5e57b9afdbf903fdb2ee5e8b6191b6"
  },
  {
    "url": "assets/css/3.styles.afa08994.css",
    "revision": "333738863ba46c6f2a42acaab5a6c7f0"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "43ad3ee741c2d9b765bc745540f36fcb"
  },
  {
    "url": "assets/data/index.json",
    "revision": "43ad3ee741c2d9b765bc745540f36fcb"
  },
  {
    "url": "assets/img/bg.2d7b1180.jpg",
    "revision": "2d7b1180b093d4bc8618c4072470edc0"
  },
  {
    "url": "assets/js/app.19881ddb.js",
    "revision": "7b57f612994ec9cc72a742a7d451e74b"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.091322a7.js",
    "revision": "8a1adf87fb327912242937696a6ba889"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.fdf213a6.js",
    "revision": "9cf138b746160e53c9d7c3ff0ed9471b"
  },
  {
    "url": "assets/js/vendors~page--src--pages--index-vue.3fbca0bd.js",
    "revision": "9344a9dfd5a62c0a083c6b4bec4aaf95"
  },
  {
    "url": "assets/static/ball-phone.7ba8522.8c7d2b1f1fbd6fe5cddb5717644b6d5d.png",
    "revision": "1ada0801a2bd77e0d6d69a22df33c785"
  },
  {
    "url": "assets/static/ball.b82b75d.9ce119e8c50cb8490f9411dc06fe059c.png",
    "revision": "2f13687d5f673156b2cd1899f0f36ade"
  },
  {
    "url": "assets/static/car.bd6740a.cc6161140087384bef1c7aba24ce28a2.png",
    "revision": "ecdcfd9fd7a477b31a470dd64e783cda"
  },
  {
    "url": "assets/static/favicon.1539b60.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "b4d0be659d02455404ea7e05d9c524e3"
  },
  {
    "url": "assets/static/favicon.62d22cb.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "1e4f35a14b30ea23ba028870ff82ee06"
  },
  {
    "url": "assets/static/favicon.7b22250.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "bb6c263a770908894f7e54280ee373c8"
  },
  {
    "url": "assets/static/favicon.ac8d93a.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "9a53f4e23bfe624d9379110d53bf9fb0"
  },
  {
    "url": "assets/static/favicon.b9532cc.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "b93ff0a3f455479b076df158cc5a05bf"
  },
  {
    "url": "assets/static/favicon.ce0531f.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "df91f275efdb619339ed5cb2f7f63ecc"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "aaa20a3439c162ee8509b0ff9f185a44"
  },
  {
    "url": "assets/static/favicon.f22e9f3.c5889ca2c0ece40fcc6b9804d2e1f02f.png",
    "revision": "f99bf7de119c398a18bbff611f52d3f4"
  },
  {
    "url": "assets/static/gifts.41e76af.b647f258136916faa3b470a530ee983a.png",
    "revision": "ec5d246d4f6c69dea7185bb1e152484c"
  },
  {
    "url": "assets/static/logo.png",
    "revision": "2fbbb98d13d915dc986102b8bc5546db"
  },
  {
    "url": "index.html",
    "revision": "5d407f406426876ae02248acb6e9c7e7"
  },
  {
    "url": "logo.png",
    "revision": "2fbbb98d13d915dc986102b8bc5546db"
  },
  {
    "url": "manifest.json",
    "revision": "a2e0bc663668351e8b824166b50613ff"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})