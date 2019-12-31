import WhTabs from './tabs'
import WhTabHeader from './tab-header.vue'
import WhTabBody from './tab-body.vue'
import WhTabItem from './tab-item.vue'
import WhTabPane from './tab-pane.vue'

// 为组件添加 install 方法，用于按需引入
WhTabs.install = function(Vue) {
    Vue.component(WhTabs.name, WhTabs)
}
WhTabHeader.install = function(Vue) {
    Vue.component(WhTabHeader.name, WhTabHeader)
}
WhTabBody.install = function(Vue) {
    Vue.component(WhTabBody.name, WhTabBody)
}
WhTabItem.install = function(Vue) {
    Vue.component(WhTabItem.name, WhTabItem)
}
WhTabPane.install = function(Vue) {
    Vue.component(WhTabPane.name, WhTabPane)
}

export {
    WhTabs,
    WhTabHeader,
    WhTabBody,
    WhTabItem,
    WhTabPane
}