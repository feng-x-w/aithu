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
</style>

<template>
  <div class="drill">
    <Breadcrumb>
      <span slot="one">模型管理</span>
      <span slot="two">语种模型管理</span>
    </Breadcrumb>
    <div class="drillTop">
      <el-form :inline="true" :model="form" class="demo-form-inline" size="mini">
        <el-form-item label="任务名称">
          <el-input v-model="form.name" placeholder="任务名称"></el-input>
        </el-form-item>
        <el-form-item label="执行状态" size="mini">
          <el-select v-model="form.region" placeholder="执行状态">
            <el-option label="正在执行" value="shanghai"></el-option>
            <el-option label="执行完成" value="beijing"></el-option>
            <el-option label="全部" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="操作人" size="mini">
          <el-input v-model="form.operation" placeholder="操作人"></el-input>
        </el-form-item>
        <el-form-item size="mini">
          <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
        </el-form-item>
        <el-form-item size="mini">
          <el-button type="primary">新建语种</el-button><!-- @click="newTask"-->
        </el-form-item>
      </el-form>
      <!--新建语种-->
      <div class="Nlanguage" v-show="nlguage">
        <div class="NLG">
          <h1 style="text-align: center;margin-bottom:10px;">新建语种</h1>
          <div class="left">
            <hr />
<el-form ref="formData" :rules="rules" :model="formData" label-width="80px">
  <el-form-item label="语种名称" prop="name" required>
    <el-input v-model="formData.name"></el-input>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="formData.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button @click="onEsc">取消</el-button>
  </el-form-item>
</el-form>
          </div>
          <div class="right">
                <div class="target_right">
                  <h1>模型文件列表</h1>
<el-upload 
  class="upload-demo" 
  ref="upload" 
  action="http://192.168.1.118/sr/model/speech/add"
  :on-preview="handlePreview" 
  :on-remove="handleRemove" 
  :on-success="handleSuccess"
  :file-list="fileList" 
  :data="UpData"
  accept=".wav,.mp3,.flac,.ape"
  multiple
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传.WAV,.MP3,.FLAC,.APE文件</div>
</el-upload>

                  <!--<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>-->
                  <el-button type="primary" :loading="xunlian" @click="drill">训练</el-button>
  <template>
    <el-table :data="speech" style="width: 100%">
      <el-table-column label="文件名" width="180">
      </el-table-column>
      <el-table-column label="文件路径" width="180">
      </el-table-column>
      <el-table-column label="tsid">
      </el-table-column>
    </el-table>
  </template>
<div class="block">
  <!--<span class="demonstration">大于 7 页时的效果</span>-->
  <!--<el-pagination
    small
    page-size="5"
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>-->
  
</div> 
</div>
          </div>
        </div>
      </div>
      <hr />
      <div class="drillmid">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="名称" width="180">
          </el-table-column>
          <el-table-column prop="date" label="描述" width="180">
          </el-table-column>
          <el-table-column prop="name" label="训练状态" width="180">
          </el-table-column>
          <el-table-column prop="address" label="操作">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  export default {
    data() {
      return {
        nlguage:false,
        formData: {
          name: '',
          desc: ''
        },
         rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
         },
        form: {
          name: '',
          region: '',
          operation: ''
        },
        tableData: [
//      {
//          date: '2016-05-02',
//          name: '王小虎',
//          address: '上海市普陀区金沙江路 1518 弄'
//        }, {
//          date: '2016-05-04',
//          name: '王小虎',
//          address: '上海市普陀区金沙江路 1517 弄'
//        }, {
//          date: '2016-05-01',
//          name: '王小虎',
//          address: '上海市普陀区金沙江路 1519 弄'
//        }, {
//          date: '2016-05-03',
//          name: '王小虎',
//          address: '上海市普陀区金沙江路 1516 弄'
//        }
          ]
      }
    },
    methods: {
      onSubmit() {
//      console.log('submit!');
      },
      onEsc(){
        this.nlguage = false
      },
      newTask() {
        console.log('submit!');
        this.nlguage = true
      }
    },
    components: {
      Breadcrumb
    },
    computed: {

    }
  }
</script>