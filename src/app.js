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

// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    button.$mount()
    let svg = button.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    console.log(order)
    expect(order).to.eq("2")
    button.$el.remove()
    button.$destroy()
}
{
    // mock
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    let spy = chai.spy(function () {
        console.log(1)
    })
    vm.$el.click()
    expect(spy).to.have.been.called()
}





