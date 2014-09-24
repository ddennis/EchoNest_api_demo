var gulp = require('gulp');

gulp.task('markup', function() {
  return gulp.src('bin/*.html')
    .pipe(gulp.dest('build'));
});
