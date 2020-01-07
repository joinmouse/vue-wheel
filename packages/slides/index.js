import WhSlides from './slides'
import WhSlidesItem from './slidesItem'

// 为组件添加 install 方法，用于按需引入
WhSlides.install = function(Vue) {
    Vue.component(WhSlides.name, WhSlides)
}

WhSlidesItem.install = function(Vue) {
    Vue.component(WhSlidesItem.name, WhSlidesItem)
}

export {
    WhSlides,
    WhSlidesItem
}