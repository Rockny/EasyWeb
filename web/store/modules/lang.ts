import store from "store2";
const langStore = {
    namespaced: true,
    state: {
      lang: 'zh-cn'
    },
    mutations: {
      setLang (state, payload) {
        state.lang = payload.lang
        store.set('lang',state.lang);
        location.reload();
      }
    },
    actions: {
        setLang ({ commit }, { payload }) {
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
    langStore
  }
  