var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: './index.js',

	output: {
		filename: 'bundle.js'
	},

	resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.less'],
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
      { test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
     }
		]
	},

  postcss: () => [
		require('autoprefixer')
	],

  plugins: ([
		new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true }),
		new CompressionPlugin()
	]),

	devtool: 'source-map'
};

