import Vue from 'vue'
import VueRouter from 'vue-router'

import Category from './theme/Category.vue'
import Test from './theme/Test.vue'
import newDevice from './theme/newDevice.vue'
import NotFound from './theme/NotFound.vue'
import singleDevice from './theme/singleDevice.vue'
import editDevice from './theme/editDevice.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/test', component: Test },
        { path: '/device/:id', component: singleDevice },
        { path: '/device/:id/edit', component: editDevice },
        { path: '/new', component: newDevice },
        { path: '/', name: 'category', component: Category },
        { path: '*', component: NotFound }
    ]
})

export default router
