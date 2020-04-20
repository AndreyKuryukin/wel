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
        port: 8080,
        proxy: {
            '/user': 'http://localhost:8081',
            '/userInfo': 'http://localhost:8081',
            '/userStatus': 'http://localhost:8081',
        }
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.png$/, use: 'url-loader' },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        }
                    },
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new CopyPlugin([
          { 
            from: path.join(__dirname, '/src/static/index.html'), 
          },
        ]),
      ],
  };