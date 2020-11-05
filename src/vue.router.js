import Vue from 'vue'
import VueRouter from 'vue-router'
console.log(Vue)
import mine from '/src/components/mine'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/mine',
            component: mine
        },
    ]
})
export default router