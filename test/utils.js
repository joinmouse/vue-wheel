import Vue from 'vue'
import WheelVueUI from '../src/index'

Vue.use(WheelVueUI)

let id = 0;

/**
 * 创建一个 Vue 的实例对象
 * @param  {Object|String}  Compo   组件配置，可直接传 template
 * @param  {Boolean=false} mounted 是否添加到 DOM 上
 * @return {Object} vm
*/
export const createVue = function(component) {
    const elm = document.createElement('div')
    elm.id = 'app' + id
    id += 1
    document.body.appendChild(elm)

    const App = `
        <template>
            ${component}
        </template>
    `

    return new Vue(
        App
    ).$mount(elm);
};

/**
 * 回收 vm
 * @param  {Object} vm
 */
export const destroyVM = function(vm) {
    vm.$destroy && vm.$destroy();
    vm.$el && vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el);
};

