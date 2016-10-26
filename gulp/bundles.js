var
reactify = require('reactify'),
browserify = require('browserify'),
babelify = require('babelify'),
envify = require('envify'),
paths = require('./paths');

/**
 * Gulp browserify bundles
 *
 * @author Alexandre Moraes | http://github.com/alcmoraes
 * @license MIT | http://opensource.org/licenses/MIT
 */

exports.reactBundleWatchify = browserify({
	entries: [paths.react.src],
	transform: [babelify.configure({
		optional: ['es7.decorators']
	}), reactify, envify],
	extensions: ['.jsx', '.js', '.es6']
});

exports.jsBundleWatchify = browserify({
	entries: [paths.js.src],
	transform: [babelify.configure({
		optional: ['es7.decorators']
	}), envify],
	extensions: ['.js', '.es6']
});
