export default {
logo:{
	title:'intelligent voice system'
},
//header
header_deng:{
	UserName:'UserName',
	user:'userdata',
	LogOut :'logOut'
},
//Breadcrumb
Breadcrumb:{
	home:"home"
},
	//NextClass
	btn: [{
		id: 1,
		name: "primary",
		Txt: "New model group"
	}, {
		id: 2,
		name: "primary",
		Txt: "Speaker information"
	}, {
		id: 3,
		name: "primary",
		Txt: "New Model"
	}, {
		id: 4,
		name: "primary",
		Txt: "Update the sound print model"
	}],
// 导航栏
arr1: [{
			id: 1,
			Urlo: '/home',
			Urltw: '/homeTwo',
			Urlth: '/home',
			Urlf: '/homeTwo',
			name: "Voiceprint Recognition",
			nameone: "Sound pattern management",
			nametwo: "Update the sound print model",
			namethree: "Speech recognition",
			namefour: "Voice recognition results query",
			title: "Voiceprint Recognition",
			num: "1"
		},
		{
			id: 2,
			Urlo: '/langD',
			Urltw: '/homeTwo',
			Urlth: '/home',
//			Urlf: '/homeTwo',
			name: "language identification",
			nameone: "Language model training",
			nametwo: "Language category recognition",
			namethree: "Language recognition results",
//			namefour: "声纹识别结果查询8",
			title: "language identification",
			num: "2"
		},
		{
			id: 3,
			Urlo: '/home',
			Urltw: '/homeTwo',
			Urlth: '/home',
//			Urlf: '/homeTwo',
			name: "gender identification",
			nameone: "model management",
			nametwo: "test",
			namethree: "results query",
//			namefour: "声纹识别结果查询12",
			title: "gender identification",
			num: "3"
		},
		{
			id: 4,
			Urlo: '/home',
			Urltw: '/homeTwo',
			Urlth: '/home',
//			Urlf: '/homeTwo',
			name: "Keyword recognition",
			nameone: "model training",
			nametwo: "Speech keyword recognition",
			namethree: "results query",
//			namefour: "声纹识别结果查询16",
			title: "Keyword recognition",
			num: "4"
		}
	],
	home_slot:{
		slotOne:"Voiceprint Recognition",
		slotTwo:"Sound pattern management"
	},
	NextC:{
		h2:"model set",
		placeholder:"Enter keywords for filtering"
	},
	NextClass: [{
					id: 1,
					label: 'FirstClass 1',
					children: [{
						id: 4,
						label: 'TwoClass 1-1',
						children: [{
							id: 9,
							label: 'ThreeClass 1-1-1'
						}, {
							id: 10,
							label: 'Threeclass 1-1-2'
						}]
					}]
				}, {
					id: 2,
					label: 'FirstClass 2',
					children: [{
						id: 5,
						label: 'TwoClass 2-1'
					}, {
						id: 6,
						label: 'TwoClass 2-2'
					}]
				}, {
					id: 3,
					label: 'FirstClass 3',
					children: [{
						id: 7,
						label: 'TwoClass 3-1'
					}, {
						id: 8,
						label: 'TwoClass 3-2'
					}]
				}],
route: {
    Readme: 'Readme',
    permission: 'permission'
}
}