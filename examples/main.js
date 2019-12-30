import Vue from 'vue'
import router from './router.js' 
import App from './App.vue'
// 引入UI包
import WheelVueUI from '../packages/index'

Vue.use(WheelVueUI)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
