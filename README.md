# Jellypic Dashboard

Jellypic is a sample app to demonstrate the capabilities of Progressive Web Apps.

## Installation
* `git clone {repository url}`
* `cd` into new directory
* `npm install`

## Running / Development
* `npm start`
* Open browser at [http://localhost:3000](http://localhost:3000)
* [10.0.75.1:3000](http://10.0.75.1:3000)
  * In order for Hot Module Replacement (HMR) to work, you need to open the browser on the same domain as HMR's domain. On my Windows machine, this is 10.0.75.1:3000.
* [localhost:3000](http://www.jellypic.local:3000)
  * In order for Facebook Login to work, the browser must be pointing to localhost:3000 or www.jellypic.local:3000, b/c we can't seem to register 10.0.75.1 as an app domain in our Facebook app settings
* [www.jellypic.local:3000](http://www.jellypic.local:3000)
  * www.jellypic.local:3000 is registered as a `Valid OAuth redirect URI` in Facebook App settings, so this can also be used to log in with Facebook

## Lint
* `npm run lint`
* autofix: `npm run lint:fix`

## EF Migration
* After making changes to entities, run the following command in package manager console:
  * `add-migration <migration name>`
  * `update-database`

## Background
* Started with [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit). Selected this one over the hundreds of others by following this process:
  * List starter kits here: [http://andrewhfarmer.com/starter-project/](http://andrewhfarmer.com/starter-project/)
  * Search for ones with: `redux,webpack,es6,hmr,react-router`
  * I tried the most popular [react-boilerplate/react-boilerplate](https://github.com/react-boilerplate/react-boilerplate), but there was so much going on, especially with the server-side rendering. I wanted something simpler and client-side rendering only.
  * I didn't try the 2nd most popular [erikras/react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example) because it supports universal rendering, and I wanted a simpler one with only client-side rendering.
  * [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) is the 3rd on the list and conincidentally already have experience with it (as Olio's widget was inspired by this starter kit).
* Cloned with git clone --depth=1 https://github.com/davezuko/react-redux-starter-kit.git