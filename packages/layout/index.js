import WhLayout from './layout.vue';
import WhContent from './content.vue';
import WhHeader from './header.vue';
import WhFooter from './footer.vue';
import WhSider from './sider.vue'

// 为组件添加 install 方法，用于按需引入
WhLayout.install = function(Vue) {
    Vue.component(WhLayout.name, WhLayout)
}
WhContent.install = function(Vue) {
    Vue.component(WhContent.name, WhContent)
}
WhHeader.install = function(Vue) {
    Vue.component(WhHeader.name, WhHeader)
}
WhFooter.install = function(Vue) {
    Vue.component(WhFooter.name, WhFooter)
}
WhSider.install = function(Vue) {
    Vue.component(WhSider.name, WhSider)
}

export {
    WhLayout,
    WhContent,
    WhHeader,
    WhFooter,
    WhSider
}
