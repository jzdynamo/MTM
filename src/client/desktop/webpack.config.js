/* eslint-disable */
"use strict";
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8081";

const buildPath = path.resolve(__dirname, '../../../build/desktop');

module.exports = {
	entry: [
		path.resolve(__dirname, './renderer.js')
	],
	output: {
		path: buildPath,
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
			template: path.resolve(__dirname, './index.html')
		}),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, './main.js') }
    ])
	]
};
