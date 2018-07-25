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
  .ding{
    position: relative;
    width: 199px;
    height: 199px;
  }
  .Images{
    width: 199px;
    height: 199px;
  }
  .load{
    position: absolute;
    border: 1px solid gainsboro;
    width: 199px;
    height: 199px;
  }
  .text{
    position: absolute;
    left: 50%;
    bottom: -50px;
    transform: translate(-50%);
  }
  .loadmeng{
    z-index: 8;
    cursor:not-allowed;
  }
</style>

<template>
  <div class="userdata">
    <Breadcrumb>
      <span slot="one">{{$t('userdata.userInfo')}}</span><!--用户资料-->
    </Breadcrumb>
    <el-container>
      <el-aside width="200px" class="user_main">
        <div class="ding">
          <div class="load" @click="upimg"></div>
          <div class="load loadmeng" v-show="disab"></div>
<img class="Images" v-show="Image" :src="ImgUrl" height="200" width="200" alt="image preview..."/><br />
<input ref="file" type="file" @change="previewFile($event)" style="display: none;"/>
<p class="text" style="font-size: 12px;color: gray;">{{$t('script.imageRestrictions2')}}</p>
        </div>
          
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
                <el-form-item label="Email" prop="email"><!--邮箱 :required="req"-->
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
                <el-button type="primary" @click="confirm($event, 'ruleFormOne')" v-show="cang1">{{$t('userdata.confirm')}}</el-button><!--确定-->
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
  import { mapState } from 'vuex'
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
        cang:true,
        cang1:false,
        former:true,
        ruleFormOne: {}
      };
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
        this.cang = false;
        this.cang1 = true;
      },
//    确定
      confirm(ev){
          ev.preventDefault();
          let formData = new FormData();
          formData.append('idnumber',this.ruleFormOne.idnumber);
          formData.append('tel', this.ruleFormOne.tel);
          formData.append('email', this.ruleFormOne.email);
          formData.append('address', this.ruleFormOne.address);
          formData.append('signature', this.ruleFormOne.signature);
          formData.append('file', this.file);
          let config = {
            headers: { 'Content-Type': 'multipart/form-data' }
          }
          let src = '/user/info/edit';
          if(this.file){
            const filet = this.file.type;
            const isJPEG = filet === 'image/jpeg';
            const isJPG = filet === 'image/jpg';
            const isPNG = filet === 'image/png';
            const isLt500k = this.file.size / 1024 / 1024 < 0.5; 
            if(isJPEG || isJPG || isPNG){
              if(isLt500k){
                this.ModifiedData(src, formData, config);
              }else{this.$message.error(this.$t('script.FileImgRestrictions2'));
              }
            }else{this.$message.error(this.$t('script.FileImgRestrictions1'));
            }
          }else{this.ModifiedData(src, formData, config);
          }
      },
      ModifiedData(src, formData, config){
        let _this = this;
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
        if(this.ruleFormOne.email == ""){
          this.$axios.post(process.env.BASE_API + src, formData, config).then(function (res) {
            if (res.data.ret === 200) {
              /*这里做处理*/
              _this.$message.success(_this.$t('script.AmendSuccess'));//修改成功
              _this.disab = true;
              _this.cang = true;
              _this.cang1 = false;
              _this.userInFo();
            }if(res.data.ret == 407){
              _this.$message.error(this.$t('script.EmailFormat'));//邮箱格式错误
            }
          })
        }else{
          if(!reg.test(this.ruleFormOne.email)){ //正则验证不通过，格式不对
          　　　　_this.$message.error(this.$t('script.EmailFormat'));//邮箱格式错误
          　　　　return false;
            　　  }else{
            this.$axios.post(process.env.BASE_API + src, formData, config).then(function (res) {
              if (res.data.ret === 200) {
                /*这里做处理*/
                _this.$message.success(_this.$t('script.AmendSuccess'));//修改成功
                _this.disab = true;
                _this.cang = true;
                _this.cang1 = false;
                _this.userInFo();
              }if(res.data.ret == 407){
                _this.$message.error(this.$t('script.EmailFormat'));//邮箱格式错误
              }
            })
            　   }
        }
      },
//    取消
      cancel(){
        this.userInFo();
        this.disab = true;
        this.cang = true;
        this.cang1 = false;
      },
      //    获取用户名密码
      userInFo() {
        userinfo().then((res) => {
          this.ruleFormOne = res.data.data;
          let address = res.data.data.address,
              avatar = res.data.data.avatar,
              email = res.data.data.email,
              idnumber = res.data.data.idnumber,
              nickname = res.data.data.nickname,
              qq = res.data.data.qq,
              signature = res.data.data.signature,
              tel = res.data.data.tel,
              wechat = res.data.data.wechat;
          if(address != "null"){
//          console.log(address);
          }else{this.ruleFormOne.address = ""}
          if(avatar != "null"){
//          console.log(avatar);
          }else{
            this.ImgUrl = process.env.BASE_API + "/static/img/_20180622145804.png";
            this.$store.state.countImg = this.ImgUrl;
          }
          if(email != "null"){
//          console.log(email);
          }else{this.ruleFormOne.email = ""}
          if(idnumber != "null"){
//          console.log(idnumber);
          }else{this.ruleFormOne.idnumber = ""}
          if(nickname != "null"){
//          console.log(nickname);
          }else{this.ruleFormOne.nickname = ""}
          if(qq != "null"){
//          console.log(qq);
          }else{this.ruleFormOne.qq = ""}
          if(signature != "null"){
//          console.log(signature);
          }else{this.ruleFormOne.signature = ""}
          if(tel != "null"){
//          console.log(tel);
          }else{this.ruleFormOne.tel = ""}
          if(wechat != "null"){
//          console.log(wechat);
          }else{this.ruleFormOne.wechat = ""}
          this.ImgUrl = process.env.BASE_API + this.ruleFormOne.avatar;
          this.$store.state.countImg = this.ImgUrl;
          this.$store.state.countName = this.ruleFormOne.username;
          if(res.data.data.avatar != ""){
            this.Image = true;
          }
        })
      }
    }
  }
</script>
