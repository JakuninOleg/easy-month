// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/styles/main.scss")]
    });
}

module.exports = {
  siteName: "Здесь Легко",
  titleTemplate:
    "Деньги под ПТС под 1,5% - Здесь Легко",
  plugins: [
    {
      use: "gridsome-plugin-yandex-metrika",
      env: 'production',
      options: {
        id: 56518120,
        options: {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          ecommerce: "dataLayer"
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-127687486-3'
      }
    }
  ],
  chainWebpack(config) {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};


