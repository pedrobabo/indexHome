"use strict";var precacheConfig=[["/indexHome/index.html","dc786cfcced51c66223bad12cccbd004"],["/indexHome/static/css/main.6db6e87f.css","e8fd11388860911114389edeee9dd4d2"],["/indexHome/static/js/main.281a2865.js","22b718c41e4e337e867b17e835999985"],["/indexHome/static/media/bg1.1624ef64.jpg","1624ef64ca41271a100131cb65329403"],["/indexHome/static/media/bg2.ba8f5534.jpg","ba8f553469f0b7bf555b60c16b40cb89"],["/indexHome/static/media/bg3.7f2b7c5d.jpg","7f2b7c5de97cb610a79ce0cfc136b1e8"],["/indexHome/static/media/bg4.1abf245c.jpg","1abf245c14ddee1f94c3b832222f3294"],["/indexHome/static/media/bg5.33657626.jpg","33657626c169beb90473e4598af489b1"],["/indexHome/static/media/demo1.42fd250a.png","42fd250aeb128a75c43f871e1c87073c"],["/indexHome/static/media/demo2.eda2528a.png","eda2528a62ed9f80b15fbd7570f6101d"],["/indexHome/static/media/edu.b2fd776c.png","b2fd776ca9062fa897a568629fe456f2"],["/indexHome/static/media/go.0d66a2c4.png","0d66a2c4c870c7b19f8f7fa8c4ce3273"],["/indexHome/static/media/habo.b3c48884.jpg","b3c488846f3fb5016f98b744835b148c"],["/indexHome/static/media/home.058def6a.jpg","058def6a9b9b5e3e70fac675a195ec4b"],["/indexHome/static/media/skill1.a8f44136.png","a8f44136952b1b3591433f35d7632349"],["/indexHome/static/media/skill2.062bd68c.png","062bd68cb96ff2d2ac396f9ab82c896c"],["/indexHome/static/media/snow.0ac87bbb.png","0ac87bbbd3bab3536e001f8e5e81d0e5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/indexHome/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});