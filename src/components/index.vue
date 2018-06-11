<style scoped>
	#app {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
	}
	.el-button {
		border-radius: 0;
		width: 100%;
		margin-left: 0;
		border-left: none;
		border-right: none;
		border-top: none;
		/*background-color: #ffffff;*/
		color: #3a8ee6;
		padding-left: 10px;
	}
	.el-button:first-child {
		border-top: 1px solid #dcdfe6;
	}
	.el-main{
		padding: 0 ;
		border-left: 1px solid #8aa0ab;
		height: 100%;
	}
	.el-aside{
		overflow: visible;
		background-color: #f1f1f1;
	}
	.router-link-active{
		background-color: #409eff;
		color: #f1f1f1;
		border-left: 3px solid #b92a2a;
	}
	.el-collapse-item__header{
		background-color: #F1F1F1;
	}
	.beforee{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		z-index: -10;
		background-color: #f1f1f1;
		width: 230px;
		height: 100%;
		border-right: 1px solid #aebdc4;
	}
</style>

<template>
	<div id="app">
		<headTop></headTop>
		<div class="beforee"></div>
		<el-container>
			<el-aside width="230px">
				<el-collapse v-model="activeName" accordion>
					<el-collapse-item v-for="i in $t('arr1')" :title="i.title" :name="i.name" style="text-align: center;" :key="i.id">
						<router-link :to="i.Urlo" tag="el-button"><!---->
							<span class="el-icon-star-on"></span>{{i.nameone}}
						</router-link>
						<router-link :to="i.Urltw" tag="el-button" >
							<span class="el-icon-star-on"></span>{{i.nametwo}}
						</router-link>
						<router-link :to="i.Urlth" tag="el-button" >
							<span class="el-icon-star-on"></span>{{i.namethree}}
						</router-link>
						<router-link :to="i.Urlf" tag="el-button" >
							<span class="el-icon-star-on"></span>{{i.namefour}}
						</router-link>
					</el-collapse-item>
				</el-collapse>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import headTop from "../components/header/header";
	export default {
//		name: 'HelloWorld',

		components: {
			headTop
		},
		data() {
			return {
				activeName: '1',
//				arr1:[{
//					id:1,
//					Urlo:'/home',
//					Urltw:'/homeTwo',
//					Urlth:'/home',
//					Urlf:'/homeTwo',
//					nameone:"声纹模型管理1",
//					nametwo:"更新声纹模型2",
//					namethree:"语音身份识别3",
//					namefour:"声纹识别结果查询4",
//					title:"声纹识别",
//					num:"1"
//				},
//				{
//					id:2,
//					Urlo:'/langD',
//					Urltw:'/homeTwo',
//					Urlth:'/home',
//					Urlf:'/homeTwo',
//					nameone:"声纹模型管理5",
//					nametwo:"更新声纹模型6",
//					namethree:"语音身份识别7",
//					namefour:"声纹识别结果查询8",
//					title:"语种识别",
//					num:"2"
//				},
//				{
//					id:3,
//					Urlo:'/home',
//					Urltw:'/homeTwo',
//					Urlth:'/home',
//					Urlf:'/homeTwo',
//					nameone:"声纹模型管理9",
//					nametwo:"更新声纹模型10",
//					namethree:"语音身份识别11",
//					namefour:"声纹识别结果查询12",
//					title:"性别识别",
//					num:"3"
//				},
//				{
//					id:4,
//					Urlo:'/home',
//					Urltw:'/homeTwo',
//					Urlth:'/home',
//					Urlf:'/homeTwo',
//					nameone:"声纹模型管理13",
//					nametwo:"更新声纹模型14",
//					namethree:"语音身份识别15",
//					namefour:"声纹识别结果查询16",
//					title:"关键词识别",
//					num:"4"
//				}
//				]
			}

		},
		methods:{
//			show(index){
//				console.log(index);
//			}
		}
	}
</script>
