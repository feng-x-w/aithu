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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 25px 50px;
    padding-left: 15px;
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
  
  .nowpage {
    background-color: #d6d6d6;
    ;
  }
  
  .addmans {
    background-color: rgba(0, 0, 0, .5);
  }
  
  .addmans>.target_add {
    width: 80%;
    overflow: hidden;
  }
  
  .el-form-item {
    margin-bottom: 15px;
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
  
  .el-aside {
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
  
  .tasktable>tr:hover {
    background-color: #ebebeb;
  }
  
  .tasktable>tr>th {
    border: 1px solid #e3e3e3;
    color: #909399;
    background-color: #f3f3f3;
    font-size: 13px;
    font-weight: 600;
    padding: 10px;
  }
  
  .tasktable>tr>td {
    border: 1px solid #e3e3e3;
    padding: 10px;
    font-size: 13px;
  }
  
  .tasktable>tr>.addre {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: none;
  }
  
  .tasktable>tr>td>.addre1 {
    width: 50px;
    /*display: inline-block;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /*.wei{
    width: 99.8%;
    text-align: center;
    font-size: 16px;
    color: #6F7180;
    border: 1px solid #e3e3e3;
    border-top: 0;
    padding: 15px 0;
  }*/
  
  .el-button--text {
    padding: 0;
  }
  
  .mobiao {
    margin: 10px;
    margin-top: 0;
    margin-left: 0;
  }
  
  .menb {
    position: fixed;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
  
  .menb>div {
    position: fixed;
    text-align: center;
    top: 50%;
    left: 50%;
    width: 39%;
    z-index: 120;
  }
  
  .TargetGroup {
    background: -webkit-gradient(linear, right top, left top, from(#fbfbfb), to(#e7e7e7));
    margin: -8px 0 10px -11px;
    font-size: 14px;
    padding: 10px;
  }
  
  .el-main {
    padding-top: 0;
    /* !important*/
  }
  /*上传头像*/
  
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  
  .Image {
    width: 152px;
    height: 152px;
    margin: 0 auto;
    text-align: center;
    position: relative;
  }
  
  .Image>.btnload {
    position: absolute;
    border: 1px solid gainsboro;
    width: 149px;
    height: 149px;
    font-size: 105px;
    font-weight: 100;
  }
  
  .Image>.el-button {
    margin: 3px 0;
  }
  
  .Image>p {
    font-size: 12px;
    text-align: center;
    color: gray;
    position: absolute;
    left: 12px;
    bottom: -20px;
  }
  
  .Images {
    width: 150px;
    height: 150px;
  }
</style>
<style>
  .el-upload-list--text {
    height: 111px;
    overflow-y: auto;
  }
  
  .wei {
    width: 99.8%;
    text-align: center;
    font-size: 16px;
    color: #6F7180;
    border: 1px solid #e3e3e3;
    border-top: 0;
    padding: 15px 0;
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
          <li v-for="(i,index) in data2" :key="index" :id="i.gid" ref="tree2" @click="show(i,i.gid)" v-bind:class="{ nowpage: i.gid==selectItem }">
            <span>{{i.groupname}}</span>
            <div @click.stop :title="$t('NextClass.alter')" v-if="i.groupname != '未分组'">
              <!--修改-->
              <el-button type="text" @click="alte(i.gid,i.groupname,i.remark,i)">
                <i class="el-icon-edit"></i>
              </el-button>
              <!--修改-->
              <el-button style="color: red;" type="text" @click="del(i.gid)" :title="$t('NextClass.delete')">
                <!--删除-->
                <i class="el-icon-delete"></i>
              </el-button>
              <!--删除-->
            </div>
          </li>
        </ul>
      </el-aside>
      <div class="menb" v-show="alter">
        <!--<div>-->
        <div class="target_add">
          <h1>{{$t('NextClass.alterTargetGroup')}}</h1>
          <!--修改目标组-->
          <el-form :model="rulefm_one" :rules="rules_target" label-width="100px" class="demo-ruleForm">
            <el-form-item :label="$t('NextClass.name')" prop="name">
              <!--名称-->
              <el-input v-model="rulefm_one.name" name="groupname"></el-input>
            </el-form-item>
            <el-form-item :label="$t('NextClass.description')" prop="desc">
              <!--描述-->
              <el-input type="textarea" v-model="rulefm_one.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain @click="openalter">{{$t('NextClass.alterImmediately')}}</el-button>
              <!--立即修改-->
              <!--<el-button @click="resetForm()">重置</el-button>-->
              <el-button @click="showtarget1" type="danger" plain style="margin-left: 10px !important;">{{$t('NextClass.cancel')}}</el-button>
              <!--取消-->
            </el-form-item>
          </el-form>
        </div>
        <!--</div>-->
      </div>
      <el-main>
        <div class="addUser">
          <el-button class="mobiao" type="primary" @click="addTarget" size="mini">{{$t('NextClass.addTargetGroup')}}</el-button>
          <!--添加目标组-->
          <!--<button >添加目标组</button>-->
          <div class="target" v-show="target">
            <div class="target_add">
              <h1>{{$t('NextClass.createTargetGroup')}}</h1>
              <!--新建目标组-->
              <el-form :model="rulefm" :rules="rules_target" ref="formName" label-width="100px" class="demo-ruleForm">
                <el-form-item :label="$t('NextClass.name')" prop="name">
                  <!--名称-->
                  <el-input v-model="rulefm.name" name="groupname"></el-input>
                </el-form-item>
                <el-form-item :label="$t('NextClass.description')">
                  <!--描述-->
                  <el-input type="textarea" v-model="rulefm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" plain @click="submitForm('rulefm')">{{$t('NextClass.create')}}</el-button>
                  <!--创建-->
                  <!--<el-button @click="resetForm('formName')" style="margin: 0 10px !important;">{{$t('NextClass.reset')}}</el-button>重置-->
                  <el-button @click="showtarget('formName')" type="danger" plain>{{$t('NextClass.close')}}</el-button>
                  <!--关闭-->
                </el-form-item>
              </el-form>
            </div>
          </div>
          <!--添加目标人-->
          <el-button type="primary" @click="addman" size="mini">{{$t('NextClass.addTarget')}}</el-button>
          <!--添加目标人-->
          <div class="target addmans" v-show="addMan">
            <div class="target_add">
              <h1>{{$t('NextClass.createTarget')}}</h1>
              <!--新建目标人-->
              <el-form :model="addrulefm" :rules="add_rules_target" ref="addrulefm" label-width="100px" class="demo-ruleForm">
                <div class="target_left">
                  <table border="0">
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.name1')" prop="name">
                          <!--姓名-->
                          <el-input v-model="addrulefm.name"></el-input>
                        </el-form-item>
                      </td>
                      <td rowspan="4">
                        <div class="Image">
                          <div class="btnload" @click="upimg">
                            {{msg}}
                          </div>
                          <img class="Images" v-show="Image" :src="ImgUrl" height="200" alt="image preview..." /><br />
                          <input ref="file" type="file" @change="previewFile($event)" style="display: none;border: 1px solid black;" />
                          <p>{{$t('NextClass.sizeReq')}}</p>
                          <!--头像不能超过500k-->
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.ID')">
                          <!--证件号-->
                          <el-input v-model="addrulefm.idcard"></el-input>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.birthday')">
                          <!--出声年月-->
                          <el-col>
                            <el-form-item>
                              <el-date-picker type="date" value="123" :placeholder="$t('NextClass.chooseDate')" v-model="addrulefm.birth" style="width: 100%;"></el-date-picker>
                              <!--选择日期-->
                            </el-form-item>
                          </el-col>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.gender')">
                          <!--性别-->
                          <el-select v-model="addrulefm.gender" placeholder="gender">
                            <!--性别-->
                            <el-option :label="$t('NextClass.gender1')" value="0" name="0"></el-option>
                            <!--男-->
                            <el-option :label="$t('NextClass.gender2')" value="1" name="1"></el-option>
                            <!--女-->
                            <el-option :label="$t('NextClass.unknown')" value="" name=""></el-option>
                            <!--未知-->
                          </el-select>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.nation')">
                          <!--民族-->
                          <el-input v-model="addrulefm.nation"></el-input>
                        </el-form-item>
                      </td>
                      <td>
                        <el-form-item :label="$t('NextClass.homeAddress')">
                          <!--家庭住址-->
                          <el-input v-model="addrulefm.room"></el-input>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.phone')">
                          <!--手机号码-->
                          <el-input v-model="addrulefm.tel"></el-input>
                        </el-form-item>
                      </td>
                      <td>
                        <el-form-item :label="$t('NextClass.currentAddress')">
                          <!--现居住地-->
                          <el-input v-model="addrulefm.address"></el-input>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.TargetGroup')">
                          <el-select v-model="addrulefm.gid" :placeholder="$t('NextClass.chooseTargetGroup')">
                            <!--请选择目标组-->
                            <el-option v-for="(index,key) in data2" :key="key" :label="index.groupname" :value="index.gid"></el-option>
                          </el-select>
                        </el-form-item>
                      </td>
                      <td>
                        <el-form-item :label="$t('NextClass.description')">
                          <!--描述-->
                          <el-input type="textarea" v-model="addrulefm.desc"></el-input>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <el-form-item>
                          <el-button plain type="primary" @click="addparson($event, 'addrulefm')" :disabled="buer">{{$t('NextClass.create')}}</el-button>
                          <!--创建-->
                          <!--<el-button @click="resetForm()">重置</el-button>-->
                          <el-button @click="showtarget('addrulefm')" type="danger" style="margin-left: 10px !important;" plain>{{$t('NextClass.close')}}</el-button>
                          <!--关闭-->
                        </el-form-item>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="target_right">
                  <!--创建目标人右侧信息-->
                  <h1>{{$t('NextClass.modleFileTable')}}</h1>
                  <!--模型文件列表-->
                  <el-upload class="upload-demo" ref="uploadone" :action="https" :on-success="handleSuccessone" :on-error="handleErrorone" :file-list="fileListone" :data="UpDataone" accept=".wav,.mp3,.flac" :before-upload="beforeAvatarUpload" multiple :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">{{$t('NextClass.chooseFile')}}</el-button>
                    <!--选取文件-->
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUploadone">{{$t('NextClass.upolad')}}</el-button>
                    <!--上传到服务器-->
                    <div slot="tip" class="el-upload__tip">{{$t('NextClass.uploadReq')}}</div>
                    <!--只能上传.WAV,.MP3,.FLAC文件-->
                  </el-upload>
                  <el-button style="margin: 3px 0;" type="primary" :loading="xunlianone" @click="drillone" :disabled="xulian">{{$t('NextClass.training')}}</el-button>
                  <!--训练-->
                  <template>
                    <table class="tasktable">
                      <!---->
                      <tr>
                        <th>{{$t('NextClass.fileName')}}</th>
                        <!--文件名-->
                        <th>{{$t('NextClass.fileSize')}}</th>
                        <!--文件大小-->
                        <th>{{$t('NextClass.operation')}}</th>
                        <!--操作-->
                      </tr>
                      <tr v-for="(i,index) in speechone" :key="index">
                        <td>
                          {{i.filename}}
                        </td>
                        <td>
                          {{i.filesize}}
                        </td>
                        <td>
                          <el-button type="text" @click="play(i.tsid)" :title="$t('NextClass.play')">
                            <i class="el-icon-caret-right" style="font-size: 20px;"></i>
                            <!--播放-->
                          </el-button>
                          <el-button type="text" @click="speechDel(i.tsid)" style="color: red;" :title="$t('NextClass.delete')">
                            <!--删除-->
                            <i class="el-icon-delete"></i>
                            <!--删除-->
                          </el-button>
                        </td>
                      </tr>
                    </table>
                  </template>
                  <div class="block">
                    <!--<span class="demonstration">大于 7 页时的效果</span>-->
                    <!--<el-pagination
    small
    page-size="5"
    layout="prev, pager, next"
    :total="10">
  </el-pagination>-->

                  </div>
                </div>
              </el-form>
            </div>
          </div>
        </div>
        <table class="tasktable">
          <tr>
            <th>{{$t('NextClass.name1')}}</th>
            <!--姓名-->
            <th>{{$t('NextClass.ID')}}</th>
            <!--证件号-->
            <th>{{$t('NextClass.birthday')}}</th>
            <!--出生年月-->
            <th>{{$t('NextClass.gender')}}</th>
            <!--性别-->
            <th>{{$t('NextClass.nation')}}</th>
            <!--民族-->
            <th>{{$t('NextClass.homeAddress')}}</th>
            <!--家庭住址-->
            <th>{{$t('NextClass.currentAddress')}}</th>
            <!--现居住地-->
            <th>{{$t('NextClass.targetGroup')}}</th>
            <!--目标组-->
            <th>{{$t('NextClass.state')}}</th>
            <!--状态-->
            <th>{{$t('NextClass.operation')}}</th>
            <!--操作-->
          </tr>
          <tr v-for="(i,index) in crew" :key="index">
            <td :title="i.speaker"><div class="addre1"> {{i.speaker}} </div></td><!--  class="addre" style="width:50px;" -->
            <td :title="i.idcard"><div class="addre1"> {{i.idcard}} </div></td>
            <td :title="i.birth"> {{i.birth}} </td>
            <td>
              <span v-if="i.gender==0">{{$t('NextClass.gender1')}}</span>
              <!--男-->
              <span v-if="i.gender==1">{{$t('NextClass.gender2')}}</span>
              <!--女-->
            </td>
            <td :title="i.nation"> {{i.nation}} </td>
            <td :title="i.room">
              <div class="addre1"> {{i.room}} </div>
            </td>
            <td :title="i.address" class="addre" style="width:50px;"> {{i.address}} </td>
            <td :title="i.groupname"><div class="addre1"> {{i.groupname}} </div></td>
            <td style="width: 40px;">
              <span v-if="i.status == 0" style="white-space: nowrap;">{{$t('NextClass.unusable')}}</span>
              <!--不可用-->
              <span v-if="i.status == 1">{{$t('NextClass.usable')}}</span>
              <!--可用-->
            </td>
            <td style="width: 38px;">
              <el-button type="text" @click="handleEdit(i.mid)" :title="$t('NextClass.detail')">
                <!--详情-->
                <i class="el-icon-info"></i>
              </el-button>

              <el-button style="color: red;" type="text" @click="modelDelete(i.mid)" :title="$t('NextClass.delete')">
                <!--删除-->
                <i class="el-icon-delete"></i>
              </el-button>
            </td>
          </tr>
        </table>
        <div class="wei" v-show="kong">{{$t('NextClass.noData')}}</div>
        <!--暂无数据-->
        <el-pagination v-show="fenye" @size-change="handleSizeChange" @current-change="handleCurrentChange" @prev-click="handlePrevChange" @next-click="handleNextChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
        </el-pagination>
        <!--目标人资料-->
        <div class="handle" v-show="targetdatas">
          <div class="target addmans">
            <div class="target_add">
              <h1>{{$t('NextClass.targetData')}}</h1>
              <!--目标人资料-->
              <el-form label-width="100px" class="demo-ruleForm">
                <div class="target_left">
                  <table border="0">
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.name1')" required>
                          <!--姓名-->
                          <el-input v-model="detail.speaker"></el-input>
                        </el-form-item>
                      </td>
                      <td rowspan="4">
                        <div class="Image">
                          <div class="btnload" @click="upimgtwo">
                          </div>
                          <img class="Images" :src="imageUrl" height="200" alt="image preview..." /><br />
                          <input ref="filetwo" type="file" @change="previewFiletwo($event)" style="display: none;" />
                          <p>{{$t('NextClass.sizeReq')}}</p>
                          <!--头像不能超过500k-->
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.ID')">
                          <!--证件号-->
                          <el-input v-model="detail.idcard"></el-input>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.birthday')">
                          <!--出声年月-->
                          <el-col :span="11">
                            <el-form-item>
                              <el-date-picker type="date" :placeholder="$t('NextClass.chooseDate')" v-model="detail.birth"></el-date-picker>
                              <!--选择日期-->
                            </el-form-item>
                          </el-col>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.gender')">
                          <!--性别-->
                          <el-select v-model="detail.gender" :placeholder="$t('NextClass.gender')">
                            <!--性别-->
                            <el-option :label="$t('NextClass.gender1')" value="0"></el-option>
                            <!--男-->
                            <el-option :label="$t('NextClass.gender2')" value="1"></el-option>
                            <!--女-->
                            <el-option :label="$t('NextClass.unknown')" value="-1"></el-option>
                            <!--未知"-->
                          </el-select>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.nation')">
                          <!--民族-->
                          <el-input v-model="detail.nation"></el-input>
                        </el-form-item>
                      </td>
                      <td>
                        <el-form-item :label="$t('NextClass.homeAddress')">
                          <!--家庭住址-->
                          <el-input v-model="detail.room"></el-input>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.phone')">
                          <!--手机号码-->
                          <el-input v-model="detail.tel"></el-input>
                        </el-form-item>
                      </td>
                      <td>
                        <el-form-item :label="$t('NextClass.currentAddress')">
                          <!--现居住地-->
                          <el-input v-model="detail.address"></el-input>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <el-form-item :label="$t('NextClass.TargetGroup')">
                          <el-select v-model="detail.gid" :placeholder="$t('NextClass.chooseTargetGroup')">
                            <!--请选择目标组-->
                            <el-option v-for="(index,key) in data2" :label="index.groupname" :value="index.gid" :key="key"></el-option>
                          </el-select>
                        </el-form-item>
                      </td>
                      <td>
                        <el-form-item :label="$t('NextClass.description')">
                          <!--描述-->
                          <el-input type="textarea" v-model="detail.desc"></el-input>
                        </el-form-item>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">
                        <el-form-item>
                          <el-button type="primary" plain @click="amend($event)">{{$t('NextClass.alter')}}</el-button>
                          <!--修改-->
                          <!--<el-button @click="resetForm()">重置</el-button>-->
                          <el-button @click="showtarget1" type="danger" plain style="margin-left: 10px !important;">{{$t('NextClass.close')}}</el-button>
                          <!--关闭-->
                        </el-form-item>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="target_right">
                  <h1>{{$t('NextClass.modleFileTable')}}</h1>
                  <!--模型文件列表-->
                  <el-upload class="upload-demo" ref="upload" :action="https" :on-success="handleSuccess" :on-error="handleError" :file-list="fileList" :before-upload="beforeAvatarUpload" :data="UpData" accept=".wav,.mp3,.flac" multiple :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">{{$t('NextClass.chooseFile')}}</el-button>
                    <!--选取文件-->
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">{{$t('NextClass.upolad')}}</el-button>
                    <!--上传到服务器-->
                    <div slot="tip" class="el-upload__tip">{{$t('NextClass.uploadReq')}}</div>
                    <!--只能上传.WAV,.MP3,.FLAC文件-->
                  </el-upload>
                  <el-button style="margin: 3px 0;" type="primary" :loading="xunlian" @click="drill">{{$t('NextClass.training')}}</el-button>
                  <!--训练-->
                  <template>
                    <table class="tasktable">
                      <tr>
                        <th>{{$t('NextClass.fileName')}}</th>
                        <!--文件名-->
                        <th>{{$t('NextClass.fileSize')}}</th>
                        <!--文件大小-->
                        <th>{{$t('NextClass.operation')}}</th>
                        <!--操作-->
                      </tr>
                      <tr v-for="(i,index) in speech" :key="index">
                        <td>
                          {{i.filename}}
                        </td>
                        <td>
                          {{i.filesize}}
                        </td>
                        <td>
                          <el-button type="text" @click="play(i.tsid)" :title="$t('NextClass.play')">
                            <i class="el-icon-caret-right" style="font-size: 20px;"></i>
                            <!--播放-->
                          </el-button>
                          <el-button type="text" @click="speechDel(i.tsid)" style="color: red;" :title="$t('NextClass.delete')">
                            <!--删除-->
                            <i class="el-icon-delete"></i>
                          </el-button>
                        </td>
                      </tr>
                    </table>
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
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import $axios from 'axios';
  //这样就可以通过$axios发起请求了
  import { group, target, cuan, addTargetParson, detail, newVideo, drillModel, dele, Alter, modelDele, updateModel, gname, inquire, speechDel } from '@/api/target'
  import { datas } from '@/assets/js/common'
  let id = 1000;
  export default {
    filters: {
      datas
    },
    //  页面初始化
    created() {
      this.getData()
    },
    //  监听
    watch: {
      filterText: function(val) {
        gname(val).then((res) => {
          this.data2 = res.data.data;
        })
      }
    },
    //  计算属性
    computed: {
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
      upimg() {
        this.$refs.file.click();
        this.reader = new FileReader();
      },
      previewFile(ev) {
        this.file = ev.target.files[0];
        let urls = ev.target.files;
        this.reader.readAsDataURL(urls[0]);
        this.reader.onload = () => {
          this.ImgUrl = this.reader.result;
          if(this.file != "") {
            this.Image = true;
            this.msg = "";
          }
        }
      },
      upimgtwo() {
        this.$refs.filetwo.click();
        this.readertwo = new FileReader();
      },
      previewFiletwo(ev) {
        this.filetwo = ev.target.files[0];
        let urls = ev.target.files;
        this.readertwo.readAsDataURL(urls[0]);
        this.readertwo.onload = () => {
          this.imageUrl = this.readertwo.result;
        }
      },
      //    查询
      inquired() {
        this.currentPage = 1;
        this.selectItem = -1;
        if(this.formInline.birth) {
          this.bt = Math.round(this.formInline.birth.getTime() / 1000); //toLocaleDateString this.formInline.birth.getTime()
        } else {
          this.bt = this.formInline.birth = "";
        }
        this.find(this.currentPage, this.pagesize);
      },
      //    查询按钮获取数据封装函数
      find(page, pagesize) {
        this.thisi = 1;
        inquire(this.formInline.speaker, this.formInline.idcard, this.bt, this.formInline.gender, this.formInline.nation, this.formInline.room, this.formInline.address, this.formInline.gid, page, pagesize).then((res) => {
          //        console.log(res);
          if(res.data.ret == 200) {
            this.crew = res.data.data;
            this.totalCount = res.data.totalcount;
            if(this.totalCount == 0) {
              this.kong = true;
              this.fenye = false;
            } else {
              this.kong = false;
              this.fenye = true;
            }
          } else {
            this.totalCount = res.data.totalcount;
          }
        })
      },
      //    点击打开目标组修改alert
      alte(gid, groupname, desc, i) {
        //      console.log(gid,groupname,desc,i);
        this.alter = true;
        this.gId = gid;
        this.rulefm_one.name = groupname;
        this.rulefm_one.desc = desc;
      },
      //    修改组名
      openalter() {
        //      console.log(gid);
        Alter(this.rulefm_one.name, this.gId, this.rulefm_one.desc).then((res) => {
          //        console.log(res);
          if(res.data.ret == 200) {
            this.$message.success(this.$t('script.AmendSuccess')); //"修改成功"
            this.alter = false;
            this.getData();
          }
          if(res.data.ret == 406) {
            this.$message.error(this.$t('script.groupRepetition')); //"组名重复"
          }
        })
      },
      //    目标组删除
      del(gid) {
        //      console.log(gid);
        this.$confirm(this.$t('script.Delgroup'), this.$t('script.title'), { //'此操作将永久删除该目标组, 是否继续?'//'提示'
          confirmButtonText: this.$t('script.Confirm'), //确定
          cancelButtonText: this.$t('script.Cancel'), //取消
          type: 'warning',
          center: true
        }).then(() => {
          dele(gid).then((res) => {
            //          console.log(res);
            if(res.data.ret == 200) {
              this.$message({
                type: 'success',
                message: this.$t('script.DelSuccess') //'删除成功!'
              });
              this.getData()
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: this.$t('script.CancelDel') //'已取消删除'
          });
        });
      },
      //    训练点击事件
      drill() {
        if(this.speech.length != 0) {
          this.xunlian = true;
          this.$alert(this.$t('script.Popout'), { //"正在训练，稍后可查看训练结果。"
            confirmButtonText: this.$t('script.Confirm') //'确定'
          });
          drillModel(this.filemid).then((res) => {
            if(res.data.ret == 200) {
              this.$message.success(this.$t('script.DrillSuccess')); //"训练成功"
              this.xunlian = false;
              cuan(this.iGid).then((res) => {
                if(res.data.ret == 200) {
                  this.crew = res.data.data;
                  this.kong = false;
                }
              })
            }
          })
        } else {
          this.$message.error("没有语音文件");
        }

      },
      //    创建目标人时的点击训练
      drillone() {
        if(this.speechone.length != 0) {
          this.xunlianone = true;
          this.$alert(this.$t('script.Popout'), { //"正在训练，稍后可查看训练结果。"
            confirmButtonText: this.$t('script.Confirm') //'确定'
          });
          drillModel(this.newfilemid).then((res) => {
            if(res.data.ret == 200) {
              this.$message.success(this.$t('script.DrillSuccess')); //"训练成功"
              this.xunlianone = false;
              cuan(this.iGid).then((res) => {
                if(res.data.ret == 200) {
                  this.crew = res.data.data;
                  this.kong = false;
                }
              })
            }
          })
        } else {
          this.$message.error(this.$t('script.NoFile')); //"没有语音文件"
        }
      },
      //    添加目标人显示蒙板
      addman() {
        this.addMan = !this.addMan;
        this.msg = "+";
        //      console.log(this.addrulefm.gid);
      },
      //    点击任意目标组
      show(i, index) {
        this.thisi = 0;
        this.currentPage = 1;
        this.selectItem = i.gid;
        this.getdatatarget(i.gid, this.currentPage, this.pagesize);
      },
      //    点击任意组获取数据封装函数
      getdatatarget(gid, page, pagesize) {
        cuan(gid, page, pagesize).then((res) => {
          this.iGid = gid;
          if(res.data.ret == 200) {
            this.crew = res.data.data;
            this.kong = false;
            this.fenye = true;
            this.totalCount = res.data.totalcount;
            if(this.totalCount == 0) {
              this.kong = true;
              this.fenye = false;
            }
          }
        })
      },
      //    页面初始化渲染
      getData() {
        group().then((res) => {
          this.data2 = res.data.data;
        })
      },
      //    点击显示添加目标组蒙板
      addTarget() {
        this.target = true;
      },
      //    点击取消隐藏蒙板
      showtarget(formName) {
        this.Image = false;
        this.$refs[formName].resetFields();
        this.ImgUrl = "";
        this.xunlianone = false;
        this.alter = false;
        this.target = false;
        this.addMan = false;
        this.buer = false;
        this.xulian = true;
        this.speechone = [];
        this.newfilemid = "";
        this.addrulefm.name = "";
        this.addrulefm.gid = "";
        this.addrulefm.idcard = "";
        this.addrulefm.birth = "";
        this.addrulefm.gender = "";
        this.addrulefm.nation = "";
        this.addrulefm.room = "";
        this.addrulefm.address = "";
        this.addrulefm.tel = "";
        this.addrulefm.desc = "";
      },
      //    点击取消隐藏蒙板
      showtarget1() {
        this.imageUrl = "";
        this.xunlianone = false;
        this.alter = false;
        this.target = false;
        this.targetdatas = false;
        this.xulian = true;
      },
      //      操作（详情）
      handleEdit(mid) {
        this.targetdatas = true;
        this.filemid = mid;
        this.mId = mid
        this.xl();
      },
      //    详情页面
      xl() {
        detail(this.mId).then((res) => {
          this.detail = res.data.data;
          this.speech = res.data.data.speech;
          console.log(this.detail.avatar);
          console.log(typeof(this.detail.avatar));
          if(!this.detail.avatar) {
            this.imageUrl = process.env.BASE_API + "/static/img/_20180622145804.png";
          } else {
            this.imageUrl = process.env.BASE_API + this.detail.avatar;
          }
          if(this.detail.gender == -1) {
            this.detail.gender = "未知";
          }
          if(this.detail.gender == 0) {
            this.detail.gender = "男";
          }
          if(this.detail.gender == 1) {
            this.detail.gender = "女";
          }
        })
      },
      //    创建目标人时上传语音成功后获取数据刷新
      xlone() {
        detail(this.newfilemid).then((res) => {
          this.detail = res.data.data;
          this.speechone = res.data.data.speech;
        })
      },
      //    删除模型
      modelDelete(mid) {
        this.$confirm(this.$t('script.DelPerson'), this.$t('script.title'), { //'此操作将永久删除该目标人, 是否继续?'// '提示'
          confirmButtonText: this.$t('script.Confirm'), //'确定'
          cancelButtonText: this.$t('script.Cancel'), //'取消'
          type: 'warning',
          center: true
        }).then(() => {
          modelDele(mid).then((res) => {
            if(res.data.ret == 200) {
              this.$message.success(this.$t('script.DelSuccess')); //"删除成功"
              if(this.thisi == 0) {
                this.getdatatarget(this.selectItem, this.currentPage, this.pagesize);
              } else {
                this.find(this.currentPage, this.pagesize);
              }
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: this.$t('script.CancelDel') //'已取消删除'
          });
        });

      },
      //每页显示数据量变更
      handleSizeChange: function(val) {
        this.pagesize = val; //this.criteria,搜索条件
        if(this.thisi == 0) {
          this.getdatatarget(this.selectItem, this.currentPage, this.pagesize);
        } else {
          this.find(this.currentPage, this.pagesize);
        }
      },

      //页码变更
      handleCurrentChange: function(val) {
        this.currentPage = val; //this.criteria,搜索条件
        if(this.thisi == 0) {
          this.getdatatarget(this.selectItem, this.currentPage, this.pagesize);
        } else {
          this.find(this.currentPage, this.pagesize);
        }
      },
      //上一页
      handlePrevChange: function() {
        if(this.thisi == 0) {
          this.getdatatarget(this.selectItem, this.currentPage, this.pagesize);
        } else {
          this.find(this.currentPage, this.pagesize);
        }
      },
      //下一页
      handleNextChange: function() {
        if(this.thisi == 0) {
          this.getdatatarget(this.selectItem, this.currentPage, this.pagesize);
        } else {
          this.find(this.currentPage, this.pagesize);
        }
      },
      //    新建目标组
      submitForm(formName) {
        this.$refs.formName.validate((valid) => {
          if(valid) {
            target(this.rulefm.id, this.rulefm.name, this.rulefm.desc).then((res) => {
              if(res.data.ret == 200) {
                this.$message.success(this.$t('script.FoundSuccess')); //"创建成功"
                this.target = false;
                this.rulefm.name = "";
                this.rulefm.desc = "";
                this.getData();
              } else {
                this.$message.error(this.$t('script.groupRepetition')); //"组名重复"
              }
            })
          } else {
            return false;
          }
        });
      },
      //    新建目标人
      addparson(ev, formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            let addgettime = '';
            if(this.addrulefm.birth) {
              addgettime = Math.round(this.addrulefm.birth.getTime() / 1000);
            }
            ev.preventDefault();
            let formData = new FormData();
            formData.append('speaker', this.addrulefm.name);
            formData.append('gid', this.addrulefm.gid);
            formData.append('idcard', this.addrulefm.idcard);
            formData.append('birth', addgettime); //this.formInline.birth Math.round(this.addrulefm.birth.getTime()/1000)
            formData.append('gender', this.addrulefm.gender);
            formData.append('nation', this.addrulefm.nation);
            formData.append('room', this.addrulefm.room);
            formData.append('tel', this.addrulefm.tel);
            formData.append('address', this.addrulefm.address);
            formData.append('gid', this.addrulefm.gid);
            formData.append('desc', this.addrulefm.desc);
            formData.append('file', this.file);
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
            const filet = this.file.type;
            const isJPEG = filet === 'image/jpeg';
            const isJPG = filet === 'image/jpg';
            const isPNG = filet === 'image/png';
            const isLt500k = this.file.size / 1024 / 1024 < 0.5;
            let src = '/sr/model/add';
            if(this.file) {
              if(isJPEG || isJPG || isPNG) {
                if(isLt500k) {
                  this.newtarget(src, formData, config);
                } else {
                  this.$message.error("上传头像大小不能超过500k"); //"上传头像大小不能超过500k"
                }
              } else {
                this.$message.error("上传头像必须是.jpeg、.jpg、.png格式"); //"上传头像必须是.jpeg、.jpg、.png格式"
              }
            } else {
              this.newtarget(src, formData, config);
            }
          } else {
            console.log('error submit!!');
            this.$message.error("请将信息填写完整！") //"请将信息填写完整！"
          }
        });

      },
      //    新建目标人上传接口
      newtarget(src, formData, config) {
        let _this = this;
        this.$axios.post(this.http + src, formData, config).then(function(res) {
          if(res.data.ret === 200) {
            /*这里做处理*/
            _this.newfilemid = res.data.data.mid;
            _this.$message.success(_this.$t('script.FoundSuccess')); //"创建成功"
            _this.buer = true;
            _this.iGid = _this.addrulefm.gid;
            _this.getdatatarget(_this.selectItem, _this.currentPage, _this.pagesize);
          }
          if(res.data.ret == 405) {
            _this.$message.error(_this.$t('script.PeopleRepetition')); //"目标人已存在"
          }
        })
      },
      //    修改目标人
      amend(ev) {
        if(this.detail.speaker != "") {
          if(this.detail.birth == null) {
            this.detail.birth = "";
          }
          let detailBirth;
          if(typeof(this.detail.birth) != "string") { //
            detailBirth = Math.round(this.detail.birth.getTime() / 1000); //toLocaleDateString this.detail.birth 
            console.log(detailBirth);
          } else {
            if(this.detail.birth) {
              let getime = new Date(this.detail.birth);
              detailBirth = Math.round(getime.getTime() / 1000);
            } else {
              detailBirth = '';
            }
          }
          if(this.detail.pic == 1) {
            this.detail.pic = "";
          }
          this.iGid = this.detail.gid;
          ev.preventDefault();
          let formData = new FormData();
          formData.append('speaker', this.detail.speaker);
          formData.append('mid', this.detail.mid);
          formData.append('idcard', this.detail.idcard);
          formData.append('birth', detailBirth);
          formData.append('gender', this.detail.gender);
          formData.append('nation', this.detail.nation);
          formData.append('room', this.detail.room);
          formData.append('tel', this.detail.tel);
          formData.append('address', this.detail.address);
          formData.append('gid', this.detail.gid);
          formData.append('desc', this.detail.desc);
          formData.append('file', this.filetwo);
          let config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          const filetype = this.filetwo.type;
          const isJPEG = filetype === 'image/jpeg';
          const isJPG = filetype === 'image/jpg';
          const isPNG = filetype === 'image/png';
          const isLt500k = this.filetwo.size / 1024 / 1024 < 0.5;
          let src = '/sr/model/update';
          if(this.filetwo) {
            if(isJPEG || isJPG || isPNG) {
              if(isLt500k) {
                this.imgloading(src, formData, config);
              } else {
                this.$message.error("上传头像大小不能超过500k");
              }
            } else {
              this.$message.error("上传头像必须是.jpeg、.jpg、.png格式");
            }
          } else {
            this.imgloading(src, formData, config);
          }
        } else {
          this.$message.error('姓名不能为空!');
          return false;
        }

      },
      //    修改目标人上传接口
      imgloading(src, formData, config) {
        let _this = this;
        this.$axios.post(this.http + src, formData, config).then(function(res) {
          if(res.data.ret === 200) {
            _this.$message.success(_this.$t('script.AmendSuccess')); //"修改成功"
            _this.getdatatarget(_this.detail.gid, _this.currentPage, _this.pagesize);
          }
          if(res.data.ret == 405) {
            _this.$message.error(_this.$t('script.AmendError')); //"修改失败"
          }
        })
      },
      //    重置输入框
      resetForm() {
        this.rulefm.name = "";
        this.rulefm.desc = "";
      },
      //上传语音
      submitUpload() {
        this.$refs.upload.submit();
      },
      //创建目标人时上传语音
      submitUploadone() {
        if(this.newfilemid != "") {
          this.$refs.uploadone.submit();
        } else {
          this.$message.error("请先创建目标人");
        }
      },
      //    上传成功时的钩子函数
      handleSuccess(response, file, fileList) {
        this.i += 1;
        if(fileList.length == this.i) {
          this.$message.success(this.$t('script.UploadSuccess')); //"上传成功"
          this.xulian = false;
          fileList.splice(0, fileList.length);
          this.xl();
          this.i = 0;
        }
      },
      //    上传文件失败时的钩子函数
      handleError() {
        this.i = 0;
      },
      //    创建目标人时上传成功时的钩子函数
      handleSuccessone(response, file, fileList) {
        this.i += 1;
        if(fileList.length == this.i) {
          this.$message.success(this.$t('script.UploadSuccess')); //"上传成功"
          fileList.splice(0, fileList.length);
          this.xulian = false;
          this.xlone();
          this.i = 0;
        }
      },
      //    创建目标人时上传文件失败时的钩子函数
      handleErrorone() {
        this.i = 0;
      },
      //    详情语音列表播放按钮
      play(scope) {
        //console.log(scope);
      },
      //    详情语音列表删除按钮
      speechDel(tsid) {
        //console.log(tsid);
        speechDel(tsid).then((res) => {
          //console.log(res);
          if(res.data.ret == 200) {
            this.$message.success(this.$t('script.DelSuccess')); //"删除成功"
            this.xl();
            this.xlone();
          }
        })
      },
      //    上传文件限制
      beforeAvatarUpload(file) {
        const iswav = file.type === 'audio/wav';
        const ismp3 = file.type === 'audio/mp3';
        const isflac = file.type === 'audio/flac';
        const isLt10M = file.size / 1024 / 1024 < 50;
        if(!iswav && !ismp3 && !isflac) {
          this.$message.error(this.$t('script.FileRestrictions1')); //'上传文件只能是.WAV,.MP3,.FLAC格式!'
        }
        if(!isLt10M) {
          this.$message.error(this.$t('script.FileRestrictions2')); //'上传文件大小一次不能超过 20MB!'
        }
        return (iswav || ismp3 || isflac) && isLt10M;
      }
    },
    data() {
      const data = [];
      return {
        msg: "+",
        Image: false,
        https: process.env.BASE_API + "/sr/model/speech/add",
        fenye: false,
        thisi: 0,
        //      上传头像
        imageUrl: '',
        //当前页码
        currentPage: 1,
        //默认每页数据量
        pagesize: 10,
        //默认数据总数
        totalCount: 0,
        //页码数据
        i: 0,
        bt: '',
        name: '',
        age: '',
        file: '',
        filetwo: '',
        filemid: '',
        fileList: [],
        fileListone: [],
        speech: [],
        speechone: [],
        crew: [],
        data: [],
        detail: {},
        selectItem: -2,
        xulian: true,
        kong: true,
        xunlian: false,
        xunlianone: false,
        target: false,
        addMan: false,
        details: false,
        targetdatas: false,
        alter: false,
        mId: '',
        gId: "",
        iGid: "",
        buer: false,
        data4: JSON.parse(JSON.stringify(data)),
        data5: JSON.parse(JSON.stringify(data)),
        formInline: {
          speaker: "",
          idcard: "",
          birth: "",
          gender: "",
          nation: "",
          room: "",
          address: "",
          gid: ""
        },

        filterText: '',
        ruleForm: {
          name: '',
          date1: '',
          sex: ''
        },
        addrulefm: {
          name: '',
          gid: '',
          idcard: '',
          birth: '',
          gender: '',
          nation: '',
          room: '',
          tel: '',
          address: '',
          desc: '',
          pic: ''
        },
        ImgUrl: '',
        reader: '',
        readertwo: '',
        add_rules_target: {
          name: [{
              required: true,
              message: this.$t('script.ImportName'), //'请输入姓名'
              trigger: 'blur'
            },
            {
              min: 2,
              max: 15,
              message: this.$t('script.nameSizeRestrictions'), //'长度在 2 到 15 个字符'
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
              message: this.$t('script.ImportgroupName'), //'请输入目标组名称'
              trigger: 'blur'
            },
            {
              min: 1,
              max: 15,
              message: this.$t('script.groupSizeRestrictions'), //'长度在 1 到 15 个字符'
              trigger: 'blur'
            }
          ]
        },
        //      新建模型上传语音需要的mid，点击关闭清空
        newfilemid: "",
        //      模型组展示
        data2: [],
        http: process.env.BASE_API
      }
    }
  }
</script>