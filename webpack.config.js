const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

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
      {test: /\.js$/, use: 'babel-loader'},
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.join(__dirname, '/src/static/index.html'),
        from: path.join(__dirname, '/src/static/index.css'),
      },
    ]),
  ],
};
