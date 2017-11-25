const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, './src')
};

const DEV_SERVER = {
    hot: true,
    hotOnly: true,
    historyApiFallback: true,
    overlay: true,
    contentBase: './src',
    proxy: {
        '/authApi': {
            target: 'http://localhost:9000',
            pathRewrite: {'^/authApi': ''}
        },
        '/computerApi': {
            target: 'http://localhost:8090',
            pathRewrite: {'^/computerApi': ''}
        },
        '/flatApi': {
            target: 'http://localhost:8091',
            pathRewrite: {'^/flatApi': ''}
        },
        '/motorcycleApi': {
            target: 'http://localhost:8092',
            pathRewrite: {'^/motorcycleApi': ''}
        }
    }
};

module.exports = function (env) {
    env = env || {};
    const isDev = !env.build;

    return {
        cache: true,
        // TODO: not with if, but separeted configs
        devtool: isDev ? 'eval-source-map' : 'source-map',
        devServer: DEV_SERVER,

        resolve: {
            alias: {'@src': PATHS.src},
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            modules: ['node_modules', 'src']
        },
        entry: {
            app: [
                'react-hot-loader/patch',
                './src/index.tsx'
            ]
        },
        output: {
            filename: '[name].js?[hash]',
            path: path.resolve(__dirname, 'dist'),
            chunkFilename: '[id].chunk.js?[chunkhash]',
            publicPath: '/'
        },

        module: {
            rules: [
                // typescript
                {
                    test: /\.tsx?$/,
                    include: PATHS.src,
                    use: [
                        {loader: 'react-hot-loader/webpack'},
                        {loader: 'ts-loader'}
                    ]
                },
                {
                    test: /\.(ts|tsx)$/,
                    enforce: 'pre',
                    loader: 'tslint-loader'
                },

                // json
                {
                    test: /\.json$/,
                    include: PATHS.src,
                    use: {loader: 'json-loader'}
                },
                // css
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader'
                    })
                }
            ]
        },

        plugins: [
            new DashboardPlugin(),
            new ExtractTextPlugin({
                filename: 'style.css?[contenthash]',
                allChunks: true
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(isDev ? 'development' : 'production')
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.bundle.js?[hash]'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ]
    }
};