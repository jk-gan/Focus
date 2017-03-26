module.exports = {
  test: /\.(jpeg|jpg|png|gif|svg|eot|ttf|woff|woff2)$/i,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'images/[name]-[hash:8].[ext]'
    }
  }]
}
