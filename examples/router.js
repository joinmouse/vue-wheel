import Vue from 'vue';
import VueRouter from 'vue-router';
import ButtonPage from './demos/button'

Vue.use(VueRouter)

const routes = [
    {
        path: '/button',
        component: ButtonPage
    }
]

const router = new VueRouter({
    routes
})

export default router