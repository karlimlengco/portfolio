var gulp      = require('gulp');
var less      = require('gulp-less');

var paths = {
    main: 'less/main.less',
    less: 'less/**/*.less'
};

gulp.task('compile-less', function() {
    return gulp.src(paths.main)
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('watch-less', function() {
    gulp.watch([paths.less], ['compile-less']);
});

gulp.task('default', ['compile-less']);