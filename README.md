# Jellypic Dashboard

Jellypic is a sample app to demonstrate the capabilities of Progressive Web Apps.

## Installation
* `git clone {repository url}`
* `cd` into new directory
* `npm install`

## Running / Development
* `npm start`
* Open browser at [http://localhost:3000](http://localhost:3000)
* In order for Hot Module Replacement (HMR) to work, you need to open the browser on the same domain as HMR's domain. On my Windows machine, this is [http://10.0.75.1:3000](http://10.0.75.1:3000).

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
* Cloned with git clone --depth=1 https://github.com/davezuko/react-redux-starter-kit.git