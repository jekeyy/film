import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
