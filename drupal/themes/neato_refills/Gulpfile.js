var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var shell = require('gulp-shell');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create;
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var fs = require("fs");
var config = require("./example.config");
//var $    = require('gulp-load-plugins')();
var exec = require('child_process').exec;

/**
 * If config.js exists, load that config for overriding certain values below.
 */
function loadConfig() {
  if (fs.existsSync(__dirname + "/./config.js")) {
    config = {};
    config = require("./config");
  }

  return config;
}

loadConfig();

/**
 * This task generates CSS from all SCSS files and compresses them down.
 */
gulp.task('sass', function () {
  return gulp.src('./source/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      noCache: true,
      outputStyle: "compressed",
      lineNumbers: false,
      loadPath: './source/css/*',
      sourceMap: false
    })).on('error', function(error) {
      gutil.log(error);
      this.emit('end');
    })
    .pipe(gulp.dest('./source/css'))
    .pipe(notify({
      title: "SASS Compiled",
      message: "All SASS files have been recompiled to CSS.",
      onLast: true
    }));
});

/**
 * This task minifies javascript in the js/js-src folder and places them in the js directory.
 */
gulp.task('compress', function() {
  return gulp.src('./js/js-src/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./js'))
    .pipe(notify({
      title: "JS Minified",
      message: "All JS files in the theme have been minified.",
      onLast: true
    }));
});

/**
 * Defines a task that triggers a Drush cache clear (css-js).
 */
gulp.task('drush:cc', function () {
  if (!config.drush.enabled) {
    return;
  }

  return gulp.src('', {read: false})
    .pipe(shell([
      config.drush.alias.css_js
    ]))
    .pipe(notify({
      title: "Caches cleared",
      message: "Drupal CSS/JS caches cleared.",
      onLast: true
    }));
});

/**
 * Defines a task that triggers a Drush cache rebuild.
 */
gulp.task('drush:cr', function () {
  if (!config.drush.enabled) {
    return;
  }

  return gulp.src('', {read: false})
    .pipe(shell([
      config.drush.alias.cr
    ]))
    .pipe(notify({
      title: "Cache rebuilt",
      message: "Drupal cache rebuilt.",
      onLast: true
    }));
});

/**
 * Define a task to spawn Browser Sync.
 * Options are defaulted, but can be overridden within your config.js file.
 */
gulp.task('browser-sync', function() {
  browserSync.init({
    port: config.browserSync.port,
    proxy: config.browserSync.hostname,
    open: config.browserSync.openAutomatically,
    reloadDelay: config.browserSync.reloadDelay,
    injectChanges: config.browserSync.injectChanges
  });
});

// Generates pattern library.
gulp.task('patternlab', function (cb) {
  exec('php pattern-lab/core/console --generate', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

/**
 * Defines the watcher task.
 */
gulp.task('watch', function() {
  // watch scss for changes and clear drupal theme cache on change
  gulp.watch(['source/**/*.scss'], ['sass', 'drush:cc']);

  // watch js for changes and clear drupal theme cache on change
  gulp.watch(['js-src/**/*.js'], ['compress', 'drush:cc']);

  // If user has specified an override, rebuild Drupal cache
  if (!config.twig.useCache) {
    gulp.watch(['templates/**/*.html.twig'], ['drush:cr']);
  }
});

// Patterns only - watch for changes in patterns, compile css and build pattern library
gulp.task('patterns-only', ['sass', 'patternlab'], function() {
  gulp.watch(['source/scss/**/*.scss'], ['sass', 'patternlab']);
  gulp.watch(['source/_patterns/**/*.*'], ['sass', 'patternlab']);
});

gulp.task('default', ['watch']);