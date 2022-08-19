import type { UserConfig } from 'ssr-types'
import { setStyle } from 'ssr-common-utils'

const userConfig: UserConfig = {
  chainBaseConfig: (config, isServer) => {
    setStyle(config, /\.s[ac]ss$/i, {
      rule: 'sass',
      loader: 'sass-loader',
      isServer,
      importLoaders: 2, // 参考 https://www.npmjs.com/package/css-loader#importloaders
    })
    config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js')
  },
  locale: {
    enable: true
  },
  mode: 'ssr',
  stream: true,
  customeHeadScript: [{
    describe: {
      type: 'text/javascript',
      src: 'https://res.wx.qq.com/open/js/jweixin-1.2.0.js'
    },
    content: ''
  },{
    content: `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?9c3b727f5607c802bc5710cb0de96c40";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`
  }],
  htmlTemplate:'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title></title></head><body><div id="app"></div></body></html>'
}

export { userConfig }