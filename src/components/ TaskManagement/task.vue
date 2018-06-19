<style scoped>
	
</style>

<template>
  <div class="task">
  	<Breadcrumb>
      <span slot="one">{{$t('home_slot.slotOne')}}</span>
      <span slot="two">{{$t('home_slot.slotTwo')}}</span>
    </Breadcrumb>
  </div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  export default{
    components: {
      Breadcrumb
    },
  }
</script>