<style scoped>
	.Breadcrumb{
		padding: 15px;
		background: -webkit-linear-gradient(#a4d1ff, #85b0da); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#a4d1ff, #85b0da); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#a4d1ff, #85b0da); /* Firefox 3.6 - 15 */
		background: linear-gradient(#a4d1ff, #85b0da); /* 标准的语法 */
	}
</style>

<template>
	<div class="Breadcrumb">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/home' }"><i class="el-icon-menu"></i>{{$t('Breadcrumb.home')}}</el-breadcrumb-item>
			<el-breadcrumb-item>
				<slot name="one"></slot>
			</el-breadcrumb-item>
			<el-breadcrumb-item>
				<slot name="two"></slot>
			</el-breadcrumb-item>
		</el-breadcrumb>
		
		
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>