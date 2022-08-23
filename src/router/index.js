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
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/Home')
      },
      {
        path: 'realdata',
        name: 'realdata',
        component: () => import('@/views/realdata/Realdata')
      },
      {
        path: 'planTask',
        name: 'planTask',
        component: () => import('@/views/plantask/PlanTask')
      },
      {
        path: 'taskLog',
        name: 'taskLog',
        component: () => import('@/views/plantask/TaskLog')
      },
      {
        path: 'projectManage',
        name: 'projectManage',
        component: () => import('@/views/projectcenter/ProjectManage')
      },
      {
        path: 'monitorManage',
        name: 'monitorManage',
        component: () => import('@/views/projectcenter/MonitorManage')
      },
      {
        path: 'concentratorManage',
        name: 'concentratorManage',
        component: () => import('@/views/projectcenter/ConcentratorManage')
      },
      {
        path: 'deviceManage',
        name: 'deviceManage',
        component: () => import('@/views/projectcenter/DeviceManage')
      },
      {
        path: 'deviceGroup',
        name: 'deviceGroup',
        component: () => import('@/views/projectcenter/DeviceGroup')
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
  // console.log(to);
  document.title = to.matched[0].meta.title
  next()
})

export default router
