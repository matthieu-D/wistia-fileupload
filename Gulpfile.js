var gulp = require('gulp'),
Server = require('karma').Server,
inject = require('gulp-inject'),
spawn = require('child_process').spawn, node,
wiredep = require('wiredep').stream;

/**
 * Continiously run tests
 */
 
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun : false
  },  function() {
    done();
  }).start();
});

gulp.task('launchNode', function() {
  if (node) node.kill()
  node = spawn('node', ['index.js'], {stdio: 'inherit'})
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
})

gulp.task('server', function() {
  gulp.run(['buildIndex','launchNode'])
})

/**
 * $ gulp
 * description: start the development environment
 */
gulp.task('default', function() {
  gulp.run('server')
  gulp.watch(['./client/app/**/*.js', './client/app/**/*.html'], function() {
    gulp.run('server')
  })
})

gulp.task('buildIndex', function () {
  gulp.run(['wiredep','inject'])
})

gulp.task('wiredep', function () {
  gulp.src('client/pre-processed/index.html')
    .pipe(wiredep({ ignorePath: '../'}))
    .pipe(gulp.dest('client'));
});

gulp.task('inject', function () {
  let target = gulp.src('./client/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  let sources = gulp.src(['app/**/*.js', 'app/**/*.css','!app/**/*.spec.js']
  	, {cwd: __dirname + '/client', read: false});
 
  return target.pipe(inject(sources,{addRootSlash:false}))
    .pipe(gulp.dest('./client'));
});

// clean up if an error goes unhandled.
process.on('exit', function() {
    if (node) node.kill()
})