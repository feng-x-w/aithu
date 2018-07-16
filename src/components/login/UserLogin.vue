<style scoped>
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }
  
  .user_login {
    background-image: url(http://192.168.1.118/static/img/backgroundImage.jpg);
    background-size: 120%;
    background-position: center;
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
    overflow: hidden;
    margin-top: 100px;
  }
  
  .mid>.midLeft {
    text-align: center;
    width: 20%;
    min-width: 200px;
    float: left;
    background-color: rgba(167, 167, 167, .5);
    margin-left: 12%;
    margin-top: 60px;
    color: white !important;
    font-family: "宋体";
    padding: 20px;
    border-radius: 10px;
  }
  
  .mid>.midRight {
    width: 30%;
    float: right;
    min-width: 252px;
  }
  
  .midLeft>h2 {
    margin-bottom: 15px;
  }
  
  .midRight {
    background-color: rgba(255, 255, 255, .5);
    border-radius: 10px;
    padding: 10px;
    margin-right: 9%;
  }
  
  .userform {
    width: 100%;
  }
  
  .userform>.form_ipt {
    width: 100%;
    margin: 20px 0;
  }
  
  .userform>.form_ipt>span {
    width: 20%;
    display: inline-block;
    font-size: 16px;
  }
  
  .userform>.form_ipt>.form_ipt_txt {
    width: 70%;
    display: inline-block;
    outline: none;
    border: none;
    padding: 14px;
    border-radius: 8px;
  }
  
  .error {
    color: red;
  }
</style>

<template>
  <div class="user_login">
    <div class="top">
      {{$t('tianfu.eng')}}
    </div>
    <div class="mid">
      <div class="midLeft">
        <h2>{{$t('UserLog.login')}}</h2>
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" name="username" :placeholder="$t('UserLogin.inputID')" auto-complete="on"></el-input>
            <!--//请输入用户名/手机号-->
          </el-form-item>

          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" name="password" :placeholder="$t('UserLogin.inputPass')" auto-complete="on"></el-input>
            <!--//请输入密码-->
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleLogin">{{$t('UserLogin.log')}}</el-button>
            <!--登录-->
          </el-form-item>
        </el-form>
      </div>
      <div class="midRight">
        <h2>{{$t('UserLog.gs')}}:</h2>
        <p>智能语音，即智能语音技术，是实现人机语言的通信，包括语音识别技术（ASR）和语音合成技术（TTS）。</p>
        <p>智能语音技术的研究是以语音识别技术为开端，可以追溯到20世纪50年代。随着信息技术的发展，智能语音技术已经成为人们信息获取和沟通最便捷、最有效的手段。</p>
      </div>
    </div>
  </div>
</template>
<script>
  //先引入接口
  import { loginReq } from '@/api/login'
  export default {
    name: 'login',
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
              if(res.data.ret == 200) {
                this.$router.push({
                  name: "DefaultHome",
                  params: {
                    username: this.loginForm.username
                  }
                })
              } else {
                this.$message.error("密码错误");
              }
            });
          } else {
            this.$message.error("用户名或密码错误");
            console.log('用户名或密码错误')
          }
        })
      },
    }
  }
  /*
   * 批量添加目标人
   * 限制上传语音文件个数
   * 点击详加载图片，点击关闭时清空图片
   * 所有数字加上单位（待定）
   * 点击播放文件
   * 默认删除不能点击，想要删除时打开删除按钮
   * 后台实现实时更新页面
   * 定制列表显示权限，没有权限时消失整列
   *
   * */
</script>