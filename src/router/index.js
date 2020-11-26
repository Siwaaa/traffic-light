import Vue from 'vue'
import VueRouter from 'vue-router'
import Red from '@/views/Red.vue'
import Yellow from '@/views/Yellow.vue'
import Green from '@/views/Green.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/red'
  },
  {
    path: '/red',
    name: 'red',
    component: Red,
  },
  {
    path: '/yellow',
    name: 'yellow',
    component: Yellow,
  },
  {
    path: '/green',
    name: 'green',
    component: Green,
  },
]

const router = new VueRouter({
  routes
})

export default router
