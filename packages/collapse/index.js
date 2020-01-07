import WhCollapse from './collapse'
import WhCollapseItem from './collapseItem'

// 为组件添加 install 方法，用于按需引入
WhCollapse.install = function(Vue) {
    Vue.component(WhCollapse.name, WhCollapse)
}

WhCollapseItem.install = function(Vue) {
    Vue.component(WhCollapseItem.name, WhCollapseItem)
}

export {
    WhCollapse,
    WhCollapseItem
}