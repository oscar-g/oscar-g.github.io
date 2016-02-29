// copy assets folder
// (min with source map)
// compile jade templates

var del = require('del'),
    gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    jade = require('gulp-jade');

gulp.task('assets', function(){
    return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./htdocs'));
});

gulp.task('styles', function(){
    return gulp.src('./src/styl/screen.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./htdocs/css/'));
});

gulp.task('pages', function(){
    return gulp.src('./src/pages/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./htdocs/'));
});

gulp.task('watch', ['build'], function(){
    return gulp.watch('./src/**/*', ['build']);
});

gulp.task('build', ['assets', 'styles', 'pages']);

gulp.task('default', ['build', 'watch']);
