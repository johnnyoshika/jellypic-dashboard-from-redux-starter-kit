importScripts('workbox-sw.prod.v2.0.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "karma.config.js",
    "revision": "7629e0c27ea88fbbc6488cc7f3191d49"
  },
  {
    "url": "lib/logger.js",
    "revision": "7bb6c16a1067a4461e2faedf230e935e"
  },
  {
    "url": "scripts/compile.js",
    "revision": "ebd6ff5b083e26968190f3e67d5bef1e"
  },
  {
    "url": "scripts/start.js",
    "revision": "225ad68f8d747a0136e2babe2a7e73c0"
  },
  {
    "url": "webpack.config.js",
    "revision": "b3a6dbf7944ac4fe523670c99811737a"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
