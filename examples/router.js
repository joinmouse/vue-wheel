import Vue from 'vue';
import VueRouter from 'vue-router';
import ButtonPage from './demos/button'
import GridPage from './demos/grid'
import TabPage from './demos/tab'
import CollapsePage from './demos/collapse'

Vue.use(VueRouter)

const routes = [
    {
        path: '/button',
        name: 'whbutton',
        component: ButtonPage
    },{
        path: '/grid',
        name: 'grid',
        component: GridPage
    }, {
        path: '/tab',
        name: 'tab',
        component: TabPage
    }, {
        path: '/collapse',
        name: 'collapse',
        component: CollapsePage
    }
]

const router = new VueRouter({
    routes
})

export default router