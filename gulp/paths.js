/**
 * Gulp paths
 *
 * @author Alexandre Moraes | http://github.com/alcmoraes
 * @license MIT | http://opensource.org/licenses/MIT
 */

var paths = {};

paths = {
	src: './src/',
	dest: './client/static/',
	vendor: './node_modules/',
	public: ['./src/public/*', './src/public/**/*']
};

paths.img = {
	src: [paths.src + 'img/**/*'],
	dest: paths.dest + 'img'
};

paths.react = {
	src: paths.src + 'react/app.jsx',
	watch: [
		paths.src + 'react/*.es6',
		paths.src + 'react/*.jsx',
		paths.src + 'react/**/*.es6',
		paths.src + 'react/**/*.jsx'
	],
};

paths.js = {
	vendors: [
		paths.vendor + 'jquery/dist/jquery.min.js',
		paths.vendor + 'moment/min/moment-with-locales.min.js',
		paths.src + 'js/vendors/bootstrap.js',
		paths.vendor + 'toastr/build/toastr.min.js'
	],
	src: paths.src + 'js/base.es6',
	watch: paths.src + 'js/*.es6',
	dest: paths.dest + 'js'
};

paths.css = {
	vendors: [
		paths.vendor + 'font-awesome/css/font-awesome.min.css',
		paths.src + 'css/bootstrap.css',
		paths.vendor + 'toastr/build/toastr.min.css'
	],
	src: paths.src + 'sass/base.scss',
	watch: paths.src + 'sass/*.scss',
	dest: paths.dest + 'css'
};

paths.fonts = {
	vendors: [paths.vendor + 'font-awesome/fonts/*'],
	dest: paths.dest + 'fonts'
}

module.exports = paths;