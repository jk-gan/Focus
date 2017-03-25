const { join, resolve } = require('path')
const loadersDir = join(__dirname, 'loaders')
const { readdirSync } = require('fs')

module.exports = {
  entry: [
    './app/app.js'
  ],
  output: {
    filename: 'js/bundle.js',
    path: join(__dirname, '../dist'),
    publicPath: '/'
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
