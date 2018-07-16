<style scoped>
  .Breadcrumb {
    padding: 15px;
    position: fixed;
    top: 88px;
    left: 231px;
    width: 100%;
    z-index: 9;
    /*background: -webkit-linear-gradient(right, #fbfbfb, #e7e7e7);  Safari 5.1 - 6.0*/
    /*background: -o-linear-gradient(right, #fbfbfb, #e7e7e7);  Opera 11.1 - 12.0*/
    /*background: -moz-linear-gradient(right, #fbfbfb, #e7e7e7); /* Firefox 3.6 - 15 */
    background: -webkit-gradient(linear, right top, left top, from(#fbfbfb), to(#e7e7e7));
    /* 标准的语法 */
  }
  .bre {
    padding: 22px;
  }
</style>

<template>
  <div>
    <div class="bre">

    </div>
    <div class="Breadcrumb">
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
//export default {
//  data() {
//    return {
//
//    }
//  }
//}
</script>