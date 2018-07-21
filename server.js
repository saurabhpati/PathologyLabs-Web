const express = require('express'),
    app = express(),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    path = require('path')
    port = process.env.PORT || 3000;

app.listen(port, () => console.log(`port is listening on ${port}`));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'index.html')));

let compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath, stats: { colors: true }
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(__dirname, 'dist')));