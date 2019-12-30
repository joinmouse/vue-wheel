import Vue from 'vue';
import VueRouter from 'vue-router';
import ButtonPage from './demos/button'
import GridPage from './demos/grid'

Vue.use(VueRouter)

const routes = [
    {
        path: '/button',
        name: 'button',
        component: ButtonPage
    },
    {
        path: '/grid',
        name: 'grid',
        component: GridPage
    }
]

const router = new VueRouter({
    routes
})

export default router