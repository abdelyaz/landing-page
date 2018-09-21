// Include gulp
var gulp = require('gulp'),
 // Define base folders
    src = 'src/',
    dest = 'dest/',
 // Include plugins
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create(),
    cache = require('gulp-cache');

// Copy View Files
gulp.task('copy', function () {
  copyFile(src + 'view/*', dest)
  copyFile(src + 'fonts/*', dest + 'fonts/');
});
function copyFile(source, destination) {
  return gulp.src(source)
    .pipe(plumber())
    .pipe(gulp.dest(destination));
};

 // Concatenate & Minify JS
gulp.task('js', function() {
  return gulp.src(src + 'js/*.js')
  .pipe(concat('script.js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest(dest + 'js'));
});
 // Compile CSS from Sass files
gulp.task('scss', function() {
    return sass(src + 'scss/*.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(dest + '/css'));
});
// Image optimisation
 gulp.task('images', function() {
  return gulp.src(src + 'img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(dest + 'img'));
});
 // Watch for changes in files
gulp.task('watch', function() {
   // Watch Copy
  gulp.watch(src + 'view/*', ['copy']);
   // Watch .js files
  gulp.watch(src + 'js/*.js', ['js']);
   // Watch .scss files
  gulp.watch(src + 'scss/*.scss', ['scss']);
   // Watch image files
  gulp.watch(src + 'img/**/*', ['images']);
 });


  // Browser Sync
 gulp.task('serve', function () {
  // Static server & Autoreload
  browserSync.init({
    server: {
      baseDir: dest
    }
  });
});


 // Default Task
gulp.task('default', ['copy', 'js', 'scss', 'images', 'watch', 'serve']);


 // Build Task
 gulp.task('build', ['copy', 'js', 'scss', 'images']);
