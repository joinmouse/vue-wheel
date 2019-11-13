import Vue from 'vue'
import App from './App.vue'
import { WhButton } from '../packages/index'

Vue.use(WhButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
