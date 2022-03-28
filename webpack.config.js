const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    target: ['es5', 'web'],
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
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader, options: { publicPath: "" } },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env"
                                ]
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|gif|jpe?g|ico)$/i,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 30 * 1024
                    }
                }
            },
            {
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            scriptLoading: 'defer'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        })
    ],
}