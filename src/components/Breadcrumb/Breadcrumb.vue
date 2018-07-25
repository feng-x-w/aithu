<style scoped>
  .Breadcrumb {
    padding: 15px;
    position: fixed;
    top: 88px;
    left: 231px;
    width: 100%;
    z-index: 9;
    background: -webkit-gradient(linear, right top, left top, from(#fbfbfb), to(#e7e7e7));
    /* 标准的语法 */
  }
  .bre {
    padding: 22px;
  }
  .active{
    left: 0;
  }
</style>

<template>
  <div class="wid">
    <div class="bre">

    </div>
    <div class="Breadcrumb" v-bind:class="{ active: acti==topicList }">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/DefaultHome' }"><i class="el-icon-menu"></i>{{$t('Breadcrumb.home')}}</el-breadcrumb-item>
        <el-breadcrumb-item>
          <slot name="one"></slot>
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          <slot name="two"></slot>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>

</template>

<script>
export default {
  computed:{
    topicList(){
      return this.$store.state.Item
    } 
  },
  methods:{

  },
  data() {
    return {
      acti:0
    }
  }
}
</script>