var webpack = require('webpack');
var path = require('path');

var config = {
	entry: {
		index: './index.js'
	},
	output: {
		library: 'ReduxMonkeyChat',
		libraryTarget: 'umd',
    	path: path.join(__dirname, 'dist'),
		filename: '[name].js',
	},
	module : {
    	loaders : [{
        	test : /\.js$/,
			exclude : /node_modules/,
			loader : 'babel'
      	}],
      	plugins: [
		    new webpack.ProvidePlugin({
		        "redux": "redux",
		    })
		]
  	},
	externals: {
    	redux: 'redux'
	},
};

module.exports = config;