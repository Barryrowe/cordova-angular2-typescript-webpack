var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var _contextPath = path.resolve(__dirname);
var _sourcePath = path.join(__dirname, 'src');



var _appEntryPath = path.join(_sourcePath, 'app', 'app.ts');
var _stylesEntryPath = fs.readdirSync(path.join(_sourcePath, 'styles'))
						.map((filename) => { return path.join(_sourcePath, 'styles', filename)});

module.exports = {
	stats: {
		colors: true,
		reasons: true
	},
	// context: _contextPath,
	entry:{
		'angular2': [
		 // Angular 2 Deps
	      '@reactivex/rxjs',
	      'zone.js',
	      'reflect-metadata',
	      // to ensure these modules are grouped together in one file
	      'angular2/angular2',
	      'angular2/core',
	      'angular2/router',
	      'angular2/http'
	    ],
		'app': './src/app/app.ts',
		'styles': _stylesEntryPath
	},
	output:{
		path: path.join(__dirname, 'www', 'build', 'js'),
		filename: '[name].bundle.js',		
	},
	resolve: {
		root: __dirname,		
		extensions: ['', '.ts', '.js']
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{ 
				test:/\.ts$/, 
				loader:'webpack-typescript',
				exclude:/node_modules/
			},
			{
				test:/\.scss$/,
				loader: ExtractTextPlugin.extract("style", ["css", "autoprefixer", "sass"])
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].bundle.css")
	],
	sassLoader: {		
	}
};