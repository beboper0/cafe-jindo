const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const IgnoreEmitWebPackPlugin = require( 'ignore-emit-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    ...defaultConfig,
    module: {
        ...defaultConfig.module,
        rules: [
            {
                test: /\.css$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: postCSSPlugins,
                            }
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        ...defaultConfig.optimization,
        splitChunks: {
            cacheGroups: {
                default: false,
                style: {
                    chunks: 'all',
                    enforce: true,
                    name: 'style',
                    test: /style\.s[ac]ss$/i,
                },
            },
        },
        minimize: true,
        minimizer: [`...`, new CssMinimizerPlugin()]
    },
    plugins: [
        ...defaultConfig.plugins,
        new IgnoreEmitWebPackPlugin( [ 'editor.js', 'style.js' ] ),
        new MiniCssExtractPlugin( {
            filename: '../style.css',
        } ),
    ],
};
