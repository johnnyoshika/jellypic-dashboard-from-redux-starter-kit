importScripts('workbox-sw.prod.v2.1.0.js');

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
    "url": "favicon.ico",
    "revision": "fd73a6eb26a08ee46e7fd3cc34e7f6bf"
  },
  {
    "url": "humans.txt",
    "revision": "cc89ae362b7c7ed556a5a64e2d23b27e"
  },
  {
    "url": "offline/dinosaur.gif",
    "revision": "d44fad87c8c5197c89d0b83236ecef84"
  },
  {
    "url": "offline/index.html",
    "revision": "dea18599b169f2b1d790ebba179abc36"
  },
  {
    "url": "robots.txt",
    "revision": "735ab4f94fbcd57074377afca324c813"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
