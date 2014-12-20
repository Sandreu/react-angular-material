var source          = require('vinyl-source-stream');
var browserify      = require('browserify');
var runSequence     = require('run-sequence');
var sass            = require('gulp-sass');
var serve           = require('gulp-serve');
var concat          = require('gulp-concat');
var deploy          = require('gulp-gh-pages');
var fs              = require('fs');
var through2        = require('through2');
var path            = require('path');

var pack            = require('../package.json');

module.exports = function(gulp) {

    gulp.task('docs', function (next) {
        runSequence(['docs:vendors', 'docs:app', 'docs:demo', 'docs:dist'], 'docs:deploy', next);
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
            .pipe( gulp.dest("docs/js") );
    });
    
    // ---------------------------------------------------------
    
    gulp.task('docs:app', function (next) {
        var bundle = browserify('./docs/app/index.jsx'),
            key;
        
        bundle.transform('reactify');
        bundle.external('react-md');
        bundle.external('vendor-exposes');
        bundle.external('react-md-demo');
        
        for (key in pack.dependencies) {
            bundle.external(key);
        }
        
        return bundle.bundle()
            .pipe( source('app.js') )
            .pipe( gulp.dest("docs/js") );
    });
    
    // ---------------------------------------------------------
    
    gulp.task('docs:demo', function (next) {
        var bundle = browserify(),
            key;
        
        bundle.transform('reactify');
        bundle.external('react-md');
        
        for (key in pack.dependencies) {
            bundle.external(key);
        }
        
        var demo = [];
        gulp.src(['./src/**/demo/*.jsx'])
            .pipe(through2.obj(function (file, enc, cb) {
                var module = path.basename(file.path, '.jsx');
                bundle.require(file.path, { expose: 'react-md-demo/' + module });
                
                demo.push({
                    module: module,
                    source: file.contents.toString()
                });
                
                cb();
            }, function () {
                var stream = through2();
                
                bundle.require(stream, { expose: 'react-md-demo' });
                
                stream.on('end', function () {
                    bundle.bundle()
                        .pipe( source('demo.js') )
                        .pipe( gulp.dest("docs/js") )
                        .on('end', function () {
                            next();
                        });
                });
                
                stream.push('module.exports = ' + JSON.stringify(demo));
                stream.push(null);
            }));
    });
    
    // ---------------------------------------------------------
    
    gulp.task('docs:vendors', function (next) {
        var bundle = browserify(),
            key;
        
        for (key in pack.dependencies) {
            if (key !== 'react') bundle.require(key);
        }
        bundle.require('./node_modules/react/addons.js', { expose: 'react' });
        bundle.require('./src/vendor-exposes.js', { expose: 'vendor-exposes' });
        
        return bundle.bundle()
            .pipe( source('vendors.js') )
            .pipe( gulp.dest("docs/js") );
    });
    
    // ---------------------------------------------------------
    
    gulp.task('docs:deploy', function () {
        return gulp.src(['./docs/**/*', '!./docs/app'])
            .pipe(deploy());
    });
    
    // ---------------------------------------------------------
    
    gulp.task('docs:sass', function () {
        return gulp.src('./docs/**/*.scss')
            .pipe(concat('style.css'))
            .pipe(sass())
            .pipe(gulp.dest('docs/css/'));
    });
    
    // ---------------------------------------------------------
    
    gulp.task('docs:watch', function () {
        gulp.start('docs:dist');
        gulp.start('docs:app');
        gulp.start('docs:demo');
        gulp.start('docs:sass');
        
        gulp.watch(['./src/**/*.jsx', '!./src/**/demo/*.jsx'], ['docs:dist']);
        
        gulp.watch(['./docs/**/*.jsx'], ['docs:app']);
        
        gulp.watch(['./src/**/demo/*.jsx'], ['docs:demo']);
        
        gulp.watch(['./docs/**/*.scss'], ['docs:sass']);
        
    });
    
    // ---------------------------------------------------------
    
    gulp.task('docs:serve', serve({
        root: 'docs',
        port: 8080
    }));
};