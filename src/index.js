import WhButton from '../packages/button/index'
import { WhRow, WhCol } from '../packages/Grid/index'
import { WhLayout, WhContent, WhHeader, WhFooter, WhSider } from '../packages/layout/index'
import { WhTabs, WhTabHeader, WhTabBody, WhTabItem, WhTabPane } from '../packages/tabs/index'
import { WhCollapse, WhCollapseItem }  from '../packages/collapse/index'
import { WhSlides, WhSlidesItem } from '../packages/slides/index'

// 以数组的结构保存组件，便于遍历
const components = [
    WhButton,
    WhRow,
    WhCol,
    WhLayout,
    WhContent,
    WhHeader,
    WhFooter,
    WhSider, 
    WhTabs, 
    WhTabHeader, 
    WhTabBody,
    WhTabItem, 
    WhTabPane,
    WhCollapse,
    WhCollapseItem,
    WhSlides,
    WhSlidesItem
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

const WheelVueUI =  {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    WhButton,
    WhRow,
    WhCol,
    WhLayout,
    WhContent,
    WhHeader,
    WhFooter,
    WhSider,
    WhTabs, 
    WhTabHeader, 
    WhTabBody,
    WhTabItem, 
    WhTabPane,
    WhCollapse,
    WhCollapseItem,
    WhSlides,
    WhSlidesItem
}

export default WheelVueUI