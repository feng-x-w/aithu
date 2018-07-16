<style scoped>
  .tasktop {
    width: 80%;
    margin: 6% auto 20px;
    font-size: 18px;
    line-height: 40px;
  }
  
  .taskmid {
    width: 75%;
    margin: 0 auto;
    font-size: 18px;
    line-height: 40px;
  }
  
  .taskmid>h3 {
    font-size: 20px;
  }
  
  .taskmid>ul {
    padding: 0 20px;
  }
  
  .taskmid>ul>li {
    list-style-type: disc;
  }
</style>

<template>
  <div class="task">
    <Breadcrumb>
      <span slot="one">{{$t('DefaultHome.title')}}</span>
    </Breadcrumb>
    <div class="tasktop">
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{$t('DefaultHome.intro')}}</p>
    </div>
    <div class="taskmid">
      <h3>{{$t('DefaultHome.h3')}}:</h3>
      <ul>
        <li>{{$t('DefaultHome.ulli1')}}</li>
        <li>{{$t('DefaultHome.ulli2')}}</li>
        <li>{{$t('DefaultHome.ulli3')}}</li>
        <li>{{$t('DefaultHome.ulli4')}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  export default {
    components: {
      Breadcrumb
    },
    methods: {

    },
    data() {
      return {

      }
    }

  }
</script>