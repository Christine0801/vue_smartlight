import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/base.less'
import '@/assets/libs/gt4'
import '../src/network/mock.js'
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;


Vue.config.productionTip = false

Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


