// Karma configuration
// Generated on Wed Sep 16 2020 10:45:59 GMT+0800 (China Standard Time)
const path = require('path');

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      'src/**/*.ts',
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 匹配源文件，并使用 webpack 进行预处理
      'src/**/*.ts': ['webpack'],
    },

    webpack: {
      mode: 'development',
      entry: './src/index.ts',
      output: {
        filename: '[name].js',
      },
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: {
              loader: 'ts-loader',
              options: {
                configFile: 'tsconfig.json',
              },
            },
            exclude: /node_modules/,
          },
          {
            test: /\.tsx?$/,
            // include: [ path.join(__dirname, 'src')],
            enforce: 'post',
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true },
            },
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
    },

    coverageIstanbulReporter: process.env.CI
      ? {
        reports: ['lcovonly', 'text-summary'],
        dir: path.join(__dirname, '../coverage/%browser%/'),
        combineBrowserReports: true,
        fixWebpackSourcePaths: true,
      }
      : {
        reports: ['html', 'lcovonly', 'text-summary'],
        dir: path.join(__dirname, '../coverage/%browser%/'),
        fixWebpackSourcePaths: true,
        'report-config': {
          html: { outdir: 'html' },
        },
      },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage-istanbul'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE ||
    // config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'Chrome',
      // 'IE',
      // 'Safari',
      // 'Firefox',
      // 'Opera',
      // 'ChromeHeadless',
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    mime: {
      'text/x-typescript': ['ts', 'tsx'],
    },

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
