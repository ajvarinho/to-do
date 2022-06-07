
const path = require('path')
const cssMiniLoader = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new cssMiniLoader()],
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'ts-loader',
                },
            ],
        },
      {
        test: /\.s[ac]ss$/i,
        use: [
          cssMiniLoader.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
}