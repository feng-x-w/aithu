<style scoped>
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }/*../../assets/bg6.jpg*/
  /*https://47.92.38.162/isps/admin/themes/simplebootx/Public/assets/images/bg6.jpg*/
  .user_login {
    /*background-image: url(../../assets/backgroundImage.jpg);*/
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
    width: 20%;
    float: left;
    background-color: rgba(167, 167, 167, .5);
    margin-left: 240px;
    margin-top: 60px;
    color: white !important;
    font-family: "宋体";
    padding: 20px;
    border-radius: 10px;
  }
  
  .mid>.midRight {
    width: 30%;
    float: right;
  }
  
  .midLeft>h2 {
    margin-bottom: 15px;
  }
  
  .midRight {
    background-color: rgba(255, 255, 255, .5);
    border-radius: 10px;
    padding: 10px;
    margin-right: 112px;
  }
  
  .userform {
    width: 100%;
    /*background-color: red;*/
  }
  
  .userform>.form_ipt {
    width: 100%;
    /*background-color: green;*/
    margin: 20px 0;
  }
  
  .userform>.form_ipt>span {
    width: 20%;
    display: inline-block;
    /*background-color: aqua;*/
    font-size: 16px;
  }
  
  .userform>.form_ipt>.form_ipt_txt {
    width: 70%;
    display: inline-block;
    /*background-color: aqua;*/
    outline: none;
    border: none;
    padding: 14px;
    border-radius: 8px;
  }
  
  .error {
    color: red;
  }
  
  .elseErr {
    color: green;
  }
  .dd{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;
  }
</style>

<template>
  <div class="user_login">
    <div class="dd"><img src="../../assets/backgroundImage.jpg" width="100%" height="100%"/></div>
    <div class="top">
      {{$t('tianfu.eng')}}
    </div>
    <div class="mid">
      <div class="midLeft">
        <h2>{{$t('UserLog.login')}}</h2>
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" name="username" placeholder="请输入用户名/手机号" auto-complete="on"></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" name="password" placeholder="请输入密码" auto-complete="on"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="midRight">
        <h2>{{$t('UserLog.gs')}}:</h2>
        <p>{{$t('UserLog.content')}}</p>
        <p>{{$t('UserLog.content')}}</p>
        <p>{{$t('UserLog.content')}}</p>
        <p>{{$t('UserLog.content')}}</p>
        <p>{{$t('UserLog.content')}}</p>
        <p>{{$t('UserLog.content')}}</p>
      </div>
    </div>
    <!--<h1>用户登录页面</h1>-->
  </div>
</template>
<script>
  //先引入接口
  import { loginReq } from '@/api/login'
  export default {
    name: 'login',
//  created:{
//    bfq(){
//      console.log("            ◥◤~~~~◥◤            ┃ 　　   ┃             ≡━ ﹏ ━≡            ┗━━┳∞┳━━┛    _..,------┏┫　┣┓------,.._   ;'-.,------------------,.-';   |                          |   、                         ;    \                        /  .-' `,._________________.,' '-.(       '----------------'       ) `-=..________________________..-快到碗里来！简历请投放 wan@appadhoc.com");
//    };
//    bfq()
//  },
    data() {
      
      return {
        loginForm: {
          username: '',
          password: '',
        },
        loginRules: {
          username: [{
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      handleLogin() {
        var that = this;
        that.$refs.loginForm.validate((valid) => {
          if(valid) {
            loginReq(this.loginForm.username, this.loginForm.password).then((res) => {
              console.log(res);
              if(res.data.ret == 200){
                this.$router.push({
                  name: "DefaultHome",
                  params: {
                    username: this.loginForm.username
                  }
                })
              }else{
                this.$message.error("密码错误");
              }
            });
          } else {
            this.$message.error("用户名或密码错误");
            console.log('用户名或密码错误')
          }
        })
      }
    }
  }
</script>