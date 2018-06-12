export default {
	logo: {
		title: '智能语音系统'
	},
	//header
	header_deng: {
		UserName: '用户名',
		user: '用户资料',
		LogOut: '退出登录'
	},
	//Breadcrumb
	Breadcrumb: {
		home: "首页"
	},
	//NextClass
	btn: [{
		id: 1,
		name: "primary",
		Txt: "新建模型组"
	}, {
		id: 2,
		name: "primary",
		Txt: "说话人信息"
	}, {
		id: 3,
		name: "primary",
		Txt: "新建模型"
	}, {
		id: 4,
		name: "primary",
		Txt: "更新声纹模型"
	}],
	// 导航栏
	arr1: [{
			id: 1,
			Urlo: '/home',
			Urltw: '/homeTwo',
			Urlth: '/home',
			Urlf: '/homeTwo',
			name: "声纹识别",
			nameone: "声纹模型管理",
			nametwo: "更新声纹模型",
			namethree: "语音身份识别",
			namefour: "声纹识别结果查询",
			title: "声纹识别",
			num: "1"
		},
		{
			id: 2,
			Urlo: '/langD',
			Urltw: '/homeTwo',
			Urlth: '/home',
//			Urlf: '/homeTwo',
			name: "语种识别",
			nameone: "语种模型训练",
			nametwo: "语种类别识别",
			namethree: "语种识别结果查询",
//			namefour: "声纹识别结果查询8",
			title: "语种识别",
			num: "2"
		},
		{
			id: 3,
			Urlo: '/home',
			Urltw: '/homeTwo',
			Urlth: '/home',
//			Urlf: '/homeTwo',
			name: "性别识别",
			nameone: "性别识别模型管理",
			nametwo: "性别识别测试",
			namethree: "性别识别结果查询",
//			namefour: "声纹识别结果查询12",
			title: "性别识别",
			num: "3"
		},
		{
			id: 4,
			Urlo: '/home',
			Urltw: '/homeTwo',
			Urlth: '/home',
//			Urlf: '/homeTwo',
			name: "关键词识别",
			nameone: "关键词模型训练",
			nametwo: "语音关键词识别",
			namethree: "关键词识别结果查询",
//			namefour: "声纹识别结果查询16",
			title: "关键词识别",
			num: "4"
		}
	],
	home_slot:{
		slotOne:"声纹识别",
		slotTwo:"声纹模型管理"
	},
	NextC:{
		h2:"模型组",
		placeholder:"输入关键字进行过滤"
	},
	NextClass: [{
		id: 1,
		label: '一级 1',
		children: [{
			id: 4,
			label: '二级 1-1',
			children: [{
				id: 9,
				label: '三级 1-1-1'
			}, {
				id: 10,
				label: '三级 1-1-2'
			}]
		}]
	}, {
		id: 2,
		label: '一级 2',
		children: [{
			id: 5,
			label: '二级 2-1'
		}, {
			id: 6,
			label: '二级 2-2'
		}]
	}, {
		id: 3,
		label: '一级 3',
		children: [{
			id: 7,
			label: '二级 3-1'
		}, {
			id: 8,
			label: '二级 3-2'
		}]
	}],
	tianfu: {
		eng: '天赋是上帝给予的，要谦虚。名声是别人给予的，要感激。自负是自己给予的，要小心'
	},
	UserLog:{
		login:"用户登录",
		name:"用户名",
		pass:"密码",
		primary:"提交",
		res:"重置",
		gs:"公司简介",

	}
}