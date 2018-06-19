<style scoped>
  .NextClass {
    padding: 12px;
  }
  .NextClass> {
    color: darkred;
  }
  .el-col-11 {
    width: 87.83333%;
  }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
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
    /*height: 45%;*/
    margin: 8% auto 0;
    background-color: white;
    padding: 25px 50px;
    padding-left: 0;
    border-radius: 9px;
  }
  .target_add>h1 {
    font-family: "微软雅黑";
    margin-bottom: 10px;
  }
  .filter-tree {
    width: 100%;
    padding: 5px;
  }
  .filter-tree>li {
    width: 100%;
    font-size: 14px;
    padding: 5px;
  }
  .filter-tree>li:hover {
    background-color: #e5e5e5;
  }
  .addmans {
    background-color: rgba(0, 0, 0, .5);
  }
  .addmans>.target_add {
    margin-top: 20px;
    width: 80%;
    overflow: hidden;
  }
  .el-form-item {
    margin-bottom: 19px;
  }
  .target_left {
    float: left;
    width: 50%;
  }
  .target_right {
    float: right;
    width: 45%;
    height: 500px;
    text-align: left;
    overflow: auto;
  }
  
</style>
<style>
	.el-upload-list--text{
    height: 85px;
    overflow: auto;
  }
</style>
<template>
  <div class="NextClass">
    <div class="btns">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="目标人">
          <el-input v-model="ruleForm.name" placeholder="目标人"></el-input>
        </el-form-item>
        <el-form-item label="证件号">
          <el-input v-model="ruleForm.date1" placeholder="证件号"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="ruleForm.sex" placeholder="性别">
            <el-option label="男" value="0" name="0"></el-option>
            <el-option label="女" value="1" name="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出声年月" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="民族">
          <el-input v-model="ruleForm.date1" placeholder="民族"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址">
          <el-input v-model="ruleForm.date1" placeholder="家庭住址"></el-input>
        </el-form-item>
        <el-form-item label="现居住地">
          <el-input v-model="ruleForm.date1" placeholder="现居住地"></el-input>
        </el-form-item>
        <el-form-item label="目标组">
          <el-input v-model="ruleForm.date1" placeholder="目标组"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <hr />
    <el-container>
      <el-aside width="180px">
        <h2 style="color: #2a899e;">{{$t('NextC.h2')}}</h2>
        <el-input :placeholder="$t('NextC.placeholder')" v-model="filterText">
        </el-input>
        <ul class="filter-tree">
          <li v-for="(i,index) in data2" :id="i.gid" ref="tree2" @click="show(i)">
            {{i.groupname}}
          </li>
        </ul>
        <!--<div class="block">-->
        <!--<el-tree class="filter-tree" :data="data2" :props="defaultProps"   >
        </el-tree>-->
        <!--</div>-->

      </el-aside>

      <el-main>
        <div class="addUser">
          <button @click="addTarget">添加目标组</button>
          <div class="target" v-show="target">
            <div class="target_add">
              <h1>新建目标组</h1>
              <el-form :model="rulefm" :rules="rules_target" ref="formName" label-width="100px" class="demo-ruleForm">
                <el-form-item label="名称" prop="name">
                  <el-input v-model="rulefm.name" name="groupname"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="desc">
                  <el-input type="textarea" v-model="rulefm.desc" name="remark"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('rulefm')">立即创建</el-button>
                  <el-button @click="resetForm()">重置</el-button>
                  <el-button @click="showtarget" type="danger" plain>取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <button @click="addman">添加目标人</button>
          <div class="target addmans" v-show="addMan">
            <div class="target_add">
              <h1>新建目标人</h1>
              <el-form :model="addrulefm" :rules="add_rules_target" ref="addrulefm" label-width="100px" class="demo-ruleForm">
                <div class="target_left">
                  <table border="0">
                    <tr><td>
                        <el-form-item label="姓名" prop="name">
                          <el-input v-model="addrulefm.name"></el-input>
                        </el-form-item>
                    </td><td rowspan="4">
                        <div class="Image">
                          <img src="../../../../build/logo.png" />
                        </div>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="证件号" prop="idcard">
                          <el-input v-model="addrulefm.idcard"></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="出声年月" required>
                          <el-col :span="11">
                            <el-form-item prop="birth">
                              <el-date-picker type="date" placeholder="选择日期" v-model="addrulefm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                          </el-col>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="性别">
                          <el-select v-model="addrulefm.gender" placeholder="性别">
                            <el-option label="男" value="man"></el-option>
                            <el-option label="女" value="woman"></el-option>
                          </el-select>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="民族" prop="mation">
                          <el-input v-model="addrulefm.nation"></el-input>
                        </el-form-item>
                    </td><td>
                        <el-form-item label="家庭住址" prop="room">
                          <el-input v-model="addrulefm.room"></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="手机号码" prop="tel">
                          <el-input v-model="addrulefm.tel"></el-input>
                        </el-form-item>
                    </td><td>
                        <el-form-item label="现居住地" prop="address">
                          <el-input v-model="addrulefm.address"></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
<el-form-item label="gid">
  <el-select v-model="addrulefm.gid" placeholder="请选择gid">
    <el-option v-for="(index,key) in data2" :label="index.groupname" :value="index.gid"></el-option>
  </el-select>
</el-form-item>
                    </td><td>
                        <el-form-item label="描述" prop="desc">
                          <el-input type="textarea" v-model="addrulefm.desc" name="remark"></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td colspan="2">
                        <el-form-item>
                          <el-button type="primary" @click="addparson('rulefm')">立即创建</el-button>
                          <el-button @click="resetForm()">重置</el-button>
                          <el-button @click="showtarget" type="danger" plain>取消</el-button>
                        </el-form-item>
                    </td></tr>
                  </table>
                </div>
                <div class="target_right">
                  <!--<h4>上传语音文件</h4>http://192.168.1.118/sr/model/speech/add-->
                  <!--<el-button type="primary">本地上传<i class="el-icon-upload el-icon--right"></i></el-button>
                  <el-button type="primary">远程上传<i class="el-icon-upload el-icon--right"></i></el-button>
                  <el-button type="primary" :loading="false">训练模型</el-button>-->
<!--<el-upload 
  class="upload-demo" 
  ref="upload" 
  action="http://192.168.1.118/sr/model/speech/add"
  :on-preview="handlePreview" 
  :on-remove="handleRemove" 
  :file-list="fileList" 
  :data="UpLoadingData"
  accept=".mp4,.flv,.mov,.png,.jpg"
  multiple
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传mp4，flv，mov，png，jpg文件</div>
</el-upload>-->


                </div>
              </el-form>
            </div>
          </div>
        </div>
        <el-table :data="crew" border style="width: 100%">
          <el-table-column prop="speaker" label="姓名" width="100"></el-table-column>
          <el-table-column prop="idcard" label="idcard" width="100"></el-table-column>
          <el-table-column prop="birth" label="birth" width="100"></el-table-column>
          <el-table-column prop="gender" label="gender" width="100"></el-table-column>
          <el-table-column prop="nation" label="nation" width="100"></el-table-column>
          <el-table-column prop="room" label="room" width="100"></el-table-column>
          <el-table-column prop="mid" label="mid" width="100"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column label="操作"><template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope)">详情</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template></el-table-column>
        </el-table>
        <!--目标人资料-->
        <div class="handle" v-show="targetdatas">
          <div class="target addmans">
            <div class="target_add">
              <h1>目标人资料</h1>
              <el-form label-width="100px" class="demo-ruleForm">
                <div class="target_left">
                  <table border="0">
                    <tr><td>
                        <el-form-item label="姓名" prop="speaker">
                          <el-input v-model="detail.speaker" disabled></el-input>
                        </el-form-item>
                    </td><td rowspan="4">
                        <div class="Image">
                          <img src="../../../../build/logo.png" />
                        </div>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="证件号" prop="idcard">
                          <el-input v-model="detail.idcard" disabled></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="出声年月" required>
                          <el-col :span="11">
                            <el-form-item prop="birth">
                              <el-date-picker disabled type="date" placeholder="选择日期" v-model="addrulefm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                          </el-col>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="性别">
                          <el-select v-model="addrulefm.gender" placeholder="性别" disabled>
                            <el-option label="男" value="man"></el-option>
                            <el-option label="女" value="woman"></el-option>
                          </el-select>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="民族" prop="nation">
                          <el-input v-model="detail.nation" disabled></el-input>
                        </el-form-item>
                    </td><td>
                        <el-form-item label="家庭住址" prop="room">
                          <el-input v-model="detail.room" disabled></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="手机号码" prop="tel">
                          <el-input v-model="detail.tel" disabled></el-input>
                        </el-form-item>
                    </td><td>
                        <el-form-item label="现居住地" prop="address">
                          <el-input v-model="detail.address" disabled></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="所属组" prop="group">
                          <el-input v-model="detail.group" disabled></el-input>
                        </el-form-item>
                    </td><td>
                        <el-form-item label="描述" prop="desc">
                          <el-input type="textarea" v-model="detail.desc" name="remark" disabled></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td colspan="2">
                        <el-form-item>
                          <el-button type="primary" @click="addparson('rulefm')">立即修改</el-button>
                          <!--<el-button @click="resetForm()">重置</el-button>-->
                          <el-button @click="showtarget" type="danger" plain>取消</el-button>
                        </el-form-item>
                    </td></tr>
                  </table>
                </div>
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
  accept=".wav"
  multiple
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传mp4，flv，mov，png，jpg文件</div>
</el-upload>

                  <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
                  <el-button type="primary" :loading="xunlian" @click="drill">训练</el-button>
  <template>
    <el-table :data="speech" style="width: 100%">
      <el-table-column prop="filename" label="文件名" width="180">
      </el-table-column>
      <el-table-column prop="filepath" label="文件路径" width="180">
      </el-table-column>
      <el-table-column prop="tsid" label="tsid">
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

              </el-form>
            </div>
          </div>
          
        </div>
        <div class="block">
          <!--<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[5, 10, 15, 20]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
          </el-pagination>-->
        </div>

      </el-main>
    </el-container>
  </div>
</template>

<script>
  import $axios from 'axios';
//这样就可以通过$axios发起请求了
  import { target, cuan, addTargetParson, detail, newVideo, drillModel} from '@/api/target'
  let id = 1000;
  export default {
//  页面初始化
    created() {
      this.getData()
    },
//  监听
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
//  计算属性
    computed:{
      UpData() {
        return {
          mid: this.filemid
        }
      }
    },
//  方法属性
    methods: {
//    训练点击事件
      drill(){
        this.xunlian = true;
        console.log(this.filemid);
        drillModel(this.filemid).then((res)=>{
          console.log(res);
          if(res.data.ret == 200){
          this.$message.success("训练成功");
          this.xunlian = false;
          }
        })
      },
//    添加目标人显示蒙板
      addman() {
        this.addMan = !this.addMan;
//      console.log(this.addrulefm.gid);
      },
//    点击任意目标组
      show(i) {
        cuan(i.gid).then((res) => {
//        console.log(res.data.data);
          this.crew = res.data.data;
          console.log(this.crew);
          if(res.data.ret == 404){
          this.$message.error("获取资料失败");
          }
          
        })
      },
//    页面初始化渲染
      getData() {
        $axios.get('http://192.168.1.118/sr/model/group').then(res => {
          this.data2 = res.data.data;
        }).catch(error => console.log(error));
      },
//    点击显示添加目标组蒙板
      addTarget() {
        this.target = !this.target;
      },
//    点击取消隐藏蒙板
      showtarget() {
        
        this.target = false;
        this.targetdatas = false;
        this.addMan = false;
      },
//      关键字查找
//    filterNode(value, data) {
//      if(!value) return true;
//      return data2.groupname.indexOf(value) !== -1;
//    },
//      操作（详情）
      handleEdit(scope) {
        this.targetdatas = true;
        this.filemid = scope.row.mid;
        console.log(this.filemid);
        var mId = scope.row.mid
        detail(mId).then((res)=>{
          console.log(res);
          this.detail = res.data.data;
          this.speech = res.data.data.speech;
          console.log(this.speech);
        })
        
      },
      //      操作（删除）
      handleDelete(index, row) {
        //        console.log(index);
        //        console.log(row);
        this.tableData.splice(index, 1);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
//    查询按钮
      onSubmit() {
        console.log('submit!');
      },
//    新建目标组
      submitForm(formName) {
        this.$refs.formName.validate((valid) => {
          if(valid) {
            target(this.rulefm.id, this.rulefm.name, this.rulefm.desc).then((res) => {
              console.log(res);
              if(res.data.ret == 200) {
                console.log();
                this.$message.success("上传成功");
                this.target = false;
                this.rulefm.name = "";
                this.rulefm.desc = "";
              } else {
                this.$message.error("上传失败");
              }
            })
            //          alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
//    新建目标人
      addparson(addrulefm) {
        this.$refs.addrulefm.validate((valid) => {
          if(valid) {
            addTargetParson(this.addrulefm.name, this.addrulefm.gid, this.addrulefm.idcard, this.addrulefm.birth, this.addrulefm.gender, this.addrulefm.nation, this.addrulefm.room, this.addrulefm.address, this.addrulefm.tel).then((res) => {
              console.log(res);
              if(res.data.ret == 200) {
                this.$message.success("上传成功");
                this.$refs.upload.submit();
                this.addMan = false;
                this.rulefm.name = "";
                this.rulefm.desc = "";
              }if(res.data.ret == 405){
                this.$message.error("目标人已存在");
              }
            })
          } else {
            this.$message.error("失败");
          }
        })
      },
//    重置输入框
      resetForm() {
        //      this.$refs[formName].resetField();
        this.rulefm.name = "";
        this.rulefm.desc = "";
      },
      //上传语音
      submitUpload() {
        this.$refs.upload.submit();
//      this.fileList = "";
//      console.log(this.fileList);
      },
//    上传成功是的钩子函数
      handleSuccess(response, file, fileList){
        console.log(fileList);
        fileList.splice(0,fileList.length);
        console.log(fileList);
        this.$message.success("上传成功");
      },
      //文件列表移除文件时的钩子
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      //点击文件列表中已上传的文件时的钩子
      handlePreview(file) {
        console.log(file);
      }
    },
    data() {
      const data = [{
        id: 1,
        label: '一级 1'
      }, {
        id: 2,
        label: '一级 2'
      }, {
        id: 3,
        label: '一级 3'
      }];
      return {
        name: '',
        age: '',
        file: '',
        filemid:'',
        fileList: [
//      {
//        name: 'food.jpeg',
//        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
//      }, {
//        name: 'food2.jpeg',
//        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
//      }
        ],
        speech:[],
        crew:[],
        data: [],
        detail:[],
        xunlian:false,
        target: false,
        addMan: false,
        details: false,
        targetdatas: false,
        data4: JSON.parse(JSON.stringify(data)),
        data5: JSON.parse(JSON.stringify(data)),
        formInline: {
          user: '',
          region: ''
        },

        filterText: '',
        //        defaultProps: {
        //          children: 'children',
        ////          label: 'label'
        //        },
        ruleForm: {
          name: '',
          date1: '',
          sex: ''
        },
        addrulefm: {
          name: '',
          gid:'',
          idcard: '',
          birth: '',
          gender: '',
          nation: '',
          room: '',
          tel: '',
          address: ''
        },
        add_rules_target: {
          name: [{
              required: true,
              message: '请输入姓名',
              trigger: 'blur'
            },
            {
              min: 2,
              max: 15,
              message: '长度在 2 到 15 个字符',
              trigger: 'blur'
            }
          ],
          idcard:[{
            required: true,
            message: '请填写证件号',
            trigger: 'blur'
          },{
              min: 15,
              max: 18,
              message: '长度在 15 到 18 个字符',
              trigger: 'blur'
          }],
          desc: [{
            required: true,
            message: '请填写描述',
            trigger: 'blur'
          }]
        },
        rulefm: {
          id: 0,
          name: '',
          desc: ''
        },
        rules_target: {
          name: [{
              required: true,
              message: '请输入目标组名称',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 15,
              message: '长度在 1 到 15 个字符',
              trigger: 'blur'
            }
          ],
          desc: [{
            required: true,
            message: '请填写目标组描述',
            trigger: 'blur'
          }]
        },
        rules: {
          name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          date1: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          sex: [{
            required: true,
            message: '请选择性别',
            trigger: 'change'
          }],
        },

        append(data) {
          const newChild = {
            id: id++,
            label: 'testtest',
            children: []
          };
          if(!data.children) {
            this.$set(data, 'children', []);
          }
          data.children.push(newChild);
        },

        remove(node, data) {
          const parent = node.parent;
          const children = parent.data.children || parent.data;
          const index = children.findIndex(d => d.id === data.id);
          children.splice(index, 1);
        },

        renderContent(h, {
          node,
          data,
          store
        }) {
          return(
            <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
        },
        data2: [{
          id: 0,
          label: ''
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    }
  }
</script>