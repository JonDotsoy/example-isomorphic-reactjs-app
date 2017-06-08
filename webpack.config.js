const path = require('path')

module.exports = {
  entry: './bootstrap/client.js',
  module: {
    rules: [
      { test: /\.json$/, use: 'json-loader' },
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, use: 'babel-loader' }
    ]
  },
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'www')
  }
}
