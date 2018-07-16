<style scoped>
  .voicetop {
    width: 100%;
    padding: 30px 0;
    box-sizing: border-box;
    line-height: 35px;
  }
  
  .voicetop>h3 {
    width: 100%;
    box-sizing: border-box;
    padding: 3px 15%;
  }
  
  .voicetop>p {
    width: 100%;
    box-sizing: border-box;
    text-indent: 2em;
    padding: 0 15%;
  }
</style>
<template>
  <div class="voice">
    <Breadcrumb>
      <span slot="one">{{$t('taskM.task_type7')}}</span>
      <!--语音索引-->
      <!--<span slot="two">语音索引</span>-->
    </Breadcrumb>
    <div class="voicetop">
      <h3>{{$t('voiceIndexing.title1')}}</h3>
      <p>{{$t('voiceIndexing.p1')}}</p>
      <h3>{{$t('voiceIndexing.title2')}}</h3>
      <p>{{$t('voiceIndexing.p2')}}</p>
      <p>{{$t('voiceIndexing.p3')}}</p>
      <h3>{{$t('voiceIndexing.title3')}}</h3>
      <p>{{$t('voiceIndexing.p4')}}</p>
      <h3>{{$t('voiceIndexing.title4')}}</h3>
      <p>{{$t('voiceIndexing.p5')}}</p>
      <p>{{$t('voiceIndexing.p6')}}</p>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  //import { result, AllTasks, QueryTasks, download } from '@/api/newtask'
  export default {
    components: {
      Breadcrumb
    },
    created() {

    },
    methods: {

    },
    data() {
      return {

      }
    }

  }
</script>