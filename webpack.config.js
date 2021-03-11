const PATH = require('path'),
      HTML_WEBPACK_PLUGIN = require('html-webpack-plugin')
const { plugins } = require('../../Platzi/SPA-Rick-and-Morty-API/webpack.config')

module.exports = {
  entry: './src/index.js',
  output: {
    path: PATH.resolve(__dirname, 'dist/'),
    filename: 'js/index.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css?$/i,
        exclude: /node_modules/,
        use: {
          loader: [
            'style-loader',
            'css-loader'
          ]
        }
      }
    ]
  },
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      inject: true,
      template: './public/index.html',
      filename: 'index.html'
    })
  ]
}