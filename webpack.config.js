const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const fs = require('fs')
const nodeModules = {}
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod
  })

const config = {
  entry: {
    main: './client/src/index.js'
  },
  output: {
    filename: './client/public/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['node6', 'es2017', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          loader: [
            {
              loader: 'css-loader',
              query: {
                localIdentName: '[hash:8]',
                modules: true
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './client/public/[name].css',
      allChunks: true
    }),
    new webpack.IgnorePlugin(/\/iconv-loader$/)
  ]
}

if (process.env.NODE_ENV) {
  config.target = 'node'
  config.externals = nodeModules
  config.entry.main = './server/src/server.js'
  config.output.filename = './server/bundle.js'
}

module.exports = config
