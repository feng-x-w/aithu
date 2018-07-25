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
    background-color: rgba(0, 0, 0, .5);
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
  
  .antistop {
    width: 97%;
    margin: 20px;
    overflow-x: hidden;
  }
  
  .antistop1 {
    float: left;
    /*width: 15px;*/
    padding: 10px 15px;
    border: 1px solid black;
  }
  
  .antistop1:hover {
    background-color: gainsboro;
  }
  
  .antismid {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
  
  .antismid>p {
    width: 100%;
  }
  
  .antismid>p>.span1 {
    font-size: 16px;
    font-weight: 600;
  }
  
  .antismid>p>.span2 {
    font-size: 12px;
    color: gray;
    margin-left: 15px;
  }
  
  .ipt {
    margin-top: 5px;
    overflow: hidden;
  }
  
  .left {
    width: 13%;
    float: left;
  }
  
  .right {
    width: 78%;
    float: left;
  }
  
  .btn {
    float: left;
    margin-left: 5px !important;
    width: 6%;
  }
  
  .list {
    margin: 5px 0;
    /*overflow: hidden;*/
  }
</style>

<template>
  <div class="drill">
    <Breadcrumb class="dingw">
      <span slot="one">{{$t('homeTwo.modelManager')}}</span>
      <span slot="two">{{$t('homeTwo.keyword')}}</span>
    </Breadcrumb>
    <div class="drillTop">
      <el-form :inline="true" class="demo-form-inline" size="mini">
        <el-form-item :label="$t('homeTwo.searchKeyword')">
          <!--//搜索关键词-->
          <el-input v-model="filterText" :placeholder="$t('homeTwo.keyword')" ref="type1"></el-input>
          <!--//关键词-->
        </el-form-item>
      </el-form>
    </div>
    <hr />
    <div class="antistop">
      <div class="antistop1" v-for="(i,key) in datakeyword" :key="key">
        {{i.keyword}}
      </div>
      <div class="antistop1" v-show="xiao">
        ... ...
      </div>
    </div>
    <hr />
    <div class="antismid">
      <p><span class="span1">{{$t('homeTwo.addKeyword')}}</span>
        <!--添加关键词--><span class="span2">{{$t('homeTwo.splitKeyword')}}</span></p>
      <!--关键词使用 "," 逗号分割-->
      <div class="ipt">
        <el-form>
          <div class="left">
            <el-input size="mini" :placeholder="$t('homeTwo.inputContent')" suffix-icon="el-icon-edit el-input__icon" v-model="name" clearable required></el-input>
            <!--//请输入内容-->
          </div>
          <span style="float: left;">&nbsp;:&nbsp;</span>
          <div class="right">
            <el-input size="mini" :placeholder="$t('homeTwo.inputContent')" suffix-icon="el-icon-edit el-input__icon" v-model="antistop" clearable required></el-input>
            <!--//请输入内容-->
          </div>
          <el-button class="btn" size="mini" @click="addAntistop">{{$t('homeTwo.add')}}</el-button>
          <!--添加-->
        </el-form>
      </div>
      <div class="ipt list" v-for="(i,key) in list" :key="key">
        <div class="left">
          {{i.name}}
        </div>
        <span style="float: left;">&nbsp;:&nbsp;</span>
        <div class="right">
          {{i.value}}
        </div>
        <el-button type="danger" plain class="btn" size="mini" @click="del(i.id)">{{$t('homeTwo.delete')}} </el-button>
        <!--删除-->
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
        colo: 0,
        list: [],
        name: '',
        antistop: '',
        xiao: true,
        filterText: '',
        datakeyword: {}
      }
    },
    //  监听
    watch: {
      filterText: function(val) {
        if(val != "") {
          search(val).then((res) => {
            if(res.data.data.length > 57) {
              this.datakeyword = res.data.data.splice(0, 57);
              this.xiao = true;
            }
            if(res.data.data.length < 120) {
              this.datakeyword = res.data.data;
              this.xiao = false;
            }
          })
        } else {
          this.xiao = true;
          antistop().then((res) => {
            console.log(res);
            this.datakeyword = res.data.data.splice(0, 57);
          })
        }
      }
    },
    created() {
      this.oInit();
      this.lists();
    },
    methods: {
      //    添加关键词
      addAntistop() {
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
        let arr = changedouhao(this.antistop).split(',');
        let ArrAy = unique(arr).join(',');
        console.log(ArrAy);
        if(this.name == '') { // && this.antistop == ''
          this.$message.error(this.$t('script.Complete')) //'请将关键词组和关键词填写完整'
        }
        if(this.antistop == '') {
          this.$message.error(this.$t('script.Complete')) //'请将关键词组和关键词填写完整'
        } else {
          groupadd(this.name, ArrAy).then((res) => {
            console.log(res);
            if(res.data.ret == 200) {
              this.$message.success(this.$t('script.SuccessfullyAdded'));
              this.name = "";
              this.antistop = "";
              this.lists();
            }
            if(res.data.ret == 406) {
              this.$message.error(this.$t('script.AdditionFailed'));
            }
          })
        }
      },
      //    显示关键词列表
      lists() {
        list().then((res) => {
          console.log(res);
          this.list = res.data.data;
        })
      },
      //    删除关键词组
      del(id) {
        this.$confirm(this.$t('script.DelFile'), this.$t('script.title'), { //'此操作将永久删除该文件, 是否继续?'//'提示'
          confirmButtonText: this.$t('script.Confirm'), //'确定'
          cancelButtonText: this.$t('script.Cancel'), //'取消'
          type: 'warning'
        }).then(() => {
          deletes(id).then((res) => {
            if(res.data.ret == 200) {
              this.$message.success(this.$t('script.DelSuccess')); //"删除成功!"
              this.lists();
            }
          })
        }).catch(() => {
          this.$message.info(this.$t('script.CancelDel')) //"取消删除!"
        });

      },
      //    初始化数据渲染
      oInit() {
        antistop().then((res) => {
          console.log(res);
          this.datakeyword = res.data.data.splice(0, 60);
        })
      }
    },
    components: {
      Breadcrumb
    }
  }
</script>