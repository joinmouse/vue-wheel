import Vue from 'vue'
import router from './router.js' 
import App from './App.vue'
import { WhButton, WhRow, WhCol, WhContent, WhFooter, WhLayout, WhHeader, WhSider} from '../packages/index'

Vue.use(WhButton)
Vue.use(WhRow)
Vue.use(WhCol)

Vue.use(WhLayout)
Vue.use(WhContent)
Vue.use(WhHeader)
Vue.use(WhFooter)
Vue.use(WhSider)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
