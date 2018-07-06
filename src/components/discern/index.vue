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
    width: 45%;
    text-align: center;
  }
  .Nlanguage>.NLG>.right {
    float: right;
    width: 45%;
    height: 400px;
    overflow: auto;
    border-left: 1px solid #cacaca;
    padding-left: 5%;
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
    padding-left: 0;
    border-radius: 9px;
  }
  .target_add>h1 {
    font-family: "微软雅黑";
    margin-bottom: 10px;
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
  .el-select{
    float: left;
  }
</style>

<template>
  <div class="drill">
    <Breadcrumb>
      <span slot="one">模型管理</span>
      <span slot="two">语种模型管理</span>
    </Breadcrumb>
    <div class="drillTop">
      <el-form :inline="true" :model="form" class="demo-form-inline" size="mini">
        <!--<el-form-item label="语种名称">
          <el-input v-model="form.mlanguage" placeholder="语种名称"></el-input>
        </el-form-item>-->
         <el-form-item label="性别" size="mini">
          <el-select v-model="form.mlanguage" placeholder="性别">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
            <!--<el-option label="未知" value="1"></el-option>-->
            <el-option label="全部" value=""></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="训练状态" size="mini">
          <el-select v-model="form.status" placeholder="训练状态">
            <el-option label="正在训练" value="1"></el-option>
            <el-option label="训练完成" value="2"></el-option>
            <el-option label="全部" value=""></el-option>
          </el-select>
        </el-form-item>
        <!--<el-form-item label="操作人" size="mini">
          <el-input v-model="form.operation" placeholder="操作人"></el-input>
        </el-form-item>-->
        <el-form-item size="mini">
          <el-button type="primary" @click="modelS" icon="el-icon-search">查询</el-button><!---->
        </el-form-item>
        <el-form-item size="mini">
          <el-button type="primary" @click="newlan">新建性别</el-button>
        </el-form-item>
      </el-form>
      <div class="target" v-show="target">
        <div class="target_add">
          <h1>新建性别</h1>
          <el-form :model="languagesList" ref="languagesList" label-width="100px" class="demo-ruleForm">
            <!--<el-form-item label="名称" prop="language">
              <el-input v-model="languagesList.language"></el-input>
            </el-form-item>-->
            <el-form-item label="性别" required>
              <el-select v-model="languagesList.language" name="language" placeholder="性别">
                <el-option label="男" value="0"></el-option>
                <el-option label="女" value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="描述">
              <el-input type="textarea" v-model="languagesList.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="newla">创建</el-button>
              <!--<el-button @click="resetForm()">重置</el-button>-->
              <el-button @click="onEsc" type="danger" plain style="margin-left: 10px !important;">关闭</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!--新建语种模型上传语音-->
      <!--<div class="show_taskadd" v-show="show_newg_lan">
        <div class="shangL" v-show="xiaoshi1">
<el-upload 
class="upload-demo" 
ref="upload" 
 action="http://192.168.1.118/task/upload"
:on-preview="handlePreview" 
:on-remove="handleRemove" 
:file-list="fileList" 
:on-change="addfile"
:on-success="handleSuccess"
:on-error="handleError"
:data="UpData"
accept=".wav,.mp3,.flac"
multiple
:auto-upload="false">
<el-button slot="trigger" size="small" type="primary" @click="dianjia">选取文件</el-button>
<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
<el-button size="small" type="primary" @click="Remote" v-show="dianji1">远端上传</el-button>
<div slot="tip" class="el-upload__tip">只能上传.WAV,.MP3,.FLAC文件</div>
</el-upload>
        </div>
        <div class="shangR" v-show="xiaoshi">
          <h2>请选择文件夹</h2>
            <ul>
              <div class="asdd" v-for="(i,key) in addfiles" @click="cName(key)">
                <li>
                  <input type="radio" name="fils" :id="key" /> <label :for="key">{{i.name}}</label>
                  <br />
                </li>
              </div>
              
              <div style="text-align: right;padding-top: 5px;">
<el-button type="submit" size="small" @click="ftotfiles()">确认上传</el-button>
              </div>
            </ul>
        </div>
      </div>-->
      <!--新建语种-->
      <div class="Nlanguage" v-show="nlguage">
        <div class="NLG">
          <h1 style="text-align: center;margin-bottom:10px;">性别详情</h1>
          <div class="left">
<el-form ref="amendLanguagesList" :model="amendLanguagesList" label-width="80px">
  <!--<el-form-item label="语种名称" prop="language">
    <el-input v-model="amendLanguagesList.language"></el-input>
  </el-form-item>-->
  <el-form-item label="性别"><!-- size="mini"-->
    <el-select v-model="amendLanguagesList.gender" prop="gender" name="gender" placeholder="性别">
      <el-option label="男" value="0"></el-option>
      <el-option label="女" value="1"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="描述">
    <el-input type="textarea" prop="desc" v-model="amendLanguagesList.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="addlangu">修改</el-button>
    <el-button type="danger" @click="onEsc" style="margin-left: 10px !important;">关闭</el-button>
  </el-form-item>
</el-form>
          </div>
          <div class="right">
                <div class="target_right">
                  <h3>模型文件列表</h3>
<el-upload 
  class="upload-demo" 
  ref="upload" 
  action="http://192.168.1.118/gre/model/speech/add"
  :on-success="handleS"
  :file-list="fileList" 
  :data="UpData"
  accept=".wav,.mp3,.flac"
  multiple
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传.WAV,.MP3,.FLAC文件</div>
</el-upload>
    <el-button style="margin: 3px 0;" type="primary" @click="Train" :loading="xunlian" :disabled="xli">训练</el-button><!---->
  <template>
    <table class="tasktable">
      <tr>
        <th>文件名</th>
        <th>文件大小</th>
        <th>操作</th>
      </tr>
      <tr v-for="i in speechi">
        <td>
          {{i.filename}}
        </td>
        <td>
          {{i.filesize}}
        </td>
        <td>
            <el-button type="text" @click="newTask(i.id)" title="详情">
              <i class="el-icon-caret-right"></i><!--播放-->
            </el-button>
            <el-button type="text" @click="modelDelete(i.id)" style="color: red;" title="删除">
              <i class="el-icon-delete"></i><!--删除-->
            </el-button>
        </td>
      </tr>
    </table>
    <!--<el-table :data="speechi" style="width: 100%">
      <el-table-column label="文件名" prop="filename">
      </el-table-column>
      <el-table-column label="文件大小" prop="filesize">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
<el-button size="mini" @click="plays(scope)">
  <i class="el-icon-caret-right"></i>
</el-button>
<el-button size="mini" type="danger" @click="speechDele(scope)">
  <i class="el-icon-delete"></i>
</el-button>
        </template>
      </el-table-column>
    </el-table>-->
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
  </template>
<div class="block">
</div> 
</div>
          </div>
        </div>
      </div>
      <hr />
        <table class="tasktable">
          <tr>
            <th>性别</th>
            <th>描述</th>
            <th>训练状态</th>
            <th>操作</th>
          </tr>
          <tr v-for="i in tableData">
            <td>
              {{i.gender}}
            </td>
            <td>
              {{i.desc}}
            </td>
            <td>
              <span v-if="i.status==1">可用</span>
              <span v-if="i.status==0">不可用</span>
            </td>
            <td>
                <el-button type="text" @click="newTask(i.id)" title="详情">
                  <i class="el-icon-info"></i>
                </el-button><!--详情-->
                <el-button type="text" @click="modelDelete(i.id)" style="color: red;" title="删除">
                  <i class="el-icon-delete"></i>
                </el-button><!--删除-->
            </td>
          </tr>
        </table>
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
  import { addlanguage, languageModel, ModelDetail, modelUpdate, ModelDel, ModelTrain, speechdele, modelsearch } from '@/api/newsex'
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
console.log(this.amendLanguagesList.gender,this.amendLanguagesList.desc,this.amendLanguagesList.mid);
        modelUpdate(this.amendLanguagesList.gender,this.amendLanguagesList.desc,this.amendLanguagesList.mid).then((res)=>{
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
//      this.xli = false;
      },
//    新建语种模型
      newlan(){
        this.target = true;
      },
      newla(){
        if(this.languagesList.language != ""){
          addlanguage(this.languagesList.language,this.languagesList.desc).then((res)=>{
            console.log(res);
            if(res.data.ret == 200){
              this.$message.success("创建成功")
              this.target = false;
              this.LModel();
  //          this.show_newg_lan = true;
            }if(res.data.ret == 400){
              this.$message.error("语种名称重复")
            }
          })
        }else{
          this.$message.error("请选择性别");
        }
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
          this.i = 0;
          this.$message.success("上传成功");
          this.xli = false;
          fileList.splice(0,fileList.length);
          this.xq();
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
//    详情加载数据
      xq(){
        ModelDetail(this.Mid).then((res)=>{
          console.log(res);
          this.amendLanguagesList = res.data.data;
          this.speechi = res.data.data.speech;
          console.log(this.speechi);
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
        show_newg_lan:false,
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
//      rules_target: {
//        language: [{
//            required: true,
//            message: '请输入目标组名称',
//            trigger: 'blur'
//          },
//          {
//            min: 1,
//            max: 15,
//            message: '长度在 1 到 15 个字符',
//            trigger: 'blur'
//          }
//        ]
//      },
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