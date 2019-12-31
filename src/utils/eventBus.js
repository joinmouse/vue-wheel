import Vue from 'vue'
// eventHub有$on、$emit、$off方法，可以充当事件总线
const eventHub = new Vue()

const eventBus = {
    install(Vue) {
        Vue.mixin({
            beforeCreate() {
                this.$eventBus = eventHub
            }
        })
    }
}

export default eventBus