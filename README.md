# Jellypic Dashboard

Jellypic is a sample app to demonstrate the capabilities of Progressive Web Apps.

## Setup
* `git clone {repository url}`
* `cd` into new directory
* On Windows, use Node version 6.*
  * I tested it successfully on Windows with Node versions 6.3.1 and 6.11.0, but it didn't work with 8.1.1
* `npm install`

## Running / Development
* `npm start`
* Open browser at:
* [localhost:3000](http://www.jellypic.local:3000)
  * In order for Facebook Login to work, the browser must be pointing to localhost:3000 or www.jellypic.local:3000, b/c we can't seem to register 10.0.75.1 as an app domain in our Facebook app settings
* [www.jellypic.local:3000](http://www.jellypic.local:3000)
  * www.jellypic.local:3000 is registered as a `Valid OAuth redirect URI` in Facebook App settings, so this can also be used to log in with Facebook
* Proxy doesn't work (more info: [https://github.com/davezuko/react-redux-starter-kit/issues/1007](https://github.com/davezuko/react-redux-starter-kit/issues/1007)), so use Fiddler for proxying:
```
    if (oSession.uriContains("localhost:3000/api"))
      oSession.host = "localhost:56000";
    if (oSession.uriContains("10.0.75.1:3000/api"))
      oSession.host = "localhost:56000";
    if (oSession.uriContains("www.jellypic.local:3000/api"))
      oSession.host = "localhost:56000";
```

## Lint
* `npm run lint`
* autofix: `npm run lint:fix`

## Background
* Started with [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit). Selected this one over the hundreds of others by following this process:
  * List starter kits here: [http://andrewhfarmer.com/starter-project/](http://andrewhfarmer.com/starter-project/)
  * Search for ones with: `redux,webpack,es6,hmr,react-router`
  * I tried the most popular [react-boilerplate/react-boilerplate](https://github.com/react-boilerplate/react-boilerplate), but there was so much going on, especially with the server-side rendering. I wanted something simpler and client-side rendering only.
  * I didn't try the 2nd most popular [erikras/react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example) because it supports universal rendering, and I wanted a simpler one with only client-side rendering.
  * [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) is the 3rd on the list and conincidentally already have experience with it (as Olio's widget was inspired by this starter kit).