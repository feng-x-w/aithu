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
    margin-top: 10px;
  }
  .filter-tree>li {
    width: 100%;
    font-size: 14px;
    padding: 5px;
    overflow: hidden;
  }
  .filter-tree>li>span {
    float: left;
  }
  .filter-tree>li>div {
    float: right;
  }
  .filter-tree>li:hover {
    background-color: #e5e5e5;
  }
  .nowpage{
    background-color: #d6d6d6;;
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
    border-right: 1px solid #d4d4d4;
    padding-right: 25px;
  }
  .target_right {
    float: right;
    width: 45%;
    height: 500px;
    text-align: left;
    overflow: auto;
  }
  .el-aside{
    overflow: initial;
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
    /*background-color: #f3f3f3;*/
    font-size: 13px;
    font-weight: 600;
    padding: 10px;
  }
  .tasktable>tr>td {
    border: 1px solid #e3e3e3;
    padding: 10px;
  }
  .tasktable>tr>.addre{
    display: inline-block;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    border: none;
  }
  .tasktable>tr>td>.addre1{
    width: 100px;
    /*display: inline-block;*/
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
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
  .el-button--text{
    padding: 0;
  }
  .mobiao{
    margin: 10px;
    margin-top: 0;
    margin-left: 0;
  }
  .menb{
    position: fixed;
    text-align: center;
    background-color:rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
  .menb>div{
    position: fixed;
    text-align: center;
    /*background-color: rgba(0, 0, 0, .5);*/
    top: 50%;
    left: 50%;
    margin-left: -20%;
    margin-top: -7%;
    width: 39%;
    z-index: 120;
  }
  /*.el-input{
    margin: 8px 0;
  }*/
  .TargetGroup{
    background: -webkit-linear-gradient(right, #fff, #e7e7e7); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #fff, #e7e7e7); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #fff, #e7e7e7); /* Firefox 3.6 - 15 */
    background: linear-gradient(right, #fff, #e7e7e7); /* 标准的语法 */
    margin: -8px 0 10px -11px;
    font-size: 14px;
    padding: 10px;
  }
  .el-main{
    padding-top: 0;/* !important*/
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
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        <el-form-item :label="$t('iptss.target')">
          <el-input v-model="formInline.speaker" :placeholder="$t('iptss.target')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('iptss.id')">
          <el-input v-model="formInline.idcard" :placeholder="$t('iptss.id')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('iptss.sex')">
          <el-select v-model="formInline.gender" :placeholder="$t('iptss.sex')">
            <el-option :label="$t('iptss.man')" value="0" name="0"></el-option>
            <el-option :label="$t('iptss.woman')" value="1" name="1"></el-option>
            <el-option :label="$t('iptss.all')" value="" name=""></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('iptss.dada')">
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" :placeholder="$t('iptss.dass')" v-model="formInline.birth" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item :label="$t('iptss.nation')">
          <el-input v-model="formInline.nation" :placeholder="$t('iptss.nation')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('iptss.room')">
          <el-input v-model="formInline.room" :placeholder="$t('iptss.room')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('iptss.currentResidence')">
          <el-input v-model="formInline.address" :placeholder="$t('iptss.currentResidence')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('iptss.TargetGroup')">
          <el-input v-model="formInline.gid" :placeholder="$t('iptss.TargetGroup')"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="inquired" icon="el-icon-search">{{$t('iptss.inquire')}}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <hr style="margin-left: -12px;" />
    <el-container>
      <el-aside width="180px">
        <h2 class="TargetGroup" style="color: black;">{{$t('NextC.h2')}}</h2>
        <el-input :placeholder="$t('NextC.placeholder')" v-model="filterText" ref="type1">
        </el-input>
        <ul class="filter-tree">
          <!--<li @click="weifen" v-bind:class="{ nowpage: this.iGid-(this.iGid-1)==selectItem }">未分组</li>-->
          <li v-for="(i,index) in data2" :id="i.gid" ref="tree2" @click="show(i,i.gid)" v-bind:class="{ nowpage: i.gid==selectItem }">
            <span>{{i.groupname}}</span>
            <div @click.stop title="修改" v-if="i.groupname != '未分组'"><!-- -->
              <el-button type="text" @click="alte(i.gid,i.groupname,i.remark,i)">
                <i class="el-icon-edit"></i>
              </el-button><!--修改-->
              <el-button style="color: red;" type="text" @click="del(i.gid)" title="删除">
                <i class="el-icon-delete"></i>
              </el-button><!--删除-->
            </div>
          </li>
        </ul>
      </el-aside>
<div class="menb" v-show="alter">
  <!--<div>-->
    <div class="target_add">
      <h1>修改目标组</h1>
      <el-form :model="rulefm_one" :rules="rules_target" label-width="100px" class="demo-ruleForm">
        <el-form-item label="名称" prop="name">
          <el-input v-model="rulefm_one.name" name="groupname"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input type="textarea" v-model="rulefm_one.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="openalter">立即修改</el-button>
          <!--<el-button @click="resetForm()">重置</el-button>-->
          <el-button @click="showtarget" type="danger" plain style="margin-left: 10px !important;">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  <!--</div>-->
</div>
      <el-main>
        <div class="addUser">
          <el-button class="mobiao" type="primary" @click="addTarget" size="mini">添加目标组</el-button>
          <!--<button >添加目标组</button>-->
          <div class="target" v-show="target">
            <div class="target_add">
              <h1>新建目标组</h1>
              <el-form :model="rulefm" :rules="rules_target" ref="formName" label-width="100px" class="demo-ruleForm">
                <el-form-item label="名称" prop="name">
                  <el-input v-model="rulefm.name" name="groupname"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input type="textarea" v-model="rulefm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('rulefm')">创建</el-button>
                  <el-button @click="resetForm()" style="margin: 0 10px !important;">重置</el-button>
                  <el-button @click="showtarget" type="danger" plain>关闭</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <el-button type="primary"@click="addman" size="mini">添加目标人</el-button>
          <!--<button @click="addman">添加目标人</button>-->
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
                          <img src="../../../assets/_20180622145804.png" />
                        </div>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="证件号">
                          <el-input v-model="addrulefm.idcard"></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="出声年月">
                          <el-col>
                            <el-form-item>
                              <el-date-picker type="date" value="123" placeholder="选择日期" v-model="addrulefm.birth" style="width: 100%;"></el-date-picker>
                            </el-form-item>
                          </el-col>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="性别">
                          <el-select v-model="addrulefm.gender" placeholder="性别">
                            <el-option label="男" value="0" name="0"></el-option>
                            <el-option label="女" value="1" name="1"></el-option>
                            <el-option label="未知" value="" name=""></el-option>
                          </el-select>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="民族">
                          <el-input v-model="addrulefm.nation"></el-input>
                        </el-form-item>
                    </td><td>
                        <el-form-item label="家庭住址">
                          <el-input v-model="addrulefm.room"></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="手机号码">
                          <el-input v-model="addrulefm.tel"></el-input>
                        </el-form-item>
                    </td><td>
                        <el-form-item label="现居住地">
                          <el-input v-model="addrulefm.address"></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
<el-form-item label="gid">
  <el-select v-model="addrulefm.gid" placeholder="请选择目标组">
    <!--<option value="0" checked>未分组</option>-->
    <!--<el-option label="未分组" value="0" checked>未分组</el-option>-->
    <el-option v-for="(index,key) in data2" :label="index.groupname" :value="index.gid"></el-option>
  </el-select>
</el-form-item>
                    </td><td>
                        <el-form-item label="描述">
                          <el-input type="textarea" v-model="addrulefm.desc"></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td colspan="2">
                        <el-form-item>
                          <el-button type="primary" @click="addparson('rulefm')" :disabled="buer">创建</el-button>
                          <!--<el-button @click="resetForm()">重置</el-button>-->
                          <el-button @click="showtarget" type="danger" style="margin-left: 10px !important;" plain>关闭</el-button>
                        </el-form-item>
                    </td></tr>
                  </table>
                </div>
                <div class="target_right">
                   <!--创建目标人右侧信息-->
<h1>模型文件列表</h1>
<el-upload 
  class="upload-demo" 
  ref="uploadone" 
  action="http://192.168.1.118/sr/model/speech/add"
  
  
  :on-success="handleSuccessone"
  :on-error="handleErrorone"
  :file-list="fileListone" 
  :data="UpDataone"
  accept=".wav,.mp3,.flac,.ape"
  multiple
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUploadone">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传.WAV,.MP3,.FLAC,.APE文件</div>
</el-upload>
                  <el-button type="primary" :loading="xunlianone" @click="drillone" :disabled="xulian">训练</el-button>
  <template>
    <el-table :data="speechone" style="width: 100%">
      <el-table-column label="文件名" width="180" prop="filename">
      </el-table-column>
      <!--<el-table-column label="文件路径" width="180" prop="filepath">
      </el-table-column>-->
      <el-table-column label="文件大小" prop="filesize">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
<el-button size="mini" @click="play(scope)">
  <i class="el-icon-caret-right"></i>
</el-button>
<el-button size="mini" type="danger" @click="speechDel(scope)">
  <i class="el-icon-delete"></i>
</el-button>
        </template>
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
        <table class="tasktable">
          <tr><!-- @selection-change="handleSelectionChange"  @row-click="handleclick"-->
            <th>姓名</th>
            <th>证件号</th>
            <th>出生年月</th>
            <th>性别</th>
            <th>民族</th>
            <th>家庭住址</th>
            <th>现居住地</th>
            <th>目标组</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          <tr v-for="i in crew">
            <td>
              {{i.speaker}}
            </td>
            <td>
              {{i.idcard}}<!-- | datas-->
            </td>
            <td>
              {{i.birth}}
            </td>
            <td>
              <!--{{i.gender}}-->
              <span v-if="i.gender==0">男</span>
              <span v-if="i.gender==1">女</span>
            </td>
            <td>
              {{i.nation}}
            </td>
            <td>
              <div class="addre1">
                {{i.room}}
              </div>
            </td>
            <td class="addre" width="100px">
              {{i.address}} 
            </td>
            <td> {{i.groupname}} </td>
            <td style="width: 37px;">
              <span v-if="i.status == 0">不可用</span>
              <span v-if="i.status == 1">可用</span>
            </td>
            <td style="width: 38px;">
                <el-button type="text" @click="handleEdit(i.mid)" title="详情">
                  <i class="el-icon-info"></i>
                </el-button>
                
                <el-button style="color: red;" type="text" @click="modelDelete(i.mid)" title="删除">
                  <i class="el-icon-delete"></i>
                </el-button><!-- @click="handleEdit(i.mid)"-->
            </td>
          </tr>
        </table>
        <div class="wei" v-show="kong">暂无数据</div>
        <!--<el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          @prev-click="handlePrevChange"
          @next-click="handleNextChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount">-->
        </el-pagination>
        <!--目标人资料-->
        <div class="handle" v-show="targetdatas">
          <div class="target addmans">
            <div class="target_add">
              <h1>目标人资料</h1>
              <el-form label-width="100px" class="demo-ruleForm">
                <div class="target_left">
                  <table border="0">
                    <tr><td>
                        <el-form-item label="姓名">
                          <el-input v-model="detail.speaker"></el-input>
                        </el-form-item>
                    </td><td rowspan="4">
                        <div class="Image">
                          <img src="../../../assets/_20180622145804.png" />
                        </div>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="证件号">
                          <el-input v-model="detail.idcard"></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="出声年月">
                          <el-col :span="11">
                            <el-form-item>
                              <el-date-picker type="date" placeholder="选择日期" v-model="detail.birth"></el-date-picker>
                            </el-form-item>
                          </el-col>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="性别">
                          <el-select v-model="detail.gender" placeholder="性别">
                            <el-option label="男" value="0"></el-option>
                            <el-option label="女" value="1"></el-option>
                            <el-option label="未知" value="-1"></el-option>
                          </el-select>
                        </el-form-item>
                        <!--<el-form-item label="性别">
                          <el-radio-group v-model="detail.gender">
                            <el-radio :label="0">男</el-radio>
                            <el-radio :label="1">女</el-radio>
                            <el-radio :label="">全部</el-radio>
                          </el-radio-group>
                        </el-form-item>-->
                    </td></tr>
                    <tr><td>
                        <el-form-item label="民族">
                          <el-input v-model="detail.nation"></el-input>
                        </el-form-item>
                    </td><td>
                        <el-form-item label="家庭住址">
                          <el-input v-model="detail.room"></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
                        <el-form-item label="手机号码">
                          <el-input v-model="detail.tel"></el-input>
                        </el-form-item>
                    </td><td>
                        <el-form-item label="现居住地">
                          <el-input v-model="detail.address"></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td>
<el-form-item label="gid">
  <el-select v-model="detail.gid" placeholder="请选择目标组">
    <el-option v-for="(index,key) in data2" :label="index.groupname" :value="index.gid"></el-option>
  </el-select>
</el-form-item>
                    </td><td>
                        <el-form-item label="描述">
                          <el-input type="textarea" v-model="detail.desc"></el-input>
                        </el-form-item>
                    </td></tr>
                    <tr><td colspan="2">
                        <el-form-item>
                          <el-button type="primary" @click="amend">修改</el-button>
                          <!--<el-button @click="resetForm()">重置</el-button>-->
                          <el-button @click="showtarget" type="danger" plain style="margin-left: 10px !important;">关闭</el-button>
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
  :on-error="handleError"
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
      <el-table-column label="文件名" width="180" prop="filename">
      </el-table-column>
      <!--<el-table-column label="文件路径" width="180" prop="filepath">
      </el-table-column>-->
      <el-table-column label="文件大小" prop="filesize">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
<el-button size="mini" @click="play(scope)">
  <i class="el-icon-caret-right"></i>
</el-button>
<el-button size="mini" type="danger" @click="speechDel(scope)">
  <i class="el-icon-delete"></i>
</el-button>
        </template>
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
  import { target, cuan, addTargetParson, detail, newVideo, drillModel, dele, Alter, modelDele, updateModel, gname, inquire, speechDel} from '@/api/target'
  import { datas } from '@/assets/js/common'
  let id = 1000;
  export default {
    filters:{
      datas
    },
//  页面初始化
    created() {
      this.getData()
    },
//  监听
    watch: {
      filterText:function(val){
//      this.$message.success(val);
        console.log(val);
        gname(val).then((res)=>{
          console.log(res.data.data);
          this.data2 = res.data.data;
        })
      }
    },
//  计算属性
    computed:{
      UpData() {
        return {
          mid: this.filemid
        }
      },
      UpDataone() {
        return {
          mid: this.newfilemid
        }
      }
    },
//  方法属性
    methods: {
//    查询
      inquired(){
        this.selectItem = -1;
//      if(this.formInline.birth != null){
//        if(this.formInline.birth != ""){
//          let birthTime = this.formInline.birth;
//          let y = birthTime.getFullYear().toString(),//年份
//          m = ("0" + (birthTime.getMonth() + 1)).slice(-2).toString(),//月份
//          d = birthTime.getDate().toString();//日
//          var bt = y+'-'+m+'-'+d;
//        }else{
//          this.formInline.birth = "";
//          var bt = this.formInline.birth;
//        }
//      }else{
//        this.formInline.birth = "";
//        var bt = this.formInline.birth;
//      }
        let bt;
        if(this.formInline.birth){
          bt = this.formInline.birth.toLocaleDateString();
          console.log(bt);
        }else{
          bt = this.formInline.birth = "";
        }
        inquire(this.formInline.speaker,this.formInline.idcard,bt,this.formInline.gender,this.formInline.nation,this.formInline.room,this.formInline.address,this.formInline.gid).then((res)=>{
          console.log(res);
          this.crew = res.data.data;
        })
      },
//    点击打开目标组修改alert
      alte(gid,groupname,desc,i){
//      console.log(gid,groupname,desc,i);
        this.alter=true;
        this.gId = gid;
        this.rulefm_one.name = groupname;
        this.rulefm_one.desc = desc;
      },
//    修改组名
      openalter(){
//      console.log(gid);
        Alter(this.rulefm_one.name,this.gId,this.rulefm_one.desc).then((res)=>{
//        console.log(res);
          if(res.data.ret == 200){
            this.$message.success("修改成功");
            this.alter=false;
            this.getData();
          }if(res.data.ret == 406){
            this.$message.error("组名重复");
          }
        })
      },
//    目标组删除
      del(gid){
        console.log(gid);
        this.$confirm('此操作将永久删除该目标组, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          dele(gid).then((res)=>{
            console.log(res);
            if(res.data.ret == 200){
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.getData()
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
//    训练点击事件
      drill(){
//      正在训练，点击取消关闭本窗口，稍后可查看训练结果。
        if(this.speech.length != 0){
          console.log(this.speech.length);
          this.xunlian = true;
          this.$alert('正在训练，稍后可查看训练结果。',{
            confirmButtonText: '确定'
          });
  //      console.log(this.filemid);
          drillModel(this.filemid).then((res)=>{
            console.log(res);
            if(res.data.ret == 200){
              this.$message.success("训练成功");
              this.xunlian = false;
              cuan(this.iGid).then((res) => {
                if(res.data.ret == 200){
                    this.crew = res.data.data;
                    this.kong=false;
                }
              })
            }
          })
        }else{
          this.$message.error("没有语音文件");
        }
          
      },
//    创建目标人时的点击训练
      drillone(){
//      正在训练，点击取消关闭本窗口，稍后可查看训练结果。
        if(this.speechone.length != 0){
          console.log(this.speechone.length);
          this.xunlianone = true;
          this.$alert('正在训练，稍后可查看训练结果。',{
            confirmButtonText: '确定'
          });
  //      console.log(this.filemid);
          drillModel(this.newfilemid).then((res)=>{
            console.log(res);
            if(res.data.ret == 200){
              this.$message.success("训练成功");
              this.xunlianone = false;
              cuan(this.iGid).then((res) => {
                if(res.data.ret == 200){
                    this.crew = res.data.data;
                    this.kong=false;
                }
              })
            }
          })
        }else{
          this.$message.error("没有语音文件");
        }
      },
//    添加目标人显示蒙板
      addman() {
        this.addMan = !this.addMan;
//      console.log(this.addrulefm.gid);
      },
//    点击未分组
      weifen(){
        this.selectItem = this.iGid-(this.iGid-1);
        console.log(this.iGid-(this.iGid-1));
        cuan(0).then((res) => {
          this.iGid = 0;
          console.log(0);
          if(res.data.ret == 200){
            this.crew = res.data.data;
//          console.log(this.crew);
            this.kong=false;
            this.totalCount = res.data.data.length;
//          console.log(this.totalCount);
          }
          if(res.data.ret == 404){
          this.$message.error("该目标组未创建模型");
          this.kong=true;
          this.crew = "";
          }
        })
      },
//    点击任意目标组
      show(i,index) {
        console.log(i,index);
        this.selectItem = i.gid;
        cuan(i.gid).then((res) => {
          this.iGid = i.gid;
          console.log(i.gid);
          if(res.data.ret == 200){
            this.crew = res.data.data;
//          console.log(this.crew);
            this.kong=false;
            this.totalCount = res.data.data.length;
//          console.log(this.totalCount);
          }
          if(res.data.ret == 404){
          this.$message.error("该目标组未创建模型");
          this.kong=true;
          this.crew = "";
          }
        })
      },
//    页面初始化渲染
      getData() {
        $axios.get('http://192.168.1.118/sr/model/group').then(res => {
          this.data2 = res.data.data;
          console.log(res);
        }).catch(error => console.log(error));
      },
//    点击显示添加目标组蒙板
      addTarget() {
        this.target = true;
      },
//    点击取消隐藏蒙板
      showtarget() {
        this.alter=false;
        this.target = false;
        this.targetdatas = false;
        this.addMan = false;
        this.buer = false;
        this.xulian = true;
        this.speechone = [];
        this.newfilemid = "";
this.addrulefm.name=""; this.addrulefm.gid=""; this.addrulefm.idcard=""; 
this.addrulefm.birth=""; this.addrulefm.gender=""; this.addrulefm.nation=""; 
this.addrulefm.room=""; this.addrulefm.address=""; this.addrulefm.tel=""; this.addrulefm.desc="";
      },
//      操作（详情）
      handleEdit(mid) {
//      console.log(mid);
        this.targetdatas = true;
        this.filemid = mid;
//      console.log(this.filemid);
        this.mId = mid
        this.xl();
      },
//    详情页面上传语音成功后获取数据刷新
      xl(){
        detail(this.mId).then((res)=>{
          console.log(res.data.data.gender);
          console.log(typeof(res.data.data.gender));
          this.detail = res.data.data;
          this.speech = res.data.data.speech;
          console.log(this.detail.gender);
          console.log(typeof(this.detail.gender));
          if(this.detail.gender == -1){
            this.detail.gender = "未知";
          }
          if(this.detail.gender == 0){
            this.detail.gender = "男";
          }
          if(this.detail.gender == 1){
            this.detail.gender = "女";
          }
        })
      },
//    创建目标人时上传语音成功后获取数据刷新
      xlone(){
        detail(this.newfilemid).then((res)=>{
          console.log(res.data.data);
//        console.log();
          this.detail = res.data.data;
          this.speechone = res.data.data.speech;
        })
      },
//    删除模型
      modelDelete(mid){
        this.$confirm('此操作将永久删除该目标人, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          modelDele(mid).then((res)=>{
            if(res.data.ret == 200){
              this.$message.success("删除成功");
//            this.show(this.iGid);
                cuan(this.iGid).then((res) => {
                  if(res.data.ret == 200){
                    this.crew = res.data.data;
                    this.kong=false;
                    this.totalCount = res.data.data.length;
                    console.log(this.totalCount);
                  }
                  if(res.data.ret == 404){
                  this.$message.error("该目标组已清空");
                  this.crew = "";
                  this.kong=true;
                  }
                })
            }
            console.log(res);
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
        
      },
      //      操作（删除）
//    handleDelete(index, row) {
//      //        console.log(index);
//      //        console.log(row);
//      this.tableData.splice(index, 1);
//    },
//每页显示数据量变更
//handleSizeChange: function(val) {
//  this.pagesize = val;//this.criteria,搜索条件
//  this.loadData( this.currentPage, this.pagesize);
//},

//页码变更
//handleCurrentChange: function(val) {
//  this.currentPage = val;//this.criteria,搜索条件
//  this.loadData(this.currentPage, this.pagesize);
//},  
//上一页
//handlePrevChange:function(){
//
//  this.loadData(this.currentPage, this.pagesize);
//},
//下一页
//handleNextChange:function(){
//
//  this.loadData(this.currentPage, this.pagesize);
//},//criteria, 
//loadData(pageNum, pageSize){
//this.$http.get(this.url,{parameter:criteria, pageNum:pageNum, pageSize:pageSize}).then(function(res){
//    this.tableData = res.data.pagestudentdata;
//
//},function(){
//    console.log('failed');
//});
//},
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
                this.getData();
              } else {
                this.$message.error("上传失败");
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
//    新建目标人
      addparson(addrulefm) {
//      console.log(typeof(this.addrulefm.gid));
//      console.log(this.addrulefm.gid);
//      if(typeof(this.addrulefm.gid) === "string"){
//        this.iGid = 56;
//      }
//      if(this.addrulefm.gid === ""){
//        this.iGid = 56;
//      }
        let addrulefmBirth;
      if(typeof(this.addrulefm.birth) != "string"){//
          addrulefmBirth = this.addrulefm.birth.toLocaleDateString();
        }else{
          addrulefmBirth = this.addrulefm.birth;
        }
        this.$refs.addrulefm.validate((valid) => {
          if(valid) {
            addTargetParson(this.addrulefm.name, this.addrulefm.gid, this.addrulefm.idcard, addrulefmBirth, this.addrulefm.gender, this.addrulefm.nation, this.addrulefm.room, this.addrulefm.address, this.addrulefm.tel, this.addrulefm.desc).then((res) => {
//            console.log(addrulefmBirth);
              if(res.data.ret == 200) {
                
                this.newfilemid = res.data.data.mid;
                this.$message.success("创建成功");
                this.$refs.upload.submit();
                this.buer = true;
                this.iGid = this.addrulefm.gid
                this.selectItem = this.iGid;

cuan(this.iGid).then((res) => {
if(res.data.ret == 200){
    this.crew = res.data.data;
    this.kong=false;
}
})
              }if(res.data.ret == 405){
                this.$message.error("目标人已存在");
              }
            })
          } else {
            this.$message.error("失败");
          }
        })
      },
//    修改目标人
//
      amend(){
        
        if(this.detail.birth == null){
          this.detail.birth = "";
        }
        let detailBirth;
      if(typeof(this.detail.birth) != "string"){//
          detailBirth = this.detail.birth.toLocaleDateString();
        }else{
          detailBirth = this.detail.birth;
        }
          this.iGid = this.detail.gid;
          updateModel(this.detail.speaker,this.detail.idcard,detailBirth,this.detail.gender,this.detail.nation,this.detail.room,this.detail.address,this.detail.tel,this.detail.gid,this.detail.mid,this.detail.desc).then((res)=>{
            if(res.data.ret == 200){
              this.$message.success("修改成功");
              console.log(detailBirth);
  //          this.targetdatas=false;
  cuan(this.iGid).then((res) => {
    if(res.data.ret == 200){
      this.crew = res.data.data;
      console.log(this.detail.mid);
      console.log(detailBirth);//.toLocaleDateString()
      this.kong=false;
      this.totalCount = res.data.data.length;
      this.selectItem = this.iGid;
    }
//  if(res.data.ret == 404){
//  this.$message.error("该目标组已清空");
//  this.kong=true;
//  }
  })
            }else{
              this.$message.error("修改失败");
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
      },
      //创建目标人时上传语音
      submitUploadone() {
        if(this.newfilemid !=""){
          
          this.$refs.uploadone.submit();
        }else{
          this.$message.error("请先创建目标人");
        }
      },
//    上传成功时的钩子函数
      handleSuccess(response, file, fileList){
        console.log(fileList);
        this.i+=1;
        if(fileList.length == this.i){
          this.$message.success("上传成功");
          this.xulian=false;
          fileList.splice(0,fileList.length);
          this.xl();
          this.i = 0;
        }
      },
//    上传文件失败时的钩子函数
      handleError(){
        this.i = 0;
      },
//    上传成功时的钩子函数
      handleSuccessone(response, file, fileList){
        console.log(fileList);
        this.i+=1;
        if(fileList.length == this.i){
          this.$message.success("上传成功");
          fileList.splice(0,fileList.length);
          this.xulian=false;
          this.xlone();
          this.i = 0;
        }
      },
//    上传文件失败时的钩子函数
      handleErrorone(){
        this.i = 0;
      },
//    详情语音列表播放按钮
      play(scope){
        console.log(scope);
      },
//    详情语音列表删除按钮
      speechDel(scope){
        console.log(scope.row.tsid);
        speechDel(scope.row.tsid).then((res)=>{
          console.log(res);
          if(res.data.ret == 200){
            this.$message.success("删除成功");
            this.xl();
            this.xlone();
          }
        })
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
        
//      xiug:true,
        //当前页码
        currentPage: 1,
        //默认每页数据量
        pagesize: 10,
        //默认数据总数
        totalCount: 0,
        //页码数据
        i:0,
        name: '',
        age: '',
        file: '',
        filemid:'',
        fileList: [],
        fileListone: [],
        speech:[],
        speechone:[],
        crew:[],
        data: [],
        detail:{},
        selectItem:-2,
        xulian:true,
        kong:true,
        xunlian:false,
        xunlianone:false,
        target: false,
        addMan: false,
        details: false,
        targetdatas: false,
        alter:false,
        mId:'',
        gId:"",
        iGid:"",
        buer: false,
        data4: JSON.parse(JSON.stringify(data)),
        data5: JSON.parse(JSON.stringify(data)),
        formInline: {
          speaker:"",
          idcard:"",
          birth:"",
          gender:"",
          nation:"",
          room:"",
          address:"",
          gid:""
        },

        filterText: '',
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
          address: '',
          desc:''
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
          ]
        },
        rulefm: {
          id: 0,
          name: '',
          desc: ''
        },
        rulefm_one: {
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
          ]
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
          ]
        },
//      新建模型上传语音需要的mid，点击关闭清空
        newfilemid:"",
//      模型组展示
        data2: []
      }
    }
  }
</script>