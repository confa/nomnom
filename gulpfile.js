var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var nib = require('nib');
var stylish = require('jshint-stylish');
var jshint = require('gulp-jshint');

gulp.task('stylus', function() {	
	gulp.src('./public/src/**/*.styl')
		.pipe(concat('app.styl'))
		.pipe(stylus({
				use: nib(),
				compress: true
			}))
		.pipe(gulp.dest('./public/dist/'));
});

gulp.task('jade', function() {
	gulp.src('./public/src/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('./public/dist'));
});

gulp.task('js', function() {
	gulp.src(['./public/src/**/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(gulp.dest('./public/dist'));
});

gulp.task('default', function() {
	gulp.run('stylus');
	gulp.run('jade');
	gulp.run('js');
});

gulp.task('watch', function() {
	gulp.run('default');
	gulp.watch('./public/src/**/*.js', function() {
		gulp.run('js');
	});
	gulp.watch('./public/src/**/*.styl', function() {
		gulp.run('stylus');
	});
	gulp.watch('./public/src/**/*.jade', function() {
		gulp.run('jade');
	});
});