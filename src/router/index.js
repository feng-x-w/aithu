import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home/home'
import homeTwo from '@/components/home/homeTwo'
import DefaultHome from '@/components/home/DefaultHome'
import userdata from '@/components/login/userdata'
import changepass from '@/components/login/ChangePass'
import drill from '@/components/language/drill'
import login from '@/components/login/UserLogin'
import disindex from '@/components/discern/index'
//import router from './router'result
import taskM from '@/components/task/taskM'
import result from '@/components/result/result'
import newfile from '@/components/aaa/new_file'
import voice from '@/components/VoiceIndexing/voice'
import config from '@/components/configuration/config'

Vue.use(Router)

const router = new Router({
  router,
//mode: 'hash',
  base: '', //添加的地方
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/login',
      name: 'login',
      component: login
    },
//  {
//    path: '/login',
//    name: '',
//    component: login, //_import('Login/login')
//    hidden: true
//  },
    {
      path: '/index',
      name: 'index',
      component: index,
//    meta: {
//      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//    },
      children: [
				{
          path: '/',
          name: 'DefaultHome',
          component: DefaultHome
        },
        {
          path: '/drill',
          name: 'drill',
          component: drill
        },
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/homeTwo',
          name: 'homeTwo',
          component: homeTwo
        },
        {
          path: '/DefaultHome',
          name: 'DefaultHome',
          component: DefaultHome
        },
        {
          path: '/changepass',
          name: 'changepass',
          component: changepass
        },
        {
          path: '/userdata',
          name: 'userdata',
          component: userdata
        },
        {
          path: '/disindex',
          name: 'disindex',
          component: disindex
        },
        {
          path: '/taskM',
          name: 'taskM',
          component: taskM
        },
        {
          path: '/result/:id',
          name: 'result',
          component: result
        },
        {
          path: '/result',
          name: 'result',
          component: result
        },
        {
          path: '/voice',
          name: 'voice',
          component: voice
        },
        {
          path: '/newfile',
          name: 'newfile',
          component: newfile
        },
        {
          path: '/config',
          name: 'config',
          component: config
        }
      ]
    }
  ]
})
//router.beforeEach((to, from, next) => {
//  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//      if (store.state.token) {  // 通过vuex state获取当前的token是否存在
//          next();
//      }
//      else {
//          next({
//              path: '/login',
//              query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//          })
//      }
//  }
//  else {
//      next();
//  }
//})
export default router
