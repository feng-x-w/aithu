<style scoped>
  .tasktop {
    padding: 10px;
  }
  
  .taskmid {
    padding: 10px;
  }
  
  .taskmid>.tasktable {
    width: 100%;
    margin: 0 auto;
    text-align: left;
  }
  
  .taskmid>.tasktable>tr {
    border: 1px solid #e3e3e3;
  }
  
  .taskmid>.tasktable>tr>th {
    border: 1px solid #e3e3e3;
    color: #909399;
    background-color: #f3f3f3;
    font-size: 13px;
    font-weight: 600;
    padding: 10px;
  }
  
  .taskmid>.tasktable>tr>td {
    border: 1px solid #e3e3e3;
    padding: 0px 10px;
    font-size: 13px;
  }
  
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  
  .mask>.mask_new_task {
    text-align: center;
    width: max-content;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px 50px;
    padding-left: 25px;
    background-color: white;
    overflow: hidden;
    border-radius: 9px;
  }
  
  .mask>.show_taskadd {
    width: 40%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 300px;
    padding: 25px 50px;
    background-color: white;
    overflow: hidden;
    border-radius: 9px;
  }
  
  .mask>.Alert {
    text-align: center;
    width: 16%;
    position: relative;
    top: 50%;
    margin-left: -8%;
    left: 50%;
    margin-top: -100px;
    padding: 25px 50px;
    background-color: white;
    overflow: hidden;
    border-radius: 9px;
    z-index: 120;
  }
  
  .mask>.Alert>h2 {
    font-size: 14px;
    font-family: "微软雅黑";
    color: green;
    margin: 20px 0;
  }
  
  .wei {
    width: 99.8%;
    text-align: center;
    font-size: 16px;
    color: #6F7180;
    border: 1px solid #e3e3e3;
    border-top: none;
    padding: 15px 0;
  }
  
  .shangR>h1 {
    margin: 10px 0;
  }
  
  .shangR>ul>.asdd {
    padding-left: 30px;
  }
  
  .shangR>ul>.asdd>li {}
  
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
  
  .qwe {
    text-align: left;
    /* !important*/
  }
  
  .show {
    font-size: 15px;
    border: 1px solid #cecece;
    float: right;
    color: #5d5d5d;
    padding: 0px 4px;
    display: inline-block;
    height: 19px;
    line-height: 19px;
  }
  
  .show:hover {
    background-color: #ffbebe85;
    border: 1px solid #ff0000;
    color: #f53c3c;
  }
</style>
<style>
  .el-form-item__content {
    margin: 0;
  }
  
  .el-upload-list {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 211px;
    overflow-y: auto;
  }
</style>
<style>

</style>
<template>
  <div class="task">
    <Breadcrumb>
      <span slot="one">{{$t('taskM.taskManager')}}</span>
      <!--任务管理-->
      <span slot="two">{{$t('taskM.taskStateManager')}}</span>
      <!--任务状态管理-->
    </Breadcrumb>
    <div class="tasktop">
      <el-form :inline="true" :model="tasksearch" class="demo-form-inline" size="mini">
        <el-form-item :label="$t('taskM.taskName')">
          <!--//任务名称-->
          <el-input v-model="tasksearch.taskname" :placeholder="$t('taskM.taskName')"></el-input>
          <!--//任务名称-->
        </el-form-item>
        <el-form-item :label="$t('taskM.taskType')">
          <!--//任务类别-->
          <el-select v-model="tasksearch.tasktype" :placeholder="$t('taskM.taskType')">
            <!--//任务类别-->
            <el-option :label="$t('taskM.task_type1')" value="1"></el-option>
            <!--//声纹-->
            <el-option :label="$t('taskM.task_type2')" value="2"></el-option>
            <!--//语种-->
            <el-option :label="$t('taskM.task_type3')" value="3"></el-option>
            <!--//性别-->
            <el-option :label="$t('taskM.task_type4')" value="4"></el-option>
            <!--//关键词-->
            <el-option :label="$t('taskM.task_type5')" value="5"></el-option>
            <!--//增强-->
            <el-option :label="$t('taskM.task_type6')" value="6"></el-option>
            <!--//清洗-->
            <el-option :label="$t('taskM.task_type7')" value="7"></el-option>
            <!--//语音索引-->
            <el-option :label="$t('taskM.all')" value=""></el-option>
            <!--//全部-->
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('taskM.state')">
          <!--//执行状态-->
          <el-select v-model="tasksearch.taskstatus" :placeholder="$t('taskM.state')">
            <!--//执行状态-->
            <el-option :label="$t('taskM.state1')" value="1"></el-option>
            <!--//处理中-->
            <el-option :label="$t('taskM.state2')" value="2"></el-option>
            <!--//已完成-->
            <el-option :label="$t('taskM.all')" value=""></el-option>
            <!--//全部-->
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('taskM.time')">
          <!--//操作时间-->
          <el-col :span="11">
            <el-date-picker type="date" :placeholder="$t('taskM.starttime')" v-model="tasksearch.starttime" style="width: 100%;"></el-date-picker>
            <!--//选择日期-->
          </el-col>
          <el-col class="line" :span="2" style="text-align: center;">-</el-col>
          <el-col :span="11">
            <el-date-picker type="date" :placeholder="$t('taskM.endtime')" v-model="tasksearch.endtime" style="width: 100%;"></el-date-picker>
            <!--//选择日期-->
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="seek" icon="el-icon-search">{{$t('taskM.search')}}</el-button>
          <!--查询-->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="newTask">{{$t('taskM.creatTask')}}</el-button>
          <!--新建任务-->
        </el-form-item>
      </el-form>
    </div>
    <div class="mask" v-show="show_task">
      <div class="mask_new_task" v-show="show_task_childen">
        <div class="task_left">
          <h1>{{$t('taskM.creatTask')}}</h1>
          <!--新建任务-->
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item :label="$t('taskM.taskName')">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <!--选择目标组下拉框-->
            <div style="border: 1px solid #e3e3e3;padding: 5px;" v-show="targetantistop">
              <el-form-item class="qwe" :label="$t('taskM.groupName')">
                <el-select v-model="form.typeId" @change="change" :placeholder="$t('taskM.chooseGroupName')">
                  <!--请选择组名-->
                  <el-option label=" " value="0"></el-option>
                  <el-option v-for="item in targetname" :label="item.name" :value="item.id"></el-option>
                </el-select>
                <span class="show fa fa-remove" @click="show"></span>
              </el-form-item>
              <el-form-item :label="$t('taskM.keyword')" v-show="targetantistop">
                <el-input v-model="form.antistop" :placeholder="formaaa.pla" @change="keyup"></el-input>
                <!--请输入关键词-->
              </el-form-item>
            </div>
            <!--选择人数输入框-->
            <div style="border: 1px solid #e3e3e3;padding: 5px;margin-top: 2px;" v-show="voice">
              <el-form-item :label="$t('taskM.number')">
                <el-input v-model="form.pnum" :placeholder="$t('taskM.numofVoiceIndex')"></el-input>
                <!--请输入人数-->
              </el-form-item>
            </div>

            <el-form-item :label="$t('taskM.taskType')">
              <template>
                <el-checkbox :label="$t('taskM.voice_enhance')" v-model="form.enhance" true-label="1" false-label="0"></el-checkbox>
                <!--//语音增强-->
                <el-checkbox :label="$t('taskM.voice_filter')" v-model="form.cleaning" true-label="1" false-label="0"></el-checkbox>
                <!--//语音清洗-->
                <el-checkbox :label="$t('taskM.voice_ident')" v-model="form.sr" true-label="1" false-label="0"></el-checkbox>
                <!--//声纹识别-->
                <el-checkbox :label="$t('taskM.keyword_ident')" v-model="form.ks" true-label="1" false-label="0" @change="guan"></el-checkbox><br />
                <!--//关键词识别-->
                <el-checkbox :label="$t('taskM.language_ident')" v-model="form.li" true-label="1" false-label="0"></el-checkbox>
                <!--//语种识别-->
                <el-checkbox :label="$t('taskM.gender_ident')" v-model="form.gi" true-label="1" false-label="0"></el-checkbox>
                <!--//性别识别-->
                <el-checkbox :label="$t('taskM.task_type7')" v-model="form.idx" true-label="1" false-label="0" @change="idex"></el-checkbox>
                <!--//语音索引-->
              </template>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain @click="onSubmit">{{$t('taskM.creat')}}</el-button>
              <!--创建-->
              <el-button type="danger" plain @click="conceal" style="margin-left: 10px !important;">{{$t('taskM.cancel')}}</el-button>
              <!--取消-->
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="show_taskadd" v-show="show_task_add">
        <div class="shangL" v-show="xiaoshi1">
          <el-upload class="upload-demo" ref="upload" :action="http" :file-list="fileList" :on-success="handleSuccess" :on-error="handleError" :before-upload="beforeAvatarUpload" :data="UpData" accept=".wav,.mp3,.flac" multiple :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary" @click="dianjia">{{$t('taskM.chooseFile')}}</el-button>
            <!--选取文件-->
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">{{$t('taskM.upolad')}}</el-button>
            <!--上传到服务器-->
            <el-button size="small" type="primary" @click="Remote" v-show="dianji1">{{$t('taskM.remoteLoad')}}</el-button>
            <!--远端上传-->
            <div slot="tip" class="el-upload__tip">{{$t('taskM.uploadReq')}}</div>
            <!--只能上传.WAV,.MP3,.FLAC,.APE文件-->
          </el-upload>
        </div>
        <div class="shangR" v-show="xiaoshi">
          <h2>{{$t('taskM.chooseFolder')}}</h2>
          <!--请选择文件夹-->
          <ul>
            <div class="asdd" v-for="(i,key) in addfiles" @click="cName(key)">
              <li>
                <!-- @click="cName(key)"-->
                <input type="radio" name="fils" :id="key" /> <label :for="key">{{i.name}}</label>
                <br />
              </li>
            </div>

            <div style="text-align: right;padding-top: 5px;">
              <el-button type="submit" size="small" @click="ftotfiles()">{{$t('taskM.confirmUpload')}}</el-button>
              <!--确认上传-->
            </div>
          </ul>
        </div>
      </div>
    </div>
    <div class="taskmid">
      <table class="tasktable">
        <tr>
          <th>{{$t('taskM.taskName')}}</th>
          <th>{{$t('taskM.taskType')}}</th>
          <th>{{$t('taskM.state')}}</th>
          <th>{{$t('taskM.time')}}</th>
          <th>{{$t('taskM.operation')}}</th>
        </tr>
        <tr v-for="i in tableData">
          <td>
            {{i.taskname}}
          </td>
          <td>
            <span style="background-color: #fff;margin-bottom: 1px;display: inline-block;" v-if="i.enhance==1">&nbsp;
  {{$t('taskM.voice_enhance')}}&nbsp;</span>
            <!--语音增强-->
            <span style="background-color: #fff;margin-bottom: 1px;display: inline-block;" v-if="i.cleaning==1">&nbsp;
  {{$t('taskM.voice_filter')}}&nbsp;</span>
            <!--语音清洗-->
            <span style="background-color: #fff;margin-bottom: 1px;display: inline-block;" v-if="i.sr==1">&nbsp;
  {{$t('taskM.voice_ident')}}&nbsp;</span>
            <!--声纹识别-->
            <span style="background-color: #fff;margin-bottom: 1px;display: inline-block;" v-if="i.ks==1">&nbsp;
  {{$t('taskM.keyword_ident')}}&nbsp;</span>
            <!--关键词识别-->
            <span style="background-color: #fff;margin-bottom: 1px;display: inline-block;" v-if="i.li==1">&nbsp;
  {{$t('taskM.language_ident')}}&nbsp;</span>
            <!--语种识别-->
            <span style="background-color: #fff;margin-bottom: 1px;display: inline-block;" v-if="i.gi==1">&nbsp;
  {{$t('taskM.gender_ident')}}&nbsp;</span>
            <!--性别识别-->
            <span style="background-color: #fff;margin-bottom: 1px;display: inline-block;" v-if="i.idx==1">&nbsp;
  {{$t('taskM.task_type7')}}&nbsp;</span>
            <!--语音索引-->
          </td>
          <td>
            <span v-if="i.status==0">{{$t('taskM.state1')}}</span>
            <!--处理中-->
            <span v-if="i.status==1">{{$t('taskM.state2')}}</span>
            <!--已完成-->
          </td>
          <td> {{i.handletime}} </td>
          <td>
            <router-link :to="'/result/'+i.taskid">
              <el-button type="text" :title="$t('taskM.check')">
                <!--//查看-->
                <i class="el-icon-view"></i>
              </el-button>
            </router-link>
          </td>
        </tr>
      </table>
      <div class="wei" v-show="kong">{{$t('taskM.noData')}}</div>
      <!--暂无数据-->
      <el-pagination v-show="fenye" @current-change="handleCurrentChange" @prev-click="handlePrevChange" @next-click="handleNextChange" @size-change="handleSizeChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  import { newtaskadd, tasklist, taskStart, result, files, ftot, search } from '@/api/newtask'
  import { list } from '@/api/antistop'
  export default {
    components: {
      Breadcrumb
    },
    //  计算属性
    computed: {
      UpData() {
        return {
          taskid: this.taskid
        }
      }
    },
    created() {
      //    页面所有的任务数据
      this.loading(this.currentPage, this.pagesize);
      console.log("          ◥◤~~~~◥◤\n            ┃ 　　   ┃\n             ≡━ ﹏ ━≡\n            ┗━━┳∞┳━━┛\n    _..,------┏┫　┣┓------,.._\n   ;'-.,------------------,.-';\n   |                          |\n   、                         ;\n    |\                        /\n  .-' `,._________________.,' '-.\n(       '----------------'       )\n `-=..________________________..-\n\n快到碗里来！简历请投放 m17600534443@163.com");
    },
    methods: {
      //每页显示数据量变更
      handleSizeChange: function(val) {
        this.pagesize = val;
        if(this.indx == 0) {
          this.loading(this.currentPage, this.pagesize);
        } else {
          this.seeker(this.stt, this.edt, this.currentPage, this.pagesize);
        }
      },
      //页码变更
      handleCurrentChange: function(val) {
        this.currentPage = val;
        if(this.indx == 0) {
          this.loading(this.currentPage, this.pagesize);
        } else {
          this.seeker(this.stt, this.edt, this.currentPage, this.pagesize);
        }
      },
      //上一页
      handlePrevChange: function() {
        if(this.indx == 0) {
          this.loading(this.currentPage, this.pagesize);
        } else {
          this.seeker(this.stt, this.edt, this.currentPage, this.pagesize);
        }
      },
      //下一页
      handleNextChange: function() {
        if(this.indx == 0) {
          this.loading(this.currentPage, this.pagesize);
        } else {
          this.seeker(this.stt, this.edt, this.currentPage, this.pagesize);
        }
      },
      //    查询
      seek() {
        this.indx = 1;
        if(this.tasksearch.starttime) {
          this.stt = Math.round(this.tasksearch.starttime.getTime() / 1000); //toLocaleDateString() this.tasksearch.starttime.getTime()
          console.log(parseFloat(this.stt));
          console.log(this.stt);
        } else {
          this.stt = this.tasksearch.starttime = "";
        }
        if(this.tasksearch.endtime) {
          this.edt = Math.round(this.tasksearch.endtime.getTime() / 1000); //toLocaleDateString() this.tasksearch.endtime.getTime()
          console.log(parseFloat(this.edt));
          console.log(this.edt);
        } else {
          this.edt = this.tasksearch.endtime = "";
        }
        this.seeker(this.stt, this.edt, this.currentPage, this.pagesize);
      },
      seeker(stt, edt, page, pagesize) {
        search(this.tasksearch.taskname, this.tasksearch.tasknum, this.tasksearch.tasktype, this.tasksearch.taskstatus, this.tasksearch.handler, stt, edt, page, pagesize).then((res) => {
          if(res.data.ret == 200) {
            this.tableData = res.data.data;
            this.totalCount = res.data.totalcount;
            if(this.totalCount == 0) {
              this.kong = true;
              this.fenye = false;
            } else {
              this.kong = false;
              this.fenye = true;
            }
          }
        })
      },
      //    获取页面所有的任务数据
      loading(page, pagesize) {
        tasklist(page, pagesize).then((res) => {
          console.log(res.data);
          this.tableData = res.data.data;
          if(res.data.data == '') {
            this.kong = true;
            this.fenye = false;
            this.totalCount = res.data.totalcount;
          } else {
            this.kong = false;
            this.fenye = true;
            this.totalCount = res.data.totalcount;
          }
        })
        list().then((res) => {
          this.targetname = res.data.data;
          console.log(this.targetname);
        })
      },
      //    点击远端上传文件按钮
      Remote() {
        files().then((res) => {
          console.log(res);
          if(res.data.ret == 200) {
            this.addfiles = res.data.data;
          }
          if(res.data.ret == 404) {
            this.$message.error(this.$t('script.NoFiles')); //未找到文件夹
          } else {
            this.xiaoshi1 = false;
            this.xiaoshi = true;
            this.initall();
          }
        })

      },
      cName(index) {
        this.inde = index + 1;
      },
      //    确认上传语音
      ftotfiles() {
        if(this.inde == "") {
          this.$message.error(this.$t('script.SelectTheFile')); //请选择文件夹进行上传
        } else {
          this.show_task_add = false;
          this.xiaoshi1 = true;
          this.dianji1 = true;
          this.xiaoshi = false;
          this.show_task = false;
          this.$message.success(this.$t('script.BeUploading')); //正在上传文件
          ftot(this.addfiles[this.inde - 1].name, this.taskid).then((res) => {
            console.log(res);
            if(res.data.ret == 200) {
              taskStart(this.taskid).then((res) => {
                this.$message.success(this.$t('script.UploadComplete1')); //"上传成功,正在开始任务"
                this.loading(this.currentPage, this.pagesize);
              })
            }
          })
        }

      },
      //    点击创建任务
      onSubmit() {
        function changedouhao(str) {
          str = str.replace(/，/ig, ',');
          return str;
        }

        function unique(arr) {
          var res = [];
          for(var i = 0; i < arr.length; i++) {
            if(res.indexOf(arr[i]) == -1) {
              res.push(arr[i]);
            }
          }
          return res;
        }
        let arr = changedouhao(this.form.antistop).split(',');
        let ArrAy = unique(arr).join(',');
        console.log(ArrAy);
        if(this.form.enhance == 1 || this.form.cleaning == 1 || this.form.sr == 1 || this.form.ks == 1 || this.form.li == 1 || this.form.gi == 1 || this.form.idx == 1) {
          if(this.form.ks == 1) {
            if(this.form.typeId != '' || ArrAy != '') {
              if(this.form.idx == 1 && this.form.pnum == '') {
                this.$message.error(this.$t('script.NumberOfPeople')); //"请填上人数"
              } else {
                this.feng(ArrAy);
              }
            } else {
              this.$message.error(this.$t('script.Complete'))
            } //'请将关键词组或和关键词填写完整'
          } else {
            this.form.typeId = 0;
            if(this.form.idx == 1 && this.form.pnum == '') {
              this.$message.error(this.$t('script.NumberOfPeople')); //$t('logo.title')//"请填上人数"
            } else {
              this.feng(ArrAy);
            }
          }
        } else {
          this.$message.error(this.$t('script.SelectCategory')); //"请至少选择一个任务类别"
        }
      },
      keyup(val) {
        function changedouhao(str) {
          str = str.replace(/，/ig, ',');
          return str;
        }

        function unique(arr) {
          var res = [];
          for(var i = 0; i < arr.length; i++) {
            if(res.indexOf(arr[i]) == -1) {
              res.push(arr[i]);
            }
          }
          return res;
        }
        let arr = changedouhao(this.form.antistop).split(',');
        let ArrAy = unique(arr).join(',');
        console.log(ArrAy);

        console.log(ArrAy);
        var str = ArrAy;
        if(str.length > 0) {
          for(var i = str.length - 1; i >= 0; i--) {
            let unicode = str.charCodeAt(i);
            if(unicode > 65280 && unicode < 65375) {
              this.$message.error(this.$t('script.Import')); //"不能输入全角字符，请输入半角字符"
              this.form.antistop = '';
              this.formaaa.pla = this.$t('script.Import') //"不能输入全角字符，请输入半角字符"
            }
          }
        }
      },
      //    创建任务封装函数
      feng(ArrAy) {
        newtaskadd(this.form.name, this.form.tasknum, this.form.enhance, this.form.cleaning, this.form.sr, this.form.ks, this.form.li, this.form.gi, this.form.typeId, ArrAy, this.form.pnum, this.form.idx).then((res) => {
          if(res.data.ret == 200) {
            this.taskid = res.data.data.taskid;
            console.log(this.taskid);
            this.show_task_childen = false;
            this.show_task_add = true;
          }
          if(res.data.ret == 401) {
            this.$message.error(this.$t('script.CreateModels1')); //'请先建立声纹模型'
          }
          if(res.data.ret == 402) {
            this.$message.error(this.$t('script.CreateModels2')); //'请先建立性别模型'
          }
          if(res.data.ret == 403) {
            this.$message.error(this.$t('script.CreateModels3')); //'请先建立语种模型'
          }
          if(res.data.ret == 405) {
            this.$message.error(this.$t('script.CreateModels4')); //'任务已存在'
          }
        }).catch((error) => {

          console.log(error);
        });
      },
      dianjia() {
        this.dianji1 = false;
      },
      //    点击显示创建新任务蒙板
      newTask() {
        this.show_task = true;
        this.show_task_childen = true;
        var myDate = new Date();
        var y = myDate.getFullYear().toString(), //年份
          m = ("0" + (myDate.getMonth() + 1)).slice(-2).toString(), //月份
          d = myDate.getDate().toString(), //日
          h = myDate.getHours().toString(), //小时
          fen = myDate.getMinutes().toString(), //分钟
          s = myDate.getMilliseconds().toString(); //毫秒
        var mydate = y + m + d + h + fen + s;
        var mydates = y + "年" + m + "月" + d + "日" + h + "时" + fen + "分";
        this.form.tasknum = mydate;
        this.form.name = mydate;
      },
      //    点击关键词展开相关数据
      guan() {
        this.form.antistop = '';
        this.form.typeId = "0";
        this.targetantistop = !this.targetantistop;
      },
      //    点击语音索引展开相关数据
      idex() {
        this.form.pnum = '';
        this.voice = !this.voice;
      },
      //    点击关闭隐藏语音索引与关键词
      show() {
        this.targetantistop = false;
        this.voice = false;
        this.form.ks = 0;
        this.form.idx = 0;
      },
      //    点击隐藏蒙板
      conceal() {
        this.show_task = false;
        this.initall();
      },
      //    上传语音
      submitUpload() {
        this.$refs.upload.submit();
      },
      //    上传文件限制
      beforeAvatarUpload(file) {
        //      const iswav = file.type === 'audio/wav';
        //      const ismp3 = file.type === 'audio/mp3';
        //      const isflac = file.type === 'audio/flac';
        const isLt10M = file.size / 1024 / 1024 < 30;
        //      if (!iswav && !ismp3 && !isflac) {
        //        this.$message.error(this.$t('script.FileRestrictions1'));//'上传文件只能是.WAV,.MP3,.FLAC格式!'
        //      }
        if(!isLt10M) {
          this.$message.error(this.$t('script.FileRestrictions2')); //'上传文件大小一次不能超过 20MB!'
        }
        //      iswav || ismp3 || isflac && 
        return isLt10M;
      },
      //    上传成功时的钩子函数
      handleSuccess(response, file, fileList) {
        this.i += 1;
        this.taskid = response.data.taskid;
        this.taskfile_response = response.ret;
        if(fileList.length == this.i) {
          //        所有文件上传成功时开始任务
          taskStart(this.taskid).then((res) => {
            this.$message.success(this.$t('script.UploadComplete1')); //"上传成功，正在开始任务"
            this.show_task = false;
            this.show_task_add = false;
            this.dianji1 = true;
            this.i = 0;
            fileList.splice(0, fileList.length);
          })
          tasklist(this.currentPage, this.pagesize).then((res) => {
            this.tableData = res.data.data;
            if(res.data.data == '') {
              this.kong = true;
            } else {
              this.kong = false;
            }
          })
          this.initall();
        }

      },
      //    初始化所有
      initall() {
        this.targetantistop = false;
        this.voice = false;
        this.form.enhance = 0;
        this.form.cleaning = 0;
        this.form.idx = 0;
        this.form.sr = 0;
        this.form.ks = 0;
        this.form.li = 0;
        this.form.typeId = "0";
        this.form.name = '';
        this.form.tasknum = '';
        this.form.gi = 0;
        this.form.antistop = ''
      },
      //    文件上传失败时的回调函数
      handleError(err, file, fileList) {
        //      console.log(this.type);
        this.i = 0;
      },
      change() {
        console.log(this.form.typeId);
        for(var i = 0; i < this.targetname.length; i++) {
          if(this.targetname[i].id == this.form.typeId) {
            this.form.typeName = this.targetname[i].name;
          }
        }
        console.log(this.form.typeName);
      },
    },
    data() {
      return {
        stt: '',
        edt: '',
        indx: 0,
        currentPage: 1,
        totalCount: 0,
        pagesize: 10,
        fenye: false,
        formaaa: {
          typeId: '',
          pla: this.$t('script.hint') //'使用","逗号分割，不支持全角字符'
        },
        targetantistop: false,
        voice: false,
        addfiles: [],
        inde: "",
        i: 0,
        dianji1: true,
        xiaoshi1: true,
        xiaoshi: false,
        kong: false,
        taskfile_response: "",
        tasklists: [],
        show_task: false,
        show_task_childen: false,
        show_task_add: false,
        suc: false,
        taskid: "",
        tasksearch: {
          taskname: '',
          tasknum: '',
          tasktype: '',
          taskstatus: '',
          handler: '',
          starttime: '',
          endtime: ''
        },
        fileList: [],
        tableData: [],
        targetname: [],
        form: {
          typeId: '',
          typeName: '',
          name: '',
          tasknum: '',
          antistop: '',
          pnum: '',
          enhance: 0,
          cleaning: 0,
          sr: 0,
          ks: 0,
          li: 0,
          gi: 0,
          idx: 0
        },
        http: process.env.BASE_API + "/task/upload"
      }
    }

  }
</script>