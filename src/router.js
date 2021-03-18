import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Docs from './views/Docs.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/docs',
            name: 'docs',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Docs
        }
    ]
})
