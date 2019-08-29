const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withImages(
  withCSS({
    cssModules: true
    // CssLoaderOptions: {
    //   importLoaders: 1,
    //   localIdentName: '[local]_[hash:base64:5]',
    // },
  })
);
