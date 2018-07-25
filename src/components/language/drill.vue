<style scoped>
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
    background-color: rgba(0, 0, 0, .5);
  }
  
  .Nlanguage>.NLG {
    position: fixed;
    width: 66%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    transform: translate(-50%, -50%);
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
  
  .show_taskadd {
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
  
  .shangR>h1 {
    margin: 10px 0;
  }
  
  .shangR>ul>.asdd {
    padding-left: 30px;
  }
  
  .shangR>ul>.asdd>li>input {
    width: 20px;
    float: left;
    margin: 14px 0 0 -20px;
  }
  
  .shangR>ul>.asdd>li>label {
    width: 100%;
    display: inline-block;
    padding: 10px;
    padding-left: 20px;
  }
  
  .shangR>ul>.asdd:hover {
    background-color: #e3e3e3;
  }
  
  /* .tasktable {
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
  } */
  
  .wei {
    width: 99.8%;
    text-align: center;
    font-size: 16px;
    color: #6F7180;
    border: 1px solid #e3e3e3;
    border-top: 0;
    padding: 15px 0;
  }
  .taskmid>table>tr>td{
    padding: 0px 10px;
  }
</style>
<style>
  .el-upload-list--text {
    height: 111px;
    overflow-y: auto;
  }
</style>
<template>
  <div class="drill">
    <Breadcrumb>
      <span slot="one">{{$t('drill.modelManager')}}</span>
      <!--模型管理-->
      <span slot="two">{{$t('drill.languageModleManager')}}</span>
      <!--语种模型管理-->
    </Breadcrumb>
    <div class="drillTop">
      <el-form :inline="true" :model="form" class="demo-form-inline" size="mini">
        <el-form-item :label="$t('drill.languageName')">
          <!--//语种名称-->
          <el-input v-model="form.mlanguage" :placeholder="$t('drill.languageName')"></el-input>
          <!--//语种名称-->
        </el-form-item>
        <el-form-item :label="$t('drill.trainingState')" size="mini">
          <!--//训练状态-->
          <el-select v-model="form.status" :placeholder="$t('drill.trainingState')">
            <!--//训练状态-->
            <el-option :label="$t('drill.unusable')" value="1"></el-option>
            <!--//正在训练 drill.trainingState1 -->
            <el-option :label="$t('drill.usable')" value="2"></el-option>
            <!--//训练完成 drill.trainingState2-->
            <el-option :label="$t('drill.all')" value=""></el-option>
            <!--//全部-->
          </el-select>
        </el-form-item>
        <el-form-item size="mini">
          <el-button type="primary" @click="modelS" icon="el-icon-search">{{$t('drill.search')}}</el-button>
          <!--查询-->
        </el-form-item>
        <el-form-item size="mini">
          <el-button type="primary" @click="newlan">{{$t('drill.creatLanguage')}}</el-button>
          <!--新建语种-->
        </el-form-item>
        <el-form-item size="mini">
          <!-- plain style="margin-left: 10px !important;"-->
          <el-button type="primary" @click="initialize">{{$t('drill.init')}}</el-button>
          <!--初始化-->
        </el-form-item>
      </el-form>
      <div class="target" v-show="target">
        <div class="target_add">
          <h1>{{$t('drill.creatLanguage')}}</h1>
          <!--新建语种-->
          <p>{{$t('drill.title')}}</p>
          <el-form :model="languagesList" :rules="rules_target" ref="languagesList" label-width="100px" class="demo-ruleForm">
            <el-form-item :label="$t('drill.name')" prop="language">
              <!--required//名称-->
              <el-input v-model="languagesList.language" name="language"></el-input>
            </el-form-item>
            <el-form-item :label="$t('drill.description')">
              <!--//描述-->
              <el-input type="textarea" v-model="languagesList.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain @click="newla">{{$t('drill.creat')}}</el-button>
              <!--创建-->
              <el-button @click="onEsc('languagesList')" type="danger" plain style="margin-left: 10px !important;">{{$t('drill.close')}}</el-button>
              <!--关闭-->
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!--语种详情-->
      <div class="Nlanguage" v-show="nlguage">
        <div class="NLG">
          <h1 style="text-align: center;margin-bottom:10px;">{{$t('drill.languageInfo')}}</h1>
          <!--语种详情-->
          <div class="left">
            <el-form ref="amendLanguagesList" :model="amendLanguagesList" label-width="80px">
              <el-form-item :label="$t('drill.languageName')" prop="language">
                <!--//语种名称-->
                <el-input v-model="amendLanguagesList.language"></el-input>
              </el-form-item>
              <el-form-item :label="$t('drill.description')">
                <!--//描述-->
                <el-input type="textarea" prop="desc" v-model="amendLanguagesList.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" plain @click="addlangu">{{$t('drill.modification')}}</el-button>
                <!--修改-->
                <el-button type="danger" plain @click="onEsc('amendLanguagesList')" style="margin-left: 10px !important;">{{$t('drill.close')}}</el-button>
                <!--关闭-->
              </el-form-item>
            </el-form>
          </div>
          <div class="right">
            <div class="target_right">
              <h3>{{$t('drill.modleFileTable')}}</h3>
              <!--模型文件上传列表-->
              <el-upload class="upload-demo" ref="upload" :action="https" :on-success="handleS" :before-upload="beforeAvatarUpload" :file-list="fileList" :data="UpData" accept=".wav,.mp3,.flac" multiple :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">{{$t('drill.chooseFile')}}</el-button>
                <!--选取文件-->
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">{{$t('drill.upolad')}}</el-button>
                <!--上传到服务器-->
                <div slot="tip" class="el-upload__tip">{{$t('drill.uploadReq')}}</div>
                <!--只能上传.WAV,.MP3,.FLAC文件-->
              </el-upload>
              <el-button style="margin: 3px 0;" type="primary" @click="Train" :disabled="xli" :loading="xunlian">{{$t('drill.training')}}</el-button>
              <!--训练-->
              <template>
                <div class="taskmid">
                  <table>
                    <!-- class="tasktable"-->
                    <tr>
                      <th> {{$t('drill.fileName')}} </th>
                      <th> {{$t('drill.fileSize')}} </th>
                      <th> {{$t('drill.operation')}} </th>
                    </tr>
                    <tr v-for="(i,index) in speechi" :key="index">
                      <td> {{i.filename}} </td>
                      <td> {{i.filesize}} </td>
                      <td>
                        <el-button type="text" :title="$t('drill.details')"><!-- @click="newTask(i.tsid)"-->
                          <i class="el-icon-caret-right" style="font-size: 20px;"></i>
                          <!--播放-->
                        </el-button>
                        <el-button type="text" @click="speechDele(i.tsid)" style="color: red;" :title="$t('drill.delete')">
                          <i class="el-icon-delete"></i>
                          <!--删除-->
                        </el-button>
                      </td>
                    </tr>
                  </table>
                </div>
              </template>
              <div class="block">
                <!--分页-->
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
        <table>
          <!-- class="tasktable"-->
          <tr>
            <th>{{$t('drill.name')}}</th>
            <!--名称-->
            <th>{{$t('drill.description')}}</th>
            <!--描述-->
            <th>{{$t('drill.state')}}</th>
            <th>{{$t('drill.operation')}}</th>
            <!--操作-->
          </tr>
          <tr v-for="(i,index) in tableData" :key="index">
            <td> {{i.language}} </td>
            <td> {{i.desc}} </td>
            <td>
              <span v-if="i.status==1">{{$t('drill.usable')}}</span>
              <!--可用-->
              <span v-if="i.status==0">{{$t('drill.unusable')}}</span>
              <!--不可用-->
            </td>
            <td>
              <el-button type="text" @click="newTask(i.id)" :title="$t('drill.details')">
                <!--//详情-->
                <i class="el-icon-info"></i>
              </el-button>
              <el-button type="text" @click="modelDelete(i.id)" style="color: red;" :title="$t('drill.delete')">
                <!--//删除-->
                <i class="el-icon-delete"></i>
              </el-button>
              <!---->
            </td>
          </tr>
        </table>
        <div class="wei" v-show="kong">{{$t('NextClass.noData')}}</div>
        <!--暂无数据-->
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
    created() {
      this.LModel();
    },
    //  方法属性
    methods: {
      //    初始化
      LModel() {
        languageModel().then((res) => {
          console.log(res);
          this.tableData = res.data.data;
        })
      },
      //    更改语种模型
      addlangu() {
        console.log(this.amendLanguagesList.language, this.amendLanguagesList.desc, this.amendLanguagesList.mid);
        modelUpdate(this.amendLanguagesList.language, this.amendLanguagesList.desc, this.amendLanguagesList.mid).then((res) => {
          console.log(res);
          if(res.data.ret == 200) {
            this.$message.success(this.$t('script.AmendSuccess')); //"修改成功"
            this.LModel();
          }
          if(res.data.ret == 400) {
            this.$message.error(this.$t('script.NotNull')); //"不能为空"
          }
        })
      },
      //    隐藏新建语种弹框
      onEsc(formName) {
        this.nlguage = false;
        this.target = false;
        this.amendLanguagesList.language = '';
        this.languagesList.language = '';
        this.amendLanguagesList.desc = '';
        this.languagesList.desc = '';
        this.$refs[formName].resetFields();
      },
      //    初始化页面内容，将用户添加的删掉
      initialize() {
        this.$message.success(this.$t('script.initSuccess')); //"初始化成功"
        resetInit().then((res) => {
          if(res.data.ret == 200) {
            this.LModel();
          }
        })
      },
      //    新建语种模型
      newlan() {
        this.target = true;
      },
      //    点击创建语种
      newla() {
        addlanguage(this.languagesList.language, this.languagesList.desc).then((res) => {
          console.log(res);
          if(res.data.ret == 200) {
            this.$message.success(this.$t('script.FoundSuccess')) //"创建成功"
            this.languagesList.language = '';
            this.languagesList.desc = '';
            this.target = false;
            this.LModel();
          }
          if(res.data.ret == 400) {
            this.$message.error(this.$t('script.LangRepetition')) //"语种名称重复"
            this.languagesList.language = '';
            //          this.languagesList.desc = '';
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
      //    上传文件限制
      beforeAvatarUpload(file) {
        //console.log(file);
        const iswav = file.type === 'audio/wav';
        const ismp3 = file.type === 'audio/mp3';
        const isflac = file.type === 'audio/flac';
        const isLt10M = file.size / 1024 / 1024 < 50;
        if(!iswav && !ismp3 && !isflac) {
          this.$message.error(this.$t('script.FileRestrictions1')); //'上传文件只能是.WAV,.MP3,.FLAC格式!'
        }
        if(!isLt10M) {
          this.$message.error(this.$t('script.FileRestrictions2')); //'上传文件大小一次不能超过 20MB!'
        }
        return (iswav || ismp3 || isflac) && isLt10M;
      },
      //    上传成功时的钩子函数
      handleS(response, file, fileList) {
        console.log(response);
        console.log(file);
        console.log(fileList);
        this.i += 1;
        console.log(this.i);
        if(fileList.length == this.i) {
          this.$message.success(this.$t('script.UploadSuccess')); //"上传成功"
          this.xli = false;
          fileList.splice(0, fileList.length);
          this.xq();
          this.i = 0;
        }
      },
//    上传到服务器
      submitUpload(){
        this.$refs.upload.submit();
      },
      //    详情语音列表播放按钮
      plays(scope) {
        console.log(scope);
      },
      //    详情语音列表删除按钮
      speechDele(id) {
        console.log(id);
        speechdele(id).then((res) => {
          console.log(res);
          if(res.data.ret == 200) {
            this.$message.success(this.$t('script.DelSuccess')); //"删除成功"
            this.xq();
          }
        })
      },
      //    查询
      modelS() {
        console.log(this.form.mlanguage, this.form.status);
        modelsearch(this.form.mlanguage, this.form.status).then((res) => {
          console.log(res);
          if(res.data.ret == 200) {
            this.tableData = res.data.data;
            if(this.tableData == "") {
              this.kong = true;
            } else {
              this.kong = false;
            }
          }
        })
      },
      //    训练语音
      Train() {
        console.log(this.speechi);
        //        ModelTrain(this.Mid).then((res)=>{
        if(this.speechi.length != 0) {
          this.xunlian = true;
          this.$alert(this.$t('script.Popout'), { //'正在训练，点击取消关闭本窗口，稍后可查看训练结果。'
            confirmButtonText: this.$t('script.Confirm') // '确定'
          });
          //          查询
          ModelTrain(this.Mid).then((res) => {
            console.log(res);
            if(res.data.ret == 200) {
              this.$message.success(this.$t('script.DrillSuccess')); //"训练成功"
              this.xunlian = false;
            }
          })
        } else {
          this.$message.error(this.$t('script.NoFile')); //"没有语音文件"
        }
      },
      xq() {
        ModelDetail(this.Mid).then((res) => {
          console.log(res);
          this.amendLanguagesList = res.data.data;
          this.speechi = res.data.data.speech;
          if(this.speechi.length == 0) {
            this.xli = true;
          }
        })
      },
      //    详情弹框
      newTask(id) {
        console.log(id);
        this.Mid = id;
        this.amendLanguagesList.mid = id;
        this.nlguage = true;
        this.xq();
      },
      //    模型删除
      modelDelete(id) {
        this.$confirm(this.$t('script.DelFile'), this.$t('script.title'), { //'此操作将永久删除该文件, 是否继续?'//'提示'
          confirmButtonText: this.$t('script.Confirm'), //'确定'
          cancelButtonText: this.$t('script.Cancel'), //'取消'
          type: 'warning'
        }).then(() => {
          ModelDel(id).then((res) => {
            console.log(res);
            if(res.data.ret == 200) {
              this.$message.success(this.$t('script.DelSuccess')); //'删除成功!'
              this.LModel();
            }
          })
        }).catch(() => {
          this.$message.info(this.$t('script.CancelDel')); //'已取消删除'
        });
      }
    },
    data() {
      return {
        https: process.env.BASE_API + "/lre/model/speech/add",
        kong: false,
        xli: true,
        Mid: '',
        i: 0,
        fileList: [],
        target: false,
        nlguage: false,
        xiaoshi: false,
        xiaoshi1: true,
        dianji1: true,
        xunlian: false,
        //      修改语种模型
        amendLanguagesList: {
          language: '',
          desc: '',
          mid: ''
        },
        //      创建语种模型
        languagesList: {
          language: '',
          desc: ''
        },
        rules_target: {
          language: [{
              required: true,
              message: this.$t('script.ImportlangName'), //'请输入语种名称'
              trigger: 'blur'
            },
            {
              min: 1,
              max: 15,
              message: this.$t('script.langSizeRestrictions'), //'长度在 1 到 15 个字符'
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
        fileList: [],
        speechi: []
      }
    },
    computed: {
      //    上传语音文件附带参数
      UpData() {
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