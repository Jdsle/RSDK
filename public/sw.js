if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0e5ce63c-83fdbb398404d58a.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/103.910b8c6e707b1c37.js",revision:"910b8c6e707b1c37"},{url:"/_next/static/chunks/116.0bae7a074fcdb7fd.js",revision:"0bae7a074fcdb7fd"},{url:"/_next/static/chunks/137-9598eab4ff025283.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/27.cc377b72ffd3ce9f.js",revision:"cc377b72ffd3ce9f"},{url:"/_next/static/chunks/392.9f2d59fa5cdb93be.js",revision:"9f2d59fa5cdb93be"},{url:"/_next/static/chunks/404.61d388dba8d90ed1.js",revision:"61d388dba8d90ed1"},{url:"/_next/static/chunks/412.7c547a75f8d8ebf8.js",revision:"7c547a75f8d8ebf8"},{url:"/_next/static/chunks/626-4610dd7bd12261c6.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/636.d02c6eeb4a9c26f3.js",revision:"d02c6eeb4a9c26f3"},{url:"/_next/static/chunks/673-c91f9d9cde9e63c5.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/741.7f2a6ecd3229898d.js",revision:"7f2a6ecd3229898d"},{url:"/_next/static/chunks/755-ba9f019aa910e095.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/96.c55bb652a965bd8b.js",revision:"c55bb652a965bd8b"},{url:"/_next/static/chunks/997-b9eb25be02149f85.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/app/_not-found/page-40f9542ec1a44171.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/app/layout-af516ffe403df407.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/app/page-2ce3c267139d240c.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/fd9d1056-ba4a750c711b54a1.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/framework-3c0fba3a5d3f98d5.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/main-261ff68c231e8a40.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/main-app-c703d3ce60df6218.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/pages/v2-a547ed9bede65eaf.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/pages/v3-d9e1bbffe10417c7.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/pages/v4-974d7ad581457b5d.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/pages/v5-486e38d6e89139a5.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/pages/v5U-bc735c217ad00d7f.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-914e1110a2867878.js",revision:"jZ5bkU22aO9N4h9tTfPPq"},{url:"/_next/static/css/6e68ecde3078691b.css",revision:"6e68ecde3078691b"},{url:"/_next/static/css/c64e96a23d482e9f.css",revision:"c64e96a23d482e9f"},{url:"/_next/static/jZ5bkU22aO9N4h9tTfPPq/_buildManifest.js",revision:"53d38448fab14a8c2843b56d58071d10"},{url:"/_next/static/jZ5bkU22aO9N4h9tTfPPq/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/e11418ac562b8ac1-s.p.woff2",revision:"0e46e732cced180e3a2c7285100f27d4"},{url:"/assets/RSDK.png",revision:"fe3d2ff3e10ffba90f778268edd6ce54"},{url:"/assets/RSDKGeneric.png",revision:"6bdd0f922b458d0dfa20bc275e41cbe0"},{url:"/assets/RSDKv3.png",revision:"fb3ebb04b71f20c718b0cd06455a063f"},{url:"/assets/RSDKv4.png",revision:"cfce008bce5e063cb511dfd4a0a3d28a"},{url:"/assets/RSDKv5.png",revision:"3a00f8ad335456960edbd8ea6dc9a7a4"},{url:"/assets/RSDKv5U.png",revision:"03e3b30d53631c45064fde3b7ea1805f"},{url:"/coi-serviceworker.js",revision:"afbcd0cae1c08e590c7aa27b845ed3a2"},{url:"/icons/RSDK.png",revision:"4bf91fd3b49f1687551aecdcb47b9cb9"},{url:"/lib/ModuleInit.js",revision:"c090c9757cdbaa6b85eb366e04aed196"},{url:"/lib/RSDKv2.js",revision:"58eb610510e2a6a8882b1459e22d02df"},{url:"/lib/RSDKv3.js",revision:"c5b0dd1c300bd3be0f29ce43767692c2"},{url:"/lib/RSDKv4.js",revision:"8916057b1856212a4fdba0af171bd38b"},{url:"/lib/RSDKv5.js",revision:"79b51dde0fe2d7341a6c1dd323b8e9d9"},{url:"/lib/RSDKv5U.js",revision:"4ca43fd21fe687c87a9fe3aae345eb8e"},{url:"/modules/Files.js",revision:"c1dd7a49e404f646b10e737bc3425465"},{url:"/modules/Files.wasm",revision:"a16096ff62ced545190c2b1f47035acc"},{url:"/modules/RSDKv2.js",revision:"0b253476ee28e646386439f06ce7af25"},{url:"/modules/RSDKv2.wasm",revision:"bd54bd66472deb5bfd983029e6740ab2"},{url:"/modules/RSDKv3.js",revision:"914c4aebf404889ee442e385ecbd0286"},{url:"/modules/RSDKv3.wasm",revision:"9ebdfb46be92ba698d6f4a98afd9f18c"},{url:"/modules/RSDKv4.js",revision:"8d64083548ecf00f2af1360626bdf1f8"},{url:"/modules/RSDKv4.wasm",revision:"ea6f80bb252fef6bb7f450f5c55895ea"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
