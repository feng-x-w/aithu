<style scoped>
  .tasktop {
    padding: 10px;
    padding-bottom: 0;
  }
 .identify-results>tr>.addre {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: none;
  }
  
  .identify-results>tr>td>.addre1 {
    width: 100px;
    /*display: inline-block;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .taskmid {
    padding: 10px;
    padding-top: 0;
  }
  
  .atiao {
    font-size: 12px;
    color: #409EFF;
    text-decoration: none;
  }
  
  .atiao:hover {
    color: #094482;
  }
  
  .non:hover {
    color: black;
  }
  
  .non {
    color: black;
  }
  
  .el-table td {
    padding: 0 !important;
  }
  
  .el-popover__reference {
    margin: 5px 0;
  }
  
  .sps {
    border: 1px solid rgba(64, 158, 255, .2);
    background-color: rgb(30, 159, 255);
    color: #409EFF;
    border-radius: 3px;
    padding: 2px;
    display: inline-block;
    margin: 7px 0;
  }
  
  .wei {
    width: 99.8%;
    text-align: center;
    font-size: 16px;
    color: #6F7180;
    border: 1px solid #e3e3e3;
    border-top: 0;
    padding: 15px 0;
  }
  
  .mrsk {
    width: 100%;
    height: 100%;
    background-color: #00000080;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
  }
  
  .box {
    width: 70%;
    position: fixed;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 9px;
  }
  
  .box>h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  
  .box1,.box2 {
    width: 70%;
    position: fixed;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
    border-radius: 9px;
    line-height: 25px;
  }
  .box2{
  	width: 40%;
  }
  .box1>h2 {
    text-align: center;
    margin-bottom: 5px;
  }
  
  .box1>div {
    border: 1px solid #000;
    padding: 10px;
    border-radius: 5px;
    max-height: 400px;
    overflow: auto;
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
    color: #909399;
    background-color: #f3f3f3;
    font-size: 13px;
    font-weight: 600;
    padding: 10px;
  }
  
  .tasktable>tr>td {
    border: 1px solid #e3e3e3;
    padding: 10px;
    font-size: 13px;
  }
  
  .details {
    font-size: 12px;
    color: #6eb5ff;
    line-height: 0;
  }
  
  .details:hover {
    color: #094482;
  }
  
  .boxs {
    float: right;
    font-size: 14px;
    border: 1px solid gray;
    line-height: 10px;
    height: 10px;
    font-weight: 500;
    /* display: inline-block; */
    padding: 5px 6px;
  }
  
  .boxs:hover {
    border-color: #ff4b4b;
    background-color: #ffd9d9;
    color: #ad0000;
  }
  
  .custom {
    color: #ababab;
    font-size: 13px;
  }
  .taskmid>table>tr>td{
    padding: 10px;
  }
</style>
<style>
  .el-table td {
    padding: 0 !important;
  }
  .taskmid>table {
    width: 100%;
    margin: 0 auto;
    text-align: left;
  }
  
  .taskmid>table>tr {
    border: 1px solid #e3e3e3;
  }
  
  .taskmid>table>tr>th {
    border: 1px solid #e3e3e3;
    color: #909399;
    background-color: #f3f3f3;
    font-size: 13px;
    font-weight: 600;
    padding: 10px;
  }
  
  .taskmid>table>tr>td {
    border: 1px solid #e3e3e3;
    padding: 0px 10px;
    font-size: 13px;
  }
  
  .taskmid>table>tr:hover {
    background-color: #ebebeb;
  }
</style>
<template>
  <div class="task">
    <Breadcrumb>
      <span slot="one">{{$t('resultManager.identResultManager')}}</span>
      <span slot="two">{{$t('resultManager.identTaskManager')}}</span>
    </Breadcrumb>
    <div class="tasktop">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        <el-form-item :label="$t('resultManager.targetName')">
          <el-input v-model="formInline.speaker" :placeholder="$t('resultManager.targetName')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('resultManager.keyword')">
          <el-input v-model="formInline.keyword" :placeholder="$t('resultManager.keyword')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('resultManager.gender')">
          <el-select v-model="formInline.gender" :placeholder="$t('resultManager.gender')">
            <el-option :label="$t('resultManager.gender1')" value="0"></el-option>
            <el-option :label="$t('resultManager.gender2')" value="1"></el-option>
            <el-option :label="$t('resultManager.gender3')" value=""></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('resultManager.languageType')">
          <el-input v-model="formInline.language" :placeholder="$t('resultManager.languageType')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('resultManager.targetTime')">
          <el-col :span="11">
            <el-date-picker type="date" :placeholder="$t('resultManager.starttime')" v-model="formInline.starttime" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2" style="text-align: center;">-</el-col>
          <el-col :span="11">
            <el-date-picker type="date" :placeholder="$t('resultManager.endtime')" v-model="formInline.endtime" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item :label="$t('resultManager.taskName')">
          <el-input v-model="formInline.taskname" :placeholder="$t('resultManager.taskName')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('resultManager.lacation')">
          <el-input v-model="formInline.address" :placeholder="$t('resultManager.lacation')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('resultManager.operationTime')">
          <el-col>
            <el-date-picker type="date" :placeholder="$t('resultManager.chooseTime')" v-model="formInline.handletime" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">{{$t('resultManager.search')}}</el-button>
          <!--查询-->
        </el-form-item>
      </el-form>
    </div>
    <div class="taskmid">
      <table border="1" class="identify-results">
        <tr>
          <th>{{$t('resultManager.taskName')}}</th>
          <th>{{$t('resultManager.file')}}</th>
          <th>{{$t('resultManager.targetName')}}</th>
          <th>{{$t('resultManager.gender')}}</th>
          <th>{{$t('resultManager.languageType')}}</th>
          <th>{{$t('resultManager.languageScirpting')}}</th>
          <th>{{$t('resultManager.keyCharacter')}}</th>
          <th>{{$t('resultManager.enhancedFile')}}</th>
          <th>{{$t('resultManager.filterFile')}}</th>
          <th>{{$t('resultManager.voice')}}</th>
          <th>{{$t('resultManager.effectiveTime')}}</th>
          <th>{{$t('resultManager.totleTime')}}</th>
          <th>{{$t('resultManager.operationTime')}}</th>
          <th>{{$t('resultManager.state')}}</th>
        </tr>
        <tr v-for="(i,key) in tableData" :key="key">
          <td>{{i.taskname}}
            <!--<span class="custom" v-if="i.taskname == string">{{ResponseStatus}}</span>-->
          </td>
          <td :title="i.speechname" @click="audioshow(i.filepath)"><!---->
          	<div class="addre1">{{i.speechname}}</div>
          </td>
          <td>{{i.speaker}}

          </td>
          <td>{{i.gender}}
            <!--<span class="custom" v-if="i.gender != '男' && i.gender != '女'">{{ResponseStatus}}</span>-->
          </td>
          <td>{{i.language}}
            <!--<span class="custom" v-if="!i.language">{{ResponseStatus}}</span>-->
          </td>
          <td>
            <span class="details" v-if="i.have_dictationtext != 0" @click="antistop(i.dictationtext,i.dictationpath)">
      	      <i class="fa fa-key fa-lg"></i>
      	        {{$t('resultManager.details')}}
      	    </span>
            <!--<span class="custom" v-else>{{ResponseStatus}}</span>-->
          </td>
          <td>
            <span class="details" v-if="i.have_keyword != 0" @click="details(i)">
      	      <i class="fa fa-key fa-lg"></i>
      	      {{$t('resultManager.details')}}
      	    </span>
            <!--<span class="custom" v-else>{{ResponseStatus}}</span>-->
          </td>
          <td>
            <a :title="$t('resultManager.download')" class="atiao" target="_blank" :href="https+'/task/download?filepath='+i.enhance">
              {{i.enhance_name}}
            </a>
            <!--<span class="custom" v-if="!i.enhance_name">{{ResponseStatus}}</span>-->
          </td>
          <td>
            <a :title="$t('resultManager.download')" class="atiao" target="_blank" :href="https+'/task/download?filepath='+i.textfird_path">{{i.textfird_path_name}}</a>
            <!--<span class="atiao non" v-if="i.trs_path_name"> | </span>-->
            <!--<span class="atiao non custom" v-else>{{ResponseStatus}}</span>-->
            <a :title="$t('resultManager.download')" class="atiao" target="_blank" :href="https+'/task/download?filepath='+i.trs_path">{{i.trs_path_name}}</a>
          </td>
          <td>
            <a :title="$t('resultManager.download')" class="atiao" target="_blank" :href="https+'/task/download?filepath='+i.trs_indexing">{{i.trs_indexing_name}}</a>
            <!--<span class="custom" v-if="!i.trs_indexing_name">{{ResponseStatus}}</span>-->
          </td>
          <td>{{i.valid_duration}}
            <!--<span class="custom" v-if="!i.valid_duration">{{ResponseStatus}}</span>-->
          </td>
          <td>{{i.autdio_duration}}
            <!--<span class="custom" v-if="!i.autdio_duration">{{ResponseStatus}}</span>-->
          </td>
          <td>
            {{i.finishtime}}
            <!--<span class="custom" v-if="!i.finishtime">{{ResponseStatus}}</span>-->
          </td>
          <td>
            <span v-if="i.status==0">{{$t('resultManager.waiting')}}</span>
            <span v-if="i.status==1">{{$t('resultManager.begun')}}</span>
            <span v-if="i.status==2">{{$t('resultManager.preprocessing')}}</span>
            <span v-if="i.status==3">{{$t('resultManager.processing')}}</span>
            <span v-if="i.status==4">{{$t('resultManager.finished')}}</span>
          </td>

        </tr>
      </table>
      <!--听写弹框-->
      <div class="mrsk" v-show="mas" @click="show">
        <div class="box1" @click.stop>
          <h2>{{$t('resultManager.languageScirpting')}}<span @click="show" class="boxs fa fa-remove"></span></h2>
          <div>
            {{textall}}
          </div>
          <a :title="$t('resultManager.download')" style="float: right;margin: 10px;" class="atiao" target="_blank" :href="https+'/task/download?filepath='+textpath">{{$t('resultManager.download')}}</a>
        </div>
      </div>
      	<!--播放-->
      <div class="mrsk" v-show="audiobound">
        <div class="box2" @click.stop>
          <h2>{{$t('resultManager.file')}}<span @click="show();stopplay()" class="boxs fa fa-remove"></span></h2>
          	<p><img src="../../assets/MP3.png" alt=""></p>
            <audio :src="srcc" controls autoplay id="audio" style="width: 500px;"></audio>
        </div>
      </div>
      <!--关键词弹框   语言脚本-->
      <div class="mrsk" v-show="masker">
        <div class="box">
          <h2>{{keywordname}}<span @click="show" class="boxs">x</span></h2>
          <table border="1" class="tasktable">
            <tr>
              <th style="width: 100px;">{{$t('resultManager.keyword')}}</th>
              <th>{{$t('resultManager.times')}}(s)</th>
            </tr>
            <tr v-for="(i,key) in keyword" :key="key">
              <td style="width: 100px;">{{i.keyword}}</td>
              <td>{{i.offtime}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="wei" v-show="kong">{{$t('resultManager.noDate')}}</div>
      <el-pagination v-show="fenye" @current-change="handleCurrentChange" @prev-click="handlePrevChange" @next-click="handleNextChange" @size-change="handleSizeChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  // import Mplay from '../../components/mplay/mplay'
  import { result, AllTasks, QueryTasks, download } from '@/api/newtask' //
  export default {
    components: {
      Breadcrumb
      // Mplay
    },
    created() {
      this.initialize();
    },
    methods: {
      //    关键字显示隐藏
      details(i) {
        this.masker = true;
        this.keyword = i.keyword;
        this.keywordname = i.taskname;
        console.log(this.keywordname);
      },
      //    点击隐藏
      show() {
        this.masker = false;
        this.mas = false;
        this.audiobound = false;
      },
      stopplay(){
      	var audio=document.getElementById("audio")
      	audio.pause();
      	audio.currentTime = 0;
      },
      //    关键词
      antistop(text, textpath) {
        this.mas = true;
        this.textall = text;
        this.textpath = textpath;
      },
      audioshow(srcc){
      	this.audiobound=true;
      	this.srcc=this.https+srcc;
      },
      //每页显示数据量变更
      handleSizeChange: function(val) {
        this.pagesize = val;
        if(this.i == 0) {
          this.fund();
        } else {
          this.chaxun(this.currentPage, this.pagesize);
        }
      },
      //页码变更
      handleCurrentChange: function(val) {
        this.currentPage = val;
        if(this.i == 0) {
          this.fund();
        } else {
          this.chaxun(this.currentPage, this.pagesize);
        }
      },
      //上一页
      handlePrevChange: function() {
        if(this.i == 0) {
          this.fund();
        } else {
          this.chaxun(this.currentPage, this.pagesize);
        }
      },
      //下一页
      handleNextChange: function() {
        if(this.i == 0) {
          this.fund();
        } else {
          this.chaxun(this.currentPage, this.pagesize);
        }

      },
      //    页面初始化
      initialize() {
        this.i = 0;
        this.fund();
      },
      //    初始化页面
      fund() {
        if(this.$route.params.id != undefined) {
          this.alldata(this.$route.params.id, this.currentPage, this.pagesize);
        }
        if(this.$route.params.id == undefined) {
          this.starts();
        }
      },
      //    刷新页面显示所有列表任务
      starts() {
        this.alldata(this.taskid, this.currentPage, this.pagesize);
      },
      //    调用接口显示数据封装为函数
      alldata(Taskid, CurrentPage, PageSize) {
        AllTasks(Taskid, CurrentPage, PageSize).then((res) => {
        	console.log(res);
          if(res.data.ret == 200) {
            this.tableData = res.data.data;
            this.totalCount = res.data.totalcount;
            this.kong = false;
            if(this.tableData) {
              this.fenye = true;
            }
            this.func(this.tableData);
          }
          if(res.data.ret == 404) {
            this.kong = true;
            this.totalCount = res.data.totalcount;
          }
        })
      },
      //    截取文件名后缀
      func(inded) {
        if(inded) {
          for(var i = 0; i < inded.length; i++) {
            if(inded[i].enhance_name != undefined) {
              var index = inded[i].enhance_name.lastIndexOf("\.");
              inded[i].enhance_name = inded[i].enhance_name.substring(index + 1, inded[i].enhance_name.length).toLocaleUpperCase();
            }
            if(inded[i].textfird_path_name != undefined) {
              var index = inded[i].textfird_path_name.lastIndexOf("\.");
              inded[i].textfird_path_name = inded[i].textfird_path_name.substring(index + 1, inded[i].textfird_path_name.length);
            }
            if(inded[i].trs_path_name != undefined) {
              var index = inded[i].trs_path_name.lastIndexOf("\.");
              inded[i].trs_path_name = inded[i].trs_path_name.substring(index + 1, inded[i].trs_path_name.length).toLocaleUpperCase();
            }
            if(inded[i].trs_indexing_name != undefined) {
              var index = inded[i].trs_indexing_name.lastIndexOf("\.");
              inded[i].trs_indexing_name = inded[i].trs_indexing_name.substring(index + 1, inded[i].trs_indexing_name.length).toLocaleUpperCase();
            }
            if(inded[i].status == "4") {
              this.ResponseStatus = "未定制";
            } else {
              this.ResponseStatus = "执行中";
            }
          }
        }
      },
      //    查询
      onSubmit() {
        this.currentPage = 1;
        if(this.$route.params.id == undefined) {
          this.taskidcard = this.taskid;
        } else {
          this.taskidcard = this.$route.params.id;
        }
        if(this.formInline.handletime) {
          this.handle = Math.round(this.formInline.handletime.getTime() / 1000); //toLocaleDateString Math.round(this.formInline.handletime.getTime()/1000))
        } else {
          this.handle = this.formInline.handletime = "";
        }
        if(this.formInline.starttime) {
          this.starttime = Math.round(this.formInline.starttime.getTime() / 1000); //toLocaleDateString  this.formInline.starttime.getTime()
        } else {
          this.starttime = this.formInline.starttime = "";
        }
        if(this.formInline.endtime) {
          this.endtime = Math.round(this.formInline.endtime.getTime() / 1000); //toLocaleDateString this.formInline.endtime.getTime()
        } else {
          this.endtime = this.formInline.endtime = "";
        }
        this.chaxun(this.currentPage, this.pagesize);
      },
      //    查询封装函数
      chaxun(currentpage, pagesize) {
        this.i = 1;
        QueryTasks(this.formInline.speaker, this.taskidcard, this.formInline.keyword, this.formInline.gender, this.formInline.language, this.formInline.taskname, this.formInline.address, this.handle, this.starttime, this.endtime, currentpage, pagesize).then((res) => {
          if(res.data.ret == 200) {
            this.tableData = res.data.data;
            this.totalCount = res.data.totalcount;
            this.func(this.tableData);
            if(this.totalCount == 0) {
              this.fenye = false;
              this.kong = true;
            } else {
              this.fenye = true;
              this.kong = false;
            }
          }
          if(res.data.ret == 404) {
            // this.$message.error(res.data.msg);
            this.tableData = "";
            this.fenye = false;
            this.kong = true;
          }
        })
      }
    },
    data() {
      return {
        textpath: '',
        https: process.env.BASE_API,
        keyword: [],
        keywordname: '',
        mas: false,
        audiobound:false,
        textall: '',
        srcc:'',
        masker: false,
        kong: false,
        taskidcard: '',
        handle: '',
        starttime: '',
        endtime: '',
        i: 0,
        fenye: false,
        currentPage: 1,
        totalCount: 0,
        pagesize: 10,
        ResponseStatus: '执行中',
        nons: false,
        taskid: '',
        formInline: {
          speaker: '',
          keyword: '',
          gender: '',
          language: '',
          starttime: '',
          endtime: '',
          taskname: '',
          address: '',
          handletime: ''
        },
        tableData: []
      }
    }
  }
</script>