import { createI18n } from 'vue-i18n'

import  lang from "./lang/index";

import zhCnEl from 'element-plus/lib/locale/lang/zh-cn'
import enEl from 'element-plus/lib/locale/lang/en'

import store from 'store2'

//获取浏览器的语言
// const language = (navigator.language || 'zh-cn').toLocaleLowerCase(); 
// 创建 i18n
const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 全局模式，可以直接使用 $t
  locale: store.get('lang') || 'zh-cn',
  messages: {
    'zh-cn': {
      ...lang.zhCh,
      ...zhCnEl
    },
    'en': {
      ...lang.en,
      ...enEl
    }
  }
})
export default i18n