import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home/home'
import homeTwo from '@/components/home/homeTwo'
import userdata from '@/components/login/userdata'
import langD from '@/components/language/drill'
import login from '@/components/login/UserLogin'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/ttms/', //添加的地方
	routes: [
//		{
//			path: '/index',
//			name: 'index',
//			component: index
//		},
		{
			path: '/',
			name: 'login',
			component: login
		},
		{
			path: '/index',
			name: 'index',
			component: index,
			children: [
//				{
//					path: '/',
//					name: 'home',
//					component: home
//				},
		        {
		            path: '/langD',
		            name: 'langD',
		            component: langD
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
					path: '/userdata',
					name: 'userdata',
					component: userdata
				}
			]
		}

	]
})
