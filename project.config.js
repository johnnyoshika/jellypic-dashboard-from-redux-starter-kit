const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  /** The environment to use when building the project */
  env: NODE_ENV,
  /** The full path to the project's root directory */
  basePath: __dirname,
  /** The name of the directory containing the application source code */
  srcDir: 'src',
  /** The file name of the application's entry point */
  main: 'main',
  /** The name of the directory in which to emit compiled assets */
  outDir: 'dist',
  /** The base path for all projects assets (relative to the website root) */
  publicPath: '/',
  /** Whether to generate sourcemaps */
  sourcemaps: true,
  /** A hash map of keys that the compiler should treat as external to the project */
  externals: {},
  /** A hash map of variables and their values to expose globally */
  globals: {
    FACEBOOK_APP_ID: '"215604332289047"',
    CLOUDINARY_CLOUD_NAME: '"dfk3jxiqp"',
    CLOUDINARY_UPLOAD_PRESET: '"jellypic"',
    WEB_PUSH_VAPID_PUBLIC_KEY: '"BPDnKM0PbT9PI0kqnpGA-Xsgls4Lg39blrufpW408iubor_snW9nPX8eoCUJ7cP_M0Ex1lROBzrIPCRtQWvmlFs"'
  },
  /** Whether to enable verbose logging */
  verbose: false,
  /** The list of modules to bundle separately from the core application code */
  vendors: [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'redux-thunk',
    'react-router',
  ],
}
