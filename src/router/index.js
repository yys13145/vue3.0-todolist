import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Start from '../views/Start.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    //按需引入,懒加载
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'Start',
    component: Start
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
