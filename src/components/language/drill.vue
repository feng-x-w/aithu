<style scoped>
	.drill{
		color: red;
	}
</style>

<template>
	<div class="drill">
    <Breadcrumb>
      <span slot="one">111</span>
    <span slot="two">222</span>
    </Breadcrumb>
    <NextClass></NextClass>
	</div>
</template>

<script>
  import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
  import NextClass from '../home/NextClass/NextClass'
	export default{
		methods:{
			
		},
		components:{
	    	Breadcrumb,
	    	NextClass
		},
		data(){
			return{

			}
		}
	}
</script>
