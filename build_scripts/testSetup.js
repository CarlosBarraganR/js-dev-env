
// Register Babel to transpile before Testing
require('babel-register')();

// Disable Webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {}
