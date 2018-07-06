<style scoped>
  .tasktop {
    padding: 10px;
    padding-bottom: 0;
  }
  .taskmid {
    padding: 10px;
    padding-top: 0;
  }
  .atiao{
    font-size: 12px;
    color: #409EFF;
    text-decoration: none;
    /*display: block;*/
  }
  .atiao:hover{
    color: #094482;
  }
  .non:hover{
    color: #409EFF;
  }
  .non{
    color: black;
  }
  .el-table td{
    padding: 0 !important;
  }
  .el-popover__reference{
    margin: 5px 0;
  }
  .taskmid>table{
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
  .sps{
    border: 1px solid rgba(64,158,255,.2);
    background-color: rgba(64,158,255,.1);
    color: #409EFF;
    border-radius: 3px;
    padding: 5px;
    display: inline-block;
    margin: 3px 0;
  }
  .wei{
    width: 99.8%;
    text-align: center;
    font-size: 16px;
    color: #6F7180;
    border: 1px solid #e3e3e3;
    border-top: 0;
    padding: 15px 0;
  }
  .mrsk{
    width: 100%;
    height: 100%;
    background-color: #00000080;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
  }
  .box{
    width: 70%;
    position: fixed;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 20px;
    border-radius: 9px;
  }
  .box>h2{
    text-align: center;
    margin-bottom: 10px;
  }
  .box1{
    width: 70%;
    position: fixed;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 25px;
    border-radius: 9px;
    line-height: 25px;
  }
  .box1>h2{
    text-align: center;
    margin-bottom: 5px;
  }
  .box1>div{
    border: 1px solid #000;
    padding: 10px;
    border-radius: 5px;
  }
  .tasktable {
    width: 100%;
    margin: 0 auto;
    text-align: left;
    /*border: 1px solid red;*/
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
  .details{
    font-size: 12px;
    color: #6eb5ff;
    line-height: 0;
  }
  .details:hover{
    color: #094482;
  }
  .boxs{
    float: right;
    font-size: 14px;
    border: 1px solid gray;
    line-height: 7px;
    height: 10px;
    font-weight: 500;
    display: inline-block;
    padding:5px 6px;
  }
  .boxs:hover{
    border-color: #ff4b4b;
    background-color: #ffd9d9;
    color: #ad0000;
  }
</style>
<style>
	.el-table td{
    padding: 0 !important;
  }
</style>
<template>
  <div class="task">
    <Breadcrumb>
      <span slot="one">识别结果管理</span>
      <span slot="two">识别任务管理</span>
    </Breadcrumb>
    <div class="tasktop">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        <el-form-item label="目标姓名">
          <el-input v-model="formInline.speaker" placeholder="目标姓名"></el-input>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input v-model="formInline.keyword" placeholder="关键词"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formInline.gender" placeholder="性别">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
            <el-option label="全部" value=""></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="语种">
          <el-input v-model="formInline.language" placeholder="语种"></el-input>
        </el-form-item>
        <!--<el-form-item label="操作人">
          <el-input v-model="formInline.user" placeholder="操作人"></el-input>
        </el-form-item>-->
        <el-form-item label="目标时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="formInline.starttime" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2" style="text-align: center;">-</el-col>
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="formInline.endtime" style="width: 100%;"></el-date-picker>
          </el-col>
          <!--<el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="formInline.endtime" style="width: 100%;"></el-time-picker>
          </el-col>-->
        </el-form-item>
        <el-form-item label="任务名称">
          <el-input v-model="formInline.taskname" placeholder="任务名称"></el-input>
        </el-form-item>
        <el-form-item label="地点">
          <el-input v-model="formInline.address" placeholder="地点"></el-input>
        </el-form-item>
        <el-form-item label="操作时间">
          <el-col>
            <el-date-picker type="date" placeholder="选择日期" v-model="formInline.handletime" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
        </el-form-item><!-- icon="el-icon-search"-->
      </el-form>
    </div>
    <div class="taskmid">
      <table border="1">
      	<tr>
      	  <th>任务名称</th>
      	  <th>文件</th>
      	  <th>目标姓名</th>
      	  <th>性别</th>
      	  <th>语种</th>
      	  <th>语言脚本</th>
      	  <th>关键字</th>
      	  <th>增强文件</th>
      	  <th>清洗文件</th>
      	  <th>索引文件</th>
      	  <th>有效时长</th>
      	  <th>总时长</th>
      	  <th>操作时间</th>
      	  <th>状态</th>
      	</tr>
      	<tr v-for="(i,key) in tableData">
      	  <td>{{i.taskname}}
      	    <!--<span v-if="i.taskname == string">{{ResponseStatus}}</span>-->
      	  </td>
      	  <td><span class="sps" :title="i.speechname">WAV</span></td>
      	  <td>{{i.speaker}}
      	    <!--<span v-if="i.speaker == string">{{ResponseStatus}}</span>-->
      	  </td>
      	  <td>{{i.gender}}
      	    <!--<span v-if="i.gender == string">{{ResponseStatus}}</span>-->
      	  </td>
      	  <td>{{i.language}}
      	    <!--<span v-if="i.language == string">{{ResponseStatus}}</span>-->
      	  </td>
      	  <td><i class="fa fa-key fa-lg details" @click="antistop(i.dictationtext)">详情</i><!--{{i.dictationtext}}-->
      	    <a title="点击下载" class="atiao" target="_blank" :href="'http://192.168.1.118/task/download?filepath='+i.dictationpath">下载</a>
      	     <!--<span v-if="i.date == string">{{ResponseStatus}}</span>-->
      	  </td>
      	  <td><i class="fa fa-key fa-lg details" v-if="i.keyword != ''" @click="details(i)">详情</i><!--{{i.dictationtext}}-->
      	     <!--<span v-if="i.date == string">{{ResponseStatus}}</span>-->
      	  </td>
      	  <td>
      	    <a title="点击下载" class="atiao" target="_blank" :href="'http://192.168.1.118/task/download?filepath='+i.enhance">
      	      {{i.enhance_name}}
      	    </a>
      	    <!--<span v-if="i.enhance_name == string">{{ResponseStatus}}</span>-->
      	  </td>
      	  <td>
      	    <a title="点击下载" class="atiao" target="_blank" :href="'http://192.168.1.118/task/download?filepath='+i.textfird_path">{{i.textfird_path_name}}</a>
      	    <!--<span class="atiao non" v-if="i.trs_path_name !=string"> |</span>-->
      	    <!--<span class="atiao non" v-if="i.trs_path_name ==string">{{ResponseStatus}}</span>-->
            <a title="点击下载" class="atiao" target="_blank" :href="'http://192.168.1.118/task/download?filepath='+i.trs_path">{{i.trs_path_name}}</a>
      	  </td>
      	  <td>
            <a title="点击下载" class="atiao" target="_blank" :href="'http://192.168.1.118/task/download?filepath='+i.trs_indexing">{{i.trs_indexing_name}}</a><!---->
      	  </td>
      	  <td>{{i.valid_duration}}
      	    <!--<span v-if="i.valid_duration == string">{{ResponseStatus}}</span>-->
      	  </td>
      	  <td>{{i.autdio_duration}}
      	    <!--<span v-if="i.autdio_duration == string">{{ResponseStatus}}</span>-->
      	  </td>
      	  <td>{{i.finishtime}}
      	    <!--<span v-if="i.finishtime == string">{{ResponseStatus}}</span>-->
      	  </td>
      	  <td><!--{{i.status}}-->
      	      <span v-if="i.status==0">等待中</span>
              <span v-if="i.status==1">已开始</span>
              <span v-if="i.status==2">预处理</span>
              <span v-if="i.status==3">处理中</span>
              <span v-if="i.status==4">已完成</span>
      	  </td>
      	  
      	</tr>
      </table>
      <!--听写弹框-->
      <div class="mrsk" v-show="mas" @click="show">
        <div class="box1" @click.stop>
        	<h2>我是听写弹窗<span @click="show" class="boxs">x</span></h2>
        	<div>
        	  {{textall}}
        	</div>
        </div>
      </div>
      <!--关键词弹框   语言脚本-->
      <div class="mrsk" v-show="masker">
        <div class="box">
        	<h2>{{keywordname}}<span @click="show" class="boxs">x</span></h2>
        	<table border="1" class="tasktable">
        		<tr><th style="width: 100px;">关键词</th><th>出现时间段(s)</th></tr>
        		<tr v-for="i in keyword">
        		  <td style="width: 100px;">{{i.keyword}}</td>
        		  <td>{{i.offtime}}</td>
        		</tr>
        	</table>
        </div>
      </div>
      <div class="wei" v-show="kong">暂无数据</div>
      <el-pagination
          v-show="fenye"
          @current-change="handleCurrentChange"
          @prev-click="handlePrevChange"
          @next-click="handleNextChange"
          @size-change="handleSizeChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination><!-- 每页显示数据量变更 -->
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  import { result, AllTasks, QueryTasks, download } from '@/api/newtask'//
  export default {
    components: {
      Breadcrumb
    },
    created(){
      //console.log(this.$route.params.id);
      this.initialize();
    },
    methods: {
//    关键字显示隐藏
      details(i){
        this.masker = true;
        this.keyword = i.keyword;
        console.log(i);
        this.keywordname = i.taskname;
        console.log(this.keyword);
      },
//    点击隐藏
      show(){
        this.masker = false;
        this.mas = false;
      },
//    关键词
      antistop(text){
        this.mas = true;
        this.textall = text;
      },
//每页显示数据量变更
handleSizeChange: function(val) {
  this.pagesize = val;
  if(this.i == 0){
    this.fund();
  }else{
    this.chaxun(this.currentPage,this.pagesize);
  }
},

//页码变更
handleCurrentChange: function(val) {
  this.currentPage = val;
  if(this.i == 0){
    this.fund();
  }else{
    this.chaxun(this.currentPage,this.pagesize);
  }
},  
//上一页
handlePrevChange:function(){
  if(this.i == 0){
    this.fund();
  }else{
    this.chaxun(this.currentPage,this.pagesize);
  }
},
//下一页
handleNextChange:function(){
  if(this.i == 0){
    this.fund();
  }else{
    this.chaxun(this.currentPage,this.pagesize);
  }
    
},
//    页面初始化
      initialize(){
        this.i = 0;
        this.fund();
        
      },
//    初始化页面
      fund(){
        if(this.$route.params.id != undefined){
          this.alldata(this.$route.params.id, this.currentPage, this.pagesize);
      }
        if(this.$route.params.id == undefined){
          this.starts();
        }
      },
//    刷新页面显示所有列表任务
      starts(){
        this.alldata(this.taskid, this.currentPage, this.pagesize);
      },
//    调用接口显示数据封装为函数
      alldata(Taskid, CurrentPage, PageSize){
        AllTasks(Taskid, CurrentPage, PageSize).then((res)=>{
          if(res.data.ret == 200){
            console.log(res.data);
            this.tableData = res.data.data;
            this.totalCount = res.data.totalcount;
            this.kong = false;
            if(this.tableData){
              this.fenye = true;
            }
            this.func(this.tableData);
          }if(res.data.ret == 404){
            this.kong = true;
            this.totalCount = res.data.totalcount;
          }
        })
//      AllTasks(this.taskid, this.currentPage).then((res)=>{
//        if(res.data.ret == 200){
////          this.$message.success("");
//          this.tableData = res.data.data;
//          this.totalCount = res.data.totalcount;
//          this.func(this.tableData);
//        }if(res.data.ret == 404){
//          this.totalCount = res.data.totalcount;
////          this.$message.error("没有数据");
//        }
//      })
      },
      func(inded){
        if(inded){
        for(var i=0; i<inded.length; i++){
              if(inded[i].enhance_name != undefined){
var index = inded[i].enhance_name.lastIndexOf("\.");
inded[i].enhance_name = inded[i].enhance_name .substring(index + 1, inded[i].enhance_name .length).toLocaleUpperCase();
              }
              if(inded[i].textfird_path_name != undefined){
var index = inded[i].textfird_path_name.lastIndexOf("\.");
inded[i].textfird_path_name = inded[i].textfird_path_name .substring(index + 1, inded[i].textfird_path_name .length);
              }
              if(inded[i].trs_path_name != undefined){
var index = inded[i].trs_path_name.lastIndexOf("\.");
inded[i].trs_path_name = inded[i].trs_path_name .substring(index + 1, inded[i].trs_path_name.length).toLocaleUpperCase();
              }
              if(inded[i].trs_indexing_name != undefined){
var index = inded[i].trs_indexing_name.lastIndexOf("\.");
inded[i].trs_indexing_name = inded[i].trs_indexing_name .substring(index + 1, inded[i].trs_indexing_name .length).toLocaleUpperCase();
              }
              if(inded[i].status == "4"){
                this.ResponseStatus = "未定制";
              }
            }
        }
      },
//    查询
      onSubmit() {
        //console.log('submit!');
        this.currentPage = 1;
        if(this.$route.params.id == undefined){
          this.taskidcard = this.taskid;
        }else{
          this.taskidcard = this.$route.params.id;
        }
        if(this.formInline.handletime){
          this.handle = this.formInline.handletime.toLocaleDateString();
        }else{
          this.handle = this.formInline.handletime = "";
        }
        if(this.formInline.starttime){
          this.starttime = this.formInline.starttime.toLocaleDateString();
        }else{
          this.starttime = this.formInline.starttime = "";
        }
        if(this.formInline.endtime){
          this.endtime = this.formInline.endtime.toLocaleDateString();
        }else{
          this.endtime = this.formInline.endtime = "";
        }
          this.chaxun(this.currentPage,this.pagesize);
      },
//    查询封装函数
      chaxun(currentpage, pagesize){
        this.i = 1;
        QueryTasks(this.formInline.speaker,this.taskidcard,this.formInline.keyword,this.formInline.gender,this.formInline.language,this.starttime,this.endtime,this.formInline.taskname,this.formInline.address,this.handle,currentpage, pagesize ).then((res)=>{
          if(res.data.ret == 200){
            this.tableData = res.data.data;
            this.totalCount = res.data.totalcount;
            this.kong = false;
            if(this.tableData){
              this.fenye = true;
            }
            this.func(this.tableData);
          }else{
            this.tableData = [];
            this.fenye = false;
            this.kong = true;
            this.totalCount = res.data.totalcount;
          }
            
        })
      }
    },
    data() {
      return {
        keyword:[],
        keywordname:'',
        mas:false,
        textall:'',
        masker:false,
        kong:false,
        taskidcard:'',
        handle:'',
        starttime:'',
        endtime:'',
        i:0,
        fenye:false,
        currentPage:1,
        totalCount: 0,
        pagesize: 10,
        ResponseStatus:'执行中',
        nons:false,
        taskid:'',
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