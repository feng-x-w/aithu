<style scoped>
    /* h1{
        background-color: red;
        color: white;
    }
    .taskmid>table>tr>td{
        padding: 10px 10px;
    }
    
    .taskmid>table>tr>td:first-child{
        width: 15px;
        text-align: center;
    } */
    
</style>

<template>
  <div class="top">
    <!-- <Breadcrumb>
      <span slot="one">权限管理</span>
      <span slot="two">{{$t('taskM.taskStateManager')}}</span>
    </Breadcrumb>
    <div class="taskmid">
        <table>
            <tr>
                <th></th>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
                <th>七</th>
                <th>八</th>
                <th>九</th>
            </tr>
            <tr v-for="(i,key) in table" :key="key">
                <td>{{key+1}}</td>
                <td>{{i.one}}</td>
                <td>{{i.two}}</td>
                <td>{{i.three}}</td>
                <td>{{i.four}}</td>
                <td>{{i.five}}</td>
                <td>{{i.six}}</td>
                <td>{{i.seven}}</td>
                <td>{{i.eight}}</td>
                <td>{{i.nine}}</td>
            </tr>
        </table>
    </div> -->
  </div>
</template>

<script>//机构管理
// import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
  export default {
    // 页面初始化
    created() {

    },
    //  方法属性
     methods: {
         
    },
    data() {
      return {
        // table:[
        //     {one:"one"},
        //     {two:"two"},
        //     {three:"three"},
        //     {four:"four"},
        //     {five:"five"},
        //     {six:"six"},
        //     {seven:"seven"},
        //     {eight:"eight"},
        //     {nine:"nine"}
        //  ]
      }
    },
    components: {
    //   Breadcrumb
    }
  }
</script>