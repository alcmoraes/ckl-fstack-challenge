var
bundles = require('./bundles.js'),
imagemin = require('gulp-imagemin'),
source = require('vinyl-source-stream'),
merge2 = require('merge2'),
concat = require('gulp-concat'),
header = require('gulp-header'),
buffer = require('vinyl-buffer'),
uglify = require('gulp-uglify'),
sequence = require('gulp-sequence'),
paths = require('./paths.js'),
sass = require('gulp-sass');

/**
 * Gulp tasks
 *
 * @author Alexandre Moraes | http://github.com/alcmoraes
 * @license MIT | http://opensource.org/licenses/MIT
 */

module.exports = function(gulp) {
    gulp.task('fonts', function(){
    	return gulp.src(paths.fonts.vendors)
    	.pipe(gulp.dest(paths.fonts.dest));
    });

    gulp.task('public-assets', function(){
    	return gulp.src(paths.public)
    	.pipe(gulp.dest(paths.dest));
    });

    gulp.task('img', function () {
    	return gulp.src(paths.img.src, {base: './src/img'})
    	.pipe(gulp.dest(paths.img.dest));
    });

    gulp.task('js', function() {
    	return merge2(
    		gulp.src(paths.js.vendors)
    		.pipe(concat('vendors.js'))
			.pipe(buffer())
    		.pipe(header('/* Vendors JS */\n')),
    		bundles.reactBundleWatchify.bundle()
    		.pipe(source('react.js'))
			.pipe(buffer())
    		.pipe(header('/* React JS */\n')),
    		bundles.jsBundleWatchify.bundle()
    		.pipe(source('application.js'))
			.pipe(buffer())
    		.pipe(header('/* Application JS */\n'))
    	)
    	.pipe(concat('application.min.js'))
    	.pipe(header('/* <%= new Date() %> */\n'))
		.pipe(uglify())
    	.pipe(gulp.dest(paths.js.dest));
    });

    gulp.task('css', function () {
    	return merge2(
    		gulp.src(paths.css.vendors)
    		.pipe(header('/* Vendors Stylesheet */\n')),
			gulp.src(paths.css.src)
			.pipe(sass({
				outputStyle: 'compressed'
			}))
			.pipe(header('/* Application Stylesheet */\n'))
    	)
    	.pipe(concat('application.min.css'))
    	.pipe(header('/* <%= new Date() %> */\n'))
    	.pipe(gulp.dest(paths.css.dest));
    });

    gulp.task('watch', function () {
    	gulp.watch([paths.css.watch], ['css']);
    	gulp.watch([paths.js.watch, paths.react.watch], ['js']);
    });

	gulp.task('default', sequence('public-assets', 'img', 'js', 'css', 'fonts'));

}
