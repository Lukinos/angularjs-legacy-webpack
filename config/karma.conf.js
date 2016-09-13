// Karma configuration
// Generated on Mon Sep 05 2016 10:44:40 GMT+0200 (CEST)

module.exports = function karmaConfig (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        //files: [
        //    'src/**/*.spec.js'
        //],
        files: [
            'src/app/vendor.module.js',
            'src/app/app.module.js',
            'config/karma/specs.webpack.js'
        ],


        // list of files to exclude
        exclude: [''],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/app/vendor.module.js': ['webpack', 'sourcemap'],
            'src/app/app.module.js': ['webpack', 'sourcemap'],
            'config/karma/specs.webpack.js': ['webpack', 'sourcemap']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,  //Seems not working through gulp.shell you have to specifify the command inline


        // level-sep of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // Should add some flexibility
        //browsers: ['Chrome'],
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level-sep
        // how many browser should be started simultaneous
        concurrency: Infinity,

        coverageReporter: {
            dir : './reports/coverage/',
            reporters: [
                { type: 'text-summary' },
                { type: 'json' },
                { type: 'html' },
            ],
            //instrumenters: { isparta : require('isparta') },
            //instrumenter: {
            //    '**/*.js': 'isparta'
            //}
        },

        webpack: require('./webpack.test.js')(config.failOnHint),

        webpackMiddleware: {
            noInfo: true,
            stats: 'errors-only'
        }
    });
};
