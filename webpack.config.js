var path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'production',
  context: __dirname,
  entry: './dist/slider.js',
  output: {
    filename: 'slider_bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
        {
            test: /\.(png|jpg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name][contenthash:5].[ext]'
                    }
                }
            ]
        },
        {
            test: /\.css$/,
            use: [
                'style-loader', 'css-loader'
            ]
        }
    ]
}
};