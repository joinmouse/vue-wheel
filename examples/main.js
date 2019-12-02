import Vue from 'vue';
import App from './App.vue';
import { WhButton, WhRow, WhCol } from '../packages/index';
import router from './router'

Vue.use(WhButton)
Vue.use(WhRow)
Vue.use(WhCol)

Vue.config.productionTip = false

new Vue({
   router,
   render: h => h(App)
}).$mount('#app')
