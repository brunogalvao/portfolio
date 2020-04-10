var manifestJSON = require("./public/manifest.json");

pwaArgs = {
  themeColor: manifestJSON.theme_color,
  name: manifestJSON.short_name,
  msTileColor: manifestJSON.background_color
};

module.exports = {
    lintOnSave: false,
    configureWebpack: {
      entry: ["babel-polyfill", "whatwg-fetch", "./src/main.ts"]
    },

    chainWebpack: config => {
      config.plugin("pwa").tap(args => {
        return [pwaArgs];
      });
    },

    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.(pdf)(\?.*)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: 'files/[name].[hash:8].[ext]'
                }
              }
            ]
          }
        ]
      }
    }
  }