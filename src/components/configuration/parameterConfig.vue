<style scoped>
  .parameterconfig{
      padding-bottom: 15px
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
  .p{
      width: 100%;
      padding: 10px;
      overflow: hidden;
      box-sizing: border-box;
  }
  .p>.el-button--primary{
    float: right;

  }
</style>

<template>
  <div class="drill">
    <Breadcrumb>
      <span slot="one">{{$t('systemConfig.systemconfig')}}</span>
      <!--系统配置-->
      <span slot="two">{{$t('systemConfig.parameterConfig')}}</span>
      <!--参数配置-->
    </Breadcrumb>
    <p class="p">
        <el-button plain type="primary" @click="reset">{{$t('systemConfig.reset')}}</el-button>
      <!--重置-->
    </p>
    <div class="parameterconfig">
        <div class="taskmid">
            <table>
            <tr>
                <th> sname </th>
                <th> value </th>
                <th> classify </th>
                <!-- <th> chflag </th> -->
                <th> operation </th>
            </tr>
            <tr v-for="(i,index) in table" :key="index">
                <td> {{i.sname}} </td>
                <td> {{i.value}} </td>
                <td><!--{{i.classify}}-->
                  <span v-if="i.classify == 'ISPS'">{{$t('systemConfig.systemParameter')}}</span>
                  <!--系统参数-->
                  <span v-if="i.classify == 'GRE'">{{$t('systemConfig.genderModelParameter')}}</span>
                  <!--性别模型参数-->
                  <span v-if="i.classify == 'LRE'">{{$t('systemConfig.languageModelParameter')}}</span>
                  <!--语种模型参数-->
                  <span v-if="i.classify == 'SRE'">{{$t('systemConfig.vocalPrintModelParameter')}}</span>
                  <!--声纹模型参数-->
                  <span v-if="i.classify == 'VAD'">{{$t('systemConfig.cleanParameter')}}</span>
                  <!--清洗参数-->
                  <span v-if="i.classify == 'SEH'">{{$t('systemConfig.enhanceParameter')}}</span>
                  <!--增强参数-->
                  <span v-if="i.classify == 'IDX'">{{$t('systemConfig.speakerLabelParameter')}}</span>
                  <!--说话人标签参数-->
                  <span v-if="i.classify == 'CFG'">{{$t('systemConfig.publicParameter')}}</span>
                  <!--公共参数-->
                </td>
                <!-- <td> {{i.chflag}} </td> -->
                <td>
                <!-- 修改 -->
                    <!-- <p v-if="i.chflag == 'n'">不可修改</p> -->
                    <el-button v-if="i.chflag == 'n'" type="text" style="color:#d0d0d0;cursor:not-allowed;" :title="$t('systemConfig.noChange')"><!--//不可修改-->
                        <i class="fa fa-pencil" style="font-size: 20px;"></i>
                    </el-button>
                    <el-button v-else type="text" @click="amend(i)" :title="$t('systemConfig.change')"><!--//修改-->
                        <i class="fa fa-pencil" style="font-size: 20px;"></i>
                    </el-button>
                </td>
            </tr>
            </table>
            <div class="meng" v-show="shows">
                <div class="tan">
                <h2>{{$t('systemConfig.changeParameterConfig')}}</h2>
                  <!--修改参数配置弹框-->
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="sname">
                        <el-input v-model="form.sname"></el-input>
                    </el-form-item>
                    <el-form-item label="value">
                        <el-input v-model="form.value"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button plain type="primary" @click="onSubmit" style="margin-right:15px;">{{$t('systemConfig.change')}}</el-button>
                      <!--修改-->
                        <el-button type="danger" plain @click="onEsc" style="margin-right:70px;">{{$t('systemConfig.cancel')}}</el-button>
                      <!--取消-->
                    </el-form-item>
                </el-form>
                </div>
            </div>
        </div>
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
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  import { configindex, configEdit, configReset } from '@/api/configuration'
  export default {
    // 页面初始化
    created(){
       this.init(this.currentPage, this.pagesize);
    },
    //  方法属性
    methods: {
      amend(i){
        console.log(i);
        this.shows = !this.shows;
        this.Id = i.id;
        this.form.sname = i.sname;
        this.form.value = i.value;
        console.log(i.sname);
        console.log(i.value);
        console.log(i.id);
      },
      init(page, pagesize){
        configindex(page, pagesize).then((res)=>{
          if(res.data.ret == 200){
            console.log(res.data.data);
            this.table = res.data.data;
            this.totalCount = res.data.totalcount;
          }else{
            //   this.totalCount = 0;
            this.totalCount = res.data.totalcount;
          }
        })
      },
      //每页显示数据量变更
      handleSizeChange: function(val) {
          this.pagesize = val;
          this.init(this.currentPage, this.pagesize);
      },
      //页码变更
      handleCurrentChange: function(val) {
          this.currentPage = val;
          this.init(this.currentPage, this.pagesize);
      },
      //上一页
      handlePrevChange: function() {
          this.init(this.currentPage, this.pagesize);
      },
      //下一页
      handleNextChange: function() {
          this.init(this.currentPage, this.pagesize);
      },
    //   点击修改
      onSubmit() {
        configEdit(this.Id, this.form.sname, this.form.value).then((res)=>{
          if(res.data.ret == 200){
            this.$message.success("修改成功");
            this.init(this.currentPage, this.pagesize);
          }else{
            this.$message.error("修改失败");
          }
        })
        // console.log('submit!');
      },
    //   点击取消
    onEsc(){
      this.shows = false;
      this.Id = '';
      this.form.sname = '';
      this.form.value = '';
    },
    reset(){
      configReset().then((res)=>{
        console.log(res);
        if(res.status == 200){
            if(res.data.ret == 200){
                this.init(this.currentPage, this.pagesize);
                this.$message.success(res.statusText);
            }
        }
      })
    }
    },
    data() {
      return {
        Id:'',
        shows:false,
        fenye:true,
        table:"",
        currentPage: 1,
        totalCount: 0,
        pagesize: 10,
        form: {
          sname: '',
          value: '',
          role: ''
        }
      }
    },
    components: {
      Breadcrumb
    }
  }
</script>
