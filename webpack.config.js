const path = require('path'),
	webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './index.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},

			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader' // creates style nodes from JS strings
				}, {
					loader: 'css-loader' // translates CSS into CommonJS
				}, {
					loader: 'sass-loader' // compiles Sass to CSS
				}]
			},
		]
	},
	stats: {
		colors: true
	}
	,
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
	],
	// devtool: 'source-map',
	mode:
		'development'
};