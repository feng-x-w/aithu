<style scoped>
	.header{
		width: 100%;
		height: 88px;
		line-height: 88px;
		padding: 0 35px;
		/*background-color: #409EFF;*/
		background: -webkit-linear-gradient(#2c3e50, #2c3e50); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#2c3e50, #2c3e50); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#2c3e50, #2c3e50); /* Firefox 3.6 - 15 */
		background: linear-gradient(#2c3e50, #2c3e50); /* 标准的语法 */
		overflow: hidden;
		box-sizing: border-box;
	}
	.header>.LeftLogo{
	  color: rgb(191, 203, 217);
		float: left;
		font-size: 24px;
	}
	.header>.LeftLogo>img{
	  width: 60px;
	  /*height: ;*/
		/*float: left;*/
	}
	.header>.LoginUser{
		float: right;
		padding: 0 15px;
	  height: 50px;
    margin: 18px 0;
    line-height: 51px;
    color: white;
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
	  border: 1px solid white;
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
    right: 35px;
    top: 68px;
    background-color: #2c3e50;
    color: #d2d2d2;
		/*background-color: white;*/
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
		margin: 30px 35px;
		border: 1px solid #767676;
		background-color: #32465b;
    color: #b7bcba;
	}
	.el-button:hover{
		border: 1px solid #d4d4d4;
    background-color: #272727;
    color: #efefef;
	}
	
</style>
<style>
	.el-input__inner{
	  padding: 0 8px;
	}
</style>

<template>
	<div class="header">
		<div class="LeftLogo">
			<img src="../../assets/logo2.png"/>&nbsp;
			<span>
			  {{$t('logo.title')}}
			</span>
		</div>
		<!--<div @click="switchLanguage">{{language == 'zh' ? 'English' : '中文'}}</div>-->
		<!--<el-button @click="switchLanguage" size="mini" round>{{language == 'zh' ? 'English' : '中文'}}</el-button>-->
		<div class="LoginUser" type="text" @click="OpenThe">
			<img src="../../assets/_20180622145804.png"/>
			<span>{{$t('header_deng.UserName')}}</span>
			<div class="deng" v-show="isShow">
				<ul>
					<router-link tag="li" to="/userdata" @click="user">{{$t('header_deng.user')}}</router-link>
					<router-link tag="li" to="/changepass" @click="changepass">{{$t('header_deng.changepass')}}</router-link>
					<router-link tag="li" to="/login" @click="login">{{$t('header_deng.LogOut')}}</router-link>
				</ul>
			</div>
		</div>
		<el-button @click="switchLanguage" size="mini" round v-model="langg">{{langg}}</el-button><!--{{language == 'en' ? '切换中文' : 'lang english'}}-->
		
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
				isShow:false,
				langg:"Lang English"
			}
		},
		methods:{
			
			switchLanguage() {
				let locale = this.$i18n.locale;
	            locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh';
	            locale === 'zh' ? this.langg = "切换中文" : this.langg = "Lang English";
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
      	  },
			changepass() {
        		console.log("退出登录")
      	    }
		}
	}
</script>