module.exports = {
  test: /\.(eot|ttf|woff|woff2)$/i,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'fonts/[name]-[hash:8].[ext]'
    }
  }]
}
