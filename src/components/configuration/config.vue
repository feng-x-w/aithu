<style scoped>
  .drillTop {
    margin: 10px;
  }
</style>

<template>
  <div class="drill">
    <Breadcrumb>
      <span slot="one">{{$t('index.modelManager')}}</span>
      <!--模型管理-->
      <span slot="two">{{$t('index.genderModleManager')}}</span>
      <!--//语种模型管理-->
    </Breadcrumb>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  export default {
    //  方法属性
    methods: {
    },
    data() {
      return {
      }
    },
    components: {
      Breadcrumb
    }
  }
</script>