const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const express = require('express')

module.exports = {
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  publicPath: './',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: "assets",
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: false,
  // outputDir: 'dist',   //build输出目录
  // assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
    open: false, //是否自动弹出浏览器页面
    // public: '192.168.0.104',
    host: "127.0.0.1",
    port: '8080',
    https: false,   //是否使用https协议
    hotOnly: false, //是否开启热更新
    proxy: {
      '/MiniProgram': {
        // target: 'https://www.kingpointshow.com',
        // target: 'http://192.168.21.48:28081',
        target:"http://localhost:3000/",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
					"/MiniProgram": "" //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉  
				}
      }
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            propList: ["*"],
            selectorBlackList: ['.van-'] // 过滤掉.vant-开头的class，不进行rem转换
          })
        ]
      }
    }
  },

  chainWebpack: config => {
    config.module
      .rule('zepto')
      .test(require.resolve('zepto'))
      .use('exports')
      .loader('exports-loader?window.Zepto')
      .end()
      .use('script')
      .loader('script-loader')
      .end()
    config
      .plugin('env')
      .use(require.resolve('webpack/lib/ProvidePlugin'), [{ $: 'zepto' }])
  }
}