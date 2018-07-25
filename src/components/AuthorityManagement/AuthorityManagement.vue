<style scoped lang="scss">
  .drillTop {
    margin: 10px;
  }
  .authority{
    width: 100%;
    ul{
      width: 100%;
      background-color: #f1f1f1;
      padding: 5px 0 0 5px;
      border-bottom: 1px solid #cecece;
      box-sizing: border-box;
      li{
        float: left;
        text-align: center;
        margin: 0px 7px;
        margin-bottom: -1px;
        padding: 6px 9px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border: 1px solid #f1f1f1;
        border-bottom: none;
        font-size: 13px;
      }
      .active{
        border: 1px solid #cecece;
        border-bottom: 1px solid white;
        background-color: white;
      }
    }
  }
  .clearfix:after{
    content:"";        /*设置内容为空 */
    height:0;          /*高度为0 */
    line-height:0;     /*行高为0 */
    display:block;     /*将文本转为块级元素 */
    visibility:hidden; /*将元素隐藏 */
    clear:both;        /*清除浮动 */
  }
  .clearfix{
    zoom:1;            /* 为了兼容IE */
  }
  /**/
  /**/
</style>

<template>
  <div class="drill">
    <!---->
    <!-- <Breadcrumb> -->
      <!--<span slot="one">权限管理</span>权限管理-->
    <!-- </Breadcrumb> -->
    <div class="authority">
      <ul class="clearfix">
<router-link tag="li" :to="{ path: '/DefaultHome' }" class="active"><i class="el-icon-menu"></i>{{$t('Breadcrumb.home')}}</router-link>
<router-link tag="li" v-for="(i,index) in ulli" :key="index" :to="i.tabs" @click.native="show(i)" v-bind:class="{ active: i.Id==selectItem }">
  <i class="fa fa-tasks fa-lg fa-fw"></i> {{i.name}}
</router-link>
      </ul>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>let id = 1000;
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  export default {
    // 页面初始化
    created() {

    },
    //  方法属性
     methods: {
       show(i){
         this.selectItem = i.Id;
       }
    },
    data() {
      return {
        selectItem:1,
        ulli:[
          {name:this.$t('systemConfig.authorityManager'),Id:1,tabs:"/organization"},//"机构管理"
          {name:this.$t('systemConfig.roleManager'),Id:2,tabs:"/role"},//"角色管理"
          {name:this.$t('systemConfig.userManager'),Id:3,tabs:"/useradmin"}//"用户管理"
          ]
      }
    },
    components: {
      Breadcrumb
    }
  }
</script>
