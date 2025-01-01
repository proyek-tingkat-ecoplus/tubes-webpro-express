const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './bin/www', // Entry point aplikasi backend Anda
    target: 'node', // Karena kita membundel untuk Node.js, bukan browser
    externals: [nodeExternals()], // Agar tidak membundel modul dari node_modules
    output: {
        path: path.resolve(__dirname, 'dist'), // Folder output
        filename: 'bundle.js', // Nama file output bundling
    },
    mode: 'production', 
    module: {
        rules: [{
            test: /\.js$/, 
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', 
                options: {
                    presets: ['@babel/preset-env'], 
                },
            },
        }, ],
    },
    devtool: 'source-map', 
};