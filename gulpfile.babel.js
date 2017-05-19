var gulp        = require('gulp');
var handlebars  = require('gulp-compile-handlebars');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var livereload  = require('gulp-livereload');
var connect     = require('gulp-connect');
var rename      = require('gulp-rename');

const Tasks = Object.freeze({
  BUILD:   'build',
  SCRIPTS: 'scripts',
  DEFAULT: 'default',
  WATCH:   'watch',
  CONNECT: 'connect'
});

const Paths = Object.freeze({
  SRC: './index.js',
  SOURCE: './index.js',
  DIST: './build',
  DIST_MAIN: '.',
  MAPS: './maps',
  SCRIPTS: './src/**/*.js',
  PARTIALS_DIR: './src/partials',
  PARTIALS: './src/partials/*.hbs',
  MAIN_FILE: 'index.hbs',
  DIST_FILE: 'index.html',
});

const BabelConfig = Object.freeze({
  only: /^(?:.*\/node_modules\/(?:a|b)\/|(?!.*\/node_modules\/)).*$/,
  presets: ['es2015'],
  plugins: ['transform-object-rest-spread'],
  global: true
});

const BrowserifyConfig = Object.freeze({
  entries: Paths.SRC,
  debug: true
});

const Transforms = Object.freeze({
  BABELIFY: 'babelify'
});

gulp.task(Tasks.BUILD, function () {
  const data = {
    title: 'Redux Vanilla Boilerplate'
  };
  const options = {
      batch : [ Paths.PARTIALS_DIR ],
      helpers : {
          capitals : function(str){
              return str.toUpperCase();
          }
      }
  };

  return gulp.src(Paths.MAIN_FILE)
      .pipe(handlebars(data, options))
      .pipe(rename(Paths.DIST_FILE))
      .pipe(gulp.dest(Paths.DIST_MAIN));
});

gulp.task(Tasks.SCRIPTS, function () {
    return browserify(BrowserifyConfig)
      .transform(Transforms.BABELIFY, BabelConfig)
      .bundle()
      .pipe(source(Paths.SOURCE))
      .pipe(buffer())
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write(Paths.MAPS))
      .pipe(gulp.dest(Paths.DIST));
});

gulp.task(Tasks.WATCH, [Tasks.BUILD], function () {
    livereload.listen();
    gulp.watch(
      [
        Paths.SOURCE,
        Paths.SCRIPTS,
        Paths.PARTIALS,
        Paths.MAIN_FILE
      ],[
        Tasks.SCRIPTS,
        Tasks.BUILD
      ]
    );
});

gulp.task(Tasks.CONNECT, function() {
  connect.server({
    root: '.',
    port: 8883
  });
});

gulp.task(Tasks.DEFAULT, [
  Tasks.CONNECT,
  Tasks.BUILD,
  Tasks.SCRIPTS,
  Tasks.WATCH
]);
