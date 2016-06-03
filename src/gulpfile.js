// Aqui nós carregamos o gulp e os plugins através da função `require` do nodejs
var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify');

// Definimos o diretorio dos arquivos para evitar repetição futuramente
var path =  {
	css: '../dist/assets/css',
	js: '../dist/assets/js',
	sass: '../dist/assets/sass',
	images: '../dist/assets/images',
	core: '../dist/core',
	tmp: 'tmp'
}

gulp.task('sass', function () {
  return gulp.src(path.sass+'/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(path.css));
});

gulp.task('compress', function() {
  gulp.src(path.js+'/*.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'-min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest(path.js))
});
 
gulp.task('default', function() {
  gulp.watch(path.sass+'/*.scss', ['sass']);
  gulp.run('compress');
});