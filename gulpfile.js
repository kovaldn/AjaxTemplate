'use strict';

var gulp = require("gulp"),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

//Компиляция SASS
    gulp.task('sass', function () {
        gulp.src('app/scss/*.scss')
            .pipe(sass())
            .on('error', log)
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.stream());
    });

// Запускаем локальный сервер (только после компиляции sass)
gulp.task('server', ['sass'], function () {  
  browserSync.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: 'app'
    }
  });  
});

// слежка и запуск задач 
gulp.task('watch', function () {
  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch([
    'app/**/*.html',
    'app/js/**/*.js'
  ]).on('change', browserSync.reload);
  gulp.watch([
    'app/css/**/*.css'
  ]).on('change', browserSync.reload);
});

// Задача по-умолчанию 
gulp.task('default', ['server', 'watch']);

// Более наглядный вывод ошибок
var log = function (error) {
  console.log([
    '',
    "----------ERROR MESSAGE START----------",
    ("[" + error.name + " in " + error.plugin + "]"),
    error.message,
    "----------ERROR MESSAGE END----------",
    ''
  ].join('\n'));
  this.end();
}