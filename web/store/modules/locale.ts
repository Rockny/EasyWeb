//import store from "store2";
import { useCookies } from '@vueuse/integrations/useCookies'
//使用cookie
const cookie = useCookies();

const localeStore = {
  namespaced: true,
  state: {
    locale: cookie.get('locale') || 'zh-cn'
  },
  mutations: {
    setLang(state, payload) {
      state.locale = payload.locale
      cookie.set('locale',payload.locale);
      location.reload();
    }
  },
  actions: {
    setLang({ commit }, { payload }) {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          commit('setLang', payload)
          resolve();
        }, 300)
      });
    }
  }
}

export {
  localeStore
}
