const { join, resolve } = require('path')
const loadersDir = join(__dirname, 'loaders')
const { readdirSync } = require('fs')

const ROOT_PATH = resolve(__dirname);
const APP_PATH = resolve(ROOT_PATH, '../lib/index.js');
const BUILD_PATH = resolve(ROOT_PATH, '../dist');

module.exports = {
  entry: [
    APP_PATH
  ],
  output: {
    filename: 'js/bundle.js',
    path: BUILD_PATH,
    publicPath: './dist/'
  },
  module: {
    rules: readdirSync(loadersDir).map(file => (
      require(join(loadersDir, file))
    ))
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  }
}
