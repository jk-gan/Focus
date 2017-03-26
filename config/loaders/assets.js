module.exports = {
  test: /\.(jpeg|png|gif|svg|eot|ttf|woff|woff2)$/i,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 1024,
      name: '[name]-[hash].[ext]'
    }
  }]
}
