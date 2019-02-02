const SentryCliPlugin = require('@sentry/webpack-plugin'); // XXX https://github.com/getsentry/sentry-webpack-plugin
const slsw = require('serverless-webpack'); // XXX https://github.com/serverless-heaven/serverless-webpack
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');
const GitRevisionPlugin = require('git-revision-webpack-plugin'); // XXX https://www.npmjs.com/package/git-revision-webpack-plugin
const moment = require('moment');

// const gitRevisionPlugin = new GitRevisionPlugin();

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  // Generate sourcemaps for proper error messages
  devtool: 'source-map',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [nodeExternals()],
  // "isLocal" is a boolean property that is set to true if any known mechanism is used in the current Serverless invocation, that code is running locally.
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production', // XXX https://github.com/serverless-heaven/serverless-webpack/blob/master/README.md
  // Run babel on all .js files and skip those in node_modules
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // XXX We need to overwrite NODE_ENV because WEBPACK allows only two stages "production" and "development"
    // which causes issues with our "staging" environment
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.ENV),
      // 'process.env.GIT_COMMIT_VERSION': JSON.stringify(gitRevisionPlugin.version()),
      'process.env.DEPLOY_TIME': JSON.stringify(moment().format('LLLL')),
    }),
    /* new SentryCliPlugin({
      include: '.',
      ignoreFile: '.sentryclirc',
      ignore: ['node_modules', 'webpack.config.js', 'coverage'],
      release: gitRevisionPlugin.version(), // Dynamically get the latest git commit and use it as a release version
      dryRun: slsw.lib.webpack.isLocal, // XXX dryRun is true when we work locally,
      avoid sending source files to Sentry each time the server is started locally.
      configFile: './sentryclirc' // path to Sentry CLI config properties,
      // as described in https://docs.sentry.io/learn/cli/configuration/#properties-files
      // By default, the config file is looked for upwards from the current path and defaults
      // from ~/.sentryclirc are always loaded
    }), */
  ],
};
