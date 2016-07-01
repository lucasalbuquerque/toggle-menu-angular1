var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

//npm install gulp-clean-css --save-dev
//npm install gulp-pump
gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('min'));
});

//npm install --save-dev gulp-uglify
gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('min'));
});

//npm install --save-dev gulp-imagemin
gulp.task('imagemin', () =>
    gulp.src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('min/images'))
);
