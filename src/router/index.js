import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from 'views/loginPage/Loginpage';
import SearchPage from 'views/searchPage/SearchPage';
import DetailsList from 'views/detailsList/DetailsList';
Vue.use(Router)

export default new Router({
	routes: [
			
		{
			path: '/',
			name: 'LoginPage',
			component: LoginPage,
			meta: {
				title: '登陆页'
			}
		},
		{
			path: '/SearchPage',
			name: 'SearchPage',
			component: SearchPage,
			meta: {
				title: '搜索页面'
			}
		},
		{
			path: '/DetailsList',
			name: 'DetailsList',
			component: DetailsList,
			meta: {
				title: '详情页面'
			}
		},
	]
})