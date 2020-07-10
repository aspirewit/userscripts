const fs = require('fs')
const path = require('path')
const R = require('ramda')
const TerserPlugin = require('terser-webpack-plugin')

const scriptsPath = path.join(__dirname, 'src/scripts')

const entry = R.pipe(
  fs.readdirSync,
  R.map(filename => [filename.replace('.js', ''), path.join(scriptsPath, filename)]),
  R.fromPairs
)(scriptsPath)

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'inline-source-map',
  entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: /[==UserScript==|@|==/UserScript==]/i,
          },
        },
      }),
    ],
  },
}
