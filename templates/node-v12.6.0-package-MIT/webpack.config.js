const path = require('path');

module.exports = {
  entry: ['src'],
  target: 'node',
  devtool: 'source-map', // Generate sourcemaps for proper error messages
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  performance: {
    hints: false, // Turn off size warnings for entry points
  },
  stats: 'minimal', // https://github.com/serverless-heaven/serverless-webpack#stats
  // Run babel on all .js files and skip those in node_modules
  optimization: {
    nodeEnv: false, // Avoids overriding NODE_ENV - See https://github.com/webpack/webpack/issues/7470#issuecomment-394259698
  },
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
  plugins: [],
  output: {
    filename: 'build.js',
  },
};
