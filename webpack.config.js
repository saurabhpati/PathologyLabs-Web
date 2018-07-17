const path = require('path');

module.exports = {
    entry: {
        app: ['./src/app/App.jsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use :{
                loader: 'babel-loader'
            }
        }/*,
    { enforce: "pre", test: /\.(js|jsx)$/, loader: "source-map-loader" }*/]
    },
    plugins: [

    ]
}