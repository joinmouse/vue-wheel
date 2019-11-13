import WButton from './button.vue'

// 为组件添加 install 方法，用于按需引入
WButton.install = function(Vue) {
    Vue.component(WButton.name, WButton)
}

export default WButton
