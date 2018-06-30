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
    color: #0c5eb3;
  }
  .non:hover{
    color: #409EFF;
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
        </el-form-item>
      </el-form>
    </div>
    <div class="taskmid">
      <!--<div class="midtop">
        <el-button type="primary">新建任务</el-button>
      </div>-->
<!--
autdio_duration:"599.400"
speaker:"dennis"
speechname:"adadad.wav"
taskid:135
valid_duration:"178.630"
-->
      <div class="taskform">
        <el-table  border :data="tableData" style="width: 100%">
          <el-table-column prop="taskname" label="任务名称"><!-- width="100"-->
          </el-table-column>
          <el-table-column label="文件"><!-- width="180"-->
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>{{ scope.row.speechname }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">WAV</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="speaker" label="目标姓名"><!-- width="120"-->
          </el-table-column>
          <el-table-column prop="gender" label="性别">
          </el-table-column>
          <el-table-column prop="language" label="语种">
          </el-table-column>
          <el-table-column prop="date" label="关键词">
          </el-table-column>
          <el-table-column label="增强文件">
            <template slot-scope="scope">
              <a title="点击下载" class="atiao" target="_blank" :href="'http://192.168.1.118/task/download?filepath='+scope.row.enhance">{{scope.row.enhance_name}}</a>
              <!--<el-button type="text" size="small" @click="loadin(scope.row.enhance)">{{scope.row.enhance_name}}</el-button>-->
            </template>
          </el-table-column>
          <el-table-column prop="textfird_path_name" label="清洗文件"><!--trs_path_name-->
            <template slot-scope="scope">
              <a title="点击下载" class="atiao" target="_blank" :href="'http://192.168.1.118/task/download?filepath='+scope.row.textfird_path">{{scope.row.textfird_path_name}}</a><span class="atiao non"> |</span>
              <a title="点击下载" class="atiao" target="_blank" :href="'http://192.168.1.118/task/download?filepath='+scope.row.trs_path">{{scope.row.trs_path_name}}</a>
              <!--<el-button type="text" size="small" @click="loadin(scope.row.textfird_path)">{{scope.row.textfird_path_name}}</el-button>
              <el-button type="text" size="small" @click="loadin(scope.row.trs_path)">{{scope.row.trs_path_name}}</el-button>-->
            </template>
          </el-table-column>
          <el-table-column prop="valid_duration" label="有效时长">
          </el-table-column>
          <el-table-column prop="autdio_duration" label="总时长">
          </el-table-column>
          <!--<el-table-column prop="name" label="操作人">--><!-- width="120"-->
          <!--</el-table-column>-->
          <el-table-column prop="finishtime" label="操作时间"><!-- width="120"-->
          </el-table-column>
          <el-table-column label="状态"><!-- width="120"-->
            <template slot-scope="scope">
              <span v-if="scope.row.status==0">等待中</span>
              <span v-if="scope.row.status==1">已开始</span>
              <span v-if="scope.row.status==2">预处理</span>
              <span v-if="scope.row.status==3">处理中</span>
              <span v-if="scope.row.status==4">已完成</span>
            </template>
          </el-table-column>
          <!--<el-table-column prop="" label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>-->
        </el-table>
      </div>
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
      if(this.$route.params.id != undefined){
        result(this.$route.params.id).then((res)=>{
          this.tableData = res.data.data;
          this.func(this.tableData);
        })
      }
        if(this.$route.params.id == undefined){
          this.starts();
        }
      
    },
//  filters: {
//    capitalize: function (value) {
//      return value.toLocaleUpperCase()
//    }
//  },
    methods: {
//    点击下载文件
      loadin(trs_path){
        //console.log(typeof(trs_path));
        //console.log(trs_path);
        download(trs_path).then((res)=>{
          //console.log(res);
        })
      },
//    刷新页面显示所有列表任务
      starts(){
        AllTasks(this.taskid).then((res)=>{
          if(res.data.ret == 200){
//          this.$message.success("");
            this.tableData = res.data.data;
            this.func(this.tableData);
          }if(res.data.ret == 404){
//          this.$message.error("没有数据");
          }
        })
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
inded[i].trs_path_name = inded[i].trs_path_name .substring(index + 1, inded[i].trs_path_name .length).toLocaleUpperCase();
              }
            }
        
        }
      },
//    查询
      onSubmit() {
        //console.log('submit!');
        let taskidcard;
        let handle;
        let starttime
        let endtime
        if(this.$route.params.id == undefined){
          taskidcard = this.taskid;
        }else{
          taskidcard = this.$route.params.id;
        }
//      this.times(handle,this.formInline.handletime);
//      this.times(starttime,this.formInline.starttime);
//      this.times(endtime,this.formInline.endtime);
        if(this.formInline.handletime){
          handle = this.formInline.handletime.toLocaleDateString();
//        return i
        }else{
          handle = this.formInline.handletime = "";
//        return i
        }
        if(this.formInline.starttime){
          starttime = this.formInline.starttime.toLocaleDateString();
//        return i
        }else{
          starttime = this.formInline.starttime = "";
//        return i
        }
        if(this.formInline.endtime){
          endtime = this.formInline.endtime.toLocaleDateString();
//        return i
        }else{
          endtime = this.formInline.endtime = "";
//        return i
        }
        QueryTasks(this.formInline.speaker,taskidcard,this.formInline.keyword,this.formInline.gender,this.formInline.language,starttime,endtime,this.formInline.taskname,this.formInline.address,handle).then((res)=>{
          //console.log(res);
          //console.log(handle,starttime,endtime);
          this.tableData = res.data.data;
          this.func(this.tableData);
        })
      },
      times(i,index){
        if(index){
          i = index.toLocaleDateString();
          return i
        }else{
          i = index = "";
          return i
        }
      },
      handleClick(scope) {
        //console.log(scope.row.speechname);
      }
    },
    data() {
      return {
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
        tableData: [
//      {
//        date: '2016-05-02',
//        name: '王小虎',
//        address: '上海市普陀区金沙江路 1518 弄'
//      }, {
//        date: '2016-05-04',
//        name: '王小虎',
//        address: '上海市普陀区金沙江路 1517 弄'
//      }, {
//        date: '2016-05-01',
//        name: '王小虎',
//        address: '上海市普陀区金沙江路 1519 弄'
//      }, {
//        date: '2016-05-03',
//        name: '王小虎',
//        address: '上海市普陀区金沙江路 1516 弄'
//      }
        ]
      }
    }
    
  }
</script>