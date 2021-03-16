const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const moment = require('moment');
const packageJSON = require('./package.json');

const createBanner = () => {
  let createdTime = moment().format('YYYY-MM-DD HH:mm:ss');
  // let year = moment().format('YYYY')
  let banner = `
 ${packageJSON.name}-${packageJSON.version}.js
 Date : ${createdTime}
`;
  return banner;
};

// use external references of React instead of including inside the bundle
const externalReactDep = false;

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  // const suffix = argv.mode === 'development' ? 'dev' : 'min'
  const devtool = argv.mode === 'development' ? 'inline-source-map' : false;

  const useExternals = isProd && externalReactDep;

  const config = {
    devtool,
    entry: {
      app: './src/index',
    },
    output: {
      path: __dirname + '/dist',
      filename: isProd ? '[name].[hash].js' : '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
        {
          test: /\.(s|c)css$/,
          exclude: /\.module\.(scss|sass)$/,
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: { plugins: [require('autoprefixer')] },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.module\.(scss|sass)$/,
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]_[local]_[hash:base64]',
                camelCase: true,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [require('autoprefixer')],
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|ttf|otf|eot)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
              },
            },
          ],
        },
        {
          test: /\.(mov|mp4)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                outputPath: '/',
              },
            },
          ],
        },
      ],
    },
    stats: {
      // copied from `'minimal'`
      all: false,
      assets: true,
      assetsSort: 'chunks',
      builtAt: true,
      cachedAssets: false,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: true,
      moduleTrace: true,
      errorDetails: true,
    },
    devServer: {
      watchContentBase: true,
      historyApiFallback: true,
      contentBase: ['./src', './public'],
      publicPath: '/',
      port: 8080,
      hot: true,
    },
    plugins: [
      new webpack.BannerPlugin({
        banner: createBanner(),
      }),
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, './dist/index.html'),
        template: './public/index.html',
        favicon: './public/favicon.ico',
      }),
    ],
    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.webpack.js',
        '.web.js',
        '.mjs',
        '.js',
        '.json',
      ],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    externals: useExternals
      ? {
          react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React',
          },
          'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM',
          },
        }
      : {},
  };

  if (isProd) {
    config.plugins.push(new CleanWebpackPlugin());

    config.plugins.push(
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].[hash].css',
        chunkFilename: '[id].css',
      }),
    );

    config.plugins.push(new OptimizeCSSAssetsPlugin());
  }

  if (argv.analyze) {
    config.plugins.push(new BundleAnalyzer());
  }

  return config;
};
