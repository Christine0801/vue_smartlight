import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: "/login",
    name: 'login',
    component: Login,
    meta: {
      title: '系统登录'
    }
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/Main'),
    meta: {
      title: '劢上智能照明系统'
    },
    childrem: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/Home')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
