var path = require('path');

module.exports = {
  entry: {
    example: './example.tsx'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', 'tsx', 'ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.tsx$/,
        loaders: [
          'ts-loader',
          'babel?plugins[]=syntax-jsx&plugins[]=transform-react-jsx'
        ]
      }
    ]
  },
  ts: {
    jsx: true
  }
};
