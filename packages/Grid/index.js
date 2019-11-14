import WhRow from './row.vue';
import WhCol from './col.vue';

// 为组件添加 install 方法，用于按需引入
WhRow.install = function(Vue) {
    Vue.component(WhRow.name, WhRow)
}
WhCol.install = function(Vue) {
    Vue.component(WhCol.name, WhCol)
}

export {
    WhRow,
    WhCol
}
