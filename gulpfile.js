
var gulp = require('gulp');
var pandoc = require('gulp-pandoc');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
  gulp.src('./index.md')
    .pipe(pandoc({
      from: 'markdown',
      to: 'slidy',
      ext: '.html',
      args: [
        '--standalone',
        '--include-in-header=include-head',
        '--include-after-body=include-end',
        '--highlight-style', 'zenburn'
      ]
    }))
    .on('error', console.log)
    .pipe(gulp.dest('./'));
  }
);

var workingFiles = [
  './index.md',
  './scripts/**/*',
  './styles/**/*'
];



gulp.task('dev', ['default', 'webserver'], function() {
  gulp.watch(workingFiles, ['default']);
});

gulp.task('webserver', ['default'],  function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: false
    }));
});