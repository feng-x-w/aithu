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
    text-align: center;
  }
  .el-aside{
    overflow: initial;
  }

</style>

<template>
  <div class="userdata">
    <Breadcrumb>
      <span slot="one">{{$t('userdata.userInfo')}}</span><!--用户资料-->
    </Breadcrumb>
    <el-container>
      <el-aside width="200px" class="user_main">
<img class="Images" v-show="Image" :src="ImgUrl" height="200" width="200" alt="image preview..."/><br />
<input ref="file" type="file" @change="previewFile($event)" style="display: none;"/>
<el-button @click="upimg" size="mini" style="margin: 5px 0;" :disabled="disab">上传头像</el-button>
<p style="font-size: 12px;color: gray;">头像不能超过500k</p>
      </el-aside>
      <el-main class="Udatas">
        <div class="UserData" v-show="former">
          <el-form :model="ruleFormOne" :rules="rulesed" ref="ruleFormOne" label-width="100px" class="demo-ruleForm">
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form-item :label="$t('userdata.userName')" prop="username"><!--//用户名-->
                  <el-input v-model="ruleFormOne.username" disabled></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form-item :label="$t('userdata.ID')" prop="idnumber"><!--//证件号-->
                  <el-input v-model="ruleFormOne.idnumber" :disabled="disab"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form-item :label="$t('userdata.phone')" prop="tel"><!--//手机号-->
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
                <el-form-item :label="$t('userdata.contactAdd')" prop="address"><!--//联系地址-->
                  <el-input v-model="ruleFormOne.address" :disabled="disab"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-form-item :label="$t('userdata.idiograph')" prop="signature"><!--//个人签名-->
                  <el-input type="textarea" :rows="2" v-model="ruleFormOne.signature" :disabled="disab"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" style="text-align: center;">
              <div class="grid-content bg-purple">
                <el-button type="primary" @click="amend" v-show="cang">{{$t('userdata.modifyInfo')}}</el-button><!--修改资料-->
                <router-link to="/changepass" tag="el-button" type="primary" v-show="cang" style="margin-left: 10px !important;">{{$t('userdata.changePass')}}</router-link><!--修改密码-->
                <el-button type="primary" @click="confirm($event)" v-show="cang1">{{$t('userdata.confirm')}}</el-button><!--确定-->
                <el-button type="primary" @click="cancel" v-show="cang1" style="margin-left: 10px !important;">{{$t('userdata.cancle')}}</el-button><!--取消-->
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
        reader:'',
        Image:false,
        ImgUrl:'',
        file:'',
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
//    UpData() {
//      return {
//        idnumber:this.ruleFormOne.idnumber,
//        tel:this.ruleFormOne.tel,
//        email:this.ruleFormOne.email,
//        address:this.ruleFormOne.address,
//        signature:this.ruleFormOne.signature
//      }
//    }
    },
    methods: {
//    上传头像
      upimg(){
        this.$refs.file.click();
        this.reader = new FileReader();
      },
      previewFile(ev){
        this.file = ev.target.files[0];
        let urls = ev.target.files;
        this.reader.readAsDataURL(urls[0]);
        this.reader.onload = () =>{
          this.ImgUrl = this.reader.result;
          console.log(this.file);
          if(this.file != ""){
            this.Image = true;
          }
        }
      },
//    点击修改用户资料
      amend(){
        this.disab = false;
        this.req = true;
        this.cang = false;
        this.cang1 = true;
      },
//    确定
      confirm(ev){
        console.log(this.file);
        console.log(typeof(this.file));
        ev.preventDefault();
        let formData = new FormData();
        formData.append('idnumber',this.ruleFormOne.idnumber);
        formData.append('tel', this.ruleFormOne.tel);
        formData.append('email', this.ruleFormOne.email);
        formData.append('address', this.ruleFormOne.address);
        formData.append('signature', this.ruleFormOne.signature);
        formData.append('file', this.file);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        let _this = this;
        this.$axios.post(process.env.BASE_API+'/user/info/edit', formData, config).then(function (res) {
          if (res.data.ret === 200) {
//          alert("创建成功");
            /*这里做处理*/
            _this.$message.success("修改成功");
            _this.disab = true;
            _this.req = false;
            _this.cang = true;
            _this.cang1 = false;
            _this.userInFo();
          }
//        if(res.data.ret == 405){
//          _this.$message.error("目标人已存在");
////          alert("用户名重复");
//        }
        })
//      this.$refs.upload.submit();
//      useredit(this.ruleFormOne.idnumber,this.ruleFormOne.tel,this.ruleFormOne.email,this.ruleFormOne.address,this.ruleFormOne.signature,).then((res)=>{
//        console.log();
//        if(res.data.ret == 200){
//          this.$message.success("修改成功");
//          this.disab = true;
//          this.req = false;
//          this.cang = true;
//          this.cang1 = false;
//          this.userInFo();
//        }
//      })
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
          this.ImgUrl = process.env.BASE_API + this.ruleFormOne.avatar;
          console.log(this.ImgUrl);
          if(res.data.data.avatar != ""){
            this.Image = true;
          }
        })
      }
    }
  }
</script>
