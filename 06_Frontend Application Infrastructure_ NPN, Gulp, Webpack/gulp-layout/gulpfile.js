var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream');
 
gulp.task('compress', function() {
  return gulp.src('src/js/*.js')
  .pipe(uglify()) 
  .pipe(concat('index.js'))
  .pipe(gulp.dest('dist'));
  });
  
const concat = require('gulp-concat');

gulp.task('concat-task', () => {
    return gulp.src('./src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/'));
});