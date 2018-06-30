<style scoped>
  .tasktop {
    padding: 10px;
  }
  
  .taskmid {
    padding: 10px;
    /*border: 1px solid red;*/
  }
  .taskmid>.tasktable {
    width: 100%;
    margin: 0 auto;
    text-align: left;
    /*border: 1px solid red;*/
  }
  .taskmid>.tasktable>tr {
    border: 1px solid #e3e3e3;
  }
  .taskmid>.tasktable>tr>th {
    border: 1px solid #e3e3e3;
    color: #909399;
    /*background-color: #f3f3f3;*/
    font-size: 14px;
    font-weight: 600;
    padding: 10px;
  }
  .taskmid>.tasktable>tr>td {
    border: 1px solid #e3e3e3;
    padding: 10px;
  }
  .mask{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .mask>.mask_new_task{
    text-align: center;
    width: 50%;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -176px;
    margin-left: -28.5%;
    padding: 25px 50px;
    background-color: white;
    overflow: hidden;
    border-radius: 9px;
  }
  .mask>.show_taskadd{
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
    .mask>.Alert{
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
  .mask>.Alert>h2{
    font-size: 14px;
    font-family: "微软雅黑";
    color: green;
    margin: 20px 0;
  }
  .mask_new_task>.task_left{
    /*float: left;*/
    /*width: 50%;*/
  }
  .mask_new_task>.task_right{
    /*float: right;
    width: 45%;*/
    overflow: auto;
    height: 500px;
  }
  .renwu{
    float: right;
    margin: 0 10px;
  }
  .wei{
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #6F7180;
    border-bottom: 1px solid #bebebe;
    padding: 15px 0;
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
</style>
<style>
  .el-form-item__content{
    margin: 0;
  }
</style>
<style>
  .el-upload-list {
    margin: 0;
    padding: 0;
    list-style: none;
    height: 211px;
    overflow-y: auto;
  }
</style>
<template>
  <div class="task">
    <Breadcrumb>
      <span slot="one">任务管理</span>
      <span slot="two">任务状态管理</span>
    </Breadcrumb>
    <div class="tasktop">
      <el-form :inline="true" :model="tasksearch" class="demo-form-inline" size="mini">
        <el-form-item label="任务名称">
          <el-input v-model="tasksearch.taskname" placeholder="任务名称"></el-input>
        </el-form-item>
        <!--<el-form-item label="任务编号">
          <el-input v-model="tasksearch.tasknum" placeholder="任务编号"></el-input>
        </el-form-item>-->
        <el-form-item label="任务类别">
          <el-select v-model="tasksearch.tasktype" placeholder="任务类别">
            <el-option label="声纹" value="1"></el-option>
            <el-option label="语种" value="2"></el-option>
            <el-option label="性别" value="3"></el-option>
            <el-option label="关键词" value="4"></el-option>
            <el-option label="增强" value="5"></el-option>
            <el-option label="清洗" value="6"></el-option>
            <el-option label="全部" value=""></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="执行状态">
          <el-select v-model="tasksearch.taskstatus" placeholder="执行状态">
            <el-option label="处理中" value="1"></el-option>
            <el-option label="已完成" value="2"></el-option>
            <el-option label="全部" value=""></el-option>
          </el-select>
        </el-form-item>
        <!--<el-form-item label="操作人">
          <el-input v-model="tasksearch.handler" placeholder="操作人"></el-input>
        </el-form-item>-->
        <el-form-item label="操作时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="tasksearch.starttime" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2" style="text-align: center;">-</el-col>
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="tasksearch.endtime" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="seek" icon="el-icon-search">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="newTask">新建任务</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="mask" v-show="show_task">
      <div class="mask_new_task" v-show="show_task_childen">
        <div class="task_left">
          <h1>新建任务</h1>
          <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="任务名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <!--<el-form-item label="任务编号">
    <el-input v-model="form.tasknum" disabled></el-input>
  </el-form-item>-->
  <el-form-item label="任务类别">
    <template>
      <el-checkbox label="语音增强" v-model="form.enhance" true-label="1" false-label="0"></el-checkbox>
      <el-checkbox label="语音清洗" v-model="form.cleaning" true-label="1" false-label="0"></el-checkbox>
      <el-checkbox label="声纹识别" v-model="form.sr" true-label="1" false-label="0"></el-checkbox>
      <el-checkbox label="关键词识别" v-model="form.ks" true-label="1" false-label="0"></el-checkbox>
      <el-checkbox label="语种识别" v-model="form.li" true-label="1" false-label="0"></el-checkbox>
      <el-checkbox label="性别识别" v-model="form.gi" true-label="1" false-label="0"></el-checkbox>
    </template>
  </el-form-item>
  <!--<span>{{form.enhance}}</span>
  <span>{{form.cleaning}}</span>
  <span>{{form.sr}}</span>
  <span>{{form.ks}}</span>
  <span>{{form.li}}</span>
  <span>{{form.gi}}</span>-->
  <el-form-item>
    <el-button type="primary" @click="onSubmit">创建</el-button>
    <el-button @click="conceal" style="margin-left: 10px !important;">取消</el-button>
  </el-form-item>
</el-form>
        </div>
      </div>
      <div class="show_taskadd" v-show="show_task_add">
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
accept=".wav,.mp3,.flac,.ape"
multiple
:auto-upload="false">
<el-button slot="trigger" size="small" type="primary" @click="dianjia">选取文件</el-button>
<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
<el-button size="small" type="primary" @click="Remote" v-show="dianji1">远端上传</el-button>
<div slot="tip" class="el-upload__tip">只能上传.WAV,.MP3,.FLAC,.APE文件</div>
</el-upload>
        </div>
        <div class="shangR" v-show="xiaoshi">
          <h2>请选择文件夹</h2>
          <!--<form>--><!-- action="" method="post"  for="i.type"-->
            <ul>
              <div class="asdd" v-for="(i,key) in addfiles" @click="cName(key)">
              	<li><!-- @click="cName(key)"-->
              	  <input type="radio" name="fils" :id="key" /> <label :for="key">{{i.name}}</label>
              	  <br />
              	</li>
              </div>
            	
            	<div style="text-align: right;padding-top: 5px;">
<el-button type="submit" size="small" @click="ftotfiles()">确认上传</el-button>
            	</div>
            </ul>
          	<!--<input type="submit" value=""/>-->
          <!--</form>-->
        </div>
      </div>
    </div>
    <div class="taskmid">
        <table class="tasktable">
        	<tr><th>任务名称</th><th>任务类别</th><th>执行状态</th><!--<th>操作人</th>--><th>操作时间</th><th>操作</th></tr>
        	<tr v-for="i in tableData">
          	<td>
          	  {{i.taskname}}
          	</td>
          	<td>
          	  <span v-if="i.enhance==1">语音增强</span>
          	  <span v-if="i.cleaning==1">语音清洗</span>
          	  <span v-if="i.sr==1">声纹识别</span>
          	  <span v-if="i.ks==1">关键词识别</span>
          	  <span v-if="i.li==1">语种识别</span>
          	  <span v-if="i.gi==1">性别识别</span>
          	</td>
          	<td>
          	  <span v-if="i.status==0">处理中</span>
          	  <span v-if="i.status==1">已完成</span>
          	</td>
          	<!--<td> {{i.taskname}} </td>-->
          	<td> {{i.handletime}} </td>
          	<td>
          	  <router-link :to="'/result/'+i.taskid">
                <el-button type="text" title="查看">
                  <i class="el-icon-view"></i>
                </el-button>
              </router-link>
          	</td>
        	</tr>
        </table>
       <div class="wei" v-show="kong">暂无数据</div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  import { newtaskadd, tasklist, taskStart, result, files, ftot, search } from '@/api/newtask'
  export default {
    components: {
      Breadcrumb
    },
    //  计算属性
    computed:{
      UpData() {
        return {
          taskid:this.taskid
        }
      }
    },
//  watch(){
//    this.xiao();
//  },
//  filters:{
//    myCurrency:function(myInput){
//    return //处理后的数据
//    }
//  },
    created(){
//    页面所有的任务数据
      this.loading();
      console.log("          ◥◤~~~~◥◤\n            ┃ 　　   ┃\n             ≡━ ﹏ ━≡\n            ┗━━┳∞┳━━┛\n    _..,------┏┫　┣┓------,.._\n   ;'-.,------------------,.-';\n   |                          |\n   、                         ;\n    |\                        /\n  .-' `,._________________.,' '-.\n(       '----------------'       )\n `-=..________________________..-\n\n快到碗里来！简历请投放 m17600534443@163.com");
    },
    methods: {
      seek(){
        let stt;
        let edt
        if(this.tasksearch.starttime){
          stt = this.tasksearch.starttime.toLocaleDateString();
        }else{
          stt = this.tasksearch.starttime = "";
        }
        if(this.tasksearch.endtime){
          edt = this.tasksearch.endtime.toLocaleDateString();
        }else{
          edt = this.tasksearch.endtime = "";
        }
console.log(this.tasksearch.taskname,this.tasksearch.tasknum,this.tasksearch.tasktype,this.tasksearch.taskstatus,this.tasksearch.handler,stt,edt);
        search(this.tasksearch.taskname,this.tasksearch.tasknum,this.tasksearch.tasktype,this.tasksearch.taskstatus,this.tasksearch.handler,stt,edt).then((res)=>{
          console.log(res);
          this.tableData = res.data.data;
        })
      },
//    获取页面所有的任务数据
      loading(){
        tasklist().then((res)=>{
//        console.log(res.data);
          this.tableData = res.data.data;
          if(res.data.data==''){
            this.kong=true;
          }else{
            this.kong=false;
          }
        })
      },
//    点击远端上传文件按钮
      Remote(){
        files().then((res)=>{
          console.log(res);
          if(res.data.ret == 404){
            this.$message.error("未找到文件夹");
          }else{
            this.xiaoshi1 = false;
            this.xiaoshi = true;
            this.form.enhance = 0;this.form.cleaning = 0;
            this.form.sr = 0;this.form.ks = 0;this.form.li = 0;
            this.form.name = '';this.form.tasknum = '';this.form.gi = 0;
          }
        })
        
      },
      cName(index){
        this.inde = index+1;
        console.log(this.inde);
      },
//    确认上传语音
      ftotfiles(){
        console.log(typeof(this.inde));
        console.log(this.inde);
//      console.log(this.addfiles[this.inde].name);
        if(this.inde == ""){
          this.$message.error("请选择文件夹进行上传");
        }else{
          this.show_task_add = false;
          this.xiaoshi1 = true;
          this.dianji1 = true;
          this.xiaoshi = false;
          this.show_task=false;
          this.$message.success("正在上传文件");
          ftot(this.addfiles[this.inde-1].name,this.taskid).then((res)=>{
            console.log(res);
            
            if(res.data.ret == 200){
//            this.$message.success("上传成功");
              taskStart(this.taskid).then((res)=>{
//              console.log(res.data);
                this.$message.success("上传成功,正在开始任务");
              })
            }
          })
        }
          
      },
//    点击创建任务
      onSubmit() {
        files().then((res)=>{
          console.log(res);
          this.addfiles = res.data.data;
          console.log(this.addfiles)
        })
        if(this.form.enhance ==1 || this.form.cleaning == 1 || this.form.sr == 1 || this.form.ks == 1 || this.form.li == 1 || this.form.gi == 1){
          newtaskadd(this.form.name,this.form.tasknum,this.form.enhance,this.form.cleaning,this.form.sr,this.form.ks,this.form.li,this.form.gi).then((res)=>{
            if(res.data.ret == 200){
              this.taskid = res.data.data.taskid;
              console.log(this.taskid);
              this.$message.success("创建成功");
              this.show_task_childen=false;
              this.show_task_add=true;
//            tasklist().then((res)=>{
//              console.log(res.data);
//              this.tableData = res.data.data;
//              if(res.data.data==''){
//                this.kong=true;
//              }else{
//                this.kong=false;
//              }
//            })
            }if(res.data.ret == 405){
              this.$message.error(res.data.msg);
            }
          })
        }else{
          this.$message.error("请至少选择一个任务类别");
        }
      },
      dianjia(){
        this.dianji1 = false;
      },
//    任务列表查看按钮
      handleClick(row) {
        console.log(row);
      },
//    点击显示创建新任务蒙板
      newTask(){
        this.show_task = true; 
        this.show_task_childen = true;
        var myDate = new Date();
//      console.log(myDate);
        var y = myDate.getFullYear().toString(),//年份
        m = ("0" + (myDate.getMonth() + 1)).slice(-2).toString(),//月份
        d = myDate.getDate().toString(),//日
        h = myDate.getHours().toString(),//小时
        fen = myDate.getMinutes().toString(),//分钟
        s = myDate.getMilliseconds().toString();//毫秒
        var mydate = y + m + d + h + fen + s;
        var mydates = y + "年" + m + "月" + d + "日" + h + "时" + fen + "分";
        console.log(mydates);
//      console.log(mydate);
        this.form.tasknum = mydate;
        this.form.name = mydate;
      },
//    点击隐藏蒙板
      conceal(){
        this.show_task = false;
        this.form.enhance = 0;this.form.cleaning = 0;
        this.form.sr = 0;this.form.ks = 0;this.form.li = 0;
        this.form.name = '';this.form.tasknum = '';this.form.gi = 0;
      },
//    上传语音
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
//      console.log(file, fileList);
      },
      handlePreview(file) {
//      console.log(file);
      },
//    上传成功时的钩子函数
      handleSuccess(response, file, fileList){
        this.i+=1;
//      console.log(this.i);
        this.taskid = response.data.taskid;
        this.taskfile_response = response.ret;
        if(fileList.length == this.i){
//        所有文件上传成功时开始任务
          taskStart(this.taskid).then((res)=>{
//          console.log(res.data);
            this.$message.success("上传成功，正在开始任务");
            this.show_task=false;
            this.show_task_add=false;
            this.dianji1 = true;
            this.i = 0;
            fileList.splice(0,fileList.length);
          })
          tasklist().then((res)=>{
  //        console.log(res.data);
            this.tableData = res.data.data;
            if(res.data.data==''){
              this.kong=true;
            }else{
              this.kong=false;
            }
          })
          this.form.enhance = 0;this.form.cleaning = 0;
          this.form.sr = 0;this.form.ks = 0;this.form.li = 0;
          this.form.name = '';this.form.tasknum = '';this.form.gi = 0;
        }
        
      },
//    文件上传失败时的回调函数
      handleError(err, file, fileList){ 
//      console.log(this.type);
        this.i = 0;
      },
      addfile(file, fileList){
        console.log(file, fileList);
      }
    },
    data() {
      return {
        addfiles:[],
        inde:"",
        i:0,
        dianji1:true,
        xiaoshi1:true,
        xiaoshi:false,
        kong:false,
        taskfile_response:"",
        tasklists:[],
        show_task:false,
        show_task_childen:false,
        show_task_add:false,
        suc:false,
        taskid:"",
        tasksearch: {
          taskname:'',
          tasknum:'',
          tasktype:'',
          taskstatus:'',
          handler:'',
          starttime:'',
          endtime:''
        },
        fileList: [
//      {name: 'food.jpeg',url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
//      }, {name: 'food2.jpeg',url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
//      }
        ],
        tableData: [
{
  date: '2016-05-02',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1518 弄'
}, {
  date: '2016-05-04',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1517 弄'
}, {
  date: '2016-05-01',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1519 弄'
}, {
  date: '2016-05-03',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1516 弄'
}
        ],
        form: {
          name: '',
          tasknum: '',
          enhance:0, 
          cleaning:0, 
          sr:0, 
          ks:0, 
          li:0, 
          gi:0
        }
      }
    }
    
  }
</script>