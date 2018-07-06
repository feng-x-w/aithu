<style scoped>
  .drill {
    box-sizing: border-box;
  }
  
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
    /* height: 100%; */
    top: 50%;
    left: 50%;
    background-color: white;
    margin-top: -17%;
    margin-left: -32%;
    z-index: 120;
    overflow: hidden;
    border-radius: 9px;
    padding: 15px;
  }
  .Nlanguage>.NLG>.left {
    float: left;
    width: 49%;
    text-align: center;
  }
  .Nlanguage>.NLG>.right {
    float: right;
    width: 49%;
  }
  .antistop{
    width: 98%;
    margin: 20px;
    overflow-x: hidden;
  }
  .antistop1{
    float: left;
    /*width: 15px;*/
    padding: 15px;
    border: 1px solid black;
  }
  .antismid{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
  .antismid>p{
    width: 100%;
  }
  .antismid>p>.span1{
    font-size: 16px;
    font-weight: 600;
  }
  .antismid>p>.span2{
    font-size: 12px;
    color: gray;
    margin-left: 15px;
  }
  .ipt{
    margin-top: 5px;
    overflow: hidden;
  }
  .left{
    width: 13%;
    float: left;
  }
  .right{
    width: 78%;
    float: left;
  }
  .btn{
    float: left;
    margin-left: 5px !important;
    width: 6%;
  }
  .list{
    margin: 5px 0;
    /*overflow: hidden;*/
  }
</style>

<template>
  <div class="drill">
    <Breadcrumb>
      <span slot="one">模型管理</span>
      <span slot="two">关键词</span>
    </Breadcrumb>
<div class="drillTop">
      <el-form :inline="true" class="demo-form-inline" size="mini">
        <el-form-item label="搜索关键词">
          <el-input v-model="filterText" placeholder="关键词" ref="type1"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <hr />
    <div class="antistop" >
      <div class="antistop1" v-for="i in datakeyword">
        {{i.keyword}}
      </div>
      <div class="antistop1" v-show="xiao">
        ... ...
      </div>
    </div>
    <hr />
    <div class="antismid">
      <p><span class="span1">添加关键词</span><span class="span2">关键词使用 "," 逗号分割</span></p>
      <div class="ipt">
        <el-form>
          <div class="left">
            <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-edit el-input__icon" v-model="name" clearable required></el-input>
          </div>
          <span style="float: left;">&nbsp;:&nbsp;</span>
          <div class="right">
            <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-edit el-input__icon" v-model="antistop" clearable required></el-input>
          </div>
          <el-button class="btn" size="mini" @click="addAntistop">添加</el-button>
        </el-form>
      </div>
      <div class="ipt list" v-for="i in list">
        <div class="left">
          {{i.name}}
        </div>
        <span style="float: left;">&nbsp;:&nbsp;</span>
        <div class="right">
          {{i.value}}
        </div>
        <el-button class="btn" size="mini" @click="del(i.id)">删除 </el-button><!---->
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  import { antistop, search, groupadd, list, deletes } from '@/api/antistop'
  export default {
    data() {
      return {
        colo:0,
        list:[],
        name:'',
        antistop:'',
        xiao:true,
        filterText:'',
        datakeyword:{}
      }
    },
//  监听
    watch: {
      filterText:function(val){
//      this.$message.success(val);
        if(val != ""){
          search(val).then((res)=>{
            if(res.data.data.length > 60){
              this.datakeyword = res.data.data.splice(0,60);
              this.xiao = true;
            }if(res.data.data.length < 120){
              this.datakeyword = res.data.data;
              this.xiao = false;
            }
          })
        }else{
          this.xiao = true;
          antistop().then((res)=>{
          console.log(res);
          this.datakeyword = res.data.data.splice(0,60);
        })
        }
      }
    },
    created(){
      this.oInit();
      this.lists();
    },
    methods: {
//    添加关键词
      addAntistop(){
        function changedouhao(str){ 
          str=str.replace(/，/ig,','); 
          return str; 
        }
        function unique(arr){
          var res = [];
          for(var i=0; i<arr.length; i++){
            if(res.indexOf(arr[i]) == -1){
             res.push(arr[i]);
            }
          }
          return res;
        }
        let arr = changedouhao(this.antistop).split(',');
        let ArrAy = unique(arr).join(',');
        console.log(ArrAy);
        if(this.name == '' && this.antistop == ''){
          this.$message.error('请将关键词组和关键词填写完整')
        }else{
          groupadd(this.name,ArrAy).then((res)=>{
            console.log(res);
            if(res.data.ret == 200){
              this.$message.success(res.data.msg);
              this.name = "";
              this.antistop = "";
              this.lists();
            }
          })
        }
      },
//    显示关键词列表
      lists(){
        list().then((res)=>{
          console.log(res);
          this.list = res.data.data;
        })
      },
//    删除关键词组
      del(id){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deletes(id).then((res)=>{ 
            if(res.data.ret == 200){
              this.$message.success("删除成功!");
              this.lists();
            }
          })
        }).catch(() => {
          this.$message.info("取消删除!")         
        });
        
      },
//    初始化数据渲染
      oInit(){
        antistop().then((res)=>{
          console.log(res);
          this.datakeyword = res.data.data.splice(0,60);
        })
      }
    },
    components: {
      Breadcrumb
    }
  }
</script>