var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: [

    path.resolve(__dirname, '../src/app/index.js')
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.SERVER_PORT': JSON.stringify(process.env.SERVER_PORT)
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react,plugins[]=transform-runtime,plugins[]=transform-object-rest-spread']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};

// var webpack = require('webpack');

// for hot reloading if webpack middleware is in node
// 'webpack-hot-middleware/client?reload=false',
//
// plugins: [
//   new webpack.HotModuleReplacementPlugin()
// ],