var concat, errorHandler, gulp, gulpif, gutil, paths, plumber, uglify;

gulp = require('gulp');
plumber = require('gulp-plumber');
gutil = require('gulp-util');
gulpif = require('gulp-if');
concat = require('gulp-concat');
uglify = require('gulp-uglify');
errorHandler = require('../utils/errorHandler');
paths = require('../paths');

gulp.task('scripts', function() {
	return gulp.src([
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/magnific-popup/dist/jquery.magnific-popup.min.js',
		'app/scripts/app.js'
	])
  	.pipe(plumber({
		errorHandler: errorHandler
	}))
	.pipe(concat('app.min.js'))
	.pipe(gulpif(!gutil.env.debug, uglify()))
	.pipe(gulp.dest(paths.scripts));
});
