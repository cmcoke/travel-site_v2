const path = require('path')

const postCSSPlugins = [
  require ('postcss-import'),
  require ('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]

module.exports = {

  // tells webpack to bundle the 'App.js' file
  entry: './app/assets/scripts/App.js',
  output: {
    // changes the output file name to 'bundled.js'
    filename: 'bundled.js',
    // the absoulte path the 'bundled.js' file will be placed once webpack has finished bundling the file.
    // tells webpack to place the 'bundle.js' file in the 'app' folder
    path: path.resolve(__dirname, 'app')
  },

  //webpack-dev-server config
  devServer: {
    // tells webpack-dev-server to watch any html file for changes.
    before: function(app, server) {
      server._watch('./app/**/*.html')
    },
    // tells webpack-dev-server the folder you want to serve up
    contentBase: path.join(__dirname, 'app'),
    // allows webpack to inject the css and js into the browser memory on the fly without needing to reload or refresh the webpage
    hot: true,
    port: 3000,
    // allows any device (phone or tablet) on the network to access the webpack-dev-server
    host: '0.0.0.0'
  },
  mode: 'development',

  // module for different file types such as css
  module: {
    rules: [
      {
        // tells webpack to apply the values in the array 'use' to any file that ends with .css
        test: /\.css$/i,
        use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
      }
    ]
  }


}
