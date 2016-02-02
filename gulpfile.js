var gulp = require('gulp'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus'),
	concat = require('gulp-concat'),
	nib = require('nib'),
	stylish = require('jshint-stylish'),
	amdOptimize = require('amd-optimize'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint');

gulp.task('stylus', function() {	
	gulp.src('./public/src/**/*.styl')
		.pipe(concat('app.styl'))
		.pipe(stylus({
				use: nib(),
				compress: true
			}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
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

gulp.task('js_prod', function(cb) {
	var js = gulp.src('./public/src/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(amdOptimize("app",
			{
				name: "app",
				configFile: "./public/src/app.js",
				baseUrl: './public/src'
			}
		))
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/dist'));
});

gulp.task('debug', function() {
	gulp.run('stylus');
	gulp.run('jade');
	gulp.run('js');
});

gulp.task('default', function() {
	gulp.run('stylus');
	gulp.run('jade');
	gulp.run('js_prod');
});

gulp.task('watch', function() {
	gulp.run('debug');
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