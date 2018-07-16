<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px dashed #00A0FF;
    border-radius: 5px;
  }
  
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  
  .user_main {
    padding: 10px;
  }
</style>

<template>
  <div class="userdata">
    <Breadcrumb>
      <span slot="one">{{$t('changePass.changePass')}}</span>
      <!--修改密码-->
    </Breadcrumb>
    <el-container>
      <el-aside width="200px" class="user_main">

      </el-aside>
      <el-main class="Udatas">
        <div class="alter">
          <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <el-form-item :label="$t('changePass.oldPass')" prop="formerpass">
                    <!--//旧密码-->
                    <el-input type="password" v-model="ruleForm1.formerpass" @blur="formtext" :disabled="oldpass" auto-complete="off"></el-input>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
          </el-form>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <el-form-item :label="$t('changePass.pass')" prop="pass">
                    <!--//密码-->
                    <el-input type="password" v-model="ruleForm.pass" :disabled="mima" auto-complete="off"></el-input>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <el-form-item :label="$t('changePass.confirmPass')" prop="checkPass">
                    <!--//确认密码-->
                    <el-input type="password" v-model="ruleForm.checkPass" :disabled="mima" auto-complete="off"></el-input>
                  </el-form-item>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple" style="text-align: center;">
                <!--修改-->
                <el-button type="primary" @click="submitForm('ruleForm')">{{$t('changePass.modification')}}</el-button>
                <!--重置-->
                <el-button style="margin-left: 10px !important;" v-show="ccc" @click="resetForm('ruleForm1')">{{$t('changePass.reset')}}</el-button>
                <el-button style="margin-left: 10px !important;" v-show="ccc2" @click="resetForm('ruleForm')">{{$t('changePass.reset')}}</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  import { userpasswdedit, userchecked } from '@/api/UpLoading'
  export default {
    components: {
      Breadcrumb
    },
    created() {

    },
    data() {
      var validatePass1 = (rule, value, callback) => {
        if(value === '') {
          callback(new Error('请输入旧密码'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if(value === '') {
          callback(new Error('请输入密码'));
        } else {
          if(this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if(value === '') {
          callback(new Error('请再次输入密码'));
        } else if(value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ccc: true,
        ccc2: false,
        mima: true,
        oldpass: false,
        responsed: 0,
        ruleForm1: {
          formerpass: ''
        },
        ruleForm: {
          pass: '',
          checkPass: ''
        },
        rules1: {
          formerpass: [{
            required: true,
            validator: validatePass1,
            trigger: 'blur'
          }]
        },
        rules: {
          pass: [{
            required: true,
            validator: validatePass,
            trigger: 'blur'
          }],
          checkPass: [{
            required: true,
            validator: validatePass2,
            trigger: 'blur'
          }]
        },
      };
    },
    methods: {
      //    旧密码失去焦点校验
      formtext() {
        console.log(123);
        userchecked(this.ruleForm1.formerpass).then((res) => {
          console.log(res);
          if(res.data.ret == 200) {
            this.$message.success("密码正确");
            this.responsed = 200;
            this.mima = false;
            this.ccc = false;
            this.ccc2 = true;
            this.oldpass = true;
            console.log(this.responsed);
          }
          if(res.data.ret == 400) {
            this.$message.error('密码错误');
            this.responsed = 400;
            this.mima = true;
            this.ccc = true;
            this.ccc2 = false;
            this.oldpass = false;
            console.log(this.responsed);
          }
        })
      },
      //      更改用户名密码
      submitForm(formName) {
        if(this.responsed == 200) {
          this.$refs[formName].validate((valid) => {
            if(valid) {
              userpasswdedit(this.ruleForm.pass, this.ruleForm.checkPass).then((res) => {
                console.log(res);
                if(res.data.ret == 200) {
                  this.$message.success('修改成功')
                  this.ruleForm.formerpass = "";
                  this.ruleForm.pass = "";
                  this.ruleForm.checkPass = "";
                  this.ccc = true;
                  this.ccc2 = false;
                }
                if(res.data.ret == 400) {
                  this.$message.error('修改失败')
                }
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        } else {
          this.$message.error('密码错误')
        }
      },
      //    重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>