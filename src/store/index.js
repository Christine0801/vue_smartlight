import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
    user: {},
    tabList: [
      {
        path: '/home',

      }
    ]
  },
  getters: {
  },
  mutations: {
    collapse(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
  },
  modules: {
  }
})
