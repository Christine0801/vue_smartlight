import Vue, {defineAsyncComponent} from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
    user: {},
    tabList: [

    ],
    tabMask: 0
  },
  getters: {
  },
  mutations: {
    collapse(state) {
      state.isCollapse = !state.isCollapse
    },
    changeTabMask(state, obj) {
      if (typeof obj == 'object'){
        let index = -1
        for (let i in state.tabList) {
          if (state.tabList[i].label == obj.label){
            index = i
          }
        }
        state.tabMask = index/1+1
      }
      else if (typeof obj == 'number'){
        console.log(obj);
        if (obj == 0)
          state.tabMask = 0
        else
          state.tabMask = obj/1
      }
    },
    addTab(state, tab) {
      let mask = state.tabList.filter(item => item.label === tab.label).length == 0 ? true : false
      if (mask && tab.label != '首页')
        state.tabList.push(tab)
    },
    subTab(state, index) {
      state.tabList.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
