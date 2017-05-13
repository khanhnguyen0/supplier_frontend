var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
        'webpack/hot/dev-server',
        './src/app.js'
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=react'],
                exclude: /node_modules/

            }, {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        inline: true,
        host: '0.0.0.0'
    }
};
