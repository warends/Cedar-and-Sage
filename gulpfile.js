'use strict';

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    babel = require('gulp-babel'),
    gutil = require('gulp-util'),
		vendor = require('gulp-concat-vendor'),
		livereload = require('gulp-livereload');

gulp.task('js', function () {
  gulp.src(['public/app/app.js', 'public/app/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .on('error', (error) => {
        console.log(error.toString());
        this.emit('end');
      })
      .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
		.pipe(gulp.dest('public/dist/js'))
		.pipe(livereload());
});

gulp.task('js-prod', function () {
  gulp.src(['public/dist/js/app.min.js'])
      .pipe(uglify())
    .pipe(gulp.dest('public/dist/js'))
});

gulp.task('vendor', function () {
  gulp.src(['public/vendor/*'])
    .pipe(sourcemaps.init())
      .pipe(vendor('vendor.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/dist/js'))
    .on('error', gutil.log);
});

gulp.task('sass', function () {
  return gulp.src('public/css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('public/dist/styles'))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
  gulp.watch(['public/app/**/*.js', 'app/**/*.js'], ['js']);
  gulp.watch('public/css/sass/**/*.scss', ['sass']);
});

gulp.task('serve', ['watch'], function () {
  nodemon({
    script: 'keystone.js',
    ext: 'html js scss twig'
  });
});
