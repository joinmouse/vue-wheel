import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('ui-button', Button)
Vue.component('ui-icon', Icon)
Vue.component('ui-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false
    }
})