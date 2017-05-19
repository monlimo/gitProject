var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync').create();

/*gulp.task('default', function(){
    gulp.watch('less/*.less', function(e){
        gulp.src(e.path)
            .pipe(less())
            .pipe(gulp.dest('css'));
    });
});*/
gulp.task('default', ['browser-sync', 'watch']);

gulp.task('less', function(){
    gulp.src('./app/less/*.less')
    //gulp.src('./app/less/*.less')
        /* .pipe(less().on('error', less.logError))
        }))*/
        /*.pipe(less().on('error', function(){
            console.log('error less')
        }))*/
        .pipe(less())
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('watch', function(){
    gulp.watch('./app/*.*/.*less', ['less']);
    //gulp.watch('app/*.js').on("change", browserSync.reload);
    //gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('./app/*.*/.*less').on("change", browserSync.reload);
    //gulp.watch('app/*.sass').on('change', browserSync.reload);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://javascript-if/npm-nodejs/test-my4/app/"
    });
});

