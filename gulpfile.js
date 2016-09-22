var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
process.env.NODE_ENV = 'development';

// Static Server + watching scss/html files
gulp.task('serve',  function() {
    browserSync.init();
	var requireDir = require('require-dir');
	requireDir('./gulp/tasks', {recurse: true});
    gulp.watch(["public/**"]).on('change', browserSync.reload);
});

