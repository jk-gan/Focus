module.exports = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
      'react',
      ['env', { modules: false }]
    ]
  }
}
