import Vue from 'vue'
import App from './App.vue'
import router from './router.js' 
// 引入UI包
import WheelVueUI from '../src/index'
Vue.use(WheelVueUI)


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')