'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "023f03f3dbace542092b9c5118c9db5c",
".git/config": "1ba5d1731f6c090a73fafe1fccbe55bd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "57340d8168c4e32c355016a498d8b0e8",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7e7ac494517c6de2be043876f6ffac98",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "512071a9c4d998a2f3843ecb4aae626d",
".git/logs/refs/heads/master": "512071a9c4d998a2f3843ecb4aae626d",
".git/logs/refs/remotes/origin/master": "8c72aa5f8c211be8863f0b19d015f92e",
".git/objects/01/5427f91450136220189e06b0dfd90428d6f96d": "d76d541357d39468d3ed013b64324c9f",
".git/objects/02/dce94970f87b171fbf44474a941ae5d1ae1baf": "f966af742a6f12a9ff9ca7b68acb53a6",
".git/objects/04/83d16bbe53a6b65944a174a00dd953a9d14595": "0cf49fc2ecd3e522c889a391da21c820",
".git/objects/04/9e63a4eded75dbdaf18d79466ac7d75270308b": "2ca2d75e04e201b8238c807d2bb141fa",
".git/objects/09/031bf235a1ffbb90ddaa3e483530a00d6e88cc": "206513fde20875a0f68711ad40045eaa",
".git/objects/09/46d1d0bbbabc0c7bc41adb4e72a5771e53c704": "5845de796bc49d96d09243d6ccd15aa8",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/2e012a0f5f87371c1901fa4c9360511de7b4d7": "3cfd721cc1d7ed934cab7c6fb0abd860",
".git/objects/17/5fbb98185e81e9377d1dbc69472f62eb4bd2ea": "cfdfa5df36d111928d064721615f2a8c",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/7816b56617f8b6e511d9c5862b2e02479f3fed": "e51b6f0c14d93870950f0aea3057afe1",
".git/objects/1b/5fd019f59553b595329fd48c9dccd455143939": "886fc91cdd8fc694c0b6878a83555b5c",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/24/56770d321bd9466440fc23b30ff91358017016": "305bd7077bf8fa31c473dc718990a0f9",
".git/objects/24/7d24d5d6640fbefccec1b3b1102067cc6f4469": "1357d593db686e59c2508814c189e448",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/33/58683104ed1ee569e24f5be463ab9faf948acd": "f7a179d36ed0949fb66fa542a4b373bb",
".git/objects/35/06e751304c917d1e42e23fff6c7e304b931af2": "cad15611872a6e820e98888d97af7aa1",
".git/objects/37/fa923df33faeccc4b55228046b5b079a82926d": "3990f93a84c6ff14191bc24dfec7a53c",
".git/objects/38/a7d4963c471ce46f3343c7eb5711cfc6539e2a": "8a560105091832bd22441837dcc4b97f",
".git/objects/41/ab9ad3c26c91fa25b89987e3bf8f7715b0f754": "008404ce91e57c333e955eb584fabc4b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4f/f9dd594371faefce357d48d5e55967ba012bbf": "d4668eb977dca218cc2c1783109d82f9",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/969849943fde12d8ddd79ac304afcd7d29e7d3": "d6f561a5e07a66b24367eec84d33a0fc",
".git/objects/5b/c367663d985f8913273ce98aeef166674d40e0": "4e054e9e582bf6338cec494289c5348e",
".git/objects/60/542a05f56d4396b82c25a9cef1f5df207db300": "4e6498508270ac82c8d9b20f6c12df5f",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/fc8efd98b78c0dc125b5bf628f50757cac207d": "345e5203660b6b41aa03d55d176b2a14",
".git/objects/69/418563eed0ef5315e15f69f6a02d3d265afdab": "5fc9199924ad17433c44a8a1bc6f77a8",
".git/objects/6c/be00d6b4ac4bb056690dd33a87b4dd380eba69": "f6179868e9740002c338cf39a9dc6bd3",
".git/objects/6e/6931b3ebc61664792f24b76f23e11bc30b1587": "2d0727b8c55fe9c808c530d10e773a80",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/070d9c105f2568a5fb9ddea1f348314fc27657": "269f8e32ccf56a06d467e701941471d1",
".git/objects/76/81824dc92f6916959af876b3a3309ccfd13f1b": "fcfc2aba29c62f065135bc365ba235aa",
".git/objects/7a/1ea4da0fe8f53366ce7c54d84c4f9b874af265": "bd2f886a314e296eec771b37481ad236",
".git/objects/80/8401cbb62678795621e38762295e1fa8f7afab": "4c2b4f61ed4b3c2d562e352edf1b4bef",
".git/objects/80/a4a4318d746766c25a2b0c097c452a06016122": "7d3bc894976aa673109eab8ee66d41e1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/61ff7dd9e7fe865acf6158b00a1ceb5ced5620": "1c6ac8607a31c535a44f131c939045ad",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/216f021bc3a95b11d62600a6fdb756f2d74003": "44f5162c753cde97c06a6ac5c0b99a08",
".git/objects/8c/7ef9c101d537ad77464edad6fe220f706a9730": "5b0f39e8b49b9562a07849f3d924c2cd",
".git/objects/8e/7d97ee19f4857873eada72adf431c4bacd35ac": "d8f165bf7085c065bc2b3b70d1535d69",
".git/objects/90/5a9b9e6e592b193ca5ca191d921f4ce2966366": "da3b11f301050d9e385a8957f4e04825",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/58c22607769503e8c7c201ca76d826953b855d": "c0c1e12e8455b09796954bb15d34d46e",
".git/objects/96/7189245539d62f82bbeb58f23825153a41e5b0": "205a9c363acd9002f21b8f10af2d80e7",
".git/objects/96/d6b0b725e54f7cb4321a23f292a0d5743dfb35": "8aff515e2b585b57f4b291c779f4969a",
".git/objects/97/5e70cd2a60017d16f98828e4776100fd038962": "3e99fd6423a5e0ab040bcab10afbfe39",
".git/objects/9b/e0ad2e04b1e8f325d5a47a629cab23a676fed0": "e8e00bba142248e5b0832269a17fcfde",
".git/objects/9c/1cbfeda8d6ba6e0d66cf0d05529e23338f869c": "ba009336704da808902bb19971cbf94f",
".git/objects/a2/efcb77eb4feec052a8522e8298b5daaf824894": "997022f38b6e71f754f76f90a2419550",
".git/objects/af/f9148329144a66720516eba6f369f7b0a158c4": "aed58394dfc3c40603f5998811a51df8",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ce34bfc6c9b7a5ed14c0a9b4938ee8b40a7a81": "c75cdfe98ddf59a7119d912199a84e89",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/76da9203ba42ff0eeb1d7e8a38075adac8fa6d": "73f03c4d67bff761a2608e58a16069ab",
".git/objects/be/b7d470feaa64715da695d74a92a1c2f3785ed5": "890008139d24ea3d58e9bb90f161bbe1",
".git/objects/c2/9ca8ce3ee0aaa75ec9fb09c46180723f685e29": "72cea5d3803ef471bd36a41de10ad011",
".git/objects/c3/74bb5ab882eeab06282c6ce0227e449c39a836": "9213f065c84d1870cf293b75abfdf971",
".git/objects/c4/b9c0151f7fed1ef91407e3968c68a808667e26": "4af9ded2b79071d64d2b371c13b37962",
".git/objects/c6/a73015f652cc9ec47dd5daa9e61dec2c14b45a": "df208f0972f07557b0b7710821f07b00",
".git/objects/c7/b503da79c71b51ae1b7bfb7c449b7840ec1631": "8a8b44873ef4c055f66c252e2030c9be",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cd/5126064d07b1ff72fa0af377c9f58f0652225e": "766537ac38b2a4c05cde78e57964ff89",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/9c2f07d59add4d82ab89555d259117da739447": "df07fa19dafad69eda32e11721061988",
".git/objects/d3/ea2689c743f6547c33d429804f136b4d39042e": "6a4976cd9020914b252afe02b36de2a8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/18448d13cebb3d3c329886bac4d92548029af0": "abde6026230ca0fb6617941a4526d51c",
".git/objects/df/7636012dbcd34b98ecb27c6685105a9bfc15df": "e170a32360fb64a24533b0d41638915e",
".git/objects/e6/d42616a59d3ffa0a7f1e6f08ae344b3337d87e": "328ee93914938a0673d80e48e8ee64d1",
".git/objects/ea/48939393b37d8d1bafa439b6d3d2d3ae7c4a89": "d62e067cee732edd2e317ecc8b475e4e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/8873d624de3e124670c4c3188f57b29a57c72d": "afae7c829e584498527c90665ab2e28e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/348f1f1eabfa6e00aab77b3f1d546f09f229a1": "c652d78dc9c8a954fed70d6ca7df072c",
".git/objects/fd/6a32d5090e558c530aa88be9be2490d8889f6d": "3e972cffe9a6cfdcdca621aa729e3307",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "a42e22221074833cefc4b3d160dcc919",
".git/refs/heads/master": "8b4225e3c9f0920e1c1302299c6407d8",
".git/refs/remotes/origin/master": "8b4225e3c9f0920e1c1302299c6407d8",
"assets/AssetManifest.bin": "c74e9259b01a975b2a584a8ad6a3879a",
"assets/AssetManifest.bin.json": "c11ffa8208551978fe64055ce7fada6d",
"assets/AssetManifest.json": "94a16a29bd83f57a53873155d3238639",
"assets/assets/files/Kislay_resume_1yrs.pdf": "80d43b0569bf819649f8ad4653b1fd9a",
"assets/assets/icons/github.svg": "8dcc6b5262f3b6138b1566b357ba89a9",
"assets/assets/icons/linkedin.svg": "fc81555a452e0fafcb442f489ceef19d",
"assets/assets/images/another.jpg": "94984848345c27aeb4b39da38b99fbe6",
"assets/assets/images/another2.jpg": "02bdbcb098f5f5ff39b9059705679f7d",
"assets/assets/images/app1.png": "177429d100dd24cf6b33b9b0269fad54",
"assets/assets/images/app2.png": "b60a0bc3c58d7c4c2fd5aa488df03d99",
"assets/assets/images/app3.png": "148ca3cb2459f5cde925299c0e0bcb68",
"assets/assets/images/app4.png": "8181093ddf812571004feddcea41f131",
"assets/assets/images/background.jpg": "dd663224571b1122d51ddf95f479a951",
"assets/assets/images/backgroundB.jpg": "5eec90a74f5b1c24414378095b8d4709",
"assets/assets/images/profile.jpg": "bf6473dce2aa84fe8a1e9c749410e74c",
"assets/assets/images/profileimg.jpg": "136b36b8f38bbeafc948a59c2b9002c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6cb03c84c97a1f728bc0aa07529b7cff",
"assets/NOTICES": "c2d103b14f788916e859ca119c0c8a6c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0305ac9494f35fc8d28c5e0c9f144412",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7ce2317c69f8eefff7f5158cf245772a",
"/": "7ce2317c69f8eefff7f5158cf245772a",
"main.dart.js": "84197276ba918063abfcddff416c6e7e",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
