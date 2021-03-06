"use strict";
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8080";

module.exports = {
	entry: [
		'./src/client/web/main.jsx'
	],
	output: {
		path: './build/web',
		filename: 'bundle.js'
	},
	resolve: {
    extensions: ['', '.js', '.jsx']
  },
	module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
				query: {
					plugins: ['transform-decorators-legacy' ],
    			presets: ['es2015', 'stage-0', 'react']
				}
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      }
    ]
	},
	devServer: {
		port: PORT,
		host: HOST
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/client/web/template.html'
		})
	]
};
