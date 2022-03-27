const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: ['es5', 'web'],
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000,
        hot: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.js$/i,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html',
        scriptLoading: 'defer'
    })],
}