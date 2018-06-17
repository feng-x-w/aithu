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
    /*width: 50%;
    height: 50%;*/
  }
  
  .addmans>.target_add {
    /*background-color: rgba(0,0,0,.5);*/
    margin-top: 20px;
    width: 80%;
    /*height: 50%;*/
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
  }
  
  .targetbtm {}
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
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
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
            <!-- @click="showtarget"-->
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
                    <tr>
                      <td>
                        <el-form-item label="姓名" prop="name">
                          <el-input v-model="addrulefm.name"></el-input>
                        </el-form-item>
                      </td>
                      <td rowspan="4">
                        <div class="Image">
                          <img src="../../../../build/logo.png" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item label="证件号" prop="idcard">
                          <el-input v-model="addrulefm.idcard"></el-input>
                        </el-form-item>
                      </td>

                    </tr>
                    <tr>
                      <td>
                        <el-form-item label="出声年月" required>
                          <el-col :span="11">
                            <el-form-item prop="birth">
                              <el-date-picker type="date" placeholder="选择日期" v-model="addrulefm.date1" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                          </el-col>
                        </el-form-item>
                      </td>

                    </tr>
                    <tr>
                      <td>
                        <el-form-item label="性别">
                          <el-select v-model="addrulefm.gender" placeholder="性别">
                            <el-option label="男" value="man"></el-option>
                            <el-option label="女" value="woman"></el-option>
                          </el-select>
                        </el-form-item>
                      </td>

                    </tr>
                    <tr>
                      <td>
                        <el-form-item label="民族" prop="mation">
                          <el-input v-model="addrulefm.nation"></el-input>
                        </el-form-item>
                      </td>
                      <td>
                        <el-form-item label="家庭住址" prop="room">
                          <el-input v-model="addrulefm.room"></el-input>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item label="手机号码" prop="tel">
                          <el-input v-model="addrulefm.tel"></el-input>
                        </el-form-item>
                      </td>
                      <td>
                        <el-form-item label="现居住地" prop="address">
                          <el-input v-model="addrulefm.address"></el-input>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item label="所属组" prop="group">
                          <el-input v-model="addrulefm.group"></el-input>
                        </el-form-item>
                      </td>
                      <td>
                        <el-form-item label="描述" prop="desc">
                          <el-input type="textarea" v-model="addrulefm.desc" name="remark"></el-input>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <el-form-item>
                          <el-button type="primary" @click="addparson('rulefm')">立即创建</el-button>
                          <el-button @click="resetForm()">重置</el-button>
                          <el-button @click="showtarget" type="danger" plain>取消</el-button>
                        </el-form-item>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="target_right">
                  <h1>1231123</h1>
                </div>

              </el-form>
            </div>
          </div>
        </div>
        <el-table :data="tableData" border style="width: 100%">

          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column prop="date" label="创建时间" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

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
  //  这样就可以通过$axios发起请求了（个人使用喜好）
  import { target, cuan, addTargetParson } from '@/api/target'
  let id = 1000;
  export default {
    components: {

    },
    created() {
      this.getData()
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    methods: {
      addman() {
        this.addMan = !this.addMan;
      },
      show(i) {
        console.log(i);
        console.log(i.gid);
        cuan(i.gid).then((res) => {
          console.log(res);
        })
      },
      getData() {
        //      let that = this;
        //      that.$axios.get("/sr/model/group")
        //        .then((res) => {
        //          console.log(res.data);
        //          //      that.data = 
        //        })
        //        .catch(function(err) {
        //          console.log(err);
        //        })
        $axios.get('http://192.168.1.118/sr/model/group').then(res => {
          console.log(res.data.data);
          //        this.data = ;
          //        this.data2= res.data.data;
          this.data2 = res.data.data;
          console.log(this.data2);

          //        this.data2= this.data;
        }).catch(error => console.log(error));
      },
      addTarget() {
        this.target = !this.target;
      },
      showtarget() {
        this.target = false;
        this.addMan = false;
      },
      //			关键字查找
      filterNode(value, data) {
        if(!value) return true;
        return data2.groupname.indexOf(value) !== -1;
      },
      //			操作（编辑）
      //			handleEdit(index, row) {
      //				console.log(index, row);
      //			},
      //			操作（删除）
      handleDelete(index, row) {
        //				console.log(index);
        //				console.log(row);
        this.tableData.splice(index, 1);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

      onSubmit() {
        console.log('submit!');
      },
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
      addparson(addrulefm) {
        this.$refs.addrulefm.validate((valid) => {
          if(valid) {
            addTargetParson(this.addrulefm.name, this.addrulefm.name, this.addrulefm.name, this.addrulefm.name, this.addrulefm.name, this.addrulefm.name, this.addrulefm.name, this.addrulefm.name, this.addrulefm.name).then((res) => {
              console.log(res);
              if(res.data.ret == 200) {
                this.$message.success("上传成功");
              }
            })
          } else {
            this.$message.error("失败");
          }
        })
      },
      resetForm() {
        //      this.$refs[formName].resetField();
        this.rulefm.name = "";
        this.rulefm.desc = "";
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
        data: [],
        target: false,
        addMan: false,
        data4: JSON.parse(JSON.stringify(data)),
        data5: JSON.parse(JSON.stringify(data)),
        formInline: {
          user: '',
          region: ''
        },

        tableData: [{
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
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1515 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],

        filterText: '',
        //				defaultProps: {
        //					children: 'children',
        ////					label: 'label'
        //				},
        ruleForm: {
          name: '',
          date1: '',
          sex: ''
        },
        //http://192.168.1.118/sr/model/add?
        //speaker=tester1
        //&gid=1
        //&idcard=123
        //&birth=123
        //&gender=0
        //&nation=12
        //&room=12
        //&address=12
        //&tel=1232
        addrulefm: {
          name: '',
          idcard: '',
          birth: '',
          gender: '',
          nation: '',
          room: '',
          tel: '',
          address: '',
          gid: ''
        },
        add_rules_target: {
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
          desc: [{
            required: true,
            message: '请填写活动形式',
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
          desc: [{
            required: true,
            message: '请填写活动形式',
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