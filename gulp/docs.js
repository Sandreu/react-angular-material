var source          = require('vinyl-source-stream');
var browserify      = require('browserify');
var runSequence     = require('run-sequence');
var sass            = require('gulp-sass');
var serve           = require('gulp-serve');
var deploy          = require('gulp-gh-pages');

var pack            = require('../package.json');

module.exports = function(gulp) {

    gulp.task('docs', function (next) {
        runSequence(['docs:vendors', 'docs:app', 'docs:dist'], 'docs:deploy', next);
    });
    
    // ---------------------------------------------------------
    
    gulp.task('docs:dist', function (next) {
        var bundle = browserify(),
            key;
        
        bundle.transform('reactify');
        bundle.require('./' + pack.main, { expose: 'react-md' });
        
        for (key in pack.dependencies) {
            bundle.external(key);
        }
        
        return bundle.bundle()
            .pipe( source('dist.js') )
            .pipe( gulp.dest("docs/js") )
    });
    
    // ---------------------------------------------------------
    
    gulp.task('docs:app', function (next) {
        var bundle = browserify('./docs/app/index.jsx'),
            key;
        
        bundle.transform('reactify');
        bundle.external('react-md');
        
        for (key in pack.dependencies) {
            bundle.external(key);
        }
        
        return bundle.bundle()
            .pipe( source('app.js') )
            .pipe( gulp.dest("docs/js") )
    });
    
    // ---------------------------------------------------------
    
    gulp.task('docs:vendors', function (next) {
        var bundle = browserify(),
            key;
        
        for (key in pack.dependencies) {
            if (key !== 'react') bundle.require(key);
        }
        bundle.require('./node_modules/react/addons.js', { expose: 'react' });
        
        return bundle.bundle()
            .pipe( source('vendors.js') )
            .pipe( gulp.dest("docs/js") );
    });
    
    // ---------------------------------------------------------
    
    gulp.task('docs:deploy', function () {
        return gulp.src('docs')
            .pipe(deploy());
    });
    
    // ---------------------------------------------------------
    
    gulp.task('docs:watch', function () {
        gulp.start('docs:dist');
        gulp.start('docs:app');
        
        gulp.watch(['./src/**/*.jsx'], ['docs:dist']);
        
        gulp.watch(['./docs/**/*.jsx'], ['docs:app']);
        
    });
    
    // ---------------------------------------------------------
    
    gulp.task('docs:serve', serve({
        root: 'docs',
        port: 8080
    }));
};