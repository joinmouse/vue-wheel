import WhButton from './button/index'

// 以数组的结构保存组件，便于遍历
const components = [
    WhButton
]

// 定义 install 方法
const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    WhButton
}
