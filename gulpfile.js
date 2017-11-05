// Gulp file for autimated tasks, this needs to copy files to the necessary locations

const themeName = 'custom-theme';
const nodeModulesDir = 'node_modules/';
const assetsDir = 'web/app/themes/'+themeName+'/assets/';
const publicDir = 'web/app/themes/'+themeName+'/public/';

var gulp  = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', [
  'jquery_assets','bootstrap_assets','build-css'
]);


//JQuery Setup

gulp.task('jquery_assets', function () {
    gulp.src(nodeModulesDir+'jquery/dist/jquery.js')
        .pipe(gulp.dest(publicDir +'/js'));
});

//Bootstrap Setup

gulp.task('bootstrap_assets', function(){
  gulp.src(nodeModulesDir + 'bootstrap/dist/js/bootstrap.js').pipe(gulp.dest(publicDir +'/js'));
  gulp.src(nodeModulesDir + 'bootstrap/dist/css/bootstrap.css').pipe(gulp.dest(publicDir +'/css'));
})


//Compile SCSS from assets folder to public

gulp.task('build-css', function() {
  return gulp.src(assetsDir + 'scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(publicDir + 'css'));
});

//Copy the JS into public

gulp.task('copy-js', function() {
  return gulp.src(assetsDir + 'js/*.js')
    .pipe(sass())
    .pipe(gulp.dest(publicDir + 'js/*.js'));
});


// Watch tasks

gulp.task('watch', function() {
  gulp.watch(assetsDir + 'js/*.js', ['copy-js']);
  gulp.watch(assetsDir + 'scss/*.scss', ['build-css']);
});


