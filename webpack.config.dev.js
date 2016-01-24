var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8000',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, 'src/index.js')
    ],
    vendors: [ 'react', 'react-dom' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /(node_modules)|(public)/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader")
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  postcss: function() {
    return [ autoprefixer, precss ];
  },
  plugins: [
    new ExtractTextPlugin("bundle.css", {
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
