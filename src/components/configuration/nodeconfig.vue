<style scoped>
  .drillTop {
    margin: 10px;
  }
  .meng{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #00000080;
    left: 0;
    top: 0;
    z-index: 999;
  }
  .tan{
    padding: 20px;
    border-radius: 9px;
    width: 50%;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: white;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  .tan>h2{
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
</style>

<template>
  <div class="drill">
    <Breadcrumb>
      <span slot="one">{{$t('systemConfig.systemconfig')}}</span>
      <!--系统配置-->
      <span slot="two">{{$t('systemConfig.nodeConfig')}}</span>
      <!--节点配置-->
    </Breadcrumb>
    <div class="nodeconfig">
      <div class="taskmid">
        <table>
          <tr>
            <th> {{$t('systemConfig.address')}} </th><!--{{$t('drill.fileName')}} -->
            <!--地址-->
            <th> {{$t('systemConfig.nodeName')}} </th>
            <!--节点名称-->
            <th> {{$t('systemConfig.workState')}} </th>
            <!--工作状态-->
            <!-- <th> sshport </th>
            <th> sshusername </th> -->
            <th> {{$t('systemConfig.state')}} </th>
            <!--状态-->
            <th> {{$t('systemConfig.operation')}} </th>
            <!--操作-->
          </tr>
          <tr v-for="(i,index) in table" :key="index">
            <td> {{i.address}} </td>
            <td> {{i.name}} </td>
            <td>
              <span v-if="i.prestatus == 1 && i.prostatus == 0">{{$t('systemConfig.preprocessDevice')}} </span>
              <!--预处理机-->
              <span v-if="i.prestatus == 1 && i.prostatus == 1">{{$t('systemConfig.twoRole')}} </span>
              <!--预处理机，处理机-->
              <span v-if="i.prestatus == 0 && i.prostatus == 1">{{$t('systemConfig.processDevice')}} </span>
              <!--处理机-->
              <span v-if="i.prestatus == 0 && i.prostatus == 0">{{$t('systemConfig.idle')}} </span>
              <!--该设备暂未工作-->
            </td>
            <!-- <td> {{i.sshport}} </td>
            <td> {{i.sshusername}} </td> -->
            <td> {{i.status}} </td>
            <td>
              <!-- 修改 -->
              <!-- <el-button type="text" @click="amend(i)" title="修改">
                <i class="fa fa-pencil" style="font-size: 20px;"></i>
              </el-button> -->
<el-checkbox :checked="i.prestatus==1?true:false" @change="pre(i)" border>{{$t('systemConfig.preprocess')}} </el-checkbox>
              <!--预处理-->
<el-checkbox :checked="i.prostatus==1?true:false" @change="pro(i)" border>{{$t('systemConfig.process')}} </el-checkbox>
              <!--处理-->

<!-- <el-button v-if="i.prestatus == 1" @click="checebox1(i)" plain>可用预处理</el-button>
<el-button v-else @click="checebox12(i)" plain>不可用预处理</el-button>
<el-button v-if="i.prostatus == 1" @click="checebox2(i)" plain>可用处理</el-button>
<el-button v-else @click="checebox21(i)" plain>不可用处理</el-button> -->
            </td>
          </tr>
        </table>
      </div>
        <!-- <div class="meng" v-show="shows">
            <div class="tan">
              <h2>修改节点配置弹框</h2>
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="sname">
                  <el-input v-model="form.sname"></el-input>
                </el-form-item>
                <el-form-item label="address">
                  <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="role">
                  <el-input v-model="form.role"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button plain type="primary" @click="onSubmit" style="margin-right:15px;">修改</el-button>
                  <el-button type="danger" plain @click="onEsc" style="margin-right:70px;">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
        </div> -->
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  import { nodeConfig, nodeEdit, nodestatus } from '@/api/configuration'
  export default {
    // 页面初始化
    created(){
      this.init();
    },
    //  方法属性
    methods: {
      init(){
        nodeConfig().then((res)=>{
          if(res.data.ret == 200){
            // console.log(res);
            this.table = res.data.data;
          }
        })
      },
      // onSubmit() {
      //   nodeEdit(this.Id, this.form.sname, this.form.address, this.form.role).then((res)=>{
      //     if(res.data.ret == 200){
      //       this.$message.success("修改成功");
      //       this.init();
      //     }else{
      //       this.$message.error("修改失败");
      //     }
      //   })
      //   console.log('submit!');
      // },
      onEsc(){
        this.shows = false;
        this.Id = '';
        this.form.sname = '';
        this.form.address = '';
        this.form.role = '';
      },
      amend(i){
        this.shows = !this.shows;
        this.Id = i.id;
        this.form.sname = i.name;
        this.form.address = i.address;
        this.form.role = i.role;
      },
      // 复选框监听事件（预处理）
      pre(i){
        if(i.prestatus == 1){ //当为选中状态时
          this.changes(i.name,i.prostatus,0);//返回未选中状态
        }
        if(i.prestatus == 0){//否则
          this.changes(i.name,i.prostatus,1);//返回选中状态
        }
        let _this = this;
        setTimeout(function(){
          _this.init();
        },50)
      },
      // 复选框监听事件（处理）
      pro(i){
        if(i.prostatus == 1){
          this.changes(i.name,0,i.prestatus);
        }else{
          this.changes(i.name,1,i.prestatus);
        }
        let _this = this;
        setTimeout(function(){
          _this.init();
        },50)
      },
      changes(name,check1,check2){
        nodestatus(name,check1,check2).then((res)=>{
          if(res.data.status == 400){
            console.log("失败");
          }
        })
      }
    },
    data() {
      return {
        one:true,
        one1:false,
        two:true,
        two1:false,
        checkList: ['1','1'],
        Id:'',
        shows:false,
        table:"",
        form: {
          sname: '',
          address: '',
          role: ''
        }
      }
    },
    components: {
      Breadcrumb
    }
  }
</script>
