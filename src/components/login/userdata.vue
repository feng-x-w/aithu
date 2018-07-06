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
  /*.bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }*/
</style>

<template>
  <div class="userdata">
    <Breadcrumb>
      <span slot="one">用户资料</span>
    </Breadcrumb>
    <el-container>
      <el-aside width="200px" class="user_main">
        
<!--<el-upload
  class="upload-demo"
  ref="upload"
  action="https://192.168.1.118/user/info/edit"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  :data="UpData"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取头像</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>-->
        
      </el-aside>
      <el-main class="Udatas">
        <div class="UserData" v-show="former">
          <el-form :model="ruleFormOne" :rules="rulesed" ref="ruleFormOne" label-width="100px" class="demo-ruleForm">
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form-item label="用户名" prop="username">
                  <el-input v-model="ruleFormOne.username" disabled></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form-item label="证件号" prop="idnumber">
                  <el-input v-model="ruleFormOne.idnumber" :disabled="disab"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form-item label="手机号" prop="tel">
                  <el-input v-model="ruleFormOne.tel" :disabled="disab"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form-item label="Email" status-icon prop="email" :required="req">
                  <el-input v-model="ruleFormOne.email" :disabled="disab"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form-item label="联系地址" prop="address">
                  <el-input v-model="ruleFormOne.address" :disabled="disab"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form-item label="个人签名" prop="signature">
                  <el-input type="textarea" :rows="2" v-model="ruleFormOne.signature" :disabled="disab"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" style="text-align: center;">
              <div class="grid-content bg-purple">
                <el-button type="primary" @click="amend" v-show="cang">修改资料</el-button>
                <router-link to="/changepass" tag="el-button" type="primary" v-show="cang" style="margin-left: 10px !important;">修改密码</router-link>
                <el-button type="primary" @click="confirm" v-show="cang1">确定</el-button>
                <el-button type="primary" @click="cancel" v-show="cang1" style="margin-left: 10px !important;">取消</el-button>
              </div>
            </el-col>
          </el-row>
          </el-form>
        </div>

      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  import { useredit, userinfo } from '@/api/UpLoading'
  export default {
    components: {
      Breadcrumb
    },
    created() {
      this.userInFo()
    },
    data() {
      return {
        fileList:[],
        disab:true,
        req:false,
        cang:true,
        cang1:false,
        former:true,
        ruleFormOne: {},
        rulesed: {
          email: [{
              required: true,
              message: '请输入邮箱地址',
              trigger: 'blur'
            },
            {
              type: 'email',
              message: '请输入正确的邮箱地址',
              trigger: ['blur']
            } //'change'
          ]
        },
        
      };
    },
//  计算属性
    computed:{
      UpData() {
        return {
          idnumber:this.ruleFormOne.idnumber,
          tel:this.ruleFormOne.tel,
          email:this.ruleFormOne.email,
          address:this.ruleFormOne.address,
          signature:this.ruleFormOne.signature
        }
      }
    },
    methods: {
//    上传头像
       submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
//    点击修改用户资料
      amend(){
        this.disab = false;
        this.req = true;
        this.cang = false;
        this.cang1 = true;
      },
//    确定
      confirm(){
//      this.$refs.upload.submit();
        useredit(this.ruleFormOne.idnumber,this.ruleFormOne.tel,this.ruleFormOne.email,this.ruleFormOne.address,this.ruleFormOne.signature,).then((res)=>{
          console.log();
          if(res.data.ret == 200){
            this.$message.success("修改成功");
            this.disab = true;
            this.req = false;
            this.cang = true;
            this.cang1 = false;
            this.userInFo();
          }
        })
      },
//    取消
      cancel(){
        this.disab = true;
        this.req = false;
        this.cang = true;
        this.cang1 = false;
      },
      //    获取用户名密码
      userInFo() {
        userinfo().then((res) => {
          console.log(res);
          this.ruleFormOne = res.data.data;
        })
      }
    }
  }
</script>