var vars = require('./vars'),
	gulp = require('gulp'),
	gzip = require('gulp-gzip'),
	concat = require('gulp-concat'),
	uglifyJs = require('gulp-uglify');

gulp.task('process-js-libraries', function() {
	return gulp.src([
		vars.jsLibraries.angular.min,
		vars.jsLibraries.angularRoute.min,
		vars.jsLibraries.angularResource.min,
		vars.jsLibraries.angularSanitize.min,
		vars.jsLibraries.angularAnimate.min
	])
	.pipe(concat(vars.renderedNames.javascript.min))
	.pipe(uglifyJs())
	.pipe(gulp.dest(vars.paths.scripts.dest))
	.pipe(gzip())
	.pipe(gulp.dest(vars.paths.scripts.dest));
});

gulp.task('process-js-debug-libraries', function() {
	return gulp.src([
		vars.jsLibraries.angular.debug,
		vars.jsLibraries.angularRoute.debug,
		vars.jsLibraries.angularResource.debug,
		vars.jsLibraries.angularSanitize.debug,
		vars.jsLibraries.angularAnimate.debug
	])
	.pipe(concat(vars.renderedNames.javascript.debug))
	.pipe(gulp.dest(vars.paths.scripts.dest));
});