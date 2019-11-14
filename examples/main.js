import Vue from 'vue'
import App from './App.vue'
import { WhButton, WhRow, WhCol } from '../packages/index'

Vue.use(WhButton)
Vue.use(WhRow)
Vue.use(WhCol)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
