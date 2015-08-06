var gulp    = require('gulp'),
    jade    = require('gulp-jade'),
    stylus  = require('gulp-stylus'),
    connect = require('gulp-connect');

  gulp.task('jade', function() {
    gulp.src('src/templates/**/*.jade')
      .pipe(jade({pretty: true}))
      .pipe(gulp.dest('builds/development'))
      .pipe(connect.reload());
  });

  gulp.task('stylus', function() {
    gulp.src('src/stylus/main.styl')
      .pipe(stylus())
      .pipe(gulp.dest('builds/development/css'))
      .pipe(connect.reload());
  });

  gulp.task('connect', function() {
    connect.server({
      root: 'builds/development',
      port: 3000,
      livereload: true
    });
  });

  gulp.task('watch', function() {
    gulp.watch('src/templates/**/*.jade', ['jade']);
    gulp.watch('src/stylus/**/*.styl', ['stylus']);
  });

  gulp.task('default', ['connect', 'jade', 'stylus', 'watch']);
