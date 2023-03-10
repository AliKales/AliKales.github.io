'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "35c574688e487d0059fd9fb1e2cad3c4",
".git/config": "7531a7d6cc1e465ebcba25abaa52d637",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9401d4bcf11f523bfa03211bb96143ee",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ffcf1fe11cc1e8844888930ac3b98de8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "72e34e164cdb01ae78c9f6b774a01642",
".git/logs/refs/heads/main": "e4f341038f733e30a0d624969f17e755",
".git/logs/refs/remotes/origin/main": "2737a58cb8eed81c5dba190299e4589f",
".git/objects/02/90bf3cc49ac9bb1ed03a11a51588f27778df7e": "d9433dc17caa42df29841738627269f3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/e882f66270e9abb7ccb863a08527b397c93d60": "90e7d939609682cb230eebeca6cad3d2",
".git/objects/0f/5fe54d7e1828080b347c9da163e0972b506094": "c3f68219c958297b3023750cf1d13061",
".git/objects/11/805a592b3573886d507be6b6c9f9366f03599a": "9c33373a1c03bd837b7812554fa6e302",
".git/objects/19/01c6679eedc4bd969dfe6a38cd070398ced2bf": "b0e575bc5ad1a1fd3bbd4e678dc300dd",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/20/a50a6b5b5d499cec471d35c4e8cb8645fe0671": "663ae3a12f9b2c3e0cae32f377088355",
".git/objects/28/4b4a6b7bb9301efca6d7ce5f2245479b6ad618": "8baa24c7c759d4659978add225eb906f",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/3ba396f7acbd8f29d72ca40782ffcbaf7aee67": "eabd00bd4018b8fe1fb8536a041a7ffe",
".git/objects/33/208237f2a599047450c3cd6323e09a185eb8b3": "bc26e63376aae00feb913de3019cdde8",
".git/objects/37/faaf61eb5042c73f87b16a7ace784e00258639": "b525b915f64cb824738c49b08c93ec41",
".git/objects/39/af44975823fdcee5c0f7a1fb27932a2d98f326": "1d35bdd98ef5912db24edaa96c103a99",
".git/objects/3a/2be90b69d7b1bec395cc3796261ab259615b8f": "216149aa46a180e3b59b7d1ddbca3081",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/9c0c5065139fb52af6310c299d5a22f066c479": "68aa036d2d120f320350a444a5382f1e",
".git/objects/41/ed5462e2c172b9f362cf7bfc43030ac24c1988": "f865a8d3ec7c3f6c0e2c5e74d1713d5b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/4d9d83ab143bdf46b61b74d143df780de35bed": "66dde0dc20383502fb4d038c4f70d6ed",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/fd7c0c59a93b83807cea0f5dddbc33c45438a4": "9fcc980835e04b8d439886c20ee4e66d",
".git/objects/52/eb1ae41aafc8ce0e5e1720838d63a16f1570dc": "2eec5b5e0907ce77930847e22d952614",
".git/objects/59/d2ba76ef4c0eba7718b6062574cb07f0f21a21": "33e304c4823d22121158b1779dd7297b",
".git/objects/70/7dc446a454d8b721c7cea6d2b9539d05789fbe": "2bb10e08c5526186c5febc90bf2490db",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/d5e36fe3512e9ee3a5111220c08ebf31ffe34e": "71996c0402d2e4d30deef14bdc6aa983",
".git/objects/7c/d88970de6886ed80adb8245049bbc46935692d": "67ceafe892c037c12dcaa69a6a9b830b",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/bf47678434d143139c806edf2f2eab52e49386": "d0eda8b852b394541ab2f1db57d2f25b",
".git/objects/86/6b11e2fa5db54a3d302f757975703dbe415633": "04a8a5326232cdd89215ada7f41f61d4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0ba544a4e054b4047117a03e048ddf4bdf50e3": "0cdf3cf39e4bf06138663a12dd0b19f4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/9af3a6ceb388e4cecae94347c5c77bc2e68e90": "bfeebf88b9fef68013a2bc33592ea358",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/68bbe9a94e0a5696bc81dc1c4c77276ad0f1b1": "4824cd2e715846c3a08a122e234ecbec",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/2f1cb8bfa332ace5fa32df6b039942b605f617": "d5eaf07ee0b18a1af8d0ddd4709da85f",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/76790770033cb4cc37bcf40d5a1a37456e9c18": "1d7aa331c6281ba458c090c788c77811",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/12a6fcdf0a4ccdd8cee053e3f48e7e94ff651c": "f26529d594451369cab1d8d6bd6754fb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/4cc67cbe57d774d83b4bdbfc57772627607732": "acf52bf864cb40e2ecd09d5b997850fb",
".git/objects/db/634e9396dfb0c6c200e6538a6ee1ef05468174": "ae856ccce22c1989e4a31e59a43c9748",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/722ca338d4eac0349923bb642318d6979fad46": "7a82bf68675a44a013fcced7cb5c4306",
".git/objects/e1/3d400919b6b7f3948427934087412bc5f7df2c": "94b155043d5ecc8a6566afb46179e6a8",
".git/objects/e4/8c2222de18802fb2a76a56f4232171199121dc": "477ae8f8eb267ccca1bbaa275b57c1ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/a91a6d1adfb3978a374122b40dc0ec58168c24": "ab4167319dfe743a120138d1674845b9",
".git/objects/e6/108dd705ebe9af65fc046d8e03b709d1d69c17": "baf8cd888607b64f426954257258a0d0",
".git/objects/e7/a32da07d92ba28dfb69539117a81f57c4eb09c": "9b21a9ce84e15b22deb1edc33bd97993",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/c464aebb2733b9af24a75fa12b0a2503ac67a9": "52c6e9f5a4e0cacf651865fe660ab1b4",
".git/objects/f6/ec9cef72318577abe14aac01c3f88b351eb564": "a3dface21ab69aaa8d00793a0b1aab35",
".git/objects/f7/df520355cadd0f1aba6697a71cbe218bd0dd99": "f3125cae5efc29c30dc658260101d35f",
".git/ORIG_HEAD": "a2e7de17e6f473507c04166eabcda26f",
".git/refs/heads/main": "34ede0e6b6b3a0e021f2ab90ada6f5a4",
".git/refs/remotes/origin/main": "34ede0e6b6b3a0e021f2ab90ada6f5a4",
"assets/AssetManifest.json": "3875d60f6e470957ff3db002ac1270c2",
"assets/FontManifest.json": "7b3b848aed509ecd684cc2f89aaf4e31",
"assets/fonts/CustomIcons.ttf": "f8de17d85a8fcbf4c1843b0ac855e1ea",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "83fdac790cf3a4036891b9dd2a8625d5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "8f7365f38c8f655bb888ae814cc11c92",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "e98fb38cd61d5773a0eff880ba9ae8fa",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "f94e29bad0ec70505a050c0632aed5c2",
"icons/Icon-512.png": "579ab7b13958e93da7519d0c0fa520a4",
"icons/Icon-maskable-192.png": "f94e29bad0ec70505a050c0632aed5c2",
"icons/Icon-maskable-512.png": "579ab7b13958e93da7519d0c0fa520a4",
"index.html": "e4284490af37d90768a1899a1b66af89",
"/": "e4284490af37d90768a1899a1b66af89",
"main.dart.js": "b2d9c10d5f0aa301cd093ad444357db4",
"manifest.json": "793f3e418b4f21a54e12e49ff986b25b",
"README.md": "21bcfb003c19c84a135f2312ca0b31dc",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "7e2b52c96622905ed0fd4447938b21f8",
"version.json": "3e2ea2924d58141379a4f61f0b156e5f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
