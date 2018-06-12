<style scoped>
	.header{
		width: 100%;
		height: 60px;
		line-height: 60px;
		padding: 0 20px;
		/*background-color: #409EFF;*/
		background: -webkit-linear-gradient(#409EFF, #1C76D2); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#409EFF, #1C76D2); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#409EFF, #1C76D2); /* Firefox 3.6 - 15 */
		background: linear-gradient(#409EFF, #1C76D2); /* 标准的语法 */
		overflow: hidden;
		box-sizing: border-box;
	}
	.header>.LeftLogo{
		float: left;
	}
	.header>.LoginUser{
		float: right;
		padding: 0 15px;
		background-color: #81c9f5;
		border: 1px dashed #E1E1E1;
		border-top: none;
		border-bottom: none;
		-webkit-user-select:none;
	    -moz-user-select:none;
	    -ms-user-select:none;
	    user-select:none;
	}
	.header>.LoginUser>p{
		float: right;
		margin: 0 35px 0 15px;
	}
	.header>.LoginUser>img{
		width: 30px;
		height: 30px;
		border-radius: 50%;
		margin-right: 10px;
	}
	.header>.LoginUser>.deng{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
	}
	.deng>ul{
		position: absolute;
		right: 20px;
    	top: 60px;
		background-color: white;
		z-index: 999;
		-moz-box-shadow:2px 2px 10px #8e8e8e;
     	-webkit-box-shadow:2px 2px 10px #8e8e8e;
     	box-shadow:2px 2px 10px #8e8e8e;
     	border-bottom-left-radius: 5px;
     	border-bottom-right-radius: 5px;
	}
	.deng>ul>li{
		padding: 9px 18px;
		font-size: 14px;
		line-height: normal;
	}
	.deng>ul>li:hover{
		background-color: #2BAEE9;
		color: #fff;
	}
	.el-button{
		float: right;
		margin-top: 10px;
		margin: 16px 20px 16px 0;
		border: 1px solid #767676;
	}
	.el-button:hover{
		border: 1px solid #409EFF;
	}
	
</style>

<template>
	<div class="header">
		<div class="LeftLogo">
			<i class="el-icon-phone-outline"></i> <span>AITHU {{$t('logo.title')}}</span>
		</div>
		<!--<div @click="switchLanguage">{{language == 'zh' ? 'English' : '中文'}}</div>-->
		<!--<el-button @click="switchLanguage" size="mini" round>{{language == 'zh' ? 'English' : '中文'}}</el-button>-->
		<div class="LoginUser" type="text" @click="OpenThe">
			<img src="../../../build/logo.png"/>
			<span>{{$t('header_deng.UserName')}}</span>
			<div class="deng" v-show="isShow">
				<ul>
					<router-link tag="li" to="/userdata" @click="user">{{$t('header_deng.user')}}</router-link>
					<router-link tag="li" to="/login" @click="login">{{$t('header_deng.LogOut')}}</router-link>
				</ul>
			</div>
		</div>
		<el-button @click="switchLanguage" size="mini" round>{{language == 'en' ? '切换中文' : 'lang english'}}</el-button>
		
	</div>
</template>

<script>
	import Cookies from 'js-cookie'
	
	export default{
		component:{
			
		},
		data(){
			return{
				language: Cookies.get('language'),
				isShow:false
			}
		},
		methods:{
			
			switchLanguage() {
				let locale = this.$i18n.locale
	            locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
			},

			OpenThe() {
        		this.isShow = !this.isShow;
//      		alert(666)
      	   },
			user() {
        		console.log("用户资料")
      	   },
			login() {
        		console.log("退出登录")
      	    }
		}
	}
</script>