// copy assets folder
// (min with source map)
// compile jade templates
require('dotenv').config();
var del = require('del'),
    gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    pug = require('gulp-pug');

gulp.task('assets', ['clean'], function(){
    return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./build'));
});

gulp.task('styles', ['clean'], function(){
    return gulp.src('./src/styl/screen.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('pages', ['clean'], function(){
    return gulp.src('./src/pages/**/*.pug')
    .pipe(pug({
        locals: {
            ga: process.env.GOOGLE_ANALYTICS_KEY,
        }
    }))
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch', ['build'], function(){
    return gulp.watch('./src/**/*', ['build']);
});

gulp.task('clean', function() {
    return del('./build/');
});

gulp.task('build', ['clean', 'assets', 'styles', 'pages']);

gulp.task('default', ['build', 'watch']);
