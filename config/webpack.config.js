const path = require('path')
const loadersDir = path.join(__dirname, 'loaders')
const { readdirSync } = require('fs')

module.exports = {
  entry: [
    './app/app.js',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: readdirSync(loadersDir).map(file => (
      require(path.join(loadersDir, file))
    ))
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // devServer: {
  //   port: WDS_PORT,
  // },
}
