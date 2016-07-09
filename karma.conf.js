// Karma configuration
// Generated on Sat Jul 02 2016 19:53:02 GMT-0500 (PET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    plugins : ['karma-jasmine', 'karma-chrome-launcher','karma-phantomjs-launcher', 'karma-coverage'],

    // list of files / patterns to load in the browser
    files: [
      'client/bower_components/angular/angular.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      'client/bower_components/angular-animate/angular-animate.js',
      'client/bower_components/angulargrid/angulargrid.js',
      'client/bower_components/angular-bootstrap/ui-bootstrap.js',
      'client/bower_components/angular-local-storage/dist/angular-local-storage.js',
      'client/bower_components/angular-ui-router/release/angular-ui-router.js',
      'client/bower_components/toastr/toastr.js',
      'client/bower_components/lodash/dist/lodash.js',
      'client/bower_components/jshashes/hashes.js',
      'client/bower_components/angular-truncate/src/truncate.js',
      'client/app/**/*.js',
      'client/test-helpers/mock-data.spec.js',
      'client/test-helpers/spec-helper.js',
      'client/app/**/*.spec.js'
        // './src/client/test/lib/mockData.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'client/app/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
