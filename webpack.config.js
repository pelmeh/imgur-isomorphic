require('webpack')

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
          presets: ['es2017', 'stage-0', 'react'],
          plugins: [
            'transform-async-to-generator',
            'transform-decorators'
          ]
        }
      }
    ]
  }
}

module.exports = config
