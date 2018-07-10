<style scoped>
  .drill {}

  .drillTop {
    margin: 10px;
  }

  .Nlanguage {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(0,0,0,.5);
  }
  .Nlanguage>.NLG {
    position: fixed;
    width: 66%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    z-index: 120;
    overflow: hidden;
    border-radius: 9px;
    padding: 15px;
  }
  .Nlanguage>.NLG>.left {
    float: left;
    width: 46%;
    text-align: center;
  }
  .Nlanguage>.NLG>.right {
    float: right;
    width: 46%;
    height: 400px;
    overflow: auto;
    padding-left: 4%;
    border-left: 1px solid #dadada;
  }
    .target {
    position: fixed;
    text-align: center;
    background-color: rgba(0, 0, 0, .5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
  .target_add {
    width: 40%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    padding: 25px 50px;
    padding-left: 15px;
    border-radius: 9px;
  }
  .target_add>h1 {
    font-family: "微软雅黑";
    margin-bottom: 10px;
  }
  .target_add>p {
    font-family: "微软雅黑";
    margin-bottom: 10px;
    font-size: 12px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    color: #ababab;
  }
  .show_taskadd{
    width: 40%;
    /*margin: 245px auto 0;*/
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -100px;
    margin-left: -23.5%;
    max-height: 300px;
    padding: 25px 50px;
    background-color: white;
    overflow: hidden;
    border-radius: 9px;
  }
    .shangR>h1{
    margin: 10px 0;
  }
  .shangR>ul>.asdd{
    /*border: 1px solid red;*/
    padding-left: 30px;
  }
  .shangR>ul>.asdd>li{
    /*padding: 10px;*/
  }
  .shangR>ul>.asdd>li>input{
    width: 20px;
    float: left;
    margin: 14px 0 0 -20px;
  }
  .shangR>ul>.asdd>li>label{
    width: 100%;
    display: inline-block;padding: 10px;
    padding-left: 20px;
  }
  .shangR>ul>.asdd:hover{
    background-color: #e3e3e3;
  }
  .tasktable {
    width: 100%;
    margin: 0 auto;
    text-align: left;
  }
  .tasktable>tr {
    border: 1px solid #e3e3e3;
  }
  .tasktable>tr>th {
    border: 1px solid #e3e3e3;
    padding: 10px;
    background-color: #f3f3f3;
    font-size: 13px;
    font-weight: 600;
    color: #909399;
  }
  .tasktable>tr>td {
    border: 1px solid #e3e3e3;
    padding: 0 10px;
    font-size: 13px;
  }
</style>

<template>
  <div class="drill">
    <Breadcrumb>
      <span slot="one">{{$t('drill.modelManager')}}</span><!--模型管理-->
      <span slot="two">{{$t('drill.languageModleManager')}}</span><!--语种模型管理-->
    </Breadcrumb>
    <div class="drillTop">
      <el-form :inline="true" :model="form" class="demo-form-inline" size="mini">
        <el-form-item :label="$t('drill.languageName')"><!--//语种名称-->
          <el-input v-model="form.mlanguage" :placeholder="$t('drill.languageName')"></el-input><!--//语种名称-->
        </el-form-item>
        <el-form-item :label="$t('drill.trainingState')" size="mini"><!--//训练状态-->
          <el-select v-model="form.status" :placeholder="$t('drill.trainingState')"><!--//训练状态-->
            <el-option :label="$t('drill.trainingState1')" value="1"></el-option><!--//正在训练-->
            <el-option :label="$t('drill.trainingState2')" value="2"></el-option><!--//训练完成-->
            <el-option :label="$t('drill.all')" value=""></el-option><!--//全部-->
          </el-select>
        </el-form-item>
        <!--<el-form-item label="操作人" size="mini">
          <el-input v-model="form.operation" placeholder="操作人"></el-input>
        </el-form-item>-->
        <el-form-item size="mini">
          <el-button type="primary" @click="modelS" icon="el-icon-search">{{$t('drill.search')}}</el-button><!--查询-->
        </el-form-item>
        <el-form-item size="mini">
          <el-button type="primary" @click="newlan">{{$t('drill.creatLanguage')}}</el-button><!--新建语种-->
        </el-form-item>
        <el-form-item size="mini"><!-- plain style="margin-left: 10px !important;"-->
        <el-button type="primary" @click="initialize">{{$t('drill.init')}}</el-button><!--初始化-->
        </el-form-item>
      </el-form>
      <div class="target" v-show="target">
        <div class="target_add">
          <h1>{{$t('drill.creatLanguage')}}</h1><!--新建语种-->
          <p>语种模型通常由专业人员创建，新建或修改可能造成语种识别结果不准确，您确认要新建语种模型吗？</p>
          <el-form :model="languagesList" :rules="rules_target" ref="languagesList" label-width="100px" class="demo-ruleForm">
            <el-form-item :label="$t('drill.name')" prop="language" required><!--//名称-->
              <el-input v-model="languagesList.language" name="language"></el-input>
            </el-form-item>
            <el-form-item :label="$t('drill.description')"><!--//描述-->
              <el-input type="textarea" v-model="languagesList.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="newla">{{$t('drill.creat')}}</el-button><!--创建-->
              <!--<el-button @click="resetForm()">重置</el-button>-->
              <el-button @click="onEsc" type="danger" plain style="margin-left: 10px !important;">{{$t('drill.close')}}</el-button><!--关闭-->
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!--新建语种-->
      <div class="Nlanguage" v-show="nlguage">
        <div class="NLG">
          <h1 style="text-align: center;margin-bottom:10px;">{{$t('drill.languageInfo')}}</h1><!--语种详情-->
        	<div class="left">
<el-form ref="amendLanguagesList" :model="amendLanguagesList" label-width="80px">
  <el-form-item :label="$t('drill.languageName')" prop="language"><!--//语种名称-->
    <el-input v-model="amendLanguagesList.language"></el-input>
  </el-form-item>
  <el-form-item :label="$t('drill.description')"><!--//描述-->
    <el-input type="textarea" prop="desc" v-model="amendLanguagesList.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="addlangu">{{$t('drill.modification')}}</el-button><!--修改-->
    <el-button type="danger" @click="onEsc" style="margin-left: 10px !important;">{{$t('drill.close')}}</el-button><!--关闭-->
  </el-form-item>
</el-form>
        	</div>
        	<div class="right">
<div class="target_right">
  <h3>{{$t('drill.modleFileTable')}}</h3><!--模型文件列表-->
<el-upload
  class="upload-demo"
  ref="upload"
  action="http://192.168.1.118/lre/model/speech/add"
  :on-success="handleS"
  :file-list="fileList"
  :data="UpData"
  accept=".wav,.mp3,.flac"
  multiple
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">{{$t('drill.chooseFile')}}</el-button><!--选取文件-->
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">{{$t('drill.upolad')}}</el-button><!--上传到服务器-->
  <div slot="tip" class="el-upload__tip">{{$t('drill.uploadReq')}}</div><!--只能上传.WAV,.MP3,.FLAC文件-->
</el-upload>
    <el-button style="margin: 3px 0;" type="primary" @click="Train" :disabled="xli" :loading="xunlian">{{$t('drill.training')}}</el-button><!--训练-->
  <template>
    <div class="taskmid">
      <table><!-- class="tasktable"-->
        <tr>
          <th> {{$t('drill.fileName')}} </th>
          <th> {{$t('drill.fileSize')}} </th>
          <th> {{$t('drill.operation')}} </th>
        </tr>
        <tr v-for="i in speechi">
          <td> {{i.filename}} </td>
          <td> {{i.filesize}} </td>
          <td>
              <el-button type="text" @click="newTask(i.id)" :title="$t('drill.details')">
                <i class="el-icon-caret-right" style="font-size: 20px;"></i><!--播放-->
              </el-button>
              <el-button type="text" @click="modelDelete(i.id)" style="color: red;" :title="$t('drill.delete')">
                <i class="el-icon-delete"></i><!--删除-->
              </el-button>
          </td>
        </tr>
      </table>
    </div>
  </template>
<div class="block"><!--分页-->
  <!--<el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          @prev-click="handlePrevChange"
          @next-click="handleNextChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>-->
</div>
</div>
        	</div>
        </div>
      </div>
      <hr />
      <div class="taskmid">
        <table><!-- class="tasktable"-->
          <tr>
            <th>{{$t('drill.name')}}</th><!--名称-->
            <th>{{$t('drill.description')}}</th><!--描述-->
            <th>{{$t('drill.state')}}</th>
            <th>{{$t('drill.operation')}}</th><!--操作-->
          </tr>
          <tr v-for="i in tableData">
            <td> {{i.language}} </td>
            <td> {{i.desc}} </td>
            <td>
              <span v-if="i.status==1">{{$t('drill.usable')}}</span><!--可用-->
              <span v-if="i.status==0">{{$t('drill.unusable')}}</span><!--不可用-->
            </td>
            <td>
                <el-button type="text" @click="newTask(i.id)" :title="$t('drill.details')"><!--//详情-->
                  <i class="el-icon-info"></i>
                </el-button>
                <el-button type="text" @click="modelDelete(i.id)" style="color: red;" :title="$t('drill.delete')"><!--//删除-->
                  <i class="el-icon-delete"></i>
                </el-button><!---->
            </td>
          </tr>
        </table>
      </div>
        <!--<el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          @prev-click="handlePrevChange"
          @next-click="handleNextChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>-->
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  import { addlanguage, languageModel, ModelDetail, modelUpdate, ModelDel, ModelTrain, speechdele, modelsearch, resetInit } from '@/api/newlang'
  export default {
//  页面初始化
    created(){
      this.LModel();
    },
//  方法属性
    methods: {
//    初始化
      LModel(){
        languageModel().then((res)=>{
          console.log(res);
          this.tableData = res.data.data;
        })
      },
//    更改语种模型
      addlangu(){
console.log(this.amendLanguagesList.language,this.amendLanguagesList.desc,this.amendLanguagesList.mid);
        modelUpdate(this.amendLanguagesList.language,this.amendLanguagesList.desc,this.amendLanguagesList.mid).then((res)=>{
          console.log(res);
          if(res.data.ret == 200){
            this.$message.success("修改成功");
            this.LModel();
          }
        })
      },
//    onSubmit() {
////      console.log('submit!');
//    },
//    隐藏新建语种弹框
      onEsc(){
        this.nlguage = false;
        this.target = false;
        this.languagesList.language = '';
        this.languagesList.desc = '';
      },
//    初始化页面内容，将用户添加的删掉
      initialize(){
        this.$message.success("初始化成功");
        resetInit().then((res)=>{
          if(res.data.ret == 200){
            this.LModel();
          }
        })
        
      },
//    新建语种模型
      newlan(){
        this.target = true;
      },
//    点击创建语种
      newla(){
        addlanguage(this.languagesList.language,this.languagesList.desc).then((res)=>{
          console.log(res);
          if(res.data.ret == 200){
            this.$message.success("创建成功")
            this.target = false;
            this.LModel();
          }if(res.data.ret == 400){
            this.$message.error("语种名称重复")
          }
        })
      },
      //上传语音
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
//    上传成功时的钩子函数
      handleS(response, file, fileList){
        console.log(response);
        console.log(file);
        console.log(fileList);
        this.i+=1;
        console.log(this.i);
        if(fileList.length == this.i){
          this.$message.success("上传成功");
          this.xli = false;
          fileList.splice(0,fileList.length);
          this.xq();
          this.i = 0;
        }
      },
//    详情语音列表播放按钮
      plays(scope){
        console.log(scope);
      },
//    详情语音列表删除按钮
      speechDele(scope){
        console.log(scope.row.tsid);
        speechdele(scope.row.tsid).then((res)=>{
          console.log(res);
          if(res.data.ret == 200){
            this.$message.success("删除成功");
            this.xq();
          }
        })
      },
      modelS(){
        console.log(this.form.mlanguage,this.form.status);
        modelsearch(this.form.mlanguage,this.form.status).then((res)=>{
          console.log(res);
          this.tableData = res.data.data;
        })
      },
//    训练语音
      Train(){
        console.log(this.speechi);
//        ModelTrain(this.Mid).then((res)=>{
            if(this.speechi.length != 0){

            this.xunlian = true;
            this.$alert('正在训练，点击取消关闭本窗口，稍后可查看训练结果。',{
              confirmButtonText: '确定'
            });

    //      console.log(this.filemid);
            ModelTrain(this.Mid).then((res)=>{
              console.log(res);
              if(res.data.ret == 200){
              this.$message.success("训练成功");
              this.xunlian = false;
              }
            })
          }else{
            this.$message.error("没有语音文件");
          }
//      })
      },
      xq(){
        ModelDetail(this.Mid).then((res)=>{
          console.log(res);
          this.amendLanguagesList = res.data.data;
          this.speechi = res.data.data.speech;
          if(this.speechi.length == 0){
            this.xli = true;
          }
        })
      },
//    Remote(){
//      this.xiaoshi = true;
//      this.xiaoshi1 = false;
//
//    },
//    详情弹框
      newTask(id) {
        console.log(id);
        this.Mid = id;
        this.amendLanguagesList.mid = id;
        this.nlguage = true;
        this.xq();
      },
//    模型删除
      modelDelete(id){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            ModelDel(id).then((res)=>{
              console.log(res);
              if(res.data.ret == 200){
                this.$message.success('删除成功!');
                this.LModel();
              }
            })

        }).catch(() => {
          this.$message.info('已取消删除');
        });

      },

//    上传到服务器
      submitUpload(){
        this.$refs.upload.submit();
      },
      handleSuccess(){

      }
    },
    data() {
      return {
        xli:true,
        Mid:'',
        i:0,
        fileList:[],
        target:false,
        nlguage:false,
        xiaoshi:false,
        xiaoshi1:true,
        dianji1:true,
        xunlian:false,
//      修改语种模型
        amendLanguagesList: {
          language: '',
          desc: '',
          mid:''
        },
//      创建语种模型
        languagesList:{
          language: '',
          desc: ''
        },
        rules_target: {
          language: [{
              required: true,
              message: '请输入目标组名称',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 15,
              message: '长度在 1 到 15 个字符',
              trigger: 'blur'
            }
          ]
        },
        form: {
          mlanguage: '',
          status: '',
          operation: ''
        },
        tableData: [],
        fileList:[],
        speechi:[]
      }
    },
    computed:{
//    上传语音文件附带参数
      UpData(){
        return {
          mid: this.amendLanguagesList.mid
        }
      }
    },
    components: {
      Breadcrumb
    }
  }
</script>
