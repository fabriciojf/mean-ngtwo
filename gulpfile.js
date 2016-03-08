const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');

 
gulp.task('default', function(){
	gulp.src('src/routes/**/*.es6')
		.pipe(rename({extname:".js"}))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./dist/routes'));
});


gulp.task('stream', function(){
	return gulp.src('src/routes/**/*.es6')
		.pipe(watch('src/routes/**/*.es6'))
		.pipe(rename({extname:".js"}))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./dist/routes'))

		
});



gulp.task('callback', function(cb){
	gulp.src('src/routes/**/*.es6')
		.pipe(watch('src/routes/**/*.es6'))
		.pipe(rename({extname:".js"}))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./dist/routes'))
		.on('end', cb)
});