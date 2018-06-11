<style scoped>
	h1{
		color: darkred;
		background-color: pink;
		padding: 15px;
	}
</style>

<template>
	<div class="homeTwo">
		<Breadcrumb>
			<span slot="one">222</span>
			<span slot="two">333</span>
		</Breadcrumb>
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
	export default{
		components:{
			Breadcrumb
		},
		data(){
			return {
				msg:"homeTwo测试页面"
			}
		}
	}
</script>
