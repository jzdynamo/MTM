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
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
	},
	devServer: {
		contentBase: "./build/web",
		port: PORT,
		host: HOST
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/client/web/template.html'
		})
	]
};
