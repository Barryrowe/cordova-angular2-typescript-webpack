var path = require('path');
var _basePath = path.resolve(__dirname);

module.exports = {
	stats: {
		colors: true,
		reasons: true
	},
	context: _basePath,
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
		'app': [
			'./www/app/app.ts'
		]
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
			}
		]
	}
};