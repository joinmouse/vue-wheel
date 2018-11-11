import Vue from 'vue';
import Button from './button';
import Icon from './icon';

Vue.component('ui-button', Button)
Vue.component('ui-icon', Icon)

new Vue({
    el: '#app',
    data: {
        loading1: false
    }
})