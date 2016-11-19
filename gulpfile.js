const gulp = require('gulp')
const livereload = require('gulp-livereload')
const nodemon = require('gulp-nodemon')

gulp.task('server', () => {

  livereload.listen({start:true})
  nodemon({
    script: 'server.js',
    ext: 'js',
    env:{'NODE_ENV' : 'development'}
  }).on('restart', () => {
    gulp.src('server.js')
      .pipe(livereload())
    console.log('reiniciando....')
  })

});

gulp.task('default', ['server'])