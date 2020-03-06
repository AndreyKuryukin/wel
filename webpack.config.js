const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      {
        test: /\.scss$/, 
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'fast-sass-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({filename: 'styles.css',}),
    new CopyPlugin([
      {
        from: path.join(__dirname, '/src/static/index.html'),
      },
      {
        from: path.join(__dirname, '/src/static/sounds/*.mp3'),
        to: 'sounds/[name].[ext]'
      },
      {
        from: path.join(__dirname, '/src/static/video/*.mp4'),
        to: 'video/[name].[ext]'
      }
    ]),
  ],
};