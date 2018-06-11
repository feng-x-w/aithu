<style scoped>
	html,
	body,
	#app {
		width: 100%;
		height: 100%;
	}
	
	.user_login {
		background-image: url(http://pic1.win4000.com/wallpaper/1/57ac35a8644a0.jpg);
		background-size: 100%;
		width: 100%;
		height: 100%;
	}
	
	.user_login>.top {
		text-align: center;
		width: 100%;
		height: 50px;
		font-size: 18px;
		color: white;
		font-family: "宋体";
		line-height: 50px;
		width: 100%;
		background: linear-gradient( to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 10%, rgba(255, 255, 255, 0.3) 20%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0.4) 70%, rgba(255, 255, 255, 0.3) 80%, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%)
	}
	
	.mid {
		width: 100%;
		/*background: rgba(200, 200, 200, .3);*/
		overflow: hidden;
		margin-top: 100px;
	}
	
	.mid>.midLeft {
		text-align: center;
		width: 30%;
		float: left;
		background-color: rgba(167,167,167,.5);
		margin-left: 240px;
		margin-top: 60px;
		color: white !important;
		font-family: "宋体";
		padding: 20px;
		padding-left: 0;
		border-radius: 10px;
	}
	.mid>.midRight {
		width: 30%;
		float: right;
	}
	.midLeft>h2{
		margin-bottom: 15px;
	}
	.midRight{
		background-color: rgba(255,255,255,.5);
		border-radius: 10px;
		padding: 10px;
		margin-right: 112px;
	}
	.userform{
		width: 100%;
		/*background-color: red;*/
	}
	.userform>.form_ipt{
		width: 100%;
		/*background-color: green;*/
		margin: 20px 0;
	}
	.userform>.form_ipt>span{
		width: 20%;
		display: inline-block;
		/*background-color: aqua;*/
		font-size: 16px;
	}
	.userform>.form_ipt>.form_ipt_txt{
		width: 70%;
		display: inline-block;
		/*background-color: aqua;*/
		outline: none;
		border: none;
		padding: 14px;
		border-radius: 8px;
	}
	.error{
		color: red;
	}
	.elseErr{
		color: green;
	}
</style>

<template>
	<div class="user_login">
		<div class="top">
			我是标题我是标题
		</div>
		<div class="mid">
			<div class="midLeft">
				<h2>用户登录</h2>
				<form class="userform">
					<div class="form_ipt">
						<span>用户名：</span>
						<input class="form_ipt_txt" type="text" v-model="value" v-on:blur="val(value)" :placeholder="placeholder"/>
					</div>
					<span v-bind:class="classobject">{{placeholder}}</span>
					<div class="form_ipt">
						<span>密码：</span>
						<input class="form_ipt_txt" type="password" v-model="pass"/>
					</div>
					
					<router-link tag="el-button" type="primary" @click="submitForm('ruleForm2')" to="/home">提交</router-link>
					<el-button type="primary">重置</el-button>
				</form>
						
			</div>
			<div class="midRight">
				<h2>公司简介:</h2>
				<p>
					巴拉巴拉巴拉巴拉巴拉巴拉巴拉<!--
				 -->巴拉巴拉巴拉巴拉巴拉巴拉巴拉<!--
				 -->巴拉巴拉巴拉巴拉巴拉巴拉巴拉<!--
				 -->巴拉巴拉巴拉巴拉巴拉巴拉巴拉<!--
				 -->巴拉巴拉巴拉巴拉巴拉巴拉巴拉<!--
				 -->巴拉巴拉巴拉巴拉巴拉巴拉巴拉<!--
				 -->巴拉巴拉巴拉巴拉巴拉巴拉巴拉<!--
				 -->巴拉巴拉巴拉巴拉巴拉巴拉巴拉<!--
				 -->巴拉巴拉巴拉巴拉巴拉巴拉巴拉<!--
				 -->巴拉巴拉巴拉巴拉巴拉巴拉巴拉<!--
				 -->巴拉巴拉巴拉巴拉巴拉巴拉巴拉
				</p>
			</div>
		</div>
		<!--<h1>用户登录页面</h1>-->
		<router-link to="/home">123</router-link>
	</div>
</template>
<script>
	export default {
    data() {
      return {
      	value:"",
      	pass:"",
      	placeholder:"4到16位字母、数字、下划线、减号",
      	classobject:{
      		clasas:false,
      		clsasa:true
      	}
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
//    resetForm(formName) {
//      this.$refs[formName].resetFields();
//    }
	val:function(value){
		var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
        if( uPattern.test(value)){
        	alert(666);
        	clasas=false;
        }else{
        	clasas=true;
        }
//      return 
    }
  }
  }
</script>