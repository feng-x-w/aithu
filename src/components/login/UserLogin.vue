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
	.el-form-item__label{
		color: #FFFFFF;
	}
	.cool{
		position: relative;
	}
	.dd,.dd1{
		position: absolute;
		left: -60px;
		top: 0;
		font-family: "宋体";
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
</style>

<template>
	<div class="user_login">
		<div class="top">
			我是标题我是标题
		</div>
		<div class="mid">
			<div class="midLeft">
				<h2>用户登录</h2>
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
					<el-form-item label="" prop="txt" id="cool">
						<span class="dd">用户名</span>
						<el-input type="text" v-model="ruleForm2.txt" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item label="" prop="pass">
						<span class="dd1">密码</span>
						<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
					</el-form-item>
					<el-form-item>
						<router-link tag="el-button" type="primary" @click="submitForm('ruleForm2')" to="/home">提交</router-link>
						<!--<>提交</el-button>-->
						<el-button @click="resetForm('ruleForm2')">重置</el-button>
					</el-form-item>
				</el-form>
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
    	
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
          isShow: true;
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
          isShow: false;
        }
      };
      
      var validateTxt = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
          isShow: true;
        } else {
          if (this.ruleForm2.checkTxt !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
          isShow: false;
        }
      };
      
      return {
        ruleForm2: {
          pass: '',
          txt: '',
          isShow: false,
          iSshow: false
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          txt: [
            { validator: validateTxt, trigger: 'blur' }
          ]
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>