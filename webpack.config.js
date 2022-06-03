const path = require('path');

module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    devServer: {
		static: {
            directory: path.join(__dirname, './'),
        }
	}
}