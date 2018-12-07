import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Toast from './toast'
import plugin from './plugin'

Vue.component('ui-button', Button)
Vue.component('ui-icon', Icon)
Vue.component('ui-button-group', ButtonGroup)
Vue.component('ui-input', Input)
Vue.component('ui-toast', Toast)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        message: '王五'
    },
    created() {
        this.$toast("测试toast试一下", {
            position: 'bottom',
            closeButton: {
                text: '好的',
                callback() {
                    console.log('用户说知道了')
                }
            }
        })
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        }
    }
})
